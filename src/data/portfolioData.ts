import { Project, SkillCategory, TimelineItem, ApproachStep } from '../types';

export const PERSONAL_INFO = {
  name: 'Divyansh Sharma',
  title: 'Full Stack Developer',
  qualification: 'BCA Graduate',
  tagline: 'Building thoughtful web experiences with Python, Django, DRF & React.',
  subTagline: 'BCA Graduate · Backend-Focused · Full Stack Development',
  bio: 'I build scalable, responsive, and user-focused web applications with a strong focus on backend architecture, robust database models, and modern frontend experiences.',
  detailedBio: 'As a BCA graduate with a deep commitment to modern software engineering, I specialize in architecting backend systems with Python, Django, and Django REST Framework, paired seamlessly with reactive, accessible user interfaces built in React.js. My approach balances backend rigor—database normalization, secure authentication, and optimized API payloads—with intuitive frontend aesthetics.',
  email: 'ds4455955@gmail.com',
  github: 'https://github.com/divyansharma-sys',
  linkedin: 'https://www.linkedin.com/in/divyansh-sharma-a6bb48434',
  location: 'India · Available Worldwide for Remote & Full-time Roles',
  status: 'Available for Hire & Contract Opportunities',
  profilePhoto: './profile.jpg',
  stats: [
    { label: 'Core Backend', value: 'Django & DRF' },
    { label: 'Frontend Engine', value: 'React & JS' },
    { label: 'Degree', value: 'BCA Graduate' },
    { label: 'Focus', value: 'REST Architecture' },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'aura-sound-ecommerce',
    title: 'Aura Sound E-Commerce',
    subtitle: "India's Leading Lifestyle Audio & Wearables Brand",
    description: 'A premium frontend e-commerce platform for wireless earbuds, headphones, smartwatches, speakers, and gaming gear. Designed with a sleek, modern interface prioritizing user experience and product showcase.',
    category: 'frontend',
    technologies: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    features: [
      'Responsive and modern premium user interface',
      'Dynamic product catalog with visually rich asset presentation',
      'Interactive shopping cart state functionality',
      'High-performance animations and seamless transitions',
    ],
    backendHighlights: [
      'Stateless architecture utilizing local storage for cart persistence',
      'Optimized asset delivery and fast load times',
    ],
    frontendHighlights: [
      'Component-driven architecture using modern React conventions',
      'State management configured for seamless checkout flows',
      'Mobile-first responsive design for cross-device compatibility',
    ],
    githubUrl: 'https://github.com/divyansharma-sys/e-commerce-web',
    liveUrl: 'https://divyansharma-sys.github.io/e-commerce-web/',
    accentColor: '#14b8a6', // teal-500
    completionYear: '2024',
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    description: 'Specializing in Python and Django architecture to build scalable, fault-tolerant REST APIs and database-driven solutions.',
    skills: [
      {
        name: 'Python',
        level: 'Advanced',
        experience: 'Core Language',
        icon: 'FileCode2',
        description: 'Object-oriented programming, data structures, scripting, clean abstractions, and backend algorithms.',
        badge: 'Core Backend',
      },
      {
        name: 'Django',
        level: 'Proficient',
        experience: 'Framework',
        icon: 'Server',
        description: 'MVT architecture, robust ORM querying, migrations, middleware, signals, and security protocols.',
        badge: 'Primary Framework',
      },
      {
        name: 'Django REST Framework (DRF)',
        level: 'Proficient',
        experience: 'API Engine',
        icon: 'Cpu',
        description: 'Serializers, ModelViewSets, custom permissions, JWT authentication, pagination, and filter backends.',
        badge: 'API Specialization',
      },
      {
        name: 'RESTful API Architecture',
        level: 'Proficient',
        experience: 'Architecture',
        icon: 'Network',
        description: 'Designing clean HTTP contracts, status codes, payload structures, versioning, and documentation.',
      },
      {
        name: 'Authentication & Security',
        level: 'Intermediate',
        experience: 'Security',
        icon: 'ShieldCheck',
        description: 'JSON Web Tokens (JWT), session cookies, password hashing, CORS, CSRF protection, and role-based access.',
      },
      {
        name: 'Databases & Relational Modeling',
        level: 'Proficient',
        experience: 'Data Layer',
        icon: 'Database',
        description: 'Schema normalization, foreign keys, query optimization, indexing, and ORM performance tuning.',
      },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Crafting responsive, accessible, and high-performance interfaces with modern React, JavaScript, and semantic web standards.',
    skills: [
      {
        name: 'React.js',
        level: 'Proficient',
        experience: 'UI Library',
        icon: 'Component',
        description: 'Functional components, custom hooks, state machines, context API, memoization, and component lifecycles.',
        badge: 'Primary Frontend',
      },
      {
        name: 'JavaScript (ES6+)',
        level: 'Proficient',
        experience: 'Core Language',
        icon: 'Code2',
        description: 'Asynchronous programming (Promises, async/await), DOM manipulation, closures, event loop, and modern syntax.',
        badge: 'Standard',
      },
      {
        name: 'HTML5 Semantic Markup',
        level: 'Advanced',
        experience: 'Structure',
        icon: 'Layout',
        description: 'Accessible semantic structures, SEO tags, forms, input validation, and media embedding.',
      },
      {
        name: 'CSS3 & Modern Styling',
        level: 'Proficient',
        experience: 'Styling',
        icon: 'Palette',
        description: 'Flexbox, CSS Grid, custom properties, animations, media queries, and utility frameworks like Tailwind CSS.',
      },
      {
        name: 'Responsive UI Design',
        level: 'Proficient',
        experience: 'UX/UI',
        icon: 'Smartphone',
        description: 'Mobile-first layouts, adaptive spacing, flexible media, and cross-browser visual fidelity.',
      },
      {
        name: 'State Management & API Fetching',
        level: 'Proficient',
        experience: 'Integration',
        icon: 'Repeat',
        description: 'Connecting React frontends to Django REST endpoints, managing loading, caching, and error states.',
      },
    ],
  },
  {
    id: 'strengths',
    title: 'Core Strengths & Practices',
    description: 'Engineering practices that turn code into robust, deployable, and maintainable software systems.',
    skills: [
      {
        name: 'Backend Architecture',
        level: 'Specialization',
        experience: 'System Design',
        icon: 'Layers',
        description: 'Modular application structure, separation of concerns, and clean service layers.',
      },
      {
        name: 'Database-Driven Apps',
        level: 'Specialization',
        experience: 'Full-Stack',
        icon: 'Binary',
        description: 'End-to-end data lifecycle from SQL/ORM schema to JSON serializer to React interface.',
      },
      {
        name: 'Git & Version Control',
        level: 'Proficient',
        experience: 'Tooling',
        icon: 'GitBranch',
        description: 'Branching strategies, commit hygiene, pull requests, merge conflict resolution, and GitHub collaboration.',
      },
      {
        name: 'Clean Code & Refactoring',
        level: 'Dedicated',
        experience: 'Methodology',
        icon: 'Sparkles',
        description: 'DRY principles, descriptive naming, type safety, modular design, and comprehensive documentation.',
      },
    ],
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: '01',
    phase: 'Discover',
    title: 'Understand & Architect',
    summary: 'Analyzing business requirements, mapping core domain entities, and establishing clear architectural constraints before writing code.',
    keyDeliverables: [
      'Domain entity modeling & database schema drafts',
      'API specification & REST endpoint mapping',
      'Technical constraint & technology stack assessment',
    ],
    icon: 'Compass',
  },
  {
    step: '02',
    phase: 'Design',
    title: 'Schema & Interface Blueprints',
    summary: 'Designing normalized relational models in Django and wireframing modular React component hierarchies for optimal state flow.',
    keyDeliverables: [
      'Django ORM models with foreign key constraints',
      'Design tokens, typography scales & responsive layouts',
      'API payload contracts (request/response schemas)',
    ],
    icon: 'Layers',
  },
  {
    step: '03',
    phase: 'Develop',
    title: 'Full-Stack Engineering',
    summary: 'Implementing rock-solid Django REST Framework viewsets and serializers, alongside responsive, accessible React interfaces.',
    keyDeliverables: [
      'Robust DRF Serializers, ViewSets, and Permissions',
      'Component-driven React UI with custom hooks',
      'Error handling, form validation & loading skeletons',
    ],
    icon: 'Code2',
  },
  {
    step: '04',
    phase: 'Deploy',
    title: 'Test, Optimize & Launch',
    summary: 'Conducting thorough integration testing, tuning database queries, verifying mobile responsiveness, and deploying to cloud infrastructure.',
    keyDeliverables: [
      'Database index tuning & query optimization',
      'Cross-device accessibility & performance audits',
      'Production configuration and live verification',
    ],
    icon: 'Rocket',
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'bca-degree',
    period: '2023 — 2026',
    title: 'Bachelor of Computer Applications (BCA)',
    organization: 'Himachal Pradesh University (HPU)',
    roleType: 'Education',
    location: 'India',
    description:
      'Currently pursuing comprehensive computer science undergraduate coursework focusing on web technologies, object-oriented programming, and backend architectures.',
    achievements: [
      'Deep foundation in relational database management, SQL, and normalization',
      'Building scalable web solutions using modern tech stacks',
      'Developing multiple full-stack capstone applications',
    ],
    skills: ['Python', 'Django', 'React.js', 'DBMS', 'OOP'],
  },
  {
    id: 'fullstack-intern',
    period: '6 Months',
    title: 'Full Stack Developer Intern',
    organization: 'IT Infonity',
    roleType: 'Experience',
    location: 'India',
    description:
      'Worked as a Full Stack Developer intern, designing and implementing end-to-end features for robust web applications using a modern Python and React tech stack.',
    achievements: [
      'Architected and optimized REST APIs using Python, Django, and Django REST Framework (DRF)',
      'Engineered dynamic, highly responsive frontend interfaces utilizing HTML, CSS, JavaScript, and React.js',
      'Collaborated effectively to resolve bugs, optimize database queries, and improve overall application performance',
    ],
    skills: ['Python', 'Django', 'DRF', 'HTML', 'CSS', 'JavaScript', 'React.js'],
  },
];

export const CODE_SNIPPET_SAMPLES = {
  backend: {
    title: 'Django REST Framework ViewSet & Serializer',
    language: 'python',
    code: `# api/views.py - Divyansh Sharma Portfolio Architecture
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Project, Task
from .serializers import ProjectSerializer, TaskSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    """
    Production-grade API endpoint handling full-stack project operations
    with optimized querysets and role-based permissions.
    """
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def get_queryset(self):
        # Prevent N+1 queries by prefetching relational tasks
        return Project.objects.filter(is_active=True).prefetch_related(
            'tasks', 'technologies'
        ).order_by('-created_at')

    @action(detail=True, methods=['post'])
    def log_activity(self, request, pk=None):
        project = self.get_object()
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(project=project, author=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)`,
  },
  frontend: {
    title: 'Modern React Hook & API Integration',
    language: 'typescript',
    code: `// src/hooks/useProjectApi.ts - React Frontend Engine
import { useState, useEffect, useCallback } from 'react';

interface ProjectState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useProjectApi<T>(endpoint: string) {
  const [state, setState] = useState<ProjectState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const res = await fetch(endpoint, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error(\`HTTP \${res.status}: Failed to fetch\`);
      const json = await res.json();
      setState({ data: json, loading: false, error: null });
    } catch (err: any) {
      setState({ data: null, loading: false, error: err.message });
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ...state, refetch: fetchData };
}`,
  },
};
