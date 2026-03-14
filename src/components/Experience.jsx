import { EXPERIENCES } from '../data';
import { useFadeIn } from '../hooks';

function TimelineItem({ exp, index }) {
    const ref = useFadeIn();
    return (
        <div
            className="timeline-item fade-up"
            ref={ref}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            {/* TIMELINE DOT (Absolute in item) */}
            <div className="timeline-dot" />

            <div className="mb-6">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl md:text-2xl font-black tracking-tight" style={{ color: 'var(--text-main)' }}>
                        {exp.company}
                    </h3>
                    <span className="text-[0.625rem] md:text-[0.6875rem] font-black uppercase tracking-widest px-4 py-1.5 bg-[var(--bg-primary)] border border-[var(--border-main)] rounded-full shadow-sm" style={{ color: 'var(--text-muted)' }}>
                        {exp.period}
                    </span>
                </div>
                <p className="text-lg font-bold" style={{ color: 'var(--text-accent)' }}>
                    {exp.role}
                </p>
            </div>

            <ul className="space-y-4">
                {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-4 text-[0.9375rem] md:text-base leading-relaxed opacity-80" style={{ color: 'var(--text-muted)' }}>
                        <span className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--text-accent)] opacity-40 shadow-sm" />
                        {b}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Experience() {
    const titleRef = useFadeIn();

    return (
        <section id="experience" className="section-padding section-bg-alt">
            <div className="main-container max-w-4xl">
                <div className="fade-up mb-20" ref={titleRef}>
                    <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-accent)' }}>Career Path</p>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight" id="experience-title">Professional Journey</h2>
                </div>

                <div className="relative" id="experience-timeline">
                    {EXPERIENCES.map((exp, i) => (
                        <TimelineItem key={exp.company} exp={exp} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
