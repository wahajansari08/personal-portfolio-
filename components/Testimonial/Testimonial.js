import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonials = [
    {
        name: 'Sarah Mitchell',
        title: 'Project Manager, Cognitive IT Solutions',
        descriptoion: '"Wahaj is an outstanding Next.js developer. He helped us monetize WordPress sites and build scalable web apps that exceeded our client expectations. Highly reliable and detail-oriented."',
    },
    {
        name: 'James Carter',
        title: 'Director, MarediaSoft',
        descriptoion: '"We worked with Wahaj on WordPress, Shopify, and Wix projects. He handled diverse client requirements with ease and always delivered polished, on-brand websites on time."',
    },
    {
        name: 'Fatima Rizvi',
        title: 'Team Lead, Intersys / Abtach Limited',
        descriptoion: '"Wahaj collaborated seamlessly with our sales, design, and animation teams. His CMS development skills and attention to revisions made every project a smooth experience."',
    },
    {
        name: 'David Robertson',
        title: 'Founder, Webbgenie LTD',
        descriptoion: '"Beyond development, Wahaj brought strong SEO expertise that noticeably improved our clients\' organic traffic. A true full-stack professional who understands business goals."',
    },
    {
        name: 'Ali Hassan',
        title: 'CEO, ePAGING Pvt. LTD',
        descriptoion: '"From WordPress builds to HTML sites and SEO optimization, Wahaj proved himself as a versatile developer. Our clients were always satisfied with the quality of his work."',
    },
    {
        name: 'Zainab Malik',
        title: 'Marketing Head, Nexosol',
        descriptoion: '"Even as an intern, Wahaj showed great initiative in WordPress, post design, and SEO. It was clear early on that he had the drive and skills to become an excellent developer."',
    },
]



const Testimonial = () => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <section className="tp-testimonial-section section-padding">
            <div className="container">
                <div className="tp-section-title">
                    <span>Testimonials</span>
                    <h2>What My Clients Say</h2>
                </div>

                <div className="tp-testimonial-wrap">
                    <Slider {...settings}>
                        {Testimonials.map((tstml, tsm) => (
                            <div className="tp-testimonial-item" key={tsm}>
                                <div className="tp-testimonial-text">
                                    <p>{tstml.descriptoion}</p>
                                    <span>{tstml.name}</span>
                                    <small>{tstml.title}</small>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>Review</h1>
            </div>
        </section>
    )
}

export default Testimonial;
