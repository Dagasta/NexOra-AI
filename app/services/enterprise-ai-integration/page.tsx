import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../service.module.css'

export const metadata: Metadata = {
    title: 'Enterprise AI Integration Services | CRM, ERP AI Augmentation | Nexyrra',
    description: 'Seamlessly integrate AI with existing CRM, ERP, and legacy systems. Enterprise AI integration for Salesforce, SAP, Oracle, and custom platforms.',
    keywords: 'enterprise AI integration, CRM AI, ERP AI, legacy system modernization, AI middleware, system integration',
}

export default function EnterpriseAIIntegration() {
    return (
        <div className={styles.servicePage}>
            <section className={styles.serviceHero}>
                <div className="container">
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link> / <Link href="/services">Services</Link> / Enterprise AI Integration
                    </nav>
                    <h1>Enterprise AI Integration</h1>
                    <p className={styles.serviceSubtitle}>
                        Seamless AI Augmentation for Existing CRM, ERP, and Legacy Systems
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.serviceContent}>
                        <h2>Overview</h2>
                        <p>
                            Your existing systems hold valuable data and processes. Nexyrra integrates AI capabilities into your current CRM, ERP, and legacy platforms—enhancing them with intelligence without disrupting operations or requiring complete replacement.
                        </p>

                        <h2>Capabilities</h2>

                        <h3>CRM AI Augmentation</h3>
                        <p>
                            Add AI-powered lead scoring, customer insights, churn prediction, and intelligent recommendations to Salesforce, HubSpot, Microsoft Dynamics, or custom CRMs.
                        </p>

                        <h3>ERP Intelligence Layer</h3>
                        <p>
                            Enhance SAP, Oracle, NetSuite with predictive inventory management, demand forecasting, automated procurement, and intelligent resource allocation.
                        </p>

                        <h3>Legacy System Modernization</h3>
                        <p>
                            Wrap legacy systems with AI middleware that adds modern capabilities—natural language interfaces, intelligent data extraction, automated workflows—without rewriting core systems.
                        </p>

                        <h3>API Orchestration</h3>
                        <p>
                            Build intelligent API layers that connect disparate systems, transform data formats, route requests intelligently, and provide unified access to enterprise data.
                        </p>

                        <h2>Integration Platforms</h2>
                        <div className={styles.useCases}>
                            <div className="card holographic-card">
                                <h4>Salesforce & CRMs</h4>
                                <p>AI-powered sales intelligence, customer 360 views, and predictive analytics integrated directly into your CRM workflows.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>SAP & ERPs</h4>
                                <p>Intelligent supply chain optimization, financial forecasting, and automated business processes within your ERP.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>Custom Systems</h4>
                                <p>API-based integration with proprietary platforms, databases, and legacy applications using modern middleware.</p>
                            </div>
                        </div>

                        <h2>Outcomes</h2>
                        <ul className={styles.outcomesList}>
                            <li><strong>Zero disruption</strong> to existing operations during AI integration</li>
                            <li><strong>30% increase</strong> in system utilization through intelligent automation</li>
                            <li><strong>50% faster</strong> data processing with AI-powered ETL and transformation</li>
                            <li><strong>Full compatibility</strong> with existing security, compliance, and governance frameworks</li>
                        </ul>

                        <h2>Integration Approach</h2>
                        <div className={styles.process}>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>1</div>
                                <h4>System Assessment</h4>
                                <p>Analyze current architecture, data flows, and integration points.</p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>2</div>
                                <h4>AI Layer Design</h4>
                                <p>Design intelligent middleware that enhances without replacing existing systems.</p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>3</div>
                                <h4>Phased Integration</h4>
                                <p>Deploy AI capabilities incrementally with continuous validation and testing.</p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>4</div>
                                <h4>Optimization</h4>
                                <p>Monitor performance, optimize data flows, and expand AI capabilities.</p>
                            </div>
                        </div>

                        <h2>Related Services</h2>
                        <div className={styles.relatedServices}>
                            <Link href="/services/ai-systems-architecture" className="card holographic-card">
                                <h4>AI Systems Architecture</h4>
                                <p>Design scalable integration architecture for enterprise AI</p>
                            </Link>
                            <Link href="/services/intelligent-automation" className="card holographic-card">
                                <h4>Intelligent Automation</h4>
                                <p>Automate workflows across integrated systems</p>
                            </Link>
                            <Link href="/services/ai-powered-applications" className="card holographic-card">
                                <h4>AI-Powered Applications</h4>
                                <p>Build custom applications that integrate with your systems</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.serviceCta}>
                <div className="container text-center">
                    <h2>Ready to Enhance Your Enterprise Systems?</h2>
                    <p>Let's discuss AI integration for your CRM, ERP, or legacy platforms</p>
                    <Link href="/contact" className="btn btn-primary pulse-glow">Schedule Consultation</Link>
                </div>
            </section>
        </div>
    )
}
