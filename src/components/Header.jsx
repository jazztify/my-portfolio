import { NAV_LINKS } from '../data';
import { useScrollSpy } from '../hooks';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ isDark, toggleDark }) {
    const sectionIds = NAV_LINKS.map(l => l.id);
    const activeId = useScrollSpy(sectionIds);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="header-fixed">
            <div className="main-container h-full flex items-center justify-between">

                {/* Logo */}
                <div className="flex-1 flex justify-start">
                    <a
                        href="#objective"
                        className="text-lg font-bold tracking-tight transition-all hover:opacity-70"
                        style={{ color: 'var(--text-accent)' }}
                    >
                        JDM.
                    </a>
                </div>

                {/* Center Nav */}
                <nav className="hidden md:flex items-center justify-center gap-0.5 flex-none">
                    {NAV_LINKS.map(link => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`nav-link ${activeId === link.id ? 'active' : ''}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Right */}
                <div className="flex-1 flex justify-end items-center gap-3">
                    <button
                        className="toggle-switch"
                        onClick={toggleDark}
                        aria-label="Toggle dark mode"
                    >
                        <div className={`toggle-knob ${isDark ? 'active' : ''}`}>
                            {isDark ? (
                                <FiMoon size={10} color="#fff" />
                            ) : (
                                <FiSun size={10} color="#fff" />
                            )}
                        </div>
                    </button>

                    <button
                        className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--border-main)] bg-[var(--bg-card)] text-[var(--text-main)] transition-colors hover:bg-[var(--bg-secondary)]"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden border-t border-[var(--border-main)] bg-[var(--bg-card)] px-6 py-4 flex flex-col gap-1 shadow-lg"
                    >
                        {NAV_LINKS.map(link => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={() => setMobileOpen(false)}
                                className="py-2.5 px-4 rounded-lg text-sm font-medium text-center transition-all"
                                style={{
                                    color: activeId === link.id ? 'var(--text-accent)' : 'var(--text-muted)',
                                    background: activeId === link.id ? 'var(--bg-secondary)' : 'transparent',
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
