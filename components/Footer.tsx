import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3 className={`${styles.footerLogo} text-3d-metallic`} style={{
                            fontSize: '2rem',
                            fontWeight: '700',
                            letterSpacing: '0.1em',
                            marginBottom: 'var(--space-4)',
                            position: 'relative',
                            display: 'inline-block'
                        }}>
                            Nexyrra
                            <span style={{
                                position: 'absolute',
                                inset: '-8px',
                                background: 'radial-gradient(circle, rgba(0,242,255,0.4), rgba(139,92,246,0.4), rgba(255,0,229,0.4))',
                                filter: 'blur(20px)',
                                zIndex: -1,
                                borderRadius: '12px',
                                opacity: 0.8,
                                animation: 'energyPulse 4s ease-in-out infinite'
                            }}></span>
                        </h3>
                        <p className={styles.footerTagline}>
                            Intelligent Systems for Enterprise Operations
                        </p>
                        <p className={styles.footerDescription}>
                            Strategic AI systems company architecting the next generation of enterprise intelligence.
                        </p>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerTitle}>Services</h4>
                        <ul className={styles.footerLinks}>
                            <li><Link href="/services/ai-systems-architecture">AI Systems Architecture</Link></li>
                            <li><Link href="/services/intelligent-automation">Intelligent Automation</Link></li>
                            <li><Link href="/services/ai-powered-applications">AI-Powered Applications</Link></li>
                            <li><Link href="/services/enterprise-ai-integration">Enterprise AI Integration</Link></li>
                            <li><Link href="/services/conversational-ai">Conversational AI</Link></li>
                            <li><Link href="/services/ai-strategy-advisory">AI Strategy & Advisory</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerTitle}>Industries</h4>
                        <ul className={styles.footerLinks}>
                            <li><Link href="/industries/real-estate">Real Estate</Link></li>
                            <li><Link href="/industries/healthcare">Healthcare</Link></li>
                            <li><Link href="/industries/financial-services">Financial Services</Link></li>
                            <li><Link href="/industries/ecommerce">E-commerce</Link></li>
                            <li><Link href="/industries/manufacturing">Manufacturing</Link></li>
                            <li><Link href="/industries/professional-services">Professional Services</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerTitle}>Company</h4>
                        <ul className={styles.footerLinks}>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/insights">Insights</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Nexyrra AI. All rights reserved.
                    </p>
                    <div className={styles.footerBottomLinks}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
