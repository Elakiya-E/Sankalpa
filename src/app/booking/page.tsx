"use client";

import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function BookingPage() {
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const dates = Array.from({ length: 30 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i);
        return d;
    });

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date.toDateString());
        setStep(2);
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
        setStep(3);
    };

    return (
        <div className="section bg-color" style={{ minHeight: '90vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="text-center mb-12">
                    <span className="section-tag">Scheduling</span>
                    <h1>Book a Consultation</h1>
                    <p>Select a time that works best for you. All sessions are strictly confidential.</p>
                </div>

                <div className="card" style={{ padding: '2rem', minHeight: '500px' }}>
                    {/* Progress Bar */}
                    <div className="flex justify-between mb-12" style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '50%', left: '0', width: '100%', height: '2px', backgroundColor: '#E5E7EB', zIndex: 0 }}></div>
                        <div style={{ position: 'absolute', top: '50%', left: '0', width: step === 1 ? '0%' : step === 2 ? '50%' : '100%', height: '2px', backgroundColor: 'var(--eucalyptus-green)', zIndex: 0, transition: 'width 0.3s' }}></div>

                        {[1, 2, 3].map((s) => (
                            <div key={s} style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                backgroundColor: step >= s ? 'var(--eucalyptus-green)' : 'white',
                                border: `2px solid ${step >= s ? 'var(--eucalyptus-green)' : '#E5E7EB'}`,
                                color: step >= s ? 'white' : '#9CA3AF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                zIndex: 1,
                                fontSize: '0.875rem'
                            }}>
                                {s}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between mb-8">
                        <h2 style={{ fontSize: '1.5rem', margin: 0 }}>
                            {step === 1 ? "Select Date" : step === 2 ? "Select Time" : "Confirm Booking"}
                        </h2>
                        {step > 1 && (
                            <button onClick={() => setStep(step - 1)} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                                <ChevronLeft size={16} /> Back
                            </button>
                        )}
                    </div>

                    {step === 1 && (
                        <div className="grid grid-cols-7 gap-2">
                            {days.map(d => (
                                <div key={d} className="text-center font-bold mb-2" style={{ fontSize: '0.875rem', color: '#6B7280' }}>{d}</div>
                            ))}
                            {dates.map((date, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleDateSelect(date)}
                                    className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${selectedDate === date.toDateString() ? 'border-eucalyptus-green bg-sage-green text-white' : 'border-gray-100 hover:border-sage-green'}`}
                                    style={{
                                        height: '80px',
                                        borderColor: selectedDate === date.toDateString() ? 'var(--eucalyptus-green)' : '#F3F4F6',
                                        backgroundColor: selectedDate === date.toDateString() ? 'var(--eucalyptus-green)' : 'white',
                                        color: selectedDate === date.toDateString() ? 'white' : 'inherit'
                                    }}
                                >
                                    <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>{date.toLocaleDateString('en-US', { month: 'short' })}</span>
                                    <span style={{ fontSize: '1.25rem', fontWeight: 600 }}>{date.getDate()}</span>
                                </button>
                            ))}
                        </div>
                    )}

                    {step === 2 && (
                        <div className="grid grid-cols-3 gap-4">
                            {timeSlots.map(time => (
                                <button
                                    key={time}
                                    onClick={() => handleTimeSelect(time)}
                                    className="btn"
                                    style={{
                                        backgroundColor: selectedTime === time ? 'var(--eucalyptus-green)' : 'white',
                                        color: selectedTime === time ? 'white' : 'var(--soft-charcoal)',
                                        border: '1px solid #E5E7EB',
                                        padding: '1.5rem'
                                    }}
                                >
                                    <Clock size={16} className="mr-2" /> {time}
                                </button>
                            ))}
                        </div>
                    )}

                    {step === 3 && (
                        <div className="text-center py-8">
                            <div style={{ marginBottom: '2rem' }}>
                                <CheckCircle2 color="var(--eucalyptus-green)" size={64} style={{ margin: '0 auto mb-4' }} />
                                <h3 className="mt-4">Session Details</h3>
                                <p className="mt-4">
                                    <strong>Date:</strong> {selectedDate}<br />
                                    <strong>Time:</strong> {selectedTime}<br />
                                    <strong>Location:</strong> Online via Secure Link
                                </p>
                            </div>

                            <form className="flex" style={{ flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }} onSubmit={(e) => {
                                e.preventDefault();
                                alert('Booking Confirmed!');
                            }}>
                                <input type="text" placeholder="Full Name" className="card" style={{ padding: '0.875rem', border: '1px solid #E5E7EB' }} required />
                                <input type="email" placeholder="Email Address" className="card" style={{ padding: '0.875rem', border: '1px solid #E5E7EB' }} required />

                                <div className="flex gap-4 mt-4">
                                    <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                                        Confirm Appointment
                                    </button>

                                    {/* Google Calendar Link Strategy */}
                                    <a
                                        href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=Therapy+Session+with+Sankalpa+Care&details=Confidential+Therapy+Consultation&dates=${new Date(selectedDate || '').toISOString().replace(/-|:|\.\d\d\d/g, "")}/${new Date(selectedDate || '').toISOString().replace(/-|:|\.\d\d\d/g, "")}`}
                                        target="_blank"
                                        className="btn btn-outline"
                                        style={{ flex: 1, display: 'flex', gap: '0.5rem', backgroundColor: '#fff' }}
                                    >
                                        <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" fill="#4285F4" /></svg>
                                        Add to GCal
                                    </a>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
