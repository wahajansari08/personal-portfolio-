import sgImgS1 from '/public/images/service-single/web/img-1.jpg'
import sgImgS2 from '/public/images/service-single/web/img-2.jpg'
import sgImgS3 from '/public/images/service-single/web/img-3.jpg'

import brImgS1 from '/public/images/service-single/app/img-1.jpg'
import brImgS2 from '/public/images/service-single/app/img-2.jpg'
import brImgS3 from '/public/images/service-single/app/img-3.jpg'

import uxImgS1 from '/public/images/service-single/brand/img-1.jpg'
import uxImgS2 from '/public/images/service-single/brand/img-2.jpg'
import uxImgS3 from '/public/images/service-single/brand/img-3.jpg'

import dvImgS1 from '/public/images/service-single/market/img-1.jpg'
import dvImgS2 from '/public/images/service-single/market/img-2.jpg'
import dvImgS3 from '/public/images/service-single/market/img-3.jpg'


const Services = [
    {
        Id: '1',
        sImgS: sgImgS1,
        sTitle: 'MERN Stack Application',
        description: 'Full-stack web applications built with MongoDB, Express, React, and Node.js — from dashboards to SaaS platforms.',
        des2: 'RESTful APIs, authentication, database design, and responsive React frontends.',
        des3: 'End-to-end MERN development for startups and businesses needing scalable, custom web solutions.',
        icon: 'flaticon-coding',
        projects: '35',
        ssImg1: sgImgS2,
        ssImg2: sgImgS3,
    },
    {
        Id: '2',
        sImgS: brImgS1,
        sTitle: 'WordPress Development',
        description: 'Custom WordPress websites for businesses and online stores using WooCommerce, Elementor, block theme and WP Bakery.',
        des2: 'Theme customization, plugin development, payment gateways, and product catalog setup.',
        des3: 'Professional business and eCommerce sites optimized for conversions and easy content management.',
        icon: 'flaticon-vector',
        projects: '80',
        ssImg1: brImgS2,
        ssImg2: brImgS3,
    },
    {
        Id: '3',
        sImgS: uxImgS1,
        sTitle: 'Next.js Web Application',
        description: 'High-performance web apps with Next.js, React, and Redux — SSR, API routes, and modern UI with Tailwind CSS.',
        des2: 'Fast, SEO-friendly applications with server-side rendering and optimized page loads.',
        des3: 'Ideal for startups and agencies needing modern, scalable frontend applications.',
        icon: 'flaticon-software-developer',
        projects: '45',
        ssImg1: uxImgS2,
        ssImg2: uxImgS3,
    },
    {
        Id: '4',
        sImgS: dvImgS1,
        sTitle: 'Shopify eCommerce Store',
        description: 'Complete Shopify store setup, theme customization, and product management for online retail businesses.',
        des2: 'Store design, checkout optimization, app integration, and mobile-ready shopping experiences.',
        des3: 'Launch-ready eCommerce stores built to drive sales and provide smooth customer journeys.',
        icon: 'flaticon-promotion',
        projects: '50',
        ssImg1: dvImgS2,
        ssImg2: dvImgS3,
    }
]

export default Services;
