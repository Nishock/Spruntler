import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"] });
const BackgroundStars =
  "https://2t3690zz96.ufs.sh/f/LisFD3Cqijuv5JnGfkejThxfJzjOcDXKFbYIku81MV9yASQ4";

export const metadata: Metadata = {
  title: "Spruntler - Empower Your Ideas",
  description:
    "Spruntler is your go-to platform for innovative solutions and creative ideas.",
  keywords: "Spruntler, Innovation, Solutions, Creative Ideas",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Spruntler - Empower Your Ideas",
    description: "Explore innovative solutions with Spruntler.",
    url: "https://spruntler.com",
    images: [
      {
        url: "https://2t3690zz96.ufs.sh/f/LisFD3CqijuvsVB64QMXdtpclPkgJfnsS4IxC3HrGA2Nu15e", 
        width: 1200,
        height: 630,
        alt: "Spruntler - Empower Your Ideas",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spruntler - Empower Your Ideas",
    description: "Explore innovative solutions with Spruntler.",
    images: ["https://2t3690zz96.ufs.sh/f/LisFD3CqijuvsVB64QMXdtpclPkgJfnsS4IxC3HrGA2Nu15e"], 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={clsx(
          inter.className,
          "antialiased text-white min-h-screen flex flex-col"
        )}
        style={{
          backgroundColor: "#000000", 
          backgroundImage: `url(${BackgroundStars})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {children}
      </body>
    </html>
  );
}
