import type { Metadata } from "next";
// RTL removed: no server-side cookie parsing needed
import { Open_Sans, Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/skins/circle.css";
import "@/styles/globals.css";
import "@/styles/skins/globalcolor.css";
// RTL styles removed
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import ClientInit from "@/components/common/ClientInit/ClientInit";
import ThemeToggle from "@/components/common/ThemeToggle/ThemeToggle";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Tunis- Personal Portfolio NextJS Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const htmlClass = [poppins.variable, openSans.variable].filter(Boolean).join(" ");

  return (
    <html lang="en" dir="ltr" data-theme="light" suppressHydrationWarning className={htmlClass}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className="has-default-menu light">
        <ClientInit />
        {/* <ThemeToggle /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
