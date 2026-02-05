import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../industry.module.css'

export const metadata: Metadata = {
    title: 'AI for Professional Services | Consulting & Legal AI Solutions | Nexyra',
    description: 'AI solutions for professional services: knowledge management, document automation, client intelligence, resource optimization, and expertise scaling.',
    keywords: 'professional services AI, consulting AI, legal AI, knowledge management, document automation, expertise scaling',
}

export default function ProfessionalServices() {
    return (
        <div className={styles.industryPage}>
            <section className={styles.industryHero}>
                <div className="container">
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link> / <Link href="/industries">Industries</Link> / Professional Services
                    </nav>
                    <h1>AI for Professional Services</h1>
                    <p className={styles.industrySubtitle}>Knowledge Systems That Scale Expertise</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.industryContent}>
                        <h2>Industry Challenges</h2>
                        <p>
                            Professional services firms—consulting, legal, accounting, advisory—compete on expertise and client relationships. Knowledge is scattered across documents, emails, and individual minds. AI centralizes expertise and scales it across the organization.
                        </p>

                        <h2>AI Solutions for Professional Services</h2>

                        <h3>Knowledge Management Systems</h3>
                        <p>
                            AI-powered knowledge bases that capture, organize, and surface institutional expertise. Natural language search across documents, precedents, and past projects. Never lose valuable knowledge when experts leave.
                        </p>

                        <h3>Document Intelligence & Automation</h3>
                        <p>
                            Automated contract analysis, document generation, due diligence, and compliance review. Reduce document processing time by 70% while improving accuracy.
                        </p>

                        <h3>Client Intelligence & CRM</h3>
                        <p>
                            AI-enhanced client relationship management with engagement insights, cross-sell opportunities, risk alerts, and personalized service recommendations.
                        </p>

                        <h3>Resource Optimization</h3>
                        <p>
                            Intelligent project staffing, capacity planning, skills matching, and utilization optimization. Maximize billable hours and project profitability.
                        </p>

                        <h2>Use Cases</h2>
                        <div className={styles.useCases}>
                            <div className="card holographic-card">
                                <h4>Management Consulting</h4>
                                <p>AI-powered research, data analysis, client deliverable generation, and knowledge repository for consultants.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>Legal Services</h4>
                                <p>Contract review, legal research, case law analysis, e-discovery, and automated document drafting.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>Accounting & Audit</h4>
                                <p>Automated financial analysis, anomaly detection, compliance checking, and audit documentation.</p>
                            </div>
                        </div>

                        <h2>Outcomes</h2>
                        <ul className={styles.outcomesList}>
                            <li><strong>70% faster</strong> document review and analysis</li>
                            <li><strong>40% increase</strong> in billable utilization through optimization</li>
                            <li><strong>90% reduction</strong> in knowledge search time</li>
                            <li><strong>3x faster</strong> onboarding of new professionals with AI knowledge access</li>
                        </ul>

                        <h2>Confidentiality & Security</h2>
                        <p>
                            All professional services AI solutions maintain attorney-client privilege, confidentiality agreements, and data security standards. On-premises deployment available for maximum control.
                        </p>

                        <h2>Related Services</h2>
                        <div className={styles.relatedServices}>
                            <Link href="/services/ai-powered-applications" className="card holographic-card">
                                <h4>AI-Powered Applications</h4>
                                <p>Build custom knowledge platforms and client portals</p>
                            </Link>
                            <Link href="/services/intelligent-automation" className="card holographic-card">
                                <h4>Intelligent Automation</h4>
                                <p>Automate document workflows and administrative tasks</p>
                            </Link>
                            <Link href="/services/conversational-ai" className="card holographic-card">
                                <h4>Conversational AI</h4>
                                <p>AI assistants for knowledge access and client service</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.industryCta}>
                <div className="container text-center">
                    <h2>Scale Your Professional Expertise</h2>
                    <p>Let's discuss AI solutions for your professional services firm</p>
                    <Link href="/contact" className="btn btn-primary pulse-glow">Schedule Consultation</Link>
                </div>
            </section>
        </div>
    )
}
