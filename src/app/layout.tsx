
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'POS Enterprise | Sistema de gestión comercial',
  description:
    'Gestiona ventas, inventario, caja, clientes y reportes con POS Enterprise. Conoce nuestros planes mensual y anual y solicita una demostración.',
  applicationName: 'POS Enterprise',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
