import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../service.module.css'

export const metadata: Metadata = {
    title: 'AI-Powered Applications | Custom AI Web & Mobile Apps | Nexyrra',
    description: 'Build custom AI-powered web and mobile applications with embedded intelligence. Enterprise-grade AI apps for iOS, Android, and web platforms.',
    keywords: 'AI applications, AI-powered apps, custom AI development, intelligent mobile apps, AI web applications',
}

export default function AIPoweredApplications() {
    return (
        <div className={styles.servicePage}>
            <section className={styles.serviceHero}>
                <div className="container">
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link> / <Link href="/services">Services</Link> / AI-Powered Applications
                    </nav>
                    <h1>AI-Powered Applications</h1>
                    <p className={styles.serviceSubtitle}>
                        Custom Web and Mobile Applications with Embedded Intelligence
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.serviceContent}>
                        <h2>Overview</h2>
                        <p>
                            AI-powered applications go beyond traditional software. Nexyrra builds custom web and mobile applications where AI is not an add-on—it's the foundation. From intelligent user interfaces to predictive analytics, our applications deliver experiences that adapt, learn, and optimize.
                        </p>

                        <h2>Capabilities</h2>

                        <h3>Intelligent Web Applications</h3>
                        <p>
                            Custom web platforms with embedded AI for personalization, recommendations, search, and decision support. Built with modern frameworks, optimized for performance and scalability.
                        </p>

                        <h3>AI-Enhanced Mobile Apps</h3>
                        <p>
                            Native iOS and Android applications with on-device AI, real-time intelligence, and seamless cloud integration. Offline-capable AI for critical use cases.
                        </p>

                        <h3>Predictive Analytics Dashboards</h3>
                        <p>
                            Real-time dashboards that don't just show data—they predict trends, identify anomalies, and recommend actions. Executive-level insights powered by AI.
                        </p>

                        <h3>Conversational Interfaces</h3>
                        <p>
                            AI-powered chat, voice, and natural language interfaces that understand intent, maintain context, and deliver personalized experiences across channels.
                        </p>

                        <h2>Use Cases</h2>
                        <div className={styles.useCases}>
                            <div className="card holographic-card">
                                <h4>Customer Portals</h4>
                                <p>Self-service platforms with AI-powered search, recommendations, and intelligent support that reduce support costs by 60%.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>Field Service Apps</h4>
                                <p>Mobile applications with AI-powered scheduling, route optimization, and predictive maintenance for field teams.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>Analytics Platforms</h4>
                                <p>Business intelligence dashboards with AI-driven insights, anomaly detection, and automated reporting.</p>
                            </div>
                        </div>

                        <h2>Outcomes</h2>
                        <ul className={styles.outcomesList}>
                            <li><strong>50% increase</strong> in user engagement through personalized AI experiences</li>
                            <li><strong>70% reduction</strong> in support tickets with intelligent self-service</li>
                            <li><strong>3x faster</strong> decision-making with predictive analytics</li>
                            <li><strong>Enterprise-grade</strong> security, scalability, and performance</li>
                        </ul>

                        <h2>Technology Stack</h2>
                        <p>
                            We build with modern, proven technologies: React, Next.js, React Native, Flutter for frontends. Python, Node.js, Go for backends. TensorFlow, PyTorch for AI models. Cloud-native architecture on AWS, Azure, or GCP.
                        </p>

                        <h2>Related Services</h2>
                        <div className={styles.relatedServices}>
                            <Link href="/services/ai-systems-architecture" className="card holographic-card">
                                <h4>AI Systems Architecture</h4>
                                <p>Build the infrastructure foundation for your AI applications</p>
                            </Link>
                            <Link href="/services/conversational-ai" className="card holographic-card">
                                <h4>Conversational AI</h4>
                                <p>Add intelligent chat and voice interfaces to your applications</p>
                            </Link>
                            <Link href="/services/enterprise-ai-integration" className="card holographic-card">
                                <h4>Enterprise Integration</h4>
                                <p>Connect your AI apps with existing enterprise systems</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.serviceCta}>
                <div className="container text-center">
                    <h2>Ready to Build Intelligent Applications?</h2>
                    <p>Let's discuss your AI application needs</p>
                    <Link href="/contact" className="btn btn-primary pulse-glow">Schedule Consultation</Link>
                </div>
            </section>
        </div>
    )
}
