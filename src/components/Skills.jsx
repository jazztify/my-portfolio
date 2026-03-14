import { SKILL_GROUPS } from '../data';
import { useFadeIn } from '../hooks';

function SkillCategory({ group, index }) {
    const ref = useFadeIn();
    return (
        <div
            className="fade-up"
            ref={ref}
            style={{ transitionDelay: `${index * 120}ms` }}
        >
            <div className="flex items-center gap-3 mb-6">
                <h3
                    className="text-[0.6875rem] font-black uppercase tracking-[0.14em]"
                    style={{ color: 'var(--text-muted)' }}
                >
                    {group.category}
                </h3>
                <span className="w-10 h-0.5 rounded-full" style={{ background: 'var(--border-main)' }} />
            </div>
            <div className="flex flex-wrap gap-4">
                {group.skills.map(skill => {
                    const Icon = skill.icon;
                    return (
                        <div key={skill.name} className="badge bg-[var(--bg-card)] border border-[var(--border-main)] py-2.5 px-3.5 rounded-xl hover:border-[var(--text-accent)] transition-all hover:-translate-y-1">
                            <Icon className="text-lg md:text-xl" style={{ color: skill.color }} />
                            <span className="text-sm font-semibold tracking-tight leading-tight">{skill.name}</span>
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
                <div className="fade-up mb-20" ref={titleRef}>
                    <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-accent)' }}>My Toolbox</p>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight" id="skills-title">Technical Expertise</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-x-20 gap-y-16 lg:gap-x-32">
                    {SKILL_GROUPS.map((group, i) => (
                        <SkillCategory key={group.category} group={group} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
