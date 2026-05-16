import Link from 'next/link';
import { Heart, Users, Sparkles } from 'lucide-react';
import { safeFetch } from '@/sanity/lib/client';
import { homePageQuery, servicesQuery } from '@/sanity/lib/queries';

export default async function Home() {
  let homeData = null;
  let services = [];

  try {
    const [fetchedHome, fetchedServices] = await Promise.all([
      safeFetch(homePageQuery),
      safeFetch(servicesQuery)
    ]);
    homeData = fetchedHome;
    services = fetchedServices || [];
  } catch (error) {
    console.error("Home page data fetch failed:", error);
  }


  // Fallback Content
  const content = {
    heroTitlePrefix: homeData?.heroTitlePrefix || "Cultivate",
    heroTitleHighlight: homeData?.heroTitleHighlight || "Enduring",
    heroTitleSuffix: homeData?.heroTitleSuffix || "Wellness.",
    heroSubtitle: homeData?.heroSubtitle || "A trust-centered sanctuary in Tamil Nadu, bridging modern clinical excellence with deeply intuitive, human-first emotional support.",
    heroImage: homeData?.heroImage || "/images/hero.png",
    ctaText: homeData?.ctaText || "Begin Consultation",
    secondaryCtaText: homeData?.secondaryCtaText || "Explore Modalities",
    introTitle: homeData?.introTitle || "Our Core Pillars",
    showcaseTitle: homeData?.showcaseTitle || "We believe therapy is an art of listening to the unspoken.",
  };

  return (
    <>
      {/* Immersive Aesthetic Hero Section */}
      <section className="section" style={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        padding: '5rem 0',
        backgroundImage: `linear-gradient(rgba(247, 244, 238, 0.75), rgba(247, 244, 238, 0.75)), url(${content.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Artistic Background Accents */}
        <div className="organic-shape animate-float" style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '300px',
          height: '350px',
          background: 'var(--sage-green)',
          opacity: 0.1,
          filter: 'blur(60px)',
          zIndex: 0
        }}></div>

        {/* Vertical Branding Accent */}
        <div className="text-vertical" style={{
          position: 'absolute',
          right: '40px',
          height: '60%',
          display: 'flex',
          alignItems: 'center',
          color: 'var(--eucalyptus-green)',
          fontSize: '0.75rem',
          letterSpacing: '0.8em',
          fontWeight: 700,
          opacity: 0.9,
          textTransform: 'uppercase',
          borderRight: '1px solid currentColor',
          paddingRight: '10px'
        }}>
          ESTABLISHED 2026 — SANKALPA CARE — PREMIUM PSYCHOTHERAPY
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="flex" style={{ flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span className="section-tag" style={{ margin: 0, backgroundColor: 'transparent', padding: 0, fontWeight: 600, color: 'var(--soft-charcoal)' }}>A Private Sanctuary</span>
              <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--eucalyptus-green)' }}></div>
            </div>

            <h1 className="mb-6" style={{
              fontSize: 'clamp(3.5rem, 10vw, 6rem)',
              maxWidth: '900px',
              lineHeight: 1.0,
              animation: 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) both'
            }}>
              {content.heroTitlePrefix} <br />
              <span style={{ fontStyle: 'italic', color: 'var(--eucalyptus-green)' }}>{content.heroTitleHighlight}</span> <br />
              {content.heroTitleSuffix}
            </h1>

            <div style={{ maxWidth: '650px' }}>
              <p className="mb-8" style={{
                fontSize: '1.25rem',
                color: '#1A1A1A',
                fontWeight: 400,
                lineHeight: 1.8,
                animation: 'fadeInUp 1s ease-out 0.4s both'
              }}>
                {content.heroSubtitle}
              </p>
              <div className="flex gap-6" style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both' }}>
                <Link href="/booking" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1rem', borderRadius: '4px' }}>
                  {content.ctaText}
                </Link>
                <Link href="/services" className="btn btn-secondary" style={{ padding: '1.25rem 2rem', fontSize: '1rem' }}>
                  {content.secondaryCtaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Philosophy Showcase */}
      <section className="section bg-white" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="grid grid-cols-2 items-center" style={{ gap: '5rem' }}>
            <div style={{ position: 'relative' }}>
              <div className="organic-shape shadow-soft" style={{
                width: '100%',
                aspectRatio: '1/1',
                backgroundColor: 'var(--surface-sand)',
                border: '1px solid rgba(220, 205, 184, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem',
                textAlign: 'center'
              }}>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.2, fontWeight: 400 }}>
                  {content.showcaseTitle.includes("art") ? (
                    <>
                      {content.showcaseTitle.split("art")[0]}
                      <span style={{ fontStyle: 'italic', color: 'var(--eucalyptus-green)' }}>art</span>
                      {content.showcaseTitle.split("art")[1]}
                    </>
                  ) : content.showcaseTitle}
                </h2>
              </div>
              {/* Floating Decorative Element - Integrated better */}
              <div className="animate-pulse-soft" style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '120px',
                height: '120px',
                background: 'rgba(220, 205, 184, 0.4)', // var(--sand-beige) with opacity
                borderRadius: '50%',
                zIndex: -1,
                filter: 'blur(10px)'
              }}></div>
            </div>

            <div>
              <span className="section-tag">{content.introTitle}</span>
              <div style={{ marginTop: '3rem' }}>
                {[
                  { title: 'Confidentiality', text: 'A secure vault for your innermost thoughts and vulnerabilities.' },
                  { title: 'Compassion', text: 'Radiating warmth and zero-judgment empathy in every interaction.' },
                  { title: 'Competence', text: 'Evidence-based clinical rigor meeting deep therapeutic intuition.' }
                ].map((pillar, i) => (
                  <div key={i} style={{
                    marginBottom: '3rem',
                    paddingLeft: '2rem',
                    borderLeft: '2px solid var(--eucalyptus-green)',
                    backgroundColor: 'var(--surface-cream)',
                    padding: '1.5rem 2rem',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all 0.3s ease'
                  }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--eucalyptus-green)' }}>0{i + 1}. {pillar.title}</h3>
                    <p style={{ fontSize: '1rem', color: '#444', margin: 0 }}>{pillar.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento-Style Path of Care */}
      <section className="section bg-color">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-tag">Our Modalities</span>
            <h2 style={{ fontSize: '3.5rem' }}>Evolved Care</h2>
          </div>

          <div className="bento-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridAutoRows: 'minmax(200px, auto)',
            gap: '1.5rem'
          }}>
            {/* Big Bento Card */}
            <div className="card" style={{
              gridColumn: 'span 7',
              gridRow: 'span 2',
              padding: '3rem', // Standardized for large bento
              backgroundColor: 'var(--sage-green)',
              color: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <h3 style={{ color: 'white', fontSize: '2.5rem' }}>Individual Journey</h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', maxWidth: '400px' }}>
                Deep one-on-one sessions designed to untangle complex emotions and build lasting resilience.
              </p>
              <Link href="/services#individual" className="btn" style={{ backgroundColor: 'white', color: 'var(--sage-green)', marginTop: '2rem' }}>
                Explore Individual Therapy
              </Link>
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                opacity: 0.1,
                transform: 'rotate(-15deg)'
              }}>
                <Heart size={300} />
              </div>
            </div>

            {/* Small Bento Card 1 */}
            <div className="card" style={{ gridColumn: 'span 5', backgroundColor: 'var(--surface-blue)', borderColor: 'rgba(170, 187, 200, 0.2)' }}>
              <Users color="var(--eucalyptus-green)" size={32} className="mb-4" />
              <h3>Couples Harmony</h3>
              <p style={{ fontSize: '1rem' }}>Restoring communication and intimacy through guided collaborative work.</p>
            </div>

            {/* Small Bento Card 2 */}
            <div className="card" style={{ gridColumn: 'span 5', backgroundColor: 'var(--surface-sand)', borderColor: 'rgba(220, 205, 184, 0.3)' }}>
              <Sparkles color="var(--warm-terracotta)" size={32} className="mb-4" />
              <h3>Trauma Recovery</h3>
              <p style={{ fontSize: '1rem' }}>A gentle, paced approach to reclaiming your narrative and sense of safety.</p>
            </div>

            {/* Horizontal Bento Card */}
            <div className="card flex items-center justify-between" style={{ gridColumn: 'span 12', padding: '2.5rem 3.5rem', backgroundColor: 'var(--surface-sage)', borderColor: 'rgba(168, 181, 162, 0.2)' }}>
              <div style={{ maxWidth: '60% ' }}>
                <h3>Adolescent Support</h3>
                <p>Navigating the complex emotional landscape of growth with specialized youth-centered counseling.</p>
              </div>
              <Link href="/services#adolescent" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>Explore Youth Care</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Process */}
      <section className="section section-bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-tag">The Journey</span>
            <h2>Your Path to Wellness</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>Starting therapy is a courageous step. We have designed our process to be as gentle, transparent, and supportive as possible.</p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Free Consultation', desc: 'A brief 15-minute call to discuss your needs and ensure we are a good fit.', color: 'var(--surface-blue)' },
              { step: '02', title: 'First Session', desc: 'An intake session to gather history, explore concerns, and set goals.', color: 'var(--surface-sage)' },
              { step: '03', title: 'Ongoing Therapy', desc: 'Regular sessions focusing on emotional exploration and skill-building.', color: 'var(--surface-sand)' },
              { step: '04', title: 'Growth & Healing', desc: 'Reviewing progress, stepping down frequency, and maintaining wellness.', color: 'var(--surface-cream)' }
            ].map((item, i) => (
              <div key={i} style={{
                padding: '2.5rem 2rem',
                backgroundColor: item.color,
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(0,0,0,0.03)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
              }}>
                <div style={{ color: 'var(--sand-beige)', fontSize: '3rem', fontFamily: 'var(--font-serif)', lineHeight: 1, marginBottom: '1.5rem' }}>{item.step}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--eucalyptus-green)' }}>{item.title}</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Ripple Effect Section */}
      <section className="section bg-white">
        <div className="container">
          <div style={{
            position: 'relative',
            padding: '5rem 4rem',
            backgroundColor: 'var(--surface-blue)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(170, 187, 200, 0.1)'
          }}>
            <span style={{
              position: 'absolute',
              top: '1rem',
              left: '2rem',
              fontSize: '12rem',
              lineHeight: 1,
              color: 'rgba(170, 187, 200, 0.2)',
              fontFamily: 'var(--font-serif)',
              zIndex: 0
            }}>“</span>

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                lineHeight: 1.5,
                fontWeight: 400,
                color: 'var(--soft-charcoal)',
                marginBottom: '2.5rem',
                fontStyle: 'italic'
              }}>
                Working with Sankalpa Care was like finally finding a steady anchor in a stormy sea. The warmth, the professionalism, and the genuine care transformed how I view my mental health.
              </h2>
              <div className="flex items-center gap-4">
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--eucalyptus-green)' }}></div>
                <p style={{ margin: 0, fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--eucalyptus-green)' }}>Verified Client Testimonial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Mindful Breath Visual */}
      <section className="section" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="container text-center">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <span className="section-tag">Take a moment</span>
            <h2 className="mb-8" style={{ fontSize: '3rem' }}>Pause with Us</h2>
            <div className="animate-pulse-soft" style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              backgroundColor: 'var(--sage-green)',
              margin: '3rem auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 50px rgba(168, 181, 162, 0.3)'
            }}>
              <span style={{ color: 'white', fontWeight: 500, letterSpacing: '0.2em' }}>BREATHE</span>
            </div>
            <p style={{ fontStyle: 'italic', color: '#555', fontSize: '1.25rem' }}>"In the pause, we find the path."</p>
          </div>
        </div>
      </section>

      {/* Aesthetic CTA Journey Section */}
      <section className="section" style={{
        backgroundColor: '#F8F9F7',
        color: 'var(--soft-charcoal)',
        textAlign: 'center',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-tag" style={{ backgroundColor: 'rgba(125, 145, 130, 0.1)', color: 'var(--eucalyptus-green)', marginBottom: '1.5rem' }}>The Final Step</span>
            <h2 style={{ color: 'var(--soft-charcoal)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>Ready to begin?</h2>
            <p style={{
              color: '#444',
              fontSize: '1.25rem',
              lineHeight: 1.8,
              marginBottom: '3rem',
              fontStyle: 'italic',
              fontWeight: 400
            }}>
              "Healing is not just the discovery of what is broken, but the quiet reclamation of what has always been whole. Your journey back to yourself starts here."
            </p>
            <div className="flex justify-center">
              <Link href="/booking" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>
                Schedule Your Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

