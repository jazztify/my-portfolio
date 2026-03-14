import { PROFILE, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEye, FaDownload } from '../data';
import { useFadeIn } from '../hooks';
import { FiArrowDown } from 'react-icons/fi';

export default function Hero() {
    const ref = useFadeIn();

    return (
        <section id="objective" className="section-padding min-h-[90vh] flex items-center bg-[var(--bg-primary)]">
            <div className="main-container fade-up flex flex-col md:flex-row gap-12 lg:gap-20 items-center text-center md:text-left" ref={ref}>

                {/* TEXT CONTENT */}
                <div className="flex-1 order-2 md:order-1 max-w-2xl mx-auto md:mx-0">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.75rem] font-bold mb-8 uppercase tracking-widest bg-[var(--bg-secondary)] border border-[var(--border-main)]"
                        style={{ color: 'var(--text-accent)' }}
                    >
                        <span className="w-2 h-2 rounded-full animate-pulse bg-[var(--text-accent)]" />
                        AVAILABLE FOR PROJECTS
                    </div>

                    <h1
                        className="text-[2.75rem] md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
                        style={{ color: 'var(--text-main)' }}
                    >
                        Jasper Dale <br />
                        <span style={{ color: 'var(--text-accent)' }}>M. Manahan</span>
                    </h1>

                    <p
                        className="text-lg md:text-xl font-semibold mb-8 opacity-90 leading-tight"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        {PROFILE.title}
                    </p>

                    <p
                        className="text-base md:text-lg leading-relaxed mb-10 max-w-xl opacity-80"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        {PROFILE.objective}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center md:justify-start w-full sm:w-auto">
                        <a href={PROFILE.resumePdf} target="_blank" className="ui-btn-primary shadow-xl w-full sm:w-auto justify-center">
                            <FaEye size={16} /> View Resume
                        </a>
                        <a href={PROFILE.resumePdf} download className="ui-btn-secondary w-full sm:w-auto justify-center">
                            <FaDownload size={14} /> Download CV
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-8 justify-center md:justify-start pt-8 border-t border-[var(--border-main)] opacity-70">
                        <a href={`tel:${PROFILE.phone.replace(/-/g, '')}`} className="flex items-center gap-3 text-sm font-semibold hover:text-[var(--text-accent)] transition-colors">
                            <FaPhone className="text-[var(--text-accent)]" /> {PROFILE.phone}
                        </a>
                        <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 text-sm font-semibold hover:text-[var(--text-accent)] transition-colors">
                            <FaEnvelope className="text-[var(--text-accent)]" /> {PROFILE.email}
                        </a>
                        <div className="flex items-center gap-3 text-sm font-semibold">
                            <FaMapMarkerAlt className="text-[var(--text-accent)]" /> {PROFILE.location}
                        </div>
                    </div>
                </div>

                {/* IMAGE/AVATAR PLACEHOLDER */}
                <div className="flex-none order-1 md:order-2 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-[2.5rem] rotate-6 opacity-10 animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-[2.5rem] shadow-2xl flex items-center justify-center p-1.5">
                        <div className="w-full h-full rounded-[2.2rem] bg-[var(--bg-card)] flex items-center justify-center overflow-hidden">
                            <span className="text-4xl lg:text-5xl font-black opacity-10 select-none">JDM</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
