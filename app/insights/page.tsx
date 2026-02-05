import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './insights.module.css'

export const metadata: Metadata = {
    title: 'AI Insights & Thought Leadership | Nexyrra',
    description: 'Expert insights on enterprise AI, automation, digital transformation, and AI strategy from Nexyrra\'s team of AI architects and consultants.',
    keywords: 'AI insights, AI thought leadership, enterprise AI trends, AI strategy, automation insights',
}

const insights = [
    {
        title: 'The ROI of Enterprise AI: Beyond the Hype',
        excerpt: 'How leading organizations quantify and maximize returns from AI investments through strategic implementation and continuous optimization.',
        category: 'AI Strategy',
        readTime: '8 min read',
        slug: 'roi-enterprise-ai'
    },
    {
        title: 'Building AI Systems That Scale',
        excerpt: 'Architectural principles for designing AI infrastructure that grows with your business without technical debt or performance degradation.',
        category: 'Technical',
        readTime: '12 min read',
        slug: 'building-ai-systems-scale'
    },
    {
        title: 'AI Governance: Balancing Innovation and Risk',
        excerpt: 'Frameworks for responsible AI deployment that maintain compliance, ethics, and stakeholder trust while enabling innovation.',
        category: 'Governance',
        readTime: '10 min read',
        slug: 'ai-governance-framework'
    },
    {
        title: 'From Chatbots to Intelligent Agents',
        excerpt: 'The evolution of conversational AI and how context-aware agents are transforming customer service and internal operations.',
        category: 'Conversational AI',
        readTime: '7 min read',
        slug: 'chatbots-to-intelligent-agents'
    },
    {
        title: 'Predictive Maintenance: The AI Use Case That Pays',
        excerpt: 'Real-world results from manufacturing and facilities management showing 50%+ downtime reduction through predictive AI.',
        category: 'Industry',
        readTime: '9 min read',
        slug: 'predictive-maintenance-roi'
    },
    {
        title: 'AI Integration Without Disruption',
        excerpt: 'Proven strategies for adding AI capabilities to legacy systems without replacing core infrastructure or halting operations.',
        category: 'Integration',
        readTime: '11 min read',
        slug: 'ai-integration-legacy-systems'
    }
]

export default function Insights() {
    return (
        <div className={styles.insightsPage}>
            <section className={styles.insightsHero}>
                <div className="container">
                    <h1 className="glow-text">AI Insights</h1>
                    <p className={styles.insightsSubtitle}>
                        Thought leadership on enterprise AI, automation, and intelligent systems
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.insightsGrid}>
                        {insights.map((insight, index) => (
                            <article key={index} className="card holographic-card">
                                <div className={styles.insightCategory}>{insight.category}</div>
                                <h2>{insight.title}</h2>
                                <p>{insight.excerpt}</p>
                                <div className={styles.insightMeta}>
                                    <span>{insight.readTime}</span>
                                    <Link href={`/insights/${insight.slug}`} className="neon-text">
                                        Read Article →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className={styles.newsletterCta}>
                        <div className="card holographic-card">
                            <h2>Stay Informed</h2>
                            <p>
                                Receive monthly insights on AI strategy, implementation best practices, and industry trends.
                            </p>
                            <form className={styles.newsletterForm}>
                                <input
                                    type="email"
                                    placeholder="your.email@company.com"
                                    className={styles.emailInput}
                                />
                                <button type="submit" className="btn btn-primary pulse-glow">
                                    Subscribe
                                </button>
                            </form>
                            <p className={styles.privacyNote}>
                                No spam. Unsubscribe anytime. We respect your privacy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
