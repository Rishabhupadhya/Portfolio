import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Rishabh Upadhyay | Software Engineer",
  description: "Software Engineer portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
