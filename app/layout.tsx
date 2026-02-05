import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './creative-animations.css'
import './cinematic-animations.css'
import './global-cinematic.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: {
        default: 'NEXYRA AI | Enterprise AI Solutions & Autonomous Systems',
        template: '%s | NEXYRA AI'
    },
    description: 'NEXYRA is a world-class AI agency architecting industrial-grade autonomous systems, intelligent automation, and custom enterprise AI infrastructure.',
    keywords: ['AI Agency', 'Enterprise AI Solutions', 'Autonomous Systems', 'AI Automation', 'AI Strategy', 'Industrial AI', 'Machine Learning Development', 'Nexyra AI'],
    authors: [{ name: 'NEXYRA AI Team' }],
    creator: 'NEXYRA AI',
    publisher: 'NEXYRA AI',
    metadataBase: new URL('https://nexyra-ai.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'NEXYRA AI | Enterprise AI Solutions & Autonomous Systems',
        description: 'Architecting the future of enterprise intelligence with industrial-grade AI infrastructure.',
        url: 'https://nexyra-ai.com',
        siteName: 'NEXYRA AI',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'NEXYRA AI - Enterprise Intelligence',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NEXYRA AI | Enterprise AI Solutions',
        description: 'Industrial-grade AI infrastructure for the autonomous enterprise.',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Organization',
                            name: 'NEXYRA AI',
                            description: 'Enterprise AI solutions and autonomous systems company',
                            url: 'https://nexyra-ai.com',
                            logo: 'https://nexyra-ai.com/logo.png',
                            sameAs: [
                                'https://twitter.com/nexyra_ai',
                                'https://linkedin.com/company/nexyra-ai'
                            ],
                            contactPoint: {
                                '@type': 'ContactPoint',
                                telephone: '+1-xxx-xxx-xxxx',
                                contactType: 'customer service'
                            }
                        }),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Service',
                            serviceType: 'AI Systems Architecture',
                            provider: {
                                '@type': 'Organization',
                                name: 'NEXYRA AI'
                            },
                            description: 'Professional enterprise AI systems architecture and deployment.'
                        }),
                    }}
                />
            </head>
            <body className={inter.className}>
                <Header />
                <main>{children}</main>
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    )
}
