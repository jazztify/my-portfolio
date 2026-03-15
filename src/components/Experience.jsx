import { EXPERIENCES } from '../data';
import { useFadeIn } from '../hooks';

function TimelineItem({ exp, index }) {
    const ref = useFadeIn();
    return (
        <div
            className="timeline-item fade-up"
            ref={ref}
            style={{ transitionDelay: `${index * 120}ms` }}
        >
            <div className="timeline-dot" />

            <div className="mb-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3
                        className="text-lg font-bold tracking-tight"
                        style={{ color: 'var(--text-main)' }}
                    >
                        {exp.company}
                    </h3>
                    <span
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        {exp.period}
                    </span>
                </div>
                <p className="text-sm font-semibold" style={{ color: 'var(--text-accent)' }}>
                    {exp.role}
                </p>
            </div>

            <ul className="space-y-2">
                {exp.bullets.map((b, i) => (
                    <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--text-accent)] opacity-40" />
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
            <div className="main-container" style={{ maxWidth: '760px' }}>
                <div className="fade-up mb-8" ref={titleRef}>
                    <span className="section-label">Career Path</span>
                    <h2 className="section-title">Professional Journey</h2>
                </div>

                <div>
                    {EXPERIENCES.map((exp, i) => (
                        <TimelineItem key={exp.company} exp={exp} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
