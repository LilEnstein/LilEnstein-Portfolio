import './globals.css';

export const metadata = {
  title: 'Nguyen Anh Sang · Junior AI Engineer',
  description: 'Junior AI Engineer building AI-native products at the intersection of LLM research and full-stack engineering. Open to remote opportunities.',
  keywords: ['AI Engineer', 'Machine Learning', 'LLM', 'RAG', 'Python', 'Vietnam', 'Remote'],
  openGraph: {
    title: 'Nguyen Anh Sang · Junior AI Engineer',
    description: 'Junior AI Engineer — LLMs, RAG, Python, TypeScript. Open to remote.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
