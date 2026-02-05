import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../industry.module.css'

export const metadata: Metadata = {
    title: 'AI for Manufacturing | Industrial AI Solutions | Nexyrra',
    description: 'AI solutions for manufacturing: predictive maintenance, quality control, production optimization, supply chain intelligence, and smart factory automation.',
    keywords: 'manufacturing AI, industrial AI, predictive maintenance, quality control AI, smart factory, Industry 4.0',
}

export default function Manufacturing() {
    return (
        <div className={styles.industryPage}>
            <section className={styles.industryHero}>
                <div className="container">
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link> / <Link href="/industries">Industries</Link> / Manufacturing
                    </nav>
                    <h1>AI for Manufacturing</h1>
                    <p className={styles.industrySubtitle}>Predictive Intelligence for Production</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.industryContent}>
                        <h2>Industry Challenges</h2>
                        <p>
                            Manufacturing operations require precision, efficiency, and minimal downtime. Unplanned equipment failures, quality defects, and supply chain disruptions cost millions. AI transforms reactive operations into predictive, optimized systems.
                        </p>

                        <h2>AI Solutions for Manufacturing</h2>

                        <h3>Predictive Maintenance</h3>
                        <p>
                            IoT sensor data and machine learning models that predict equipment failures before they occur. Reduce unplanned downtime by 50% and maintenance costs by 30% through condition-based maintenance.
                        </p>

                        <h3>Quality Control & Inspection</h3>
                        <p>
                            Computer vision AI for automated defect detection, quality inspection, and compliance verification. Achieve 99.9% accuracy at 10x the speed of manual inspection.
                        </p>

                        <h3>Production Optimization</h3>
                        <p>
                            AI-driven production scheduling, resource allocation, energy optimization, and throughput maximization. Real-time adjustments based on demand, capacity, and constraints.
                        </p>

                        <h3>Supply Chain Intelligence</h3>
                        <p>
                            Demand forecasting, supplier risk assessment, logistics optimization, and inventory management across the manufacturing value chain.
                        </p>

                        <h2>Use Cases</h2>
                        <div className={styles.useCases}>
                            <div className="card holographic-card">
                                <h4>Smart Factories</h4>
                                <p>End-to-end Industry 4.0 transformation with connected equipment, real-time analytics, and autonomous operations.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>Automotive Manufacturing</h4>
                                <p>Assembly line optimization, defect detection, predictive quality, and just-in-time production.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>Process Industries</h4>
                                <p>Chemical, pharmaceutical, and food production optimization with AI-controlled processes and quality assurance.</p>
                            </div>
                        </div>

                        <h2>Outcomes</h2>
                        <ul className={styles.outcomesList}>
                            <li><strong>50% reduction</strong> in unplanned equipment downtime</li>
                            <li><strong>30% decrease</strong> in maintenance costs through predictive strategies</li>
                            <li><strong>99.9% quality</strong> accuracy with AI-powered inspection</li>
                            <li><strong>20% increase</strong> in overall equipment effectiveness (OEE)</li>
                        </ul>

                        <h2>Technology Integration</h2>
                        <p>
                            Integration with existing SCADA, MES, ERP systems, and industrial IoT platforms. Edge AI deployment for real-time processing on the factory floor.
                        </p>

                        <h2>Related Services</h2>
                        <div className={styles.relatedServices}>
                            <Link href="/services/ai-systems-architecture" className="card holographic-card">
                                <h4>AI Systems Architecture</h4>
                                <p>Design industrial AI infrastructure for smart factories</p>
                            </Link>
                            <Link href="/services/intelligent-automation" className="card holographic-card">
                                <h4>Intelligent Automation</h4>
                                <p>Automate production workflows and quality processes</p>
                            </Link>
                            <Link href="/services/enterprise-ai-integration" className="card holographic-card">
                                <h4>Enterprise Integration</h4>
                                <p>Connect AI with MES, SCADA, and ERP systems</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.industryCta}>
                <div className="container text-center">
                    <h2>Modernize Manufacturing Operations</h2>
                    <p>Let's discuss AI solutions for your production facilities</p>
                    <Link href="/contact" className="btn btn-primary pulse-glow">Schedule Consultation</Link>
                </div>
            </section>
        </div>
    )
}
