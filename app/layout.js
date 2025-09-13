// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Happy (HPY)',
  description: 'Community-driven token on Solana',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
