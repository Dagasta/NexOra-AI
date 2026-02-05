import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../industry.module.css'

export const metadata: Metadata = {
    title: 'AI for Financial Services | Banking & FinTech AI Solutions | Nexyra',
    description: 'Enterprise AI for financial services: fraud detection, risk management, algorithmic trading, customer intelligence, and regulatory compliance automation.',
    keywords: 'financial services AI, banking AI, fraud detection, risk management AI, fintech AI, algorithmic trading',
}

export default function FinancialServices() {
    return (
        <div className={styles.industryPage}>
            <section className={styles.industryHero}>
                <div className="container">
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link> / <Link href="/industries">Industries</Link> / Financial Services
                    </nav>
                    <h1>AI for Financial Services</h1>
                    <p className={styles.industrySubtitle}>Precision and Trust at Scale</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.industryContent}>
                        <h2>Industry Challenges</h2>
                        <p>
                            Financial institutions operate in highly regulated environments with zero tolerance for errors. They require AI systems that deliver precision, maintain compliance, detect fraud in real-time, and manage risk across complex portfolios.
                        </p>

                        <h2>AI Solutions for Financial Services</h2>

                        <h3>Fraud Detection & Prevention</h3>
                        <p>
                            Real-time transaction monitoring with AI models that detect anomalies, identify fraud patterns, and prevent financial crimes. Adaptive systems that learn from new fraud tactics.
                        </p>

                        <h3>Risk Management & Compliance</h3>
                        <p>
                            AI-powered credit risk assessment, portfolio risk analysis, regulatory compliance monitoring, and automated reporting. Reduce compliance costs by 40% while improving accuracy.
                        </p>

                        <h3>Customer Intelligence</h3>
                        <p>
                            Predictive customer lifetime value, churn prediction, personalized product recommendations, and intelligent cross-selling. AI-driven customer segmentation and targeting.
                        </p>

                        <h3>Algorithmic Trading & Analytics</h3>
                        <p>
                            Machine learning models for market prediction, algorithmic trading strategies, portfolio optimization, and quantitative analysis. Real-time market intelligence and execution.
                        </p>

                        <h2>Use Cases</h2>
                        <div className={styles.useCases}>
                            <div className="card holographic-card">
                                <h4>Retail Banking</h4>
                                <p>AI-powered loan underwriting, credit scoring, customer service automation, and personalized banking experiences.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>Investment Management</h4>
                                <p>Robo-advisory platforms, portfolio rebalancing, ESG scoring, and investment research automation.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>Insurance</h4>
                                <p>Claims processing automation, fraud detection, risk assessment, and personalized pricing models.</p>
                            </div>
                        </div>

                        <h2>Outcomes</h2>
                        <ul className={styles.outcomesList}>
                            <li><strong>90% accuracy</strong> in fraud detection with minimal false positives</li>
                            <li><strong>40% reduction</strong> in compliance and regulatory costs</li>
                            <li><strong>3x faster</strong> loan processing and underwriting decisions</li>
                            <li><strong>SOC 2, PCI-DSS</strong> compliant architecture with audit trails</li>
                        </ul>

                        <h2>Regulatory Compliance</h2>
                        <p>
                            All financial AI solutions comply with Basel III, MiFID II, GDPR, PCI-DSS, and regional banking regulations. Explainable AI for regulatory transparency and audit requirements.
                        </p>

                        <h2>Related Services</h2>
                        <div className={styles.relatedServices}>
                            <Link href="/services/ai-systems-architecture" className="card holographic-card">
                                <h4>AI Systems Architecture</h4>
                                <p>Build secure, compliant AI infrastructure for finance</p>
                            </Link>
                            <Link href="/services/intelligent-automation" className="card holographic-card">
                                <h4>Intelligent Automation</h4>
                                <p>Automate compliance, reporting, and operations</p>
                            </Link>
                            <Link href="/services/enterprise-ai-integration" className="card holographic-card">
                                <h4>Enterprise Integration</h4>
                                <p>Integrate AI with core banking and trading systems</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.industryCta}>
                <div className="container text-center">
                    <h2>Modernize Financial Operations with AI</h2>
                    <p>Let's discuss AI solutions for banking and finance</p>
                    <Link href="/contact" className="btn btn-primary pulse-glow">Schedule Consultation</Link>
                </div>
            </section>
        </div>
    )
}
