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
  github: 'https://github.com/divyansh-sharma',
  linkedin: 'https://www.linkedin.com/in/divyansh-sharma-a6bb48434',
  location: 'India · Available Worldwide for Remote & Full-time Roles',
  status: 'Available for Hire & Contract Opportunities',
  stats: [
    { label: 'Core Backend', value: 'Django & DRF' },
    { label: 'Frontend Engine', value: 'React & JS' },
    { label: 'Degree', value: 'BCA Graduate' },
    { label: 'Focus', value: 'REST Architecture' },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'nexus-commerce',
    title: 'Nexus Commerce Engine',
    subtitle: 'Full-Stack E-Commerce & Inventory Management Platform',
    description:
      'A production-grade e-commerce application featuring token-based authentication (JWT), dynamic catalog filtering, shopping cart persistence, role-based order processing, and administrative inventory analytics.',
    category: 'fullstack',
    technologies: ['Python', 'Django', 'Django REST Framework', 'React.js', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Comprehensive REST API with granular permission classes (Customer vs Admin)',
      'JWT Authentication with automatic refresh token rotation',
      'Optimized database queries with Django select_related & prefetch_related',
      'React frontend with optimistic UI updates and responsive cart state',
      'Order invoicing, status tracking, and stock synchronization',
    ],
    backendHighlights: [
      'DRF Generic ViewSets with custom filtering and pagination classes',
      'Relational schema design with atomic transaction guarantees',
      'Secure password hashing and token storage protocols',
    ],
    frontendHighlights: [
      'Responsive product grid with instant multi-facet filter search',
      'Custom React context state machine for cart and checkout',
      'Accessible modals, skeleton loading states, and error toasts',
    ],
    githubUrl: 'https://github.com/divyansh-sharma/nexus-commerce',
    liveUrl: 'https://nexus-commerce-preview.divyansh.dev',
    accentColor: '#38bdf8', // sky-400
    completionYear: '2024',
  },
  {
    id: 'taskflow-pro',
    title: 'TaskFlow Workspace',
    subtitle: 'Collaborative Sprint & Task Management System',
    description:
      'A full-stack project tracking tool built for agile development teams. Features Kanban boards, granular subtasks, milestone tracking, and activity audit trails.',
    category: 'fullstack',
    technologies: ['Python', 'Django', 'DRF', 'React.js', 'SQLite/PostgreSQL', 'CSS3'],
    features: [
      'Modular RESTful endpoints for workspaces, boards, columns, and cards',
      'Nested serializers in DRF for relational task hierarchies',
      'Drag-and-drop interactive Kanban view with client-side state sync',
      'User assignments, deadline alerts, and task priority badges',
      'Search and filter by assignees, status, and custom tags',
    ],
    backendHighlights: [
      'Custom permission policies restricting board access to authorized team members',
      'Django signals for automated activity logging and timeline records',
      'Normalized schema handling complex many-to-many team associations',
    ],
    frontendHighlights: [
      'Smooth layout animations and interactive card reordering',
      'Modal task details with inline markdown editing and comment streams',
      'Mobile-optimized touch targets for on-the-go sprint updates',
    ],
    githubUrl: 'https://github.com/divyansh-sharma/taskflow-pro',
    liveUrl: 'https://taskflow-workspace.divyansh.dev',
    accentColor: '#10b981', // emerald-500
    completionYear: '2024',
  },
  {
    id: 'drf-auth-guard',
    title: 'AuthGuard API Service',
    subtitle: 'Secure Multi-Tenant Authentication & RBAC Microservice',
    description:
      'A standalone, high-security backend service providing user registration, email verification flows, password reset tokens, and Role-Based Access Control (RBAC) via Django REST Framework.',
    category: 'backend',
    technologies: ['Python', 'Django', 'Django REST Framework', 'JWT', 'PostgreSQL'],
    features: [
      'Stateless JWT authentication with blacklisting and revocable sessions',
      'Role-based permissions (SuperAdmin, Manager, Contributor, Guest)',
      'Throttled rate limiting for sensitive login and signup endpoints',
      'Interactive Swagger / OpenAPI auto-generated documentation schema',
      'Unit tested test suite covering views, models, and serializers',
    ],
    backendHighlights: [
      'Custom Django User model extending AbstractBaseUser',
      'Secure token encryption and email dispatch queue architecture',
      'Standardized API error response envelopes with HTTP status mapping',
    ],
    frontendHighlights: [
      'Pre-configured client integration SDK for React applications',
      'Interactive API Explorer and documentation viewer',
    ],
    githubUrl: 'https://github.com/divyansh-sharma/authguard-service',
    liveUrl: 'https://authguard-docs.divyansh.dev',
    accentColor: '#818cf8', // indigo-400
    completionYear: '2023',
  },
  {
    id: 'devpulse-analytics',
    title: 'DevPulse Portal',
    subtitle: 'Developer Metrics & Repository Performance Dashboard',
    description:
      'A sleek, responsive analytics interface connecting to GitHub APIs to visualize code velocity, commit frequency, repository activity, and pull request statuses in real time.',
    category: 'frontend',
    technologies: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'REST APIs', 'Motion'],
    features: [
      'Dynamic charts illustrating commit trends and contribution heatmaps',
      'Instant repository search with client-side caching to prevent rate-limit hits',
      'Dark/editorial aesthetic with glassmorphic cards and subtle gradients',
      'Responsive design adapting flawlessly from desktop to mobile screens',
    ],
    backendHighlights: [
      'Lightweight proxy endpoint handling GitHub API credentials and caching',
    ],
    frontendHighlights: [
      'Component-driven architecture with reusable cards, badges, and modals',
      'Custom hooks for asynchronous data fetching and error recovery',
      'High-contrast visual hierarchy tuned for dark IDE aesthetics',
    ],
    githubUrl: 'https://github.com/divyansh-sharma/devpulse-analytics',
    liveUrl: 'https://devpulse-portal.divyansh.dev',
    accentColor: '#f59e0b', // amber-500
    completionYear: '2023',
  },
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
    period: '2021 — 2024',
    title: 'Bachelor of Computer Applications (BCA)',
    organization: 'Undergraduate Degree',
    roleType: 'Education',
    location: 'India',
    description:
      'Completed comprehensive computer science undergraduate coursework focusing on Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), and Web Engineering.',
    achievements: [
      'Deep foundation in relational database management, SQL, and normalization',
      'Mastered Object-Oriented Programming (OOP) paradigms through Python and C++',
      'Developed multiple academic full-stack capstone applications',
      'Graduated with strong technical proficiency in backend architectures',
    ],
    skills: ['Data Structures', 'DBMS & SQL', 'Python', 'OOP', 'Software Engineering'],
  },
  {
    id: 'fullstack-dev',
    period: '2023 — Present',
    title: 'Full Stack Developer',
    organization: 'Independent Engineering & Client Solutions',
    roleType: 'Experience',
    location: 'Remote',
    description:
      'Designing and delivering modern web applications with a focus on Python/Django backends and React frontends. Translating client and product specifications into functional, well-documented digital products.',
    achievements: [
      'Architected end-to-end REST APIs using Django REST Framework for e-commerce and task management tools',
      'Implemented secure authentication pipelines utilizing JSON Web Tokens (JWT) and role-based authorization',
      'Engineered dynamic, highly responsive frontend dashboards utilizing React, custom hooks, and Tailwind CSS',
      'Conducted database optimization, eliminating N+1 query bottlenecks with Django ORM caching techniques',
    ],
    skills: ['Python', 'Django', 'Django REST Framework', 'React.js', 'PostgreSQL', 'REST APIs'],
  },
  {
    id: 'backend-specialization',
    period: '2022 — 2023',
    title: 'Backend & API Engineering Specialization',
    organization: 'Project-Driven Skill Development',
    roleType: 'Experience',
    location: 'Self-Directed',
    description:
      'Intensive deep dive into backend systems design, REST API specifications, token security, database migrations, and testing methodologies.',
    achievements: [
      'Built and open-sourced multiple reusable Django API boilerplates and authentication modules',
      'Authored comprehensive API documentation conforming to OpenAPI standards',
      'Explored microservice patterns, background task handling, and relational database indexing',
    ],
    skills: ['REST Architecture', 'JWT Auth', 'PostgreSQL', 'API Security', 'Git'],
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
