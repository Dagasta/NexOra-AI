import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
    return (
        <>
            {/* Hero Section with Immersive AI Elements */}
            <section className={`${styles.hero} cinematic-container`}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <div className="reveal-on-scroll">
                            <h1 className={`${styles.heroTitle} text-3d-metallic`}>
                                NEXYRA<br />
                                <span className={styles.heroSubtitle}>Architecting Systematic Intelligence</span>
                            </h1>
                        </div>
                        <p className={styles.heroDescription}>
                            We design and deploy industrial-grade AI infrastructure that redefines operational excellence.
                            Beyond tools. Beyond features. We build the future of autonomous enterprise systems.
                        </p>
                        <div className={styles.heroCtas}>
                            <Link href="/contact" className="btn btn-primary energy-pulse">
                                Architect Your AI Future
                            </Link>
                            <Link href="/services" className="btn btn-secondary glow-edge">
                                Explore Our Ecosystem
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Hyper-Digital Background Effects */}
                <div className={`${styles.heroBackground} cinematic-background`}>
                    <div className="ai-neural-bg"></div>
                    <div className="ai-grid-pattern"></div>

                    {/* Immersive Light Elements */}
                    <div className="lens-flare" style={{ top: '10%', right: '5%' }}></div>
                    <div className="lens-flare-small" style={{ bottom: '20%', left: '10%' }}></div>

                    <div className="light-ray" style={{ left: '15%', animationDuration: '12s' }}></div>
                    <div className="light-ray" style={{ left: '45%', animationDuration: '15s', opacity: 0.3 }}></div>
                    <div className="light-ray" style={{ left: '75%', animationDuration: '10s' }}></div>

                    <div className="energy-wave" style={{ top: '25%', opacity: 0.4 }}></div>
                    <div className="energy-wave" style={{ top: '65%', opacity: 0.2 }}></div>

                    {/* Neural Particles */}
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="cinematic-particle"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                '--tx': `${(Math.random() - 0.5) * 300}px`,
                                '--ty': `${(Math.random() - 0.5) * 300}px`,
                                animationDelay: `${Math.random() * 8}s`,
                                width: `${Math.random() * 6 + 2}px`,
                                height: `${Math.random() * 6 + 2}px`,
                                opacity: Math.random() * 0.8 + 0.2
                            } as React.CSSProperties}
                        ></div>
                    ))}
                </div>
            </section>

            {/* Hyper-Digital Authority Bar */}
            <section className={styles.authorityBar}>
                <div className="container">
                    <div className={`${styles.authorityContent} data-stream`}>
                        <span>Enterprise AI Deployment</span>
                        <span className={styles.separator}>//</span>
                        <span>40% Operational Efficiency Gains</span>
                        <span className={styles.separator}>//</span>
                        <span>Mission-Critical Security</span>
                        <span className={styles.separator}>//</span>
                        <span>Quantum-Ready Infrastructure</span>
                    </div>
                </div>
            </section>

            {/* Services Ecosystem - Chrome Cards */}
            <section className="section cinematic-container" style={{ background: 'var(--color-void-black)' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="text-center" style={{ marginBottom: 'var(--space-16)' }}>
                        <h2 className="text-3d-metallic" style={{ fontSize: 'var(--font-size-5xl)' }}>
                            The NEXYRA Ecosystem
                        </h2>
                        <p className="glow-text" style={{ fontSize: 'var(--font-size-lg)', maxWidth: '800px', margin: '0 auto' }}>
                            Precision-engineered AI systems designed to solve the most complex enterprise challenges
                        </p>
                    </div>

                    <div className={styles.servicesGrid}>
                        <Link href="/services/ai-systems-architecture" className="card chrome-surface card-3d">
                            <div className={styles.serviceIcon}>💠</div>
                            <h3>Systems Architecture</h3>
                            <p>Designing high-performance AI infrastructure that scales with your global ambition.</p>
                            <span className={`${styles.serviceLink} neon-text`}>Initiate Protocol →</span>
                        </Link>

                        <Link href="/services/intelligent-automation" className="card chrome-surface card-3d">
                            <div className={styles.serviceIcon}>🌀</div>
                            <h3>Hyper-Automation</h3>
                            <p>Self-optimizing workflows that eliminate friction and maximize human potential.</p>
                            <span className={`${styles.serviceLink} neon-text`}>Initiate Protocol →</span>
                        </Link>

                        <Link href="/services/ai-powered-applications" className="card chrome-surface card-3d">
                            <div className={styles.serviceIcon}>🧬</div>
                            <h3>Neural Applications</h3>
                            <p>Intelligence-first software that evolves with user behavior in real-time.</p>
                            <span className={`${styles.serviceLink} neon-text`}>Initiate Protocol →</span>
                        </Link>

                        <Link href="/services/enterprise-ai-integration" className="card chrome-surface card-3d">
                            <div className={styles.serviceIcon}>🔗</div>
                            <h3>Nexus Integration</h3>
                            <p>Seamlessly fusing advanced AI with legacy architecture for unified intelligence.</p>
                            <span className={`${styles.serviceLink} neon-text`}>Initiate Protocol →</span>
                        </Link>

                        <Link href="/services/conversational-ai" className="card chrome-surface card-3d">
                            <div className={styles.serviceIcon}>📡</div>
                            <h3>Cognitive Agents</h3>
                            <p>Context-aware AI agents that deliver human-level interaction at global scale.</p>
                            <span className={`${styles.serviceLink} neon-text`}>Initiate Protocol →</span>
                        </Link>

                        <Link href="/services/ai-strategy-advisory" className="card chrome-surface card-3d">
                            <div className={styles.serviceIcon}>💎</div>
                            <h3>Strategic Advisory</h3>
                            <p>Navigating the AI frontier with data-driven roadmaps and ROI modeling.</p>
                            <span className={`${styles.serviceLink} neon-text`}>Initiate Protocol →</span>
                        </Link>
                    </div>
                </div>

                {/* Section Glows */}
                <div className="cinematic-background">
                    <div className="morphing-blob" style={{ top: '10%', right: '-10%', opacity: 0.05 }}></div>
                    <div className="morphing-blob" style={{ bottom: '-10%', left: '-10%', opacity: 0.05, background: 'var(--color-cosmic-rose)' }}></div>
                </div>
            </section>

            {/* Industry Vectors */}
            <section className={`${styles.industriesSection} cinematic-container`}>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="text-center" style={{ marginBottom: 'var(--space-16)' }}>
                        <h2 className="text-3d-metallic" style={{ fontSize: 'var(--font-size-5xl)' }}>
                            Industrial Vectors
                        </h2>
                    </div>

                    <div className={styles.industriesGrid}>
                        <Link href="/industries/real-estate" className="card holographic-enhanced glow-edge">
                            <h3 className="neon-text">Real Estate</h3>
                            <p>Transforming property asset management through predictive analytics.</p>
                            <span className="typing-effect" style={{ fontSize: '0.8rem', color: 'var(--color-platinum-silver)' }}>SYSTEM.DEPLOY()</span>
                        </Link>

                        <Link href="/industries/healthcare" className="card holographic-enhanced glow-edge">
                            <h3 className="neon-text">Healthcare</h3>
                            <p>Precision medical AI systems for patient-centric diagnostic outcomes.</p>
                            <span className="typing-effect" style={{ fontSize: '0.8rem', color: 'var(--color-platinum-silver)' }}>DATA.ENCRYPT()</span>
                        </Link>

                        <Link href="/industries/financial-services" className="card holographic-enhanced glow-edge">
                            <h3 className="neon-text">Finance</h3>
                            <p>Autonomous risk mitigation and hyper-efficient financial modeling.</p>
                            <span className="typing-effect" style={{ fontSize: '0.8rem', color: 'var(--color-platinum-silver)' }}>ALGO.INIT()</span>
                        </Link>

                        <Link href="/industries/ecommerce" className="card holographic-enhanced glow-edge">
                            <h3 className="neon-text">E-commerce</h3>
                            <p>Hyper-personalized consumer journeys powered by dynamic intent engines.</p>
                            <span className="typing-effect" style={{ fontSize: '0.8rem', color: 'var(--color-platinum-silver)' }}>UX.OPTIMIZE()</span>
                        </Link>

                        <Link href="/industries/manufacturing" className="card holographic-enhanced glow-edge">
                            <h3 className="neon-text">Manufacturing</h3>
                            <p>Next-generation smart factories with self-healing production lines.</p>
                            <span className="typing-effect" style={{ fontSize: '0.8rem', color: 'var(--color-platinum-silver)' }}>IOT.SYNC()</span>
                        </Link>

                        <Link href="/industries/professional-services" className="card holographic-enhanced glow-edge">
                            <h3 className="neon-text">Professional</h3>
                            <p>Knowledge-as-a-Service architecture for elite specialized expertise.</p>
                            <span className="typing-effect" style={{ fontSize: '0.8rem', color: 'var(--color-platinum-silver)' }}>NODE.CONNECT()</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final Transmission */}
            <section className={`${styles.finalCta} cinematic-container`}>
                <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="reveal-on-scroll">
                        <h2 className="text-3d-metallic" style={{ fontSize: 'clamp(2.5rem, 8vw, var(--font-size-6xl))', marginBottom: 'var(--space-6)' }}>
                            READY TO QUANTUM LEAP?
                        </h2>
                    </div>
                    <p className="glow-text" style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-12)', maxWidth: '700px', margin: '0 auto var(--space-12)' }}>
                        Join the elite organizations architecting their future with NEXYRA.
                    </p>
                    <Link href="/contact" className="btn btn-primary energy-pulse" style={{ fontSize: 'var(--font-size-xl)', padding: 'var(--space-6) var(--space-12)' }}>
                        Establish Connection
                    </Link>
                </div>

                <div className="cinematic-background">
                    <div className="star-burst" style={{ top: '50%', left: '50%' }}></div>
                    <div className="energy-wave" style={{ bottom: '0' }}></div>
                </div>
            </section>
        </>
    )
}
