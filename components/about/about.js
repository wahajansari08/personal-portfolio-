import Image from 'next/image';
import React from 'react'
import aImg from '/public/images/about/img-1.jpg'

const About = (props) => {
    return (

        <section className="tf-about-section section-padding">
            <div className="container">
                <div className="tf-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-img">
                                <Image src={aImg} alt="" />
                                <div className="tf-about-img-text">
                                    <div className="tf-about-icon">
                                        <h3>5+</h3>
                                        <span>Years Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-text">
                                <small>About Me</small>
                                <h2>Hi, I'm Wahaj..</h2>
                                <h5>Experienced professional in MERN/CMS development and SEO strategies.</h5>
                                <p>Dedicated and results-driven professional with extensive experience in CMS development
                                    and SEO strategies. Proven track record of delivering high-quality websites that are
                                    both visually engaging and optimized for search engines. Currently working as a Next.js
                                    developer at Cognitive IT Solutions, with a strong background in WordPress, Shopify,
                                    and modern JavaScript frameworks.</p>

                                <div className="tf-funfact">
                                    <div className="tf-funfact-item">
                                        <h3><span>200</span>+</h3>
                                        <p>Websites Delivered</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        <h3><span>11</span>+</h3>
                                        <p>Companies Worked</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        <h3><span>30</span>+</h3>
                                        <p>Tech Skills</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>About Me</h1>
            </div>
        </section>
    )
}

export default About;