import { useState, useCallback } from 'react';
import { PROJECTS, FaExternalLinkAlt } from '../data';
import { useFadeIn } from '../hooks';
import ProjectModal from './ProjectModal';
import { AnimatePresence } from 'framer-motion';

function ProjectCard({ project, onClick, index }) {
    const ref = useFadeIn();
    return (
        <div
            className="card fade-up flex flex-col h-full !p-0 overflow-hidden"
            ref={ref}
            style={{ transitionDelay: `${index * 100}ms` }}
            onClick={() => onClick(project)}
            id={`project-card-${project.id}`}
            style={{ cursor: 'pointer' }}
        >
            <div className="aspect-[16/10] bg-slate-100 overflow-hidden group">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
            </div>
            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-black mb-3 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                </h3>
                <p className="text-sm opacity-70 mb-6 line-clamp-2 leading-relaxed">
                    {project.achievements[0]}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.slice(0, 3).map(tech => (
                        <span key={tech} className="tag">{tech}</span>
                    ))}
                    {project.techStack.length > 3 && (
                        <span className="tag">+{project.techStack.length - 3}</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const [selected, setSelected] = useState(null);
    const titleRef = useFadeIn();
    const handleClose = useCallback(() => setSelected(null), []);

    return (
        <section id="projects" className="section-padding">
            <div className="container-fixed">
                <div className="fade-up mb-16 text-center" ref={titleRef}>
                    <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-accent)' }}>Featured Work</p>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight" id="projects-title">Portfolio Showcase</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {PROJECTS.map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelected}
                            index={i}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selected && (
                    <ProjectModal project={selected} onClose={handleClose} />
                )}
            </AnimatePresence>
        </section>
    );
}
