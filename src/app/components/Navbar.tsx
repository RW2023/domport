// File: src/app/components/Navbar.tsx

'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
        label: 'Portfolio',
        submenu: [
            { label: 'Credits', href: '/credits' },
            { label: 'Gallery', href: '/gallery' },
        ],
    },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const pathname = usePathname();
    const navRef = useRef<HTMLDivElement>(null);

    // Close submenu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setOpenMenu(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="sticky top-0 z-40 w-full bg-[var(--background)] border-b border-[var(--color-cambridge)] shadow-sm">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
                <Link href="/" className="text-xl font-bold tracking-tight text-[var(--foreground)]">
                    Dominic<span className="text-[var(--color-primary)]">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav ref={navRef} className="hidden md:flex gap-6 items-center relative">
                    {navLinks.map((link) =>
                        link.submenu ? (
                            <div key={link.label} className="relative">
                                <button
                                    onClick={() => setOpenMenu((prev) => (prev === link.label ? null : link.label))}
                                    className={clsx(
                                        'flex items-center gap-1 font-medium text-[var(--foreground)] hover:text-[var(--color-primary)] transition-colors',
                                        openMenu === link.label && 'text-[var(--color-primary)]'
                                    )}
                                >
                                    {link.label} <ChevronDown size={16} className={clsx(openMenu === link.label && 'rotate-180')} />
                                </button>
                                <AnimatePresence>
                                    {openMenu === link.label && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className="absolute left-0 top-full bg-[var(--background)] border border-[var(--color-sage)] rounded-md shadow-lg p-2 flex flex-col min-w-[160px] z-50"
                                        >
                                            {link.submenu.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className={clsx(
                                                        'px-4 py-2 rounded hover:bg-[var(--color-cambridge)] hover:text-white transition-colors',
                                                        pathname === item.href && 'text-[var(--color-primary)] font-semibold'
                                                    )}
                                                    onClick={() => setOpenMenu(null)}
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={clsx(
                                    'font-medium text-[var(--foreground)] hover:text-[var(--color-primary)] transition-colors',
                                    pathname === link.href && 'text-[var(--color-primary)] font-semibold'
                                )}
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </nav>

                {/* Mobile Nav Toggle */}
                <button
                    onClick={() => setMobileOpen((prev) => !prev)}
                    className="md:hidden p-2 text-[var(--foreground)]"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.nav
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden md:hidden bg-[var(--background)] border-t border-[var(--color-cambridge)]"
                    >
                        <div className="flex flex-col px-4 py-2">
                            {navLinks.map((link) =>
                                link.submenu ? (
                                    <details key={link.label} className="mb-1">
                                        <summary className="cursor-pointer py-2 font-medium text-[var(--foreground)]">
                                            {link.label}
                                        </summary>
                                        <div className="ml-4 flex flex-col gap-1">
                                            {link.submenu.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className={clsx(
                                                        'py-1 px-2 rounded hover:bg-[var(--color-cambridge)] hover:text-white transition-colors',
                                                        pathname === item.href && 'text-[var(--color-primary)] font-semibold'
                                                    )}
                                                    onClick={() => setMobileOpen(false)}
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </details>
                                ) : (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={clsx(
                                            'py-2 font-medium text-[var(--foreground)] hover:text-[var(--color-primary)] transition-colors',
                                            pathname === link.href && 'text-[var(--color-primary)] font-semibold'
                                        )}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
