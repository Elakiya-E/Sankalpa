"use client";

import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
    {
        title: "Understanding the Roots of Anxiety",
        excerpt: "Exploring how our past experiences and biological predispositions shape our present-day anxiety.",
        date: "May 10, 2026",
        category: "Anxiety",
        author: "Dr. Sankalpa"
    },
    {
        title: "The Art of Mindful Communication in Relationships",
        excerpt: "How practicing presence can transform the way we connect with our partners and loved ones.",
        date: "April 28, 2026",
        category: "Relationships",
        author: "Dr. Sankalpa"
    },
    {
        title: "Self-Care Beyond the Spa: Real Emotional Maintenance",
        excerpt: "Moving past the commercialization of self-care toward genuine practices that support mental wellness.",
        date: "April 15, 2026",
        category: "Wellness",
        author: "Dr. Sankalpa"
    }
];

export default function BlogPage() {
    return (
        <>
            <section className="section section-bg-sand" style={{ paddingTop: 'calc(var(--spacing-xxl) + 40px)' }}>
                <div className="container text-center" style={{ maxWidth: '800px' }}>
                    <h1 className="mb-4">Resources & Insights</h1>
                    <p style={{ fontSize: '1.25rem' }}>A collection of articles and resources designed to support your mental wellness journey between sessions.</p>
                </div>
            </section>

            <section className="section section-bg-white">
                <div className="container">
                    <div className="flex justify-between items-center mb-12">
                        <div className="flex gap-4">
                            <button className="section-tag" style={{ border: 'none', cursor: 'pointer', backgroundColor: 'var(--eucalyptus-green)', color: 'white' }}>All Posts</button>
                            <button className="section-tag" style={{ border: 'none', cursor: 'pointer' }}>Anxiety</button>
                            <button className="section-tag" style={{ border: 'none', cursor: 'pointer' }}>Relationships</button>
                            <button className="section-tag" style={{ border: 'none', cursor: 'pointer' }}>Self-Care</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        {posts.map((post, i) => (
                            <article key={i} className="card" style={{ padding: '0', overflow: 'hidden' }}>
                                <div style={{
                                    aspectRatio: '16/9',
                                    backgroundImage: i === 0 ? 'url(/images/abstract.png)' : 'none',
                                    backgroundColor: i === 0 ? 'transparent' : 'var(--warm-cream)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {i !== 0 && <div style={{ color: 'var(--sage-green)', opacity: 0.5, fontSize: '0.875rem' }}>Article Thumbnail</div>}
                                </div>
                                <div style={{ padding: '2rem' }}>
                                    <div className="flex items-center gap-4 mb-4" style={{ fontSize: '0.875rem', color: '#888' }}>
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                                    </div>
                                    <h3 className="mb-4" style={{ fontSize: '1.5rem' }}>{post.title}</h3>
                                    <p className="mb-8" style={{ fontSize: '0.95rem' }}>{post.excerpt}</p>
                                    <Link href="#" className="flex items-center gap-2" style={{ color: 'var(--eucalyptus-green)', fontWeight: 600 }}>
                                        Read Full Article <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-color">
                <div className="container text-center">
                    <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem' }}>
                        <h2 className="mb-4">Internal Wellness Newsletter</h2>
                        <p className="mb-8">Join our community to receive monthly reflections on mental health, curated resources, and updates from the practice.</p>
                        <form className="flex gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                style={{ width: '300px', padding: '1rem', borderRadius: 'pill', border: '1px solid #E5E7EB', outline: 'none' }}
                                required
                            />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
