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
        <section id="contact" className="section-padding bg-[var(--bg-primary)]">
            <div className="main-container">
                <div className="fade-up mb-20 text-center" ref={titleRef}>
                    <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-accent)' }}>Get In Touch</p>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight" id="contact-title">Let's Connect</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* LEFT: Contact Information */}
                    <div className="fade-up" ref={infoRef}>
                        <h3 className="text-[2.25rem] font-black mb-8 leading-[1.1] tracking-tighter" style={{ color: 'var(--text-main)' }}>
                            Looking for a <span style={{ color: 'var(--text-accent)' }}>Full-Stack partner</span>?
                            <br />Let's talk about your vision.
                        </h3>

                        <div className="space-y-10 mb-12">
                            {[
                                { icon: FaEnvelope, text: PROFILE.email, href: `mailto:${PROFILE.email}`, label: "Email Address" },
                                { icon: FaPhone, text: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/-/g, '')}`, label: "Phone Number" },
                                { icon: FaMapMarkerAlt, text: PROFILE.location, href: null, label: "Current Location" },
                            ].map(({ icon: Icon, text, href, label }) => (
                                <div key={text} className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border bg-[var(--bg-secondary)] shadow-sm" style={{ borderColor: 'var(--border-main)' }}>
                                        <Icon size={22} style={{ color: 'var(--text-accent)' }} />
                                    </div>
                                    <div>
                                        <h5 className="text-[0.625rem] font-black uppercase tracking-[0.2em] mb-1 opacity-50" style={{ color: 'var(--text-muted)' }}>{label}</h5>
                                        {href ? (
                                            <a href={href} className="text-lg md:text-xl font-bold transition-all hover:text-[var(--text-accent)] hover:translate-x-1 inline-block" style={{ color: 'var(--text-main)' }}>
                                                {text}
                                            </a>
                                        ) : (
                                            <span className="text-lg md:text-xl font-bold" style={{ color: 'var(--text-main)' }}>
                                                {text}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4" id="contact-socials">
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
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all border bg-[var(--bg-secondary)] hover:scale-110 shadow-sm"
                                        style={{ borderColor: 'var(--border-main)', color: 'var(--text-main)' }}
                                        aria-label={social.label}
                                    >
                                        <Icon size={24} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT: Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6 p-10 md:p-12 rounded-[2.5rem] bg-[var(--bg-secondary)] border border-[var(--border-main)] shadow-xl fade-up"
                        ref={formRef}
                        id="contact-form"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2.5">
                                <label htmlFor="name" className="text-[0.6875rem] font-black uppercase tracking-widest pl-1 opacity-40 text-[var(--text-muted)]">Full Name</label>
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
                            <div className="flex flex-col gap-2.5">
                                <label htmlFor="email" className="text-[0.6875rem] font-black uppercase tracking-widest pl-1 opacity-40 text-[var(--text-muted)]">Email Address</label>
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

                        <div className="flex flex-col gap-2.5">
                            <label htmlFor="subject" className="text-[0.6875rem] font-black uppercase tracking-widest pl-1 opacity-40 text-[var(--text-muted)]">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                className="ui-input"
                                placeholder="Business Inquiry/Project"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2.5">
                            <label htmlFor="message" className="text-[0.6875rem] font-black uppercase tracking-widest pl-1 opacity-40 text-[var(--text-muted)]">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                className="ui-input min-h-[160px]"
                                placeholder="What can I help you with?"
                                style={{ resize: 'vertical' }}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="ui-btn-primary w-full justify-center h-14 rounded-2xl text-lg mt-4 shadow-xl"
                            disabled={status === 'sending'}
                            id="contact-submit-btn"
                        >
                            {status === 'sending' ? (
                                <span className="animate-spin w-6 h-6 border-4 border-white/30 border-t-white rounded-full" />
                            ) : status === 'sent' ? (
                                <><FiCheck size={20} /> Message Sent!</>
                            ) : status === 'error' ? (
                                <><FiAlertCircle size={20} /> Error Occurred</>
                            ) : (
                                <><FiSend size={18} /> Send Message</>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
