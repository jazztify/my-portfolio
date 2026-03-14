import { EDUCATION } from '../data';
import { useFadeIn } from '../hooks';
import { FiAward } from 'react-icons/fi';

export default function Education() {
    const ref = useFadeIn();
    const titleRef = useFadeIn();

    return (
        <section id="education" className="section-padding bg-[var(--bg-primary)]">
            <div className="main-container max-w-4xl">
                <div className="fade-up mb-20 text-center md:text-left" ref={titleRef}>
                    <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-accent)' }}>Academic Background</p>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight" id="education-title">Education</h2>
                </div>

                <div
                    className="ui-card flex flex-col md:flex-row items-center md:items-start gap-10 fade-up bg-[var(--bg-secondary)]"
                    ref={ref}
                    id="education-card"
                >
                    <div
                        className="shrink-0 w-24 h-24 rounded-3xl flex items-center justify-center border-2 shadow-sm bg-[var(--bg-card)]"
                        style={{
                            borderColor: 'var(--border-main)',
                            color: 'var(--text-accent)'
                        }}
                    >
                        <FiAward size={48} />
                    </div>

                    <div className="text-center md:text-left flex-1">
                        <h3
                            className="text-2xl md:text-3xl font-black tracking-tight mb-3"
                            style={{ color: 'var(--text-main)' }}
                        >
                            {EDUCATION.degree}
                        </h3>
                        <p
                            className="text-lg md:text-xl font-bold uppercase tracking-wider mb-6"
                            style={{ color: 'var(--text-accent)' }}
                        >
                            {EDUCATION.school}
                        </p>
                        <div className="inline-flex items-center px-6 py-2 rounded-full bg-[var(--text-main)] text-[var(--bg-primary)] text-[0.75rem] md:text-[0.8125rem] font-black uppercase tracking-[0.15em] shadow-lg">
                            {EDUCATION.period}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
