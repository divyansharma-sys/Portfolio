// Utility for client-side image optimization and durable persistence
// Handles large camera photos (e.g. 5MB-20MB iPhone JPGs), scales them down gracefully,
// and saves them safely with both IndexedDB and localStorage fallbacks.

const DB_NAME = 'divyansh_portfolio_db';
const DB_VERSION = 1;
const STORE_NAME = 'profile_assets';
const STORAGE_KEY = 'divyansh_portfolio_photo';

function openIndexedDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveToIndexedDB(key: string, value: string): Promise<void> {
  try {
    const db = await openIndexedDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(value, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('IndexedDB save skipped:', err);
  }
}

export async function getFromIndexedDB(key: string): Promise<string | null> {
  try {
    const db = await openIndexedDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export async function clearFromIndexedDB(key: string): Promise<void> {
  try {
    const db = await openIndexedDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(key);
      req.onsuccess = () => resolve();
      req.onerror = () => resolve();
    });
  } catch {
    // Ignore
  }
}

/**
 * Optimizes an uploaded image file on an HTML5 canvas to a high-quality,
 * lightweight JPEG (max 1200px width/height) so it loads fast and fits safely
 * in client storage without hitting browser quota limits.
 */
export async function optimizeAndStoreImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    // Basic verification
    if (!file.type.startsWith('image/')) {
      reject(new Error('Selected file is not an image'));
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    const img = new Image();

    img.onload = async () => {
      try {
        const maxWidth = 1200;
        const maxHeight = 1600;
        let width = img.naturalWidth || img.width;
        let height = img.naturalHeight || img.height;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          throw new Error('Canvas 2D context unavailable');
        }

        // Draw image smoothly
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to quality JPEG data URL
        const dataUrl = canvas.toDataURL('image/jpeg', 0.88);

        // Revoke temporary object url
        URL.revokeObjectURL(objectUrl);

        // 1. Try saving to localStorage safely
        try {
          localStorage.setItem(STORAGE_KEY, dataUrl);
        } catch (storageErr) {
          console.warn('localStorage quota reached, relying on IndexedDB:', storageErr);
        }

        // 2. Also save to IndexedDB for persistent storage
        await saveToIndexedDB(STORAGE_KEY, dataUrl);

        resolve(dataUrl);
      } catch (e) {
        URL.revokeObjectURL(objectUrl);
        reject(e);
      }
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error('Failed to read image file'));
    };

    img.src = objectUrl;
  });
}

/**
 * Retrieves the stored profile photo from localStorage or IndexedDB.
 */
export async function loadStoredProfilePhoto(): Promise<string | null> {
  // Try localStorage first for instant synchronous check
  try {
    const local = localStorage.getItem(STORAGE_KEY);
    if (local && local.startsWith('data:image/')) {
      return local;
    }
  } catch {
    // ignore
  }

  // Fallback to IndexedDB
  const idbPhoto = await getFromIndexedDB(STORAGE_KEY);
  if (idbPhoto) {
    // Populate localStorage if it fits
    try {
      localStorage.setItem(STORAGE_KEY, idbPhoto);
    } catch {
      // Ignore
    }
    return idbPhoto;
  }

  return null;
}

/**
 * Removes the custom profile photo.
 */
export async function removeStoredProfilePhoto(): Promise<void> {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore
  }
  await clearFromIndexedDB(STORAGE_KEY);
}
