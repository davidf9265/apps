import { NextUIProvider } from '@nextui-org/react';
import './global.css';

export const metadata = {
  title: 'Welcome to lunari',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
