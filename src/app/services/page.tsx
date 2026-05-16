import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { safeFetch } from '@/sanity/lib/client';
import { servicesQuery } from '@/sanity/lib/queries';

export default async function ServicesPage() {
    let cmsServices = [];
    try {
        cmsServices = await safeFetch(servicesQuery);
    } catch (error) {
        console.error("Services fetch failed:", error);
    }

    const fallbackServices = [
        {
            _id: 'individual',
            title: 'Individual Therapy',
            shortDescription: 'Dedicated 50-minute sessions focused entirely on your personal growth, healing, and skill-building in a deeply confidential environment.',
            outcomes: ['Deeper self-awareness', 'Healthier coping mechanisms', 'Reduced anxiety/depression', 'Improved self-esteem'],
            concerns: 'Anxiety, depression, life transitions, burnout, identity exploration.'
        },
        {
            _id: 'couples',
            title: 'Couples Therapy',
            shortDescription: 'Collaborative sessions designed to improve communication, foster intimacy, and navigate conflict safely and constructively.',
            outcomes: ['Enhanced communication', 'Reignited intimacy', 'Conflict resolution skills', 'Stronger partnership'],
            concerns: 'Frequent arguments, emotional distance, infidelity recovery, pre-marital counseling.'
        },
        {
            _id: 'adolescent',
            title: 'Adolescent Counseling',
            shortDescription: 'Specialized support for teenagers navigating the complex emotional and social challenges of adolescence.',
            outcomes: ['Emotional regulation', 'Improved academic focus', 'Healthier peer and family relationships', 'Stronger self-identity'],
            concerns: 'Academic stress, social anxiety, low self-esteem, behavioral changes.'
        },
        {
            _id: 'trauma',
            title: 'Trauma Recovery',
            shortDescription: 'A gentle, paced approach to processing painful past experiences without re-traumatization, helping you reclaim your sense of safety.',
            outcomes: ['Decreased hyperarousal', 'Improved sense of safety', 'Integration of past memories', 'Nervous system regulation'],
            concerns: 'PTSD, childhood trauma, acute distress, emotional numbness.'
        }
    ];

    const services = cmsServices?.length > 0 ? cmsServices : fallbackServices;

    return (
        <>
            <section className="section section-bg-sand" style={{ paddingTop: 'calc(var(--spacing-xxl) + 40px)', paddingBottom: 'var(--spacing-xl)' }}>
                <div className="container text-center" style={{ maxWidth: '800px' }}>
                    <h1 className="mb-4">Therapeutic Services</h1>
                    <p style={{ fontSize: '1.25rem' }}>We offer comprehensive mental health support tailored to your unique journey, grounded in evidence-based practices and profound empathy.</p>
                </div>
            </section>

            <section className="section bg-color">
                <div className="container">
                    <div className="grid grid-cols-2 gap-8">
                        {services.map((service: any, index: number) => (
                            <div key={service._id} id={service.slug?.current || service._id} className="card" style={{ padding: '3rem', borderTop: `4px solid ${index % 2 === 0 ? 'var(--eucalyptus-green)' : 'var(--warm-terracotta)'}` }}>
                                <h2 className="mb-4">{service.title}</h2>
                                <p className="mb-6" style={{ fontSize: '1.125rem' }}>{service.shortDescription}</p>

                                <h4 style={{ color: 'var(--eucalyptus-green)', marginBottom: '0.5rem' }}>Ideal For:</h4>
                                <p className="mb-6">{service.concerns}</p>

                                {service.outcomes && (
                                    <>
                                        <h4 style={{ color: 'var(--eucalyptus-green)', marginBottom: '0.5rem' }}>Therapeutic Outcomes:</h4>
                                        <ul className="mb-8" style={{ listStyle: 'none', padding: 0 }}>
                                            {service.outcomes.map((outcome: string, i: number) => (
                                                <li key={i} className="flex items-center gap-2 mb-2">
                                                    <CheckCircle2 size={18} color="var(--sage-green)" />
                                                    <span>{outcome}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                <div style={{ marginTop: 'auto' }}>
                                    <Link href="/booking" className="btn btn-outline" style={{ width: '100%' }}>
                                        {service.ctaText || 'Request Consultation'}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-bg-white text-center">
                <div className="container">
                    <h2 className="mb-6">Not sure which service is right for you?</h2>
                    <p className="mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem auto' }}>Finding the right type of support can be overwhelming. We offer a free 15-minute consultation to discuss your needs and guide you toward the best path.</p>
                    <Link href="/contact" className="btn btn-primary">
                        Schedule a Free Consultation
                    </Link>
                </div>
            </section>
        </>
    );
}

