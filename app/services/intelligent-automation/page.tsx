import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../service.module.css'

export const metadata: Metadata = {
    title: 'Intelligent Automation Services | Business Process Automation | Nexyra',
    description: 'End-to-end business process automation with AI. Automate workflows, reduce operational costs, and optimize continuously with intelligent automation systems.',
    keywords: 'intelligent automation, business process automation, AI workflow automation, RPA, process optimization',
}

export default function IntelligentAutomation() {
    return (
        <div className={styles.servicePage}>
            <section className={styles.serviceHero}>
                <div className="container">
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link> / <Link href="/services">Services</Link> / Intelligent Automation
                    </nav>
                    <h1>Intelligent Automation</h1>
                    <p className={styles.serviceSubtitle}>
                        AI-Powered Business Process Automation That Learns and Optimizes
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.serviceContent}>
                        <h2>Overview</h2>
                        <p>
                            Intelligent automation goes beyond traditional RPA. Nexyra builds AI-powered automation systems that don't just execute tasks—they understand context, make decisions, learn from outcomes, and continuously optimize performance.
                        </p>
                        <p>
                            From document processing to customer service to supply chain management, our intelligent automation solutions transform manual, time-consuming processes into streamlined, AI-driven workflows.
                        </p>

                        <h2>Capabilities</h2>

                        <h3>End-to-End Process Automation</h3>
                        <p>
                            We automate complete business processes from start to finish, not just individual tasks. Our systems handle exceptions, make intelligent routing decisions, and escalate to humans only when necessary.
                        </p>

                        <h3>Workflow Intelligence and Optimization</h3>
                        <p>
                            AI-powered workflow engines that analyze process performance, identify bottlenecks, and automatically optimize routing and resource allocation for maximum efficiency.
                        </p>

                        <h3>Document Processing and Knowledge Extraction</h3>
                        <p>
                            Intelligent document processing that extracts structured data from unstructured sources—invoices, contracts, forms, emails—with high accuracy and automatic validation.
                        </p>

                        <h3>Predictive Automation Systems</h3>
                        <p>
                            Automation that anticipates needs before they arise. Predictive systems that trigger workflows based on patterns, forecast resource requirements, and prevent issues before they occur.
                        </p>

                        <h2>Use Cases</h2>
                        <div className={styles.useCases}>
                            <div className="card">
                                <h4>Finance & Accounting</h4>
                                <p>Invoice processing, expense management, financial reporting, and reconciliation automation with 95%+ accuracy.</p>
                            </div>
                            <div className="card">
                                <h4>Customer Operations</h4>
                                <p>Order processing, customer onboarding, support ticket routing, and service fulfillment automation.</p>
                            </div>
                            <div className="card">
                                <h4>HR & Recruitment</h4>
                                <p>Resume screening, candidate communication, onboarding workflows, and employee data management.</p>
                            </div>
                        </div>

                        <h2>Outcomes</h2>
                        <ul className={styles.outcomesList}>
                            <li><strong>60-80% reduction</strong> in manual processing time</li>
                            <li><strong>95%+ accuracy</strong> in automated data extraction and processing</li>
                            <li><strong>24/7 operation</strong> with no downtime or human fatigue</li>
                            <li><strong>3-6 month ROI</strong> through labor cost savings and efficiency gains</li>
                        </ul>

                        <h2>Our Process</h2>
                        <div className={styles.process}>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>1</div>
                                <h4>Process Analysis</h4>
                                <p>Map current workflows, identify automation opportunities, and quantify potential impact.</p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>2</div>
                                <h4>Automation Design</h4>
                                <p>Design intelligent workflows with decision logic, exception handling, and optimization rules.</p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>3</div>
                                <h4>Build & Test</h4>
                                <p>Develop automation systems, train AI models, and validate accuracy with real data.</p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>4</div>
                                <h4>Deploy & Optimize</h4>
                                <p>Phased rollout with continuous monitoring and performance optimization.</p>
                            </div>
                        </div>

                        <h2>Related Services</h2>
                        <div className={styles.relatedServices}>
                            <Link href="/services/ai-systems-architecture" className="card">
                                <h4>AI Systems Architecture</h4>
                                <p>Build the infrastructure foundation for scalable automation</p>
                            </Link>
                            <Link href="/services/enterprise-ai-integration" className="card">
                                <h4>Enterprise AI Integration</h4>
                                <p>Connect automation systems with your existing tools and platforms</p>
                            </Link>
                            <Link href="/services/conversational-ai" className="card">
                                <h4>Conversational AI</h4>
                                <p>Add intelligent chatbots to automate customer and employee interactions</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.serviceCta}>
                <div className="container text-center">
                    <h2>Ready to Automate Your Operations?</h2>
                    <p>Let's identify your highest-impact automation opportunities</p>
                    <Link href="/contact" className="btn btn-primary">Schedule Consultation</Link>
                </div>
            </section>
        </div>
    )
}
