import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'C&J',
  description: 'Clothes C&J',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
