import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Abhiraj Jain | Full-Stack Developer",
  description: "Premium personal portfolio of Abhiraj Jain, a full-stack developer and AI/ML student.",
  metadataBase: new URL("https://abhiraj.dev"),
  openGraph: {
    title: "Abhiraj Jain | Full-Stack Developer",
    description: "Portfolio showcasing full-stack projects, engineering skills, and leadership experience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhiraj Jain | Full-Stack Developer",
    description: "Full-stack developer portfolio with projects, skills, and experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorant.variable} font-sans antialiased text-foreground bg-background`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
