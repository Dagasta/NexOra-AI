import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './industries.module.css'

export const metadata: Metadata = {
    title: 'Industries We Serve | AI Solutions by Industry | Nexyrra',
    description: 'Industry-specific AI solutions for real estate, healthcare, financial services, e-commerce, manufacturing, and professional services.',
    keywords: 'AI by industry, industry AI solutions, vertical AI, sector-specific AI',
}

const industries = [
    {
        title: 'Real Estate',
        description: 'Intelligent property operations and management',
        href: '/industries/real-estate'
    },
    {
        title: 'Healthcare',
        description: 'Compliant, secure, transformative medical AI',
        href: '/industries/healthcare'
    },
    {
        title: 'Financial Services',
        description: 'Precision and trust at scale',
        href: '/industries/financial-services'
    },
    {
        title: 'E-commerce',
        description: 'Personalization beyond recommendations',
        href: '/industries/ecommerce'
    },
    {
        title: 'Manufacturing',
        description: 'Predictive intelligence for production',
        href: '/industries/manufacturing'
    },
    {
        title: 'Professional Services',
        description: 'Knowledge systems that scale expertise',
        href: '/industries/professional-services'
    }
]

export default function Industries() {
    return (
        <div className={styles.industriesPage}>
            <section className={styles.industriesHero}>
                <div className="container">
                    <h1 className="glow-text">Industries We Serve</h1>
                    <p className={styles.industriesSubtitle}>
                        Deep expertise in the sectors that demand precision
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.industriesGrid}>
                        {industries.map((industry, index) => (
                            <Link
                                key={index}
                                href={industry.href}
                                className={`card holographic-card quantum-shimmer`}
                            >
                                <h2>{industry.title}</h2>
                                <p>{industry.description}</p>
                                <span className={`${styles.industryLink} neon-text`}>Explore →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.industriesCta}>
                <div className="container text-center">
                    <h2>Don't See Your Industry?</h2>
                    <p>We work across sectors. Let's discuss your specific needs.</p>
                    <Link href="/contact" className="btn btn-primary pulse-glow">
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </div>
    )
}
