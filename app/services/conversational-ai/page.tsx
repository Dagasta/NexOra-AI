import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../service.module.css'

export const metadata: Metadata = {
    title: 'Conversational AI Systems | AI Chatbots & Voice Agents | Nexyrra',
    description: 'Build multi-channel conversational AI systems with context-aware chatbots, voice agents, and intelligent customer service automation.',
    keywords: 'conversational AI, AI chatbots, voice AI, customer service automation, AI agents, natural language processing',
}

export default function ConversationalAI() {
    return (
        <div className={styles.servicePage}>
            <section className={styles.serviceHero}>
                <div className="container">
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link> / <Link href="/services">Services</Link> / Conversational AI
                    </nav>
                    <h1>Conversational AI Systems</h1>
                    <p className={styles.serviceSubtitle}>
                        Multi-Channel AI Agents That Understand Context, Not Just Commands
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.serviceContent}>
                        <h2>Overview</h2>
                        <p>
                            Conversational AI is more than chatbots. Nexyrra builds intelligent agents that understand intent, maintain context across conversations, integrate with your systems, and deliver personalized experiences across web, mobile, voice, and messaging platforms.
                        </p>

                        <h2>Capabilities</h2>

                        <h3>Context-Aware Chatbots</h3>
                        <p>
                            AI agents that remember conversation history, understand complex queries, handle multi-turn dialogues, and provide accurate, relevant responses based on your business knowledge.
                        </p>

                        <h3>Voice AI Systems</h3>
                        <p>
                            Natural voice interfaces for phone systems, smart devices, and applications. Speech-to-text, intent recognition, and text-to-speech with human-like quality.
                        </p>

                        <h3>Multi-Channel Orchestration</h3>
                        <p>
                            Unified conversational AI across web chat, mobile apps, WhatsApp, Slack, Microsoft Teams, phone, and email. Consistent experience, shared context, seamless handoffs.
                        </p>

                        <h3>Enterprise Knowledge Integration</h3>
                        <p>
                            Connect conversational AI to your databases, CRM, knowledge bases, and documentation. Agents that provide accurate, up-to-date information from your enterprise systems.
                        </p>

                        <h2>Use Cases</h2>
                        <div className={styles.useCases}>
                            <div className="card holographic-card">
                                <h4>Customer Support</h4>
                                <p>24/7 AI support agents that resolve 70% of inquiries automatically, escalating complex issues to humans with full context.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>Sales Assistance</h4>
                                <p>AI-powered sales agents that qualify leads, answer product questions, schedule meetings, and guide customers through purchase decisions.</p>
                            </div>
                            <div className="card holographic-card">
                                <h4>Internal Help Desks</h4>
                                <p>Employee-facing AI assistants for IT support, HR questions, policy information, and internal knowledge access.</p>
                            </div>
                        </div>

                        <h2>Outcomes</h2>
                        <ul className={styles.outcomesList}>
                            <li><strong>70% reduction</strong> in support ticket volume through AI resolution</li>
                            <li><strong>24/7 availability</strong> with instant response times</li>
                            <li><strong>90%+ accuracy</strong> in intent recognition and response quality</li>
                            <li><strong>3x faster</strong> customer issue resolution</li>
                        </ul>

                        <h2>Technology Approach</h2>
                        <p>
                            We build with state-of-the-art NLP models (GPT-4, Claude, custom fine-tuned models), vector databases for knowledge retrieval, and enterprise-grade orchestration platforms. All deployable on-premises or cloud.
                        </p>

                        <h2>Related Services</h2>
                        <div className={styles.relatedServices}>
                            <Link href="/services/ai-powered-applications" className="card holographic-card">
                                <h4>AI-Powered Applications</h4>
                                <p>Embed conversational AI into custom web and mobile apps</p>
                            </Link>
                            <Link href="/services/intelligent-automation" className="card holographic-card">
                                <h4>Intelligent Automation</h4>
                                <p>Automate workflows triggered by conversational AI interactions</p>
                            </Link>
                            <Link href="/services/enterprise-ai-integration" className="card holographic-card">
                                <h4>Enterprise Integration</h4>
                                <p>Connect AI agents with your CRM, ERP, and business systems</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.serviceCta}>
                <div className="container text-center">
                    <h2>Ready to Deploy Intelligent Agents?</h2>
                    <p>Let's build conversational AI for your business</p>
                    <Link href="/contact" className="btn btn-primary pulse-glow">Schedule Consultation</Link>
                </div>
            </section>
        </div>
    )
}
