import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mario Moreno Lazarte | Portfolio',
  description: 'Portfolio de Artes Plásticas y Arquitectura.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
