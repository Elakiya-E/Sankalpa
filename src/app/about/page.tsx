import { Heart, Award, BookOpen } from 'lucide-react';
import { safeFetch } from '@/sanity/lib/client';
import { aboutPageQuery } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';

const portableTextComponents = {
    block: {
        normal: ({ children }: any) => <p className="mb-4">{children}</p>,
        h2: ({ children }: any) => <h2 className="mb-6">{children}</h2>,
    }
};

export default async function AboutPage() {
    let data = null;
    try {
        data = await safeFetch(aboutPageQuery);
    } catch (error) {
        console.error("About page data fetch failed:", error);
    }

    const content = {
        title: data?.title || "Compassionate care grounded in professional excellence.",
        biography: data?.biography,
        aboutImage: data?.aboutImage || "/images/portrait.png",
        credentials: data?.credentials || [
            "Master of Science in Psychology",
            "Registered Counselor with [Local Board]",
            "Certified in Trauma-Informed Care",
            "10+ Years of Clinical Experience"
        ],
        philosophy: data?.philosophy,
    };

    return (
        <>
            {/* Hero Section */}
            <section className="section section-bg-white" style={{ paddingTop: 'calc(var(--spacing-xxl) + 40px)' }}>
                <div className="container grid grid-cols-2 items-center">
                    <div>
                        <span className="section-tag">Meet the Therapist</span>
                        <h1 className="mb-6">{content.title}</h1>
                        <div className="mb-8">
                            {content.biography ? (
                                <PortableText value={content.biography} components={portableTextComponents} />
                            ) : (
                                <p>
                                    I am dedicated to helping individuals and couples navigate their most challenging seasons with clarity and resilience. My practice is built on the belief that everyone deserves a safe space to be heard, understood, and supported.
                                </p>
                            )}
                        </div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            aspectRatio: '1',
                            borderRadius: '50% 50% 24px 50%',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-soft)',
                            backgroundImage: `url(${content.aboutImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            border: '8px solid white'
                        }}>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story & Philosophy */}
            <section className="section bg-color">
                <div className="container">
                    <div className="grid grid-cols-2 gap-12">
                        <div>
                            <h2 className="mb-6">My Approach</h2>
                            {content.philosophy ? (
                                <PortableText value={content.philosophy} components={portableTextComponents} />
                            ) : (
                                <>
                                    <p className="mb-4">
                                        My therapeutic philosophy is integrative, meaning I draw from various evidence-based modalities—including Cognitive Behavioral Therapy (CBT), Psychodynamic therapy, and Mindfulness-based techniques—to tailor our work to your specific needs.
                                    </p>
                                    <p className="mb-4">
                                        I believe the therapeutic relationship is the most important factor in healing. I strive to create an environment of radical empathy, where you feel safe enough to explore the depths of your experiences without fear of judgment.
                                    </p>
                                    <p>
                                        Whether you are struggling with anxiety, navigating a life transition, or seeking to deepen your relationships, I am here to walk alongside you.
                                    </p>
                                </>
                            )}
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="card" style={{ padding: '2rem' }}>
                                <div className="flex items-center gap-4 mb-2">
                                    <Award color="var(--eucalyptus-green)" />
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: 0 }}>Education & Credentials</h3>
                                </div>
                                <div style={{ fontSize: '0.95rem', marginBottom: 0 }}>
                                    {content.credentials.map((cred: string, i: number) => (
                                        <div key={i}>- {cred}</div>
                                    ))}
                                </div>
                            </div>
                            <div className="card" style={{ padding: '2rem' }}>
                                <div className="flex items-center gap-4 mb-2">
                                    <BookOpen color="var(--eucalyptus-green)" />
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: 0 }}>Specializations</h3>
                                </div>
                                <p style={{ fontSize: '0.95rem', marginBottom: 0 }}>
                                    - Complex Trauma & PTSD<br />
                                    - Anxiety & Mood Disorders<br />
                                    - Relationship & Couples Dynamics<br />
                                    - Adolescent Mental Health
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Statement */}
            <section className="section section-bg-sand text-center">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <Heart size={48} color="var(--warm-terracotta)" style={{ marginBottom: '1.5rem' }} />
                    <h2 className="mb-6">Empowering you to reclaim your narrative.</h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--soft-charcoal)', fontStyle: 'italic' }}>
                        "Healing is not about becoming someone else; it's about returning to who you were always meant to be before the world told you otherwise."
                    </p>
                </div>
            </section>
        </>
    );
}

