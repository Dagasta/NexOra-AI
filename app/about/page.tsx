import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'About Nexyra | Enterprise AI Systems Company',
    description: 'Nexyra architects intelligent systems for enterprise operations. Learn about our approach to AI transformation and strategic AI partnership.',
    keywords: 'about Nexyra, AI company, enterprise AI, AI systems company',
}

export default function About() {
    return (
        <div style={{ paddingTop: '80px' }}>
            <section className="cinematic-container" style={{
                background: 'linear-gradient(135deg, var(--color-void-black) 0%, var(--color-deep-space) 100%)',
                padding: 'var(--space-12) 0 var(--space-8)',
                borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
                position: 'relative'
            }}>
                <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
                    <h1>About Nexyra</h1>
                    <p style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-platinum-silver)', maxWidth: '700px', margin: '0 auto' }}>
                        Next Aura — The Next Presence of Intelligence
                    </p>
                </div>
                <div className="cinematic-background">
                    <div className="lens-flare" style={{ top: '30%', left: '20%' }}></div>
                    <div className="star-burst" style={{ top: '20%', right: '15%' }}></div>
                    <div className="energy-wave" style={{ top: '50%' }}></div>
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={i}
                            className="cinematic-particle"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                '--tx': `${(Math.random() - 0.5) * 100}px`,
                                '--ty': `${(Math.random() - 0.5) * 100}px`,
                                animationDelay: `${Math.random() * 5}s`
                            } as React.CSSProperties}
                        ></div>
                    ))}
                </div>
            </section>

            <section className="section cinematic-container">
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h2 className="text-3d-metallic" style={{ fontSize: 'var(--font-size-2xl)' }}>Our Mission</h2>
                        <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: '1.8' }}>
                            Nexyra exists to architect the next generation of enterprise intelligence. We transform how organizations operate by building AI systems that don't just automate tasks—they understand context, make decisions, and continuously optimize for better outcomes.
                        </p>

                        <h2 className="text-3d-metallic" style={{ marginTop: 'var(--space-10)', fontSize: 'var(--font-size-2xl)' }}>Our Approach</h2>
                        <p>
                            We are not an AI agency. We are a strategic AI systems company. The difference matters.
                        </p>
                        <p>
                            Agencies deploy tools. We engineer outcomes. While others focus on features and demos, we focus on systematic intelligence—AI infrastructure where agents, workflows, data, and integrations work together as a unified layer.
                        </p>

                        <div className="grid grid-3" style={{ margin: 'var(--space-8) 0' }}>
                            <div className="card chrome-surface glow-edge">
                                <h3>Systems-First</h3>
                                <p>We build interconnected AI infrastructure, not isolated tools. Every component is designed to work together.</p>
                            </div>
                            <div className="card chrome-surface glow-edge">
                                <h3>Outcome-Driven</h3>
                                <p>Success is measured by business impact—cost reduction, revenue growth, operational efficiency—not feature counts.</p>
                            </div>
                            <div className="card chrome-surface glow-edge">
                                <h3>Enterprise-Grade</h3>
                                <p>Built for scale, security, and mission-critical operations. Our systems are designed for production from day one.</p>
                            </div>
                        </div>

                        <h2 className="text-3d-metallic" style={{ marginTop: 'var(--space-10)', fontSize: 'var(--font-size-2xl)' }}>Why Nexyra</h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li className="holographic-enhanced" style={{ padding: 'var(--space-4)', marginBottom: 'var(--space-3)', borderLeft: '3px solid var(--color-hyper-neon-purple)', borderRadius: 'var(--radius-sm)' }}>
                                <strong style={{ color: 'var(--color-electric-plasma)' }}>Deep Technical Expertise:</strong> Our team combines AI research, enterprise architecture, and industry-specific knowledge.
                            </li>
                            <li className="holographic-enhanced" style={{ padding: 'var(--space-4)', marginBottom: 'var(--space-3)', borderLeft: '3px solid var(--color-hyper-neon-purple)', borderRadius: 'var(--radius-sm)' }}>
                                <strong style={{ color: 'var(--color-electric-plasma)' }}>Strategic Partnership:</strong> We're not vendors. We're long-term partners invested in your AI transformation success.
                            </li>
                            <li className="holographic-enhanced" style={{ padding: 'var(--space-4)', marginBottom: 'var(--space-3)', borderLeft: '3px solid var(--color-hyper-neon-purple)', borderRadius: 'var(--radius-sm)' }}>
                                <strong style={{ color: 'var(--color-electric-plasma)' }}>Proven Results:</strong> 40% average operational cost reduction. 3.2x ROI within first year. 99.9% system uptime.
                            </li>
                            <li className="holographic-enhanced" style={{ padding: 'var(--space-4)', marginBottom: 'var(--space-3)', borderLeft: '3px solid var(--color-hyper-neon-purple)', borderRadius: 'var(--radius-sm)' }}>
                                <strong style={{ color: 'var(--color-electric-plasma)' }}>Industry Expertise:</strong> Specialized knowledge in financial services, healthcare, real estate, e-commerce, manufacturing, and professional services.
                            </li>
                        </ul>

                        <div className="chrome-surface energy-pulse" style={{ marginTop: 'var(--space-12)', textAlign: 'center', padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)' }}>
                            <h2>Ready to Transform Your Operations?</h2>
                            <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-6)' }}>
                                Let's discuss how AI systems can drive measurable business outcomes
                            </p>
                            <Link href="/contact" className="btn btn-primary">
                                Schedule Consultation
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="cinematic-background">
                    <div className="bokeh" style={{ top: '20%', left: '10%', '--bx': '50px', '--by': '40px' } as React.CSSProperties}></div>
                    <div className="light-ray" style={{ left: '70%' }}></div>
                    <div className="energy-wave" style={{ top: '60%' }}></div>
                </div>
            </section>
        </div>
    )
}
