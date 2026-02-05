import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './services.module.css'

export const metadata: Metadata = {
    title: 'AI Services | Enterprise AI Solutions | Nexyra',
    description: 'Comprehensive AI services for enterprise: systems architecture, intelligent automation, AI applications, integration, conversational AI, and strategic advisory.',
    keywords: 'AI services, enterprise AI, AI consulting, AI development, AI integration, AI automation',
}

const services = [
    {
        title: 'AI Systems Architecture',
        description: 'Custom AI infrastructure designed for scale, security, and mission-critical operations',
        icon: '⚡',
        href: '/services/ai-systems-architecture'
    },
    {
        title: 'Intelligent Automation',
        description: 'End-to-end business process automation that learns and optimizes continuously',
        icon: '🔄',
        href: '/services/intelligent-automation'
    },
    {
        title: 'AI-Powered Applications',
        description: 'Custom web and mobile applications with embedded intelligence',
        icon: '📱',
        href: '/services/ai-powered-applications'
    },
    {
        title: 'Enterprise AI Integration',
        description: 'Seamless AI augmentation for existing CRM, ERP, and legacy systems',
        icon: '🔗',
        href: '/services/enterprise-ai-integration'
    },
    {
        title: 'Conversational AI Systems',
        description: 'Multi-channel AI agents that understand context, not just commands',
        icon: '💬',
        href: '/services/conversational-ai'
    },
    {
        title: 'AI Strategy & Advisory',
        description: 'Strategic roadmaps, ROI modeling, and transformation guidance',
        icon: '📊',
        href: '/services/ai-strategy-advisory'
    }
]

export default function Services() {
    return (
        <div className={styles.servicesPage}>
            <section className={styles.servicesHero}>
                <div className="container">
                    <h1 className="glow-text">AI Services</h1>
                    <p className={styles.servicesSubtitle}>
                        End-to-end AI solutions designed for complexity, built for outcomes
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.servicesGrid}>
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                href={service.href}
                                className="card holographic-card card-3d"
                            >
                                <div className={styles.serviceIcon}>{service.icon}</div>
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                                <span className={`${styles.serviceLink} neon-text`}>Learn More →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.servicesCta}>
                <div className="container text-center">
                    <h2>Not Sure Which Service You Need?</h2>
                    <p>Let's discuss your challenges and find the right AI solution</p>
                    <Link href="/contact" className="btn btn-primary pulse-glow">
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </div>
    )
}
