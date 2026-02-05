import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './solutions.module.css'

export const metadata: Metadata = {
    title: 'AI Solutions | Custom AI Systems & Platforms | Nexyrra',
    description: 'Comprehensive AI solutions combining multiple services for complete digital transformation. End-to-end AI platforms for enterprise operations.',
    keywords: 'AI solutions, complete AI systems, AI platforms, digital transformation, enterprise AI',
}

const solutions = [
    {
        title: 'Complete AI Transformation',
        description: 'End-to-end AI implementation combining strategy, architecture, automation, and integration for total operational transformation.',
        services: ['AI Strategy', 'Systems Architecture', 'Automation', 'Integration'],
        outcomes: ['60% cost reduction', 'Complete digital transformation', '5x ROI in 18 months']
    },
    {
        title: 'Intelligent Customer Experience Platform',
        description: 'Unified AI platform for customer service, sales, and support across all channels with predictive analytics and personalization.',
        services: ['Conversational AI', 'AI Applications', 'Integration'],
        outcomes: ['80% automation rate', '95% customer satisfaction', '24/7 availability']
    },
    {
        title: 'Smart Operations Suite',
        description: 'Comprehensive automation platform for business processes, workflows, and operations with continuous optimization.',
        services: ['Intelligent Automation', 'Systems Architecture', 'Integration'],
        outcomes: ['70% faster processes', '90% error reduction', 'Real-time optimization']
    },
    {
        title: 'AI-Powered Analytics & Intelligence',
        description: 'Complete data intelligence platform with predictive analytics, automated insights, and decision support systems.',
        services: ['AI Applications', 'Systems Architecture', 'Advisory'],
        outcomes: ['10x faster insights', 'Predictive accuracy 95%+', 'Automated reporting']
    }
]

export default function Solutions() {
    return (
        <div className={styles.solutionsPage}>
            <section className={styles.solutionsHero}>
                <div className="container">
                    <h1 className="glow-text">Complete AI Solutions</h1>
                    <p className={styles.solutionsSubtitle}>
                        Integrated AI platforms that transform entire business operations
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--space-10)', maxWidth: '800px', margin: '0 auto var(--space-10)' }}>
                        <h2>Beyond Individual Services</h2>
                        <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-platinum-silver)' }}>
                            Our solutions combine multiple AI services into unified platforms that address complex business challenges.
                            Each solution is customized to your industry, operations, and objectives.
                        </p>
                    </div>

                    <div className={styles.solutionsGrid}>
                        {solutions.map((solution, index) => (
                            <div key={index} className="card holographic-card">
                                <h2>{solution.title}</h2>
                                <p className={styles.solutionDescription}>{solution.description}</p>

                                <div className={styles.servicesIncluded}>
                                    <h4>Services Included:</h4>
                                    <ul>
                                        {solution.services.map((service, idx) => (
                                            <li key={idx}>{service}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={styles.outcomes}>
                                    <h4>Expected Outcomes:</h4>
                                    <ul>
                                        {solution.outcomes.map((outcome, idx) => (
                                            <li key={idx} className="neon-text">{outcome}</li>
                                        ))}
                                    </ul>
                                </div>

                                <Link href="/contact" className="btn btn-secondary" style={{ marginTop: 'var(--space-4)' }}>
                                    Discuss This Solution
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.customSolution}>
                <div className="container">
                    <div className="card holographic-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: 'var(--space-10)' }}>
                        <h2>Need a Custom Solution?</h2>
                        <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-6)' }}>
                            Every organization is unique. We design bespoke AI solutions that combine our services
                            in ways that perfectly match your specific challenges and opportunities.
                        </p>
                        <Link href="/contact" className="btn btn-primary pulse-glow">
                            Schedule Strategy Session
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
