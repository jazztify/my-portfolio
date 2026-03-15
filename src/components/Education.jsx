import { EDUCATION } from '../data';
import { useFadeIn } from '../hooks';
import { FiAward } from 'react-icons/fi';

export default function Education() {
    const ref = useFadeIn();
    const titleRef = useFadeIn();

    return (
        <section id="education" className="section-padding bg-[var(--bg-primary)]">
            <div className="main-container" style={{ maxWidth: '760px' }}>
                <div className="fade-up mb-8 text-center md:text-left" ref={titleRef}>
                    <span className="section-label">Academic Background</span>
                    <h2 className="section-title">Education</h2>
                </div>

                <div
                    className="ui-card flex flex-col md:flex-row items-center md:items-start gap-6 fade-up bg-[var(--bg-secondary)]"
                    ref={ref}
                    id="education-card"
                    style={{ padding: '2rem' }}
                >
                    <div
                        className="shrink-0 w-16 h-16 rounded-xl flex items-center justify-center border bg-[var(--bg-card)]"
                        style={{
                            borderColor: 'var(--border-main)',
                            color: 'var(--text-accent)'
                        }}
                    >
                        <FiAward size={32} />
                    </div>

                    <div className="text-center md:text-left flex-1">
                        <h3
                            className="text-xl font-bold tracking-tight mb-1"
                            style={{ color: 'var(--text-main)' }}
                        >
                            {EDUCATION.degree}
                        </h3>
                        <p
                            className="text-sm font-medium mb-3"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            {EDUCATION.school}
                        </p>
                        <span
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                            style={{
                                background: 'rgba(37, 99, 235, 0.08)',
                                color: 'var(--text-accent)',
                            }}
                        >
                            {EDUCATION.period}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
