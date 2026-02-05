import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../industry.module.css'

export const metadata: Metadata = {
    title: 'AI for E-commerce | Retail AI Solutions | Nexyra',
    description: 'AI solutions for e-commerce: personalization engines, dynamic pricing, inventory optimization, customer service automation, and conversion optimization.',
    keywords: 'ecommerce AI, retail AI, personalization, dynamic pricing, inventory optimization, conversion optimization',
}

export default function Ecommerce() {
    return (
        <div className={styles.industryPage}>
            <section className={styles.industryHero}>
                <div className="container">
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link> / <Link href="/industries">Industries</Link> / E-commerce
                    </nav>
                    <h1>AI for E-commerce</h1>
                    <p className={styles.industrySubtitle}>Personalization Beyond Recommendations</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.industryContent}>
                        <h2>Industry Challenges</h2>
                        <p>
                            E-commerce businesses compete on customer experience, conversion rates, and operational efficiency. Generic product recommendations and manual inventory management leave revenue on the table. AI delivers hyper-personalization and intelligent operations.
                        </p>

                        <h2>AI Solutions for E-commerce</h2>

                        <h3>Hyper-Personalization Engines</h3>
                        <p>
                            AI-powered product recommendations, personalized search results, dynamic content, and individualized customer journeys. Increase conversion rates by 35% through intelligent personalization.
                        </p>

                        <h3>Dynamic Pricing & Promotions</h3>
                        <p>
                            Real-time pricing optimization based on demand, competition, inventory levels, and customer behavior. Automated promotion targeting and discount optimization.
                        </p>

                        <h3>Inventory & Supply Chain Intelligence</h3>
                        <p>
                            Predictive demand forecasting, automated reordering, inventory optimization across channels, and supplier performance analytics. Reduce stockouts by 70% and overstock by 40%.
                        </p>

                        <h3>Customer Service Automation</h3>
                        <p>
                            24/7 AI shopping assistants, order tracking, returns processing, and product guidance. Handle 80% of customer inquiries automatically with high satisfaction.
                        </p>

                        <h2>Use Cases</h2>
                        <div className={styles.useCases}>
                            <div className="card holographic-card">
                                <h4>Fashion & Apparel</h4>
                                <p>Visual search, style recommendations, virtual try-on, and trend prediction for fashion retailers.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>Marketplace Platforms</h4>
                                <p>Seller performance analytics, fraud detection, search relevance optimization, and dynamic commission models.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>Subscription Commerce</h4>
                                <p>Churn prediction, personalized subscription boxes, renewal optimization, and customer lifetime value modeling.</p>
                            </div>
                        </div>

                        <h2>Outcomes</h2>
                        <ul className={styles.outcomesList}>
                            <li><strong>35% increase</strong> in conversion rates through personalization</li>
                            <li><strong>25% higher</strong> average order value with intelligent upselling</li>
                            <li><strong>70% reduction</strong> in stockouts and inventory waste</li>
                            <li><strong>80% automation</strong> of customer service inquiries</li>
                        </ul>

                        <h2>Platform Integration</h2>
                        <p>
                            Seamless integration with Shopify, Magento, WooCommerce, BigCommerce, and custom e-commerce platforms. API-first architecture for omnichannel commerce.
                        </p>

                        <h2>Related Services</h2>
                        <div className={styles.relatedServices}>
                            <Link href="/services/ai-powered-applications" className="card holographic-card">
                                <h4>AI-Powered Applications</h4>
                                <p>Build custom e-commerce platforms with embedded AI</p>
                            </Link>
                            <Link href="/services/conversational-ai" className="card holographic-card">
                                <h4>Conversational AI</h4>
                                <p>24/7 shopping assistants and customer support</p>
                            </Link>
                            <Link href="/services/intelligent-automation" className="card holographic-card">
                                <h4>Intelligent Automation</h4>
                                <p>Automate inventory, fulfillment, and operations</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.industryCta}>
                <div className="container text-center">
                    <h2>Transform Your E-commerce Business</h2>
                    <p>Let's discuss AI solutions for retail and e-commerce</p>
                    <Link href="/contact" className="btn btn-primary pulse-glow">Schedule Consultation</Link>
                </div>
            </section>
        </div>
    )
}
