import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo/ContactInfo";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact | Wahaj Ansari",
  description: "Get in touch with me",
};

export default function ContactPage() {
  return (
    <>
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
