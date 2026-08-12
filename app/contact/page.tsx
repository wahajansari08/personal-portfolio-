import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo/ContactInfo";
import { Reveal } from "@/components/motion";
import JsonLd from "@/components/common/JsonLd/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

const SITE_URL = "https://wahaj.pk";

export const metadata: Metadata = {
  title: "Contact — Hire a Web Developer & SEO Specialist",
  description:
    "Get in touch with Wahaj Ansari for web development or SEO services. Based in Karachi, Pakistan — available for projects worldwide. Email or call today.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: "Contact Wahaj Ansari — Web Developer & SEO Specialist",
    description:
      "Hire Wahaj Ansari for Next.js, WordPress, Shopify or SEO work. Based in Karachi — available worldwide.",
    images: [{ url: "/img/og-image.jpg", width: 1200, height: 630, alt: "Contact Wahaj Ansari" }],
  },
};

const contactFaqs = [
  {
    question: "How can I contact Wahaj Ansari?",
    answer:
      "You can contact Wahaj Ansari by filling in the contact form at wahaj.pk/contact, by emailing wahajansari08@gmail.com, or by calling +92 316 213 3633.",
  },
  {
    question: "Is Wahaj Ansari available for freelance projects?",
    answer:
      "Yes. Wahaj Ansari is available for freelance web development and SEO projects for clients in Pakistan and internationally.",
  },
  {
    question: "How quickly will I receive a response?",
    answer:
      "Enquiries are typically responded to within one business day. For urgent projects please include your timeline in the message.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }])} />
      <JsonLd schema={faqSchema(contactFaqs)} />
      {/* Page Title Starts */}
      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
        <Reveal className="position-relative" y={14}>
          <h1>
            get in <span>touch</span>
          </h1>
          <span className="title-bg">contact</span>
        </Reveal>
      </section>
      {/* Page Title Ends */}

      <main className="ib-main-content">
        <section className="main-content revealator-slideup revealator-once revealator-delay1">
          <div className="container">
            <div className="row contact-page-row align-items-start g-4 g-lg-5">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
