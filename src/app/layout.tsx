import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "ADITYA YADAV",
  url: "https://github.com/Aditya-7-Yadav",
  image: "https://github.com/Aditya-7-Yadav/images/placeholder.svg",
  sameAs: [
    "https://www.instagram.com/arc_wizard_",
    "https://github.com/Aditya-7-Yadav",
    "https://www.linkedin.com/in/aditya7yadav/",
  ],
  jobTitle: "Founder & Software Developer",
  worksFor: {
    "@type": "Organization",
    name: "Aditya Yadav",
    url: "",
  },
  description:
    "Aditya Yadav — Full-Stack Web & Android Developer. I build fast, modern, and user-focused digital experiences that stand out.",
};

export const metadata: Metadata = {
  title: "Official Site of Aditya Yadav",
  description:
    "Aditya Yadav — Full-Stack Web & Android Developer. I build fast, modern, and user-focused digital experiences that stand out.",
  keywords: [
    "Official Site of Aditya Yadav",
    "aditya yadav",
    "Portfolio website",
    "Developer website",
    "Websites Development",
    "Android Development",
  ],
  metadataBase: new URL("https://github.com/Aditya-7-Yadav"),
  alternates: {
    canonical: "https://github.com/Aditya-7-Yadav",
  },
  openGraph: {
    type: "website",
    url: "https://github.com/Aditya-7-Yadav",
    title: "Official Site of Aditya Yadav",
    description:
      "Aditya Yadav — Full-Stack Web & Android Developer. I build fast, modern, and user-focused digital experiences that stand out.",
    siteName: "github.com/Aditya-7-Yadav",
    images: [
      {
        url: "/images/placeholder.svg",
        width: 800,
        height: 800,
        alt: "Aditya Yadav",
      },
    ],
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "bu-25FFf4PhQHh1K0g0TkBl234K940ET9TRibw34ExM",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Aditya",
  },
  icons: {
    icon: "/images/placeholder.svg",
    apple: "/images/placeholder.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased grid-background`}
      >
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
