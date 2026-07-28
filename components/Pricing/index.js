import React from 'react'
import Link from 'next/link'



const Pricing = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    const pricing = [
        {
            rate: '150',
            des: 'Perfect for small business websites and landing pages.',
            li1: 'Responsive HTML/CSS design',
            li2: 'WordPress setup & customization',
            li3: 'Basic on-page SEO',
            li4: 'Contact form integration',
            li5: 'Mobile-friendly layout',
            title: 'Starter',
            link: '/home',
        },
        {
            rate: '300',
            des: 'Ideal for CMS websites and e-commerce stores.',
            li1: 'WordPress / Shopify development',
            li2: 'Custom theme & plugin work',
            li3: 'Full SEO optimization',
            li4: 'Elementor / WP Bakery setup',
            li5: 'Performance optimization',
            title: 'Professional',
            link: '/home',
        },
        {
            rate: '500',
            des: 'For custom web apps and advanced Next.js projects.',
            li1: 'Next.js / React development',
            li2: 'API integration & Redux state',
            li3: 'Technical SEO audit',
            li4: 'Figma to code conversion',
            li5: 'Ongoing support & maintenance',
            title: 'Enterprise',
            link: '/home',
        },


    ]


    return (
        <section className="tp-pricing-section section-padding">
            <div className="container">
                <div className="tp-section-title">
                    <span>Services</span>
                    <h2>What I Offer</h2>
                </div>
                <div className="tp-pricing-wrap">
                    <div className="row">
                        {pricing.map((pricing, ptem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={ptem}>
                                <div className="tp-pricing-item">
                                    <div className="tp-pricing-top">
                                        <div className="pricing-thumb">
                                            <span>{pricing.title}</span>
                                        </div>
                                        <div className="tp-pricing-text">
                                            <h2>${pricing.rate}<span>/starting from</span></h2>
                                            <p>{pricing.des}</p>
                                        </div>
                                    </div>
                                    <div className="tp-pricing-bottom">
                                        <div className="tp-pricing-bottom-text">
                                            <ul>
                                                <li>{pricing.li1}</li>
                                                <li>{pricing.li2}</li>
                                                <li>{pricing.li3}</li>
                                                <li>{pricing.li5}</li>
                                                <li>{pricing.li4}</li>
                                            </ul>
                                            <Link onClick={ClickHandler} href={pricing.link}>Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>Services</h1>
            </div>
        </section>
    )
}

export default Pricing;
