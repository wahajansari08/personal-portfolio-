import React from "react";
import NavLink from 'next/link'
import himg from '/public/images/slider/right-img.png'
import { Link } from 'react-scroll'
import Image from "next/image";

const Hero =() => {
    return (
        <section className="tp-hero-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-7 col-lg-7">
                        <div className="tp-hero-section-text">
                            <div className="tp-hero-title">
                                <h2>Full Stack Web Developer</h2>
                            </div>
                            <div className="tp-hero-sub">
                                <p>Wahaj Ahmed Ansari</p>
                            </div>
                            <div className="btns">
                                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-95} className="theme-btn">Contact Me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                    <Image src={himg} alt=""/>
                </div>
            </div>
            <div className="social-link">
                <ul>
                    <li><a href="mailto:wahajansari08@gmail.com">Email</a></li>
                    <li><a href="tel:+923162133633">Phone</a></li>
                    <li><NavLink href="https://www.linkedin.com/in/wahajansari08/">LinkedIn</NavLink></li>
                </ul>
            </div>
            <div className="visible-text">
                <h1>Developer</h1>
            </div>
        </section>
    )
}

export default Hero;