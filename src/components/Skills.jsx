import { SKILL_GROUPS } from '../data';
import { useFadeIn } from '../hooks';

function SkillCategory({ group, index }) {
    const ref = useFadeIn();
    return (
        <div
            className="fade-up"
            ref={ref}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <h3
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: 'var(--text-muted)' }}
            >
                {group.category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
                {group.skills.map(skill => {
                    const Icon = skill.icon;
                    return (
                        <div
                            key={skill.name}
                            className="inline-flex items-center gap-2 py-2 px-3.5 rounded-lg text-sm font-medium transition-all hover:border-[var(--text-accent)] hover:-translate-y-0.5"
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-main)',
                                color: 'var(--text-main)',
                            }}
                        >
                            <Icon style={{ color: skill.color, fontSize: '1.1rem' }} />
                            {skill.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default function Skills() {
    const titleRef = useFadeIn();

    return (
        <section id="skills" className="section-padding section-bg-alt">
            <div className="main-container">
                <div className="fade-up mb-8" ref={titleRef}>
                    <span className="section-label">My Toolbox</span>
                    <h2 className="section-title">Technical Expertise</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                    {SKILL_GROUPS.map((group, i) => (
                        <SkillCategory key={group.category} group={group} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
