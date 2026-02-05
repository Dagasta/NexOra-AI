'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from './Header.module.css'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <div className={styles.headerContent}>
                    <Link href="/" className={`${styles.logo} text-3d-metallic`} style={{
                        fontSize: '1.8rem',
                        fontWeight: '700',
                        letterSpacing: '0.1em',
                        textDecoration: 'none',
                        position: 'relative',
                        display: 'inline-block'
                    }}>
                        Nexyrra
                        <span style={{
                            position: 'absolute',
                            inset: '-4px',
                            background: 'linear-gradient(45deg, rgba(0, 242, 255, 0.4), rgba(139, 92, 246, 0.4), rgba(255, 0, 229, 0.4))',
                            filter: 'blur(15px)',
                            zIndex: -1,
                            borderRadius: '8px',
                            opacity: 0.8,
                            animation: 'glowEdgeRotate 4s linear infinite'
                        }}></span>
                    </Link>

                    <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
                        <div className={styles.navGroup}>
                            <Link href="/services" className={styles.navLink}>Services</Link>
                            <Link href="/industries" className={styles.navLink}>Industries</Link>
                            <Link href="/solutions" className={styles.navLink}>Solutions</Link>
                            <Link href="/insights" className={styles.navLink}>Insights</Link>
                            <Link href="/about" className={styles.navLink}>About</Link>
                        </div>
                        <Link href="/contact" className="btn btn-primary">
                            Schedule Consultation
                        </Link>
                    </nav>

                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}
