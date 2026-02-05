import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../industry.module.css'

export const metadata: Metadata = {
    title: 'AI for Healthcare | Medical AI Solutions | Nexyra',
    description: 'HIPAA-compliant AI solutions for healthcare: patient care optimization, clinical decision support, administrative automation, and medical imaging AI.',
    keywords: 'healthcare AI, medical AI, HIPAA compliance, clinical AI, patient care automation, medical imaging AI',
}

export default function Healthcare() {
    return (
        <div className={styles.industryPage}>
            <section className={styles.industryHero}>
                <div className="container">
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link> / <Link href="/industries">Industries</Link> / Healthcare
                    </nav>
                    <h1>AI for Healthcare</h1>
                    <p className={styles.industrySubtitle}>Compliant, Secure, Transformative Medical AI</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.industryContent}>
                        <h2>Industry Challenges</h2>
                        <p>
                            Healthcare organizations face administrative burden, clinician burnout, patient access challenges, and regulatory complexity. AI must enhance care quality while maintaining strict HIPAA compliance and patient privacy.
                        </p>

                        <h2>AI Solutions for Healthcare</h2>

                        <h3>Clinical Decision Support</h3>
                        <p>
                            AI-powered diagnostic assistance, treatment recommendations, and clinical pathway optimization. Evidence-based insights that augment physician expertise without replacing clinical judgment.
                        </p>

                        <h3>Administrative Automation</h3>
                        <p>
                            Intelligent scheduling, claims processing, prior authorization automation, and billing optimization. Reduce administrative burden by 50% and accelerate revenue cycle.
                        </p>

                        <h3>Patient Engagement</h3>
                        <p>
                            24/7 AI-powered patient portals, symptom checkers, appointment scheduling, and medication reminders. Multi-language support and accessibility compliance.
                        </p>

                        <h3>Predictive Analytics</h3>
                        <p>
                            Patient risk stratification, readmission prediction, resource utilization forecasting, and population health management. Proactive care delivery and cost optimization.
                        </p>

                        <h2>Use Cases</h2>
                        <div className={styles.useCases}>
                            <div className="card holographic-card">
                                <h4>Hospital Operations</h4>
                                <p>AI-optimized bed management, staffing allocation, supply chain, and emergency department flow.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>Telehealth AI</h4>
                                <p>Virtual triage, remote monitoring, and AI-assisted telemedicine consultations.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>Medical Imaging</h4>
                                <p>AI-powered radiology analysis, pathology screening, and diagnostic imaging enhancement.</p>
                            </div>
                        </div>

                        <h2>Outcomes</h2>
                        <ul className={styles.outcomesList}>
                            <li><strong>50% reduction</strong> in administrative workload for clinical staff</li>
                            <li><strong>30% decrease</strong> in patient readmissions through predictive interventions</li>
                            <li><strong>HIPAA-compliant</strong> architecture with end-to-end encryption</li>
                            <li><strong>95% patient satisfaction</strong> with AI-powered engagement tools</li>
                        </ul>

                        <h2>Compliance & Security</h2>
                        <p>
                            All healthcare AI solutions are built with HIPAA compliance, HITRUST certification, and SOC 2 Type II standards. On-premises deployment options available for maximum data control.
                        </p>

                        <h2>Related Services</h2>
                        <div className={styles.relatedServices}>
                            <Link href="/services/intelligent-automation" className="card holographic-card">
                                <h4>Intelligent Automation</h4>
                                <p>Automate clinical and administrative workflows</p>
                            </Link>
                            <Link href="/services/conversational-ai" className="card holographic-card">
                                <h4>Conversational AI</h4>
                                <p>Patient engagement and clinical support chatbots</p>
                            </Link>
                            <Link href="/services/ai-systems-architecture" className="card holographic-card">
                                <h4>AI Systems Architecture</h4>
                                <p>HIPAA-compliant AI infrastructure design</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.industryCta}>
                <div className="container text-center">
                    <h2>Transform Healthcare Delivery</h2>
                    <p>Let's discuss compliant AI solutions for your organization</p>
                    <Link href="/contact" className="btn btn-primary pulse-glow">Schedule Consultation</Link>
                </div>
            </section>
        </div>
    )
}
