import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../service.module.css'

export const metadata: Metadata = {
    title: 'AI Systems Architecture Services | Custom AI Infrastructure | Nexyrra',
    description: 'Design and build scalable AI infrastructure for enterprise operations. Custom AI systems architecture, multi-agent orchestration, and MLOps implementation.',
    keywords: 'AI systems architecture, custom AI infrastructure, enterprise AI development, MLOps, AI orchestration',
}

export default function AISystemsArchitecture() {
    return (
        <div className={styles.servicePage}>
            <section className={`${styles.serviceHero} cinematic-container`}>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link> / <Link href="/services">Services</Link> / AI Systems Architecture
                    </nav>
                    <h1>AI Systems Architecture</h1>
                    <p className={styles.serviceSubtitle}>
                        Scalable Intelligence Infrastructure for Enterprise Operations
                    </p>
                </div>
                <div className="cinematic-background">
                    <div className="lens-flare-small" style={{ top: '20%', right: '15%' }}></div>
                    <div className="energy-wave" style={{ top: '40%' }}></div>
                    <div className="light-ray" style={{ left: '30%' }}></div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.serviceContent}>
                        <h2>Overview</h2>
                        <p>
                            AI systems architecture is the foundation of successful enterprise AI transformation. Nexyrra designs and builds custom AI infrastructure that scales with your operations, integrates seamlessly with existing systems, and delivers measurable business outcomes.
                        </p>
                        <p>
                            We don't deploy isolated AI tools. We architect interconnected intelligence layers where agents, workflows, data, and integrations work together as a unified system.
                        </p>

                        <h2>Capabilities</h2>

                        <h3>Custom AI Infrastructure Design</h3>
                        <p>
                            Every organization has unique requirements. We design AI infrastructure tailored to your specific operational needs, data architecture, security requirements, and scalability goals. Our approach ensures your AI systems grow with your business.
                        </p>

                        <h3>Multi-Agent Orchestration Systems</h3>
                        <p>
                            Modern AI solutions require multiple specialized agents working in concert. We build orchestration systems that coordinate AI agents across different functions—from customer service to data analysis to process automation—creating a cohesive intelligence layer.
                        </p>

                        <h3>Scalable AI Operations (MLOps/LLMOps)</h3>
                        <p>
                            Production AI requires robust operations infrastructure. We implement MLOps and LLMOps frameworks that ensure reliable model deployment, continuous monitoring, automated retraining, and performance optimization at scale.
                        </p>

                        <h3>AI Governance and Compliance Frameworks</h3>
                        <p>
                            Enterprise AI must be trustworthy, explainable, and compliant. We establish governance frameworks that ensure AI decisions are auditable, bias is monitored and mitigated, and regulatory requirements are met.
                        </p>

                        <h2>Use Cases</h2>
                        <div className={styles.useCases}>
                            <div className="card">
                                <h4>Financial Services</h4>
                                <p>Multi-agent systems for fraud detection, risk assessment, and customer service with full audit trails and regulatory compliance.</p>
                            </div>
                            <div className="card">
                                <h4>Healthcare</h4>
                                <p>HIPAA-compliant AI infrastructure for patient data analysis, diagnostic support, and operational optimization.</p>
                            </div>
                            <div className="card">
                                <h4>Manufacturing</h4>
                                <p>Predictive maintenance systems with real-time sensor data processing and automated quality control.</p>
                            </div>
                        </div>

                        <h2>Outcomes</h2>
                        <ul className={styles.outcomesList}>
                            <li><strong>40% reduction</strong> in operational costs through intelligent automation</li>
                            <li><strong>3x faster</strong> decision-making with real-time AI insights</li>
                            <li><strong>99.9% uptime</strong> for mission-critical AI systems</li>
                            <li><strong>Full compliance</strong> with industry regulations and data governance requirements</li>
                        </ul>

                        <h2>Our Process</h2>
                        <div className={styles.process}>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>1</div>
                                <h4>Discovery & Assessment</h4>
                                <p>We analyze your current infrastructure, identify AI opportunities, and define success metrics.</p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>2</div>
                                <h4>Architecture Design</h4>
                                <p>Custom AI infrastructure blueprint aligned with your business objectives and technical requirements.</p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>3</div>
                                <h4>Implementation</h4>
                                <p>Phased deployment with continuous testing, validation, and stakeholder feedback.</p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>4</div>
                                <h4>Optimization & Scale</h4>
                                <p>Ongoing monitoring, performance tuning, and expansion as your needs evolve.</p>
                            </div>
                        </div>

                        <h2>Related Services</h2>
                        <div className={styles.relatedServices}>
                            <Link href="/services/intelligent-automation" className="card">
                                <h4>Intelligent Automation</h4>
                                <p>Automate complex business processes with AI-powered workflows</p>
                            </Link>
                            <Link href="/services/enterprise-ai-integration" className="card">
                                <h4>Enterprise AI Integration</h4>
                                <p>Connect AI systems with your existing CRM, ERP, and tools</p>
                            </Link>
                            <Link href="/services/ai-strategy-advisory" className="card">
                                <h4>AI Strategy & Advisory</h4>
                                <p>Strategic planning and roadmap development for AI transformation</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.serviceCta}>
                <div className="container text-center">
                    <h2>Ready to Build Scalable AI Infrastructure?</h2>
                    <p>Let's discuss your AI systems architecture needs</p>
                    <Link href="/contact" className="btn btn-primary">Schedule Consultation</Link>
                </div>
            </section>
        </div>
    )
}
