import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Contact Nexyrra | Schedule AI Consultation | Enterprise AI Solutions',
    description: 'Get in touch with Nexyrra to discuss your AI transformation needs. Schedule a consultation with our AI systems experts.',
    keywords: 'contact Nexyrra, AI consultation, enterprise AI contact, schedule meeting',
}

export default function Contact() {
    return (
        <div style={{ paddingTop: '80px' }}>
            <section className="cinematic-container" style={{
                background: 'linear-gradient(135deg, var(--color-void-black) 0%, var(--color-deep-space) 100%)',
                padding: 'var(--space-12) 0 var(--space-8)',
                borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
                position: 'relative'
            }}>
                <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
                    <h1>Let's Build Intelligence Together</h1>
                    <p style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-platinum-silver)', maxWidth: '700px', margin: '0 auto' }}>
                        Schedule a consultation to discuss how AI systems can transform your operations
                    </p>
                </div>
                <div className="cinematic-background">
                    <div className="lens-flare-small" style={{ top: '30%', right: '20%' }}></div>
                    <div className="star-burst" style={{ top: '50%', left: '15%' }}></div>
                    <div className="energy-wave" style={{ top: '40%' }}></div>
                    <div className="light-ray" style={{ left: '50%' }}></div>
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="cinematic-particle"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                '--tx': `${(Math.random() - 0.5) * 80}px`,
                                '--ty': `${(Math.random() - 0.5) * 80}px`,
                                animationDelay: `${Math.random() * 5}s`
                            } as React.CSSProperties}
                        ></div>
                    ))}
                </div>
            </section>

            <section className="section cinematic-container">
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="chrome-surface glow-edge" style={{ maxWidth: '600px', margin: '0 auto', padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)' }}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                            <div>
                                <label htmlFor="name" style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 'var(--font-weight-medium)' }}>
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: 'var(--space-3)',
                                        background: 'rgba(139, 92, 246, 0.05)',
                                        border: '1px solid rgba(139, 92, 246, 0.3)',
                                        borderRadius: 'var(--radius-md)',
                                        color: 'var(--color-pure-white)',
                                        fontSize: 'var(--font-size-base)'
                                    }}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 'var(--font-weight-medium)' }}>
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: 'var(--space-3)',
                                        background: 'rgba(139, 92, 246, 0.05)',
                                        border: '1px solid rgba(139, 92, 246, 0.3)',
                                        borderRadius: 'var(--radius-md)',
                                        color: 'var(--color-pure-white)',
                                        fontSize: 'var(--font-size-base)'
                                    }}
                                />
                            </div>

                            <div>
                                <label htmlFor="company" style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 'var(--font-weight-medium)' }}>
                                    Company Name *
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: 'var(--space-3)',
                                        background: 'rgba(139, 92, 246, 0.05)',
                                        border: '1px solid rgba(139, 92, 246, 0.3)',
                                        borderRadius: 'var(--radius-md)',
                                        color: 'var(--color-pure-white)',
                                        fontSize: 'var(--font-size-base)'
                                    }}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" style={{ display: 'block', marginBottom: 'var(--space-2)', fontWeight: 'var(--font-weight-medium)' }}>
                                    Tell us about your AI needs *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: 'var(--space-3)',
                                        background: 'rgba(139, 92, 246, 0.05)',
                                        border: '1px solid rgba(139, 92, 246, 0.3)',
                                        borderRadius: 'var(--radius-md)',
                                        color: 'var(--color-pure-white)',
                                        fontSize: 'var(--font-size-base)',
                                        fontFamily: 'inherit',
                                        resize: 'vertical'
                                    }}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary energy-pulse" style={{ width: '100%' }}>
                                Schedule Consultation
                            </button>
                        </form>

                        <div style={{ marginTop: 'var(--space-8)', textAlign: 'center' }}>
                            <p style={{ color: 'var(--color-neutral-slate)', marginBottom: 'var(--space-3)' }}>
                                Or reach us directly:
                            </p>
                            <p style={{ fontSize: 'var(--font-size-lg)' }}>
                                <a href="mailto:contact@Nexyrra.com" className="neon-text" style={{ color: 'var(--color-electric-plasma)' }}>
                                    contact@Nexyrra.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="cinematic-background">
                    <div className="bokeh" style={{ top: '30%', left: '15%', '--bx': '60px', '--by': '50px' } as React.CSSProperties}></div>
                    <div className="bokeh" style={{ bottom: '20%', right: '20%', '--bx': '-50px', '--by': '40px' } as React.CSSProperties}></div>
                    <div className="energy-wave" style={{ top: '50%' }}></div>
                    <div className="motion-blur-line" style={{ top: '70%' }}></div>
                </div>
            </section>
        </div>
    )
}
