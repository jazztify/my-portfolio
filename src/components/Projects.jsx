import { useState, useCallback } from 'react';
import { PROJECTS } from '../data';
import { useFadeIn } from '../hooks';
import ProjectModal from './ProjectModal';
import { AnimatePresence } from 'framer-motion';

function ProjectCard({ project, onClick, index }) {
    const ref = useFadeIn();
    return (
        <div
            className="ui-card fade-up flex flex-col h-full !p-0 overflow-hidden cursor-pointer"
            ref={ref}
            style={{ transitionDelay: `${index * 100}ms` }}
            onClick={() => onClick(project)}
            id={`project-card-${project.id}`}
        >
            <div className="aspect-[16/10] bg-slate-100 overflow-hidden group">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2 tracking-tight" style={{ color: 'var(--text-main)' }}>
                    {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                    {project.achievements[0]}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
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
            <div className="main-container">
                <div className="fade-up mb-8 text-center" ref={titleRef}>
                    <span className="section-label">Featured Work</span>
                    <h2 className="section-title">Portfolio Showcase</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
