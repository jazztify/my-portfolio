import { PROFILE, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEye, FaDownload } from '../data';
import { useFadeIn } from '../hooks';

export default function Hero() {
    const ref = useFadeIn();

    return (
        <section id="objective" className="flex items-center" style={{ minHeight: '80vh', paddingTop: '6rem', paddingBottom: '3rem' }}>
            <div className="main-container fade-up flex flex-col md:flex-row gap-10 lg:gap-16 items-center text-center md:text-left" ref={ref}>

                {/* Text */}
                <div className="flex-1 order-2 md:order-1 max-w-2xl mx-auto md:mx-0">
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 uppercase tracking-wider bg-[var(--bg-secondary)] border border-[var(--border-main)]"
                        style={{ color: 'var(--text-accent)' }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-[var(--text-accent)]" />
                        Available for Projects
                    </div>

                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4"
                        style={{ color: 'var(--text-main)' }}
                    >
                        Jasper Dale <br />
                        <span style={{ color: 'var(--text-accent)' }}>M. Manahan</span>
                    </h1>

                    <p
                        className="text-lg font-semibold mb-6"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        {PROFILE.title}
                    </p>

                    <p
                        className="text-base leading-relaxed mb-8 max-w-lg"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        {PROFILE.objective}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 mb-8 justify-center md:justify-start">
                        <a href={PROFILE.resumePdf} target="_blank" className="ui-btn-primary justify-center">
                            <FaEye size={14} /> View Resume
                        </a>
                        <a href={PROFILE.resumePdf} download className="ui-btn-secondary justify-center">
                            <FaDownload size={13} /> Download CV
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-6 justify-center md:justify-start pt-6 border-t border-[var(--border-main)]">
                        <a href={`tel:${PROFILE.phone.replace(/-/g, '')}`} className="flex items-center gap-2 text-sm hover:text-[var(--text-accent)] transition-colors" style={{ color: 'var(--text-muted)' }}>
                            <FaPhone className="text-[var(--text-accent)]" size={12} /> {PROFILE.phone}
                        </a>
                        <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 text-sm hover:text-[var(--text-accent)] transition-colors" style={{ color: 'var(--text-muted)' }}>
                            <FaEnvelope className="text-[var(--text-accent)]" size={12} /> {PROFILE.email}
                        </a>
                        <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                            <FaMapMarkerAlt className="text-[var(--text-accent)]" size={12} /> {PROFILE.location}
                        </div>
                    </div>
                </div>

                {/* Photo */}
                <div className="flex-none order-1 md:order-2 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-2xl rotate-6 opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-2xl shadow-xl flex items-center justify-center p-1">
                        <div className="w-full h-full rounded-[0.85rem] overflow-hidden">
                            <img
                                src="/zxc.jpg"
                                alt="Jasper Dale M. Manahan"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
