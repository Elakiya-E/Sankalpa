import Link from 'next/link';
import { CreditCard, CalendarX, Info } from 'lucide-react';
import { safeFetch } from '@/sanity/lib/client';
import { feesPageQuery } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';

const portableTextComponents = {
    block: {
        normal: ({ children }: any) => <p className="mb-4">{children}</p>,
        strong: ({ children }: any) => <strong>{children}</strong>,
    }
};

export default async function FeesPage() {
    let data = null;
    try {
        data = await safeFetch(feesPageQuery);
    } catch (error) {
        console.error("Fees fetch failed:", error);
    }


    const fallbackFees = [
        {
            sessionTitle: 'Individual Session',
            duration: '50 Minutes',
            amount: '₹2,500',
            description: 'Standard one-on-one session focused on your personal goals.',
            bestFor: 'Individuals seeking long-term or short-term support.'
        },
        {
            sessionTitle: 'Couples Session',
            duration: '75 Minutes',
            amount: '₹3,500',
            description: 'Specialized session for partners to work on relationship dynamics.',
            bestFor: 'Couples looking to improve communication and intimacy.'
        },
        {
            sessionTitle: 'Initial Consultation',
            duration: '15 Minutes',
            amount: 'Free',
            description: 'A brief telephone or video call to see if we are a good match.',
            bestFor: 'New clients exploring therapy for the first time.'
        }
    ];

    const fees = data?.feeStructures || fallbackFees;
    const paymentMethods = data?.paymentMethods || [
        "UPI & Bank Transfer (Preferred)",
        "Debit & Credit Cards",
        "Digital Wallets"
    ];

    return (
        <>
            <section className="section section-bg-sand" style={{ paddingTop: 'calc(var(--spacing-xxl) + 40px)' }}>
                <div className="container text-center" style={{ maxWidth: '800px' }}>
                    <h1 className="mb-4">{data?.title || "Fees & Financials"}</h1>
                    <p style={{ fontSize: '1.25rem' }}>Transparency is a key part of the therapeutic trust. We believe in clear, straightforward pricing for all our services.</p>
                </div>
            </section>

            <section className="section section-bg-white">
                <div className="container">
                    <div className="grid grid-cols-3 gap-8">
                        {fees.map((item: any, i: number) => (
                            <div key={i} className="card" style={{ padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ marginBottom: '0.25rem' }}>{item.sessionTitle}</h3>
                                <p style={{ color: 'var(--eucalyptus-green)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1.5rem' }}>{item.duration}</p>
                                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--soft-charcoal)', marginBottom: '1.5rem' }}>{item.amount}</div>
                                <p className="mb-6" style={{ fontSize: '0.95rem' }}>{item.description}</p>
                                <div style={{ backgroundColor: 'var(--warm-cream)', padding: '1rem', borderRadius: '12px', fontSize: '0.875rem', marginBottom: '2rem' }}>
                                    <strong>Best for:</strong> {item.bestFor}
                                </div>
                                <Link href="/contact" className="btn btn-primary" style={{ marginTop: 'auto' }}>
                                    Request This Service
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-color">
                <div className="container">
                    <div className="grid grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <CreditCard color="var(--eucalyptus-green)" />
                                <h2 style={{ marginBottom: 0 }}>Payment Information</h2>
                            </div>
                            <p className="mb-4">Payments are due at the time of session. We accept multiple payment methods to ensure a smooth experience for you.</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {paymentMethods.map((method: string, i: number) => (
                                    <li key={i} className="flex items-center gap-2 mb-3">
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--sage-green)' }}></div>
                                        <span>{method}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <CalendarX color="var(--warm-terracotta)" />
                                <h2 style={{ marginBottom: 0 }}>Cancellation Policy</h2>
                            </div>
                            <div className="card" style={{ backgroundColor: 'white', border: '1px solid rgba(192, 143, 106, 0.2)', padding: '2rem' }}>
                                {data?.cancellationPolicy ? (
                                    <PortableText value={data.cancellationPolicy} components={portableTextComponents} />
                                ) : (
                                    <>
                                        <p>We respect your time and ours. If you need to cancel or reschedule, please provide at least <strong>24 hours&apos; notice</strong>.</p>
                                        <p style={{ marginBottom: 0 }}>Sessions cancelled with less than 24 hours&apos; notice will be charged at the full session rate. Thank you for your understanding.</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-bg-white">
                <div className="container">
                    <div className="card flex" style={{ flexDirection: 'row', alignItems: 'center', gap: '2rem', padding: '2rem', backgroundColor: 'var(--warm-cream)' }}>
                        <Info size={48} color="var(--eucalyptus-green)" />
                        <div>
                            <h3 className="mb-2">A Note on Insurance</h3>
                            <p style={{ marginBottom: 0 }}>While we do not currently bill insurance providers directly, we can provide you with a monthly &quot;superbill&quot; (itemized receipt) that you may submit to your insurance company for potential out-of-network reimbursement. Please check with your provider regarding their mental health benefits.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

