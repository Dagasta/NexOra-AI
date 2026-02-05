import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../industry.module.css'

export const metadata: Metadata = {
    title: 'AI for Real Estate | Property Management AI Solutions | Nexyrra',
    description: 'AI solutions for real estate: intelligent property management, automated tenant screening, predictive maintenance, and smart building operations.',
    keywords: 'real estate AI, property management AI, smart buildings, predictive maintenance, tenant screening AI',
}

export default function RealEstate() {
    return (
        <div className={styles.industryPage}>
            <section className={styles.industryHero}>
                <div className="container">
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link> / <Link href="/industries">Industries</Link> / Real Estate
                    </nav>
                    <h1>AI for Real Estate</h1>
                    <p className={styles.industrySubtitle}>Intelligent Property Operations and Management</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.industryContent}>
                        <h2>Industry Challenges</h2>
                        <p>
                            Real estate operations involve complex workflows, high-volume transactions, tenant management, maintenance coordination, and regulatory compliance. Manual processes lead to inefficiencies, missed opportunities, and operational costs that erode margins.
                        </p>

                        <h2>AI Solutions for Real Estate</h2>

                        <h3>Intelligent Property Management</h3>
                        <p>
                            AI-powered platforms that automate tenant screening, lease management, rent collection, and communication. Predictive analytics for occupancy optimization and revenue maximization.
                        </p>

                        <h3>Predictive Maintenance</h3>
                        <p>
                            IoT sensors and AI models that predict equipment failures, optimize maintenance schedules, and reduce emergency repairs by 60%. Automated work order generation and contractor coordination.
                        </p>

                        <h3>Smart Building Operations</h3>
                        <p>
                            AI-driven HVAC, lighting, and energy management that reduces operational costs by 30%. Occupancy-based optimization and sustainability reporting.
                        </p>

                        <h3>Automated Tenant Services</h3>
                        <p>
                            24/7 AI chatbots for tenant inquiries, maintenance requests, and lease questions. Multi-language support and seamless escalation to property managers.
                        </p>

                        <h2>Use Cases</h2>
                        <div className={styles.useCases}>
                            <div className="card holographic-card">
                                <h4>Portfolio Management</h4>
                                <p>Centralized AI platform for managing multiple properties with automated reporting, performance analytics, and investment insights.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>Leasing Automation</h4>
                                <p>AI-powered lead qualification, virtual tours, automated lease generation, and digital signing workflows.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>Market Intelligence</h4>
                                <p>Predictive pricing models, market trend analysis, and competitive intelligence for investment decisions.</p>
                            </div>
                        </div>

                        <h2>Outcomes</h2>
                        <ul className={styles.outcomesList}>
                            <li><strong>40% reduction</strong> in property management operational costs</li>
                            <li><strong>60% fewer</strong> emergency maintenance incidents</li>
                            <li><strong>95% tenant satisfaction</strong> with AI-powered services</li>
                            <li><strong>30% energy savings</strong> through smart building optimization</li>
                        </ul>

                        <h2>Related Services</h2>
                        <div className={styles.relatedServices}>
                            <Link href="/services/intelligent-automation" className="card holographic-card">
                                <h4>Intelligent Automation</h4>
                                <p>Automate property management workflows</p>
                            </Link>
                            <Link href="/services/conversational-ai" className="card holographic-card">
                                <h4>Conversational AI</h4>
                                <p>24/7 tenant support and leasing assistance</p>
                            </Link>
                            <Link href="/services/ai-powered-applications" className="card holographic-card">
                                <h4>AI-Powered Applications</h4>
                                <p>Custom property management platforms</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.industryCta}>
                <div className="container text-center">
                    <h2>Transform Your Real Estate Operations</h2>
                    <p>Let's discuss AI solutions for your properties</p>
                    <Link href="/contact" className="btn btn-primary pulse-glow">Schedule Consultation</Link>
                </div>
            </section>
        </div>
    )
}
