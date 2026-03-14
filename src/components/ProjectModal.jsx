import { useEffect } from 'react';
import { FaExternalLinkAlt } from '../data';
import { FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
    useEffect(() => {
        const handleKey = (e) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        <motion.div
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-12 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl" />

            <motion.div
                className="relative w-full max-w-5xl bg-[var(--bg-card)] rounded-[2.5rem] shadow-2xl overflow-hidden border border-[var(--border-main)]"
                initial={{ y: 50, scale: 0.9, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                exit={{ y: 50, scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-all backdrop-blur-md"
                >
                    <FiX size={24} />
                </button>

                <div className="flex flex-col lg:flex-row min-h-[500px]">
                    {/* IMAGE SIDE */}
                    <div className="lg:w-[55%] aspect-video lg:aspect-auto bg-slate-900 overflow-hidden relative border-b lg:border-b-0 lg:border-r border-[var(--border-main)]">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* CONTENT SIDE */}
                    <div className="lg:w-[45%] p-10 md:p-14 flex flex-col justify-center bg-[var(--bg-card)]">
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[0.625rem] font-black uppercase tracking-widest mb-4 bg-[var(--bg-secondary)] border border-[var(--border-main)]"
                            style={{ color: 'var(--text-accent)' }}
                        >
                            PROJECT DETAILS
                        </div>

                        <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter leading-tight" style={{ color: 'var(--text-main)' }}>
                            {project.title}
                        </h3>

                        <div className="flex flex-wrap gap-2 mb-10">
                            {project.techStack.map(tech => (
                                <span key={tech} className="tag">{tech}</span>
                            ))}
                        </div>

                        <div className="space-y-6 mb-12">
                            <h4 className="text-[0.625rem] font-black uppercase tracking-[0.2em] opacity-50" style={{ color: 'var(--text-muted)' }}>Accomplishments</h4>
                            <ul className="space-y-4">
                                {project.achievements.map((item, i) => (
                                    <li key={i} className="flex gap-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                                        <span className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--text-accent)] shadow-sm" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ui-btn-primary w-full justify-center py-4 rounded-2xl text-lg shadow-xl"
                        >
                            <FaExternalLinkAlt size={16} /> View Live Project
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
