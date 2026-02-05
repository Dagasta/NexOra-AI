import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://nexyra-ai.com'
    const lastModified = new Date()

    const routes = [
        '',
        '/services',
        '/industries',
        '/solutions',
        '/insights',
        '/about',
        '/contact',
        '/services/ai-systems-architecture',
        '/services/intelligent-automation',
        '/services/ai-powered-applications',
        '/services/enterprise-ai-integration',
        '/services/conversational-ai',
        '/services/ai-strategy-advisory',
        '/industries/real-estate',
        '/industries/healthcare',
        '/industries/financial-services',
        '/industries/ecommerce',
        '/industries/manufacturing',
        '/industries/professional-services',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
