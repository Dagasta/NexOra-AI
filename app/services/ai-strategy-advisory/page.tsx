import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../service.module.css'

export const metadata: Metadata = {
    title: 'AI Strategy & Advisory Services | Enterprise AI Consulting | Nexyrra',
    description: 'Strategic AI consulting and advisory services. AI roadmap development, ROI modeling, transformation planning, and executive guidance for enterprise AI adoption.',
    keywords: 'AI strategy, AI consulting, AI advisory, AI transformation, AI roadmap, enterprise AI planning',
}

export default function AIStrategyAdvisory() {
    return (
        <div className={styles.servicePage}>
            <section className={styles.serviceHero}>
                <div className="container">
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link> / <Link href="/services">Services</Link> / AI Strategy & Advisory
                    </nav>
                    <h1>AI Strategy & Advisory</h1>
                    <p className={styles.serviceSubtitle}>
                        Strategic Roadmaps, ROI Modeling, and Transformation Guidance
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.serviceContent}>
                        <h2>Overview</h2>
                        <p>
                            Successful AI transformation requires more than technology—it requires strategy. Nexyrra provides executive-level AI advisory services that align AI initiatives with business objectives, quantify ROI, and create actionable roadmaps for sustainable AI adoption.
                        </p>

                        <h2>Capabilities</h2>

                        <h3>AI Readiness Assessment</h3>
                        <p>
                            Comprehensive evaluation of your organization's AI maturity, data infrastructure, technical capabilities, and cultural readiness. Identify gaps and opportunities.
                        </p>

                        <h3>Strategic Roadmap Development</h3>
                        <p>
                            Multi-year AI transformation roadmaps with prioritized initiatives, resource requirements, technology selections, and phased implementation plans aligned with business goals.
                        </p>

                        <h3>ROI Modeling and Business Case</h3>
                        <p>
                            Quantitative analysis of AI investment returns. Cost-benefit modeling, risk assessment, and financial projections that justify AI initiatives to stakeholders and boards.
                        </p>

                        <h3>Change Management and Adoption</h3>
                        <p>
                            Organizational change strategies for AI adoption. Stakeholder engagement, training programs, governance frameworks, and cultural transformation guidance.
                        </p>

                        <h2>Advisory Services</h2>
                        <div className={styles.useCases}>
                            <div className="card holographic-card">
                                <h4>Executive Workshops</h4>
                                <p>C-suite and board-level AI education, opportunity identification, and strategic planning sessions.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>Technology Selection</h4>
                                <p>Vendor evaluation, build vs. buy analysis, and technology stack recommendations based on your requirements.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>Governance Frameworks</h4>
                                <p>AI ethics, compliance, risk management, and governance structures for responsible AI deployment.</p>
                            </div>
                        </div>

                        <h2>Outcomes</h2>
                        <ul className={styles.outcomesList}>
                            <li><strong>Clear AI vision</strong> aligned with business strategy and objectives</li>
                            <li><strong>Quantified ROI</strong> with detailed financial models and risk analysis</li>
                            <li><strong>Actionable roadmap</strong> with prioritized initiatives and timelines</li>
                            <li><strong>Stakeholder alignment</strong> across executive, technical, and operational teams</li>
                        </ul>

                        <h2>Advisory Process</h2>
                        <div className={styles.process}>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>1</div>
                                <h4>Discovery</h4>
                                <p>Understand business objectives, challenges, and AI opportunities.</p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>2</div>
                                <h4>Assessment</h4>
                                <p>Evaluate current state, capabilities, and readiness for AI.</p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>3</div>
                                <h4>Strategy Development</h4>
                                <p>Create roadmap, ROI models, and implementation plans.</p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>4</div>
                                <h4>Execution Support</h4>
                                <p>Ongoing advisory during implementation and optimization.</p>
                            </div>
                        </div>

                        <h2>Who We Advise</h2>
                        <p>
                            CEOs, CTOs, CDOs, and Heads of Innovation at enterprise organizations, government entities, and high-growth companies planning AI transformation initiatives.
                        </p>

                        <h2>Related Services</h2>
                        <div className={styles.relatedServices}>
                            <Link href="/services/ai-systems-architecture" className="card holographic-card">
                                <h4>AI Systems Architecture</h4>
                                <p>Execute on your AI strategy with custom infrastructure design</p>
                            </Link>
                            <Link href="/services/intelligent-automation" className="card holographic-card">
                                <h4>Intelligent Automation</h4>
                                <p>Implement high-ROI automation identified in strategic planning</p>
                            </Link>
                            <Link href="/services/enterprise-ai-integration" className="card holographic-card">
                                <h4>Enterprise Integration</h4>
                                <p>Integrate AI with existing systems per your roadmap</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.serviceCta}>
                <div className="container text-center">
                    <h2>Ready to Develop Your AI Strategy?</h2>
                    <p>Let's create a roadmap for AI transformation</p>
                    <Link href="/contact" className="btn btn-primary pulse-glow">Schedule Consultation</Link>
                </div>
            </section>
        </div>
    )
}
