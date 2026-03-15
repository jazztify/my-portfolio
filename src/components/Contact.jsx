import { useState } from 'react';
import { PROFILE, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook } from '../data';
import { useFadeIn } from '../hooks';
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';

export default function Contact() {
    const titleRef = useFadeIn();
    const formRef = useFadeIn();
    const infoRef = useFadeIn();

    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus('sent');
                setForm({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus(null), 4000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus(null), 4000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus(null), 4000);
        }
    };

    return (
        <section id="contact" className="section-padding section-bg-alt">
            <div className="main-container">
                <div className="fade-up mb-8 text-center" ref={titleRef}>
                    <span className="section-label">Get In Touch</span>
                    <h2 className="section-title">Let's Connect</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Left: Info */}
                    <div className="fade-up" ref={infoRef}>
                        <h3 className="text-2xl font-bold mb-6 leading-tight tracking-tight" style={{ color: 'var(--text-main)' }}>
                            Have a project in mind? <br />
                            <span style={{ color: 'var(--text-accent)' }}>Let's talk.</span>
                        </h3>

                        <div className="space-y-5 mb-8">
                            {[
                                { icon: FaEnvelope, text: PROFILE.email, href: `mailto:${PROFILE.email}`, label: "Email" },
                                { icon: FaPhone, text: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/-/g, '')}`, label: "Phone" },
                                { icon: FaMapMarkerAlt, text: PROFILE.location, href: null, label: "Location" },
                            ].map(({ icon: Icon, text, href, label }) => (
                                <div key={text} className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-[var(--bg-secondary)] border border-[var(--border-main)]">
                                        <Icon size={16} style={{ color: 'var(--text-accent)' }} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>{label}</p>
                                        {href ? (
                                            <a href={href} className="text-sm font-medium transition-all hover:text-[var(--text-accent)]" style={{ color: 'var(--text-main)' }}>
                                                {text}
                                            </a>
                                        ) : (
                                            <span className="text-sm font-medium" style={{ color: 'var(--text-main)' }}>{text}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-3" id="contact-socials">
                            {[
                                { icon: FaLinkedin, url: PROFILE.socials.linkedin, label: 'LinkedIn' },
                                { icon: FaGithub, url: PROFILE.socials.github, label: 'GitHub' },
                                { icon: FaFacebook, url: PROFILE.socials.facebook, label: 'Facebook' },
                            ].map(social => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-all border bg-[var(--bg-secondary)] hover:scale-105 hover:border-[var(--text-accent)]"
                                        style={{ borderColor: 'var(--border-main)', color: 'var(--text-main)' }}
                                        aria-label={social.label}
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4 p-6 md:p-8 rounded-xl bg-[var(--bg-card)] border border-[var(--border-main)] fade-up"
                        ref={formRef}
                        id="contact-form"
                    >
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="ui-input"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="ui-input"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                className="ui-input"
                                placeholder="Business Inquiry / Project"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                className="ui-input"
                                style={{ resize: 'vertical', minHeight: '120px' }}
                                placeholder="What can I help you with?"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="ui-btn-primary w-full justify-center h-11 mt-1"
                            disabled={status === 'sending'}
                            id="contact-submit-btn"
                        >
                            {status === 'sending' ? (
                                <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                            ) : status === 'sent' ? (
                                <><FiCheck size={16} /> Message Sent!</>
                            ) : status === 'error' ? (
                                <><FiAlertCircle size={16} /> Error Occurred</>
                            ) : (
                                <><FiSend size={15} /> Send Message</>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
