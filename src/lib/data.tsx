import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/project-4.webp',
    title: 'Sekra',
    description:
      'Sekra is a modern, full-stack e-commerce web application built with Next.js 15, TypeScript, and Tailwind CSS, designed for performance, scalability, and user experience. It supports authenticated users, guest shopping, serverless deployment, and much more — aiming to deliver a smooth online shopping experience with rich interactions and modular architecture.',
    technologies: [
      'Tailwind',
      'Framer Motion',
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Neon',
      'Next-Auth',
      'Paymob',
    ],
    links: {
      preview: 'https://sekra-seven.vercel.app/en',
      github: 'https://github.com/Xhaelri/sekra',
    },
  },
  {
    image: '/images/project-2.webp',
    title: 'NovaCart',
    description:
      'A dynamic product marketplace with smooth animations, advanced state management, and Firebasebackend for authentication and storage.',
    technologies: [
      'React',
      'JavaScript',
      'Tailwind',
      'Redux',
      'Firebase',
      'Framer Motion',
    ],
    links: {
      preview: 'https://novacartt.vercel.app/',
      github: 'https://github.com/Xhaelri/NovaCart',
    },
  },
  {
    image: '/images/project-1.webp',
    title: 'MediPortal',
    description:
      'An appointment booking platform enabling patients to register, log in, and reserve consultations with real-timeavailability management.',
    technologies: [
      'React',
      'JavaScript',
      'Context API',
      'Tailwind',
      'Firebase',
    ],
    links: {
      preview: 'https://mediportall.vercel.app',
      github: 'https://github.com/Xhaelri/MediPortal',
    },
  },
  {
    image: '/images/project-3.webp',
    title: 'ZestyBite',
    description:
      'A single-page food delivery site showcasing restaurants and menu items with responsive layout andinteractive ordering features.',
    technologies: ['React', 'CSS', 'React Router', 'JavaScript'],
    links: {
      preview: 'https://zestybitte.vercel.app/',
      github: 'https://github.com/Xhaelri/ZestyBite',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Frontend and Cross-Platform Mobile developer intern',
    company: 'Information Technology Institute (ITI)',
    description: [
      'During this internship, I Utilized technologies like Next.js, React.js, Redux, Tailwind and TypeScript to build responsive andscalable web applications I also Demonstrated leadership skills as a track leader at ITI, honing organization and communication skills.',
      'I also Demonstrated leadership skills as a track leader at ITI, honing organization and communication skills.',
      'Led a team in developing Herafi, a platform connecting clients with handymen, enhancing userexperience.',
      'Developed a RAG-based AI chatbot using Gemini 1.5 Flash, Pinecone, and sentence-transformers/all-MiniLM-L6-v2.',
    ],
    period: '2024 - 2025',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind',
    ],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
] as const;
