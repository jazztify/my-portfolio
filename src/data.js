import {
    FaReact, FaNodeJs, FaDocker, FaGitAlt, FaGithub, FaBootstrap,
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaFacebook,
    FaExternalLinkAlt, FaDownload, FaEye
} from 'react-icons/fa';
import {
    SiTailwindcss, SiExpress, SiMysql, SiPostgresql, SiMongodb,
    SiSupabase, SiVercel, SiCloudflare, SiRender, SiFlutter,
    SiReact as SiReactNative
} from 'react-icons/si';

export const NAV_LINKS = [
    { id: 'objective', label: 'Objective' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
];

export const PROFILE = {
    name: 'JASPER DALE M. MANAHAN',
    title: 'Web Developer and Software Engineer',
    phone: '0906-200-8087',
    email: 'jazzmanahan9@gmail.com',
    location: 'Cabanatuan City, Nueva Ecija',
    objective: `Dedicated Web Developer and Software Engineer with a Bachelor’s degree in Information Technology. Seeking to leverage hands-on experience in building full-stack platforms and scalable applications to contribute to innovative software engineering teams.`,
    resumePdf: '/resumexportfolio.docx',
    socials: {
        linkedin: 'https://linkedin.com/in/jasperdale',
        github: 'https://github.com/jasperdale',
        facebook: 'https://facebook.com/jasperdale',
    }
};

export const SKILL_GROUPS = [
    {
        category: 'Frontend',
        skills: [
            { name: 'React', icon: FaReact, color: '#61DAFB' },
            { name: 'React Native', icon: SiReactNative, color: '#61DAFB' },
            { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
            { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
        ],
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
            { name: 'Express.js', icon: SiExpress, color: '#888888' },
        ],
    },
    {
        category: 'Databases',
        skills: [
            { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        ],
    },
    {
        category: 'DevOps',
        skills: [
            { name: 'Git', icon: FaGitAlt, color: '#F05032' },
            { name: 'GitHub', icon: FaGithub, color: '#888888' },
            { name: 'Docker', icon: FaDocker, color: '#2496ED' },
        ],
    },
    {
        category: 'Cloud',
        skills: [
            { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
            { name: 'Vercel', icon: SiVercel, color: '#888888' },
            { name: 'Cloudflare', icon: SiCloudflare, color: '#F38020' },
            { name: 'Render', icon: SiRender, color: '#46E3B7' },
        ],
    },
];

export const PROJECTS = [
    {
        id: 'weteng',
        title: 'Weteng Platform',
        image: '/weteng.png',
        demoUrl: 'https://weteng-platform-main.vercel.app/login',
        techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        achievements: [
            'Developed a specialized draw-based management platform using the MERN Stack (MongoDB, Express.js, React, Node.js), featuring administrative controls for securely managing hierarchical roles like Admin, Banker, and Cabo.',
            'Implemented a manual winning number input system to align with live-streamed social media events.',
            'Integrated barcode generation for automated payslip processing to improve tracking and operational security.',
        ],
    },
    {
        id: 'kingsman',
        title: 'Hotel Management — Kingsman',
        image: '/kingsman.png',
        demoUrl: 'https://yuvte-112-208-182-18.a.free.pinggy.link/kingsman',
        techStack: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker'],
        achievements: [
            'Engineered a comprehensive hotel management dashboard using React and Tailwind CSS, streamlining operational workflows for room bookings and staff management.',
            'Developed secure RESTful APIs with Node.js and Express.js, paired with a PostgreSQL database to reliably store structured customer and transactional data.',
            'Containerized the application environment using Docker and deployed the backend infrastructure via Render for reliable performance.',
        ],
    },
    {
        id: 'kasabay',
        title: 'Kasabay',
        image: '/kasabay.png',
        demoUrl: '#',
        techStack: ['Flutter', 'React Native', 'Supabase', 'MongoDB', 'Vercel'],
        achievements: [
            'Built responsive, cross-platform mobile applications utilizing Flutter and React Native to deliver a seamless user experience across iOS and Android devices.',
            'Integrated Supabase for user authentication and real-time data handling, alongside MongoDB for flexible, document-based storage of dynamic application logs.',
            'Configured deployment pipelines and secured the application routing using Vercel and Cloudflare to ensure high availability and minimal latency.',
        ],
    },
];

export const EXPERIENCES = [
    {
        company: 'TRB EXPRESS INC.',
        role: 'IT Support / CRO',
        period: 'September 2022 — November 2023',
        bullets: [
            'Provided technical support and handled complex inquiries regarding deliveries, shipments, and service issues.',
            'Coordinated with internal teams to resolve delivery concerns and service problems.',
            'Ensured customer concerns were properly documented and addressed.',
        ],
    },
    {
        company: 'PROVINCIAL YOUTH DEVELOPMENT',
        role: 'Field aid Assessor',
        period: 'January 2024 — January 2026',
        bullets: [
            'Conducted data collection and surveys in various barangays to evaluate program impact.',
            'Managed and maintained inventory data for relief goods, supplies, and distributed items during outreach efforts.',
            'Coordinated with local youth leaders and LGU representatives to ensure smooth implementation of activities.',
        ],
    },
];

export const EDUCATION = {
    degree: 'Bachelor of Science in Information Technology',
    school: 'College for Research and Technology Burgos Avenue Cabanatuan City, Nueva Ecija',
    period: '2018 — 2022',
};

export { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook, FaExternalLinkAlt, FaDownload, FaEye };
