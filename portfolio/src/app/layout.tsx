import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Rishabh Upadhyay | Software Engineer (Cloud, DevOps & Distributed Systems)",
  description:
    "Software Engineer specializing in scalable cloud infrastructure, DevOps automation, and backend systems used at enterprise scale.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
