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
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-10 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-lg" />

            <motion.div
                className="relative w-full max-w-4xl bg-[var(--bg-card)] rounded-2xl shadow-2xl overflow-hidden border border-[var(--border-main)]"
                initial={{ y: 40, scale: 0.95, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                exit={{ y: 40, scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-all backdrop-blur-md"
                >
                    <FiX size={20} />
                </button>

                <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="lg:w-[55%] aspect-video lg:aspect-auto bg-slate-900 overflow-hidden relative border-b lg:border-b-0 lg:border-r border-[var(--border-main)]">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="lg:w-[45%] p-8 md:p-10 flex flex-col justify-center">
                        <span className="section-label">Project Details</span>

                        <h3
                            className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 leading-tight"
                            style={{ color: 'var(--text-main)' }}
                        >
                            {project.title}
                        </h3>

                        <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.techStack.map(tech => (
                                <span key={tech} className="tag">{tech}</span>
                            ))}
                        </div>

                        <div className="space-y-4 mb-8">
                            <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Accomplishments</h4>
                            <ul className="space-y-3">
                                {project.achievements.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                                        <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--text-accent)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ui-btn-primary w-full justify-center py-3"
                        >
                            <FaExternalLinkAlt size={14} /> View Live Project
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
