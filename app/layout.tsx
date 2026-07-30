import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Open_Sans, Poppins } from "next/font/google";
import Script from "next/script";
import { parseRtlCookieValue } from "@/lib/rtl-preference";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/skins/circle.css";
import "@/styles/globals.css";
import "@/styles/skins/globalcolor.css";
import "@/styles/rtl-layout.css";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import ClientInit from "@/components/common/ClientInit/ClientInit";
import ThemeToggle from "@/components/common/ThemeToggle/ThemeToggle";
import RtlToggle from "@/components/common/RtlToggle/RtlToggle";
import RtlTransitionProvider from "@/components/providers/RtlTransitionProvider";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const rtlCookie = cookieStore.get("portfolio-rtl")?.value;
  const isRtlServer = parseRtlCookieValue(rtlCookie);

  const htmlClass = [
    poppins.variable,
    openSans.variable,
    isRtlServer ? "rtl-mode" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <html
      lang="en"
      dir={isRtlServer ? "rtl" : "ltr"}
      data-theme="dark"
      suppressHydrationWarning
      className={htmlClass}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className="has-default-menu">
        <Script id="portfolio-rtl-init" strategy="beforeInteractive">
          {`(function(){try{var K="portfolio-rtl",M=31536000;var m=localStorage.getItem(K),rtl=false,c;if(m==="1"||m==="true")rtl=true;else if(m==="0")rtl=false;else if((c=document.cookie.match(/(?:^|;\\s*)portfolio-rtl=(0|1|true)(?:;|$)/i)))rtl=c[1]==="1"||c[1]==="true";document.documentElement.setAttribute("dir",rtl?"rtl":"ltr");document.documentElement.classList.toggle("rtl-mode",rtl);if(m==="1"||m==="true"||m==="0"){document.cookie=K+"="+(rtl?"1":"0")+";path=/;max-age="+M+";SameSite=Lax";}}catch(e){}})();`}
        </Script>
        <RtlTransitionProvider
          initialRtl={isRtlServer}
          chrome={
            <>
              <ClientInit />
              <ThemeToggle />
              <RtlToggle />
              <Navbar />
            </>
          }
          main={children}
          footer={<Footer />}
        />
      </body>
    </html>
  );
}
