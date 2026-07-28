// images
import blogImg1 from "/public/images/blog/img-1.jpg";
import blogImg2 from "/public/images/blog/img-2.jpg";
import blogImg3 from "/public/images/blog/img-3.jpg";
import blogImg4 from "/public/images/blog/img-4.jpg";
import blogImg5 from "/public/images/blog/img-5.jpg";
import blogImg6 from "/public/images/blog/img-6.jpg";

import blogSingleImg1 from "/public/images/blog-details/img-1.jpg";
import blogSingleImg2 from "/public/images/blog-details/img-2.jpg";
import blogSingleImg3 from "/public/images/blog-details/img-3.jpg";
import blogSingleImg4 from "/public/images/blog-details/img-4.jpg";
import blogSingleImg5 from "/public/images/blog-details/img-5.jpg";
import blogSingleImg6 from "/public/images/blog-details/img-6.jpg";


const blogs = [
    {
        id: '1',
        title: 'Bachelor\'s in Computer Science',
        screens: blogImg1,
        description: 'Virtual University of Pakistan — Completed 2021 to 2024 with focus on software development and web technologies.',
        author: 'Virtual University',
        thumb: 'Education',
        create_at: '2021 – 2024',
        blogSingleImg: blogSingleImg1,
        comment: '35',
        blClass: 'format-standard-image',
    },
    {
        id: '2',
        title: 'Diploma in CIT',
        screens: blogImg2,
        description: 'Aligarh Institute of Technology — Completed 2016 to 2018, building foundational skills in computing and IT.',
        author: 'AIT Karachi',
        thumb: 'Education',
        create_at: '2016 – 2018',
        blogSingleImg: blogSingleImg2,
        comment: '80',
        blClass: 'format-standard-image',
    },
    {
        id: '3',
        title: 'Frontend: React, Next.js & JavaScript',
        screens: blogImg3,
        description: 'Proficient in React JS, Next JS, Redux, HTML/CSS, Bootstrap, and Tailwind for modern web development.',
        author: 'Wahaj Ahmed',
        thumb: 'Skills',
        create_at: 'Core Stack',
        blogSingleImg: blogSingleImg3,
        comment: '95',
        blClass: 'format-video',
    },
    {
        id: '4',
        title: 'CMS: WordPress, Shopify & More',
        screens: blogImg4,
        description: 'Expert in WordPress, Elementor, WP Bakery, themes, plugins, Shopify, BigCommerce, Wix, and SquareSpace.',
        author: 'Wahaj Ahmed',
        thumb: 'Skills',
        create_at: 'CMS Platforms',
        blogSingleImg: blogSingleImg4,
        comment: '80',
        blClass: 'format-standard-image',
    },
    {
        id: '5',
        title: 'SEO: On-Page, Off-Page & Technical',
        screens: blogImg5,
        description: 'Skilled in on-page, off-page, and technical SEO to drive organic traffic and improve search rankings.',
        author: 'Wahaj Ahmed',
        thumb: 'Skills',
        create_at: 'SEO Expertise',
        blogSingleImg: blogSingleImg5,
        comment: '80',
        blClass: 'format-standard-image',
    },
    {
        id: '6',
        title: 'Design: Figma & Adobe Illustrator',
        screens: blogImg6,
        description: 'Creating clean UI designs and visual assets using Figma and Adobe Illustrator alongside development work.',
        author: 'Wahaj Ahmed',
        thumb: 'Skills',
        create_at: 'Design Tools',
        blogSingleImg: blogSingleImg6,
        comment: '95',
        blClass: 'format-video',
    },
];
export default blogs;
