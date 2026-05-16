import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog & Resources | Sankalpa Care",
    description: "Explore mental health resources, therapeutic insights, and wellness articles from Sankalpa Care.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
