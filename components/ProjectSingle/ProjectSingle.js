
import React, { Fragment } from 'react';
import { Dialog, Grid, } from '@mui/material'
import Contact from './contact';
import RelatedProject from './related';
import Image from 'next/image';


const ProjectSingle = ({ maxWidth, open, onClose, title, pImg, psub1img1, psub1img2, description, client, location, projectType, duration, completion }) => {


    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >

                <Grid className="modalBody modal-body project-modal">
                    <button className='modal-close' onClick={onClose}><i className='fa fa-close'></i></button>
                    <div className="tp-project-single-area">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12">
                                    <div className="tp-project-single-wrap">
                                        <div className="tp-project-single-item">
                                            <div className="row align-items-center mb-5">
                                                <div className="col-lg-7">
                                                    <div className="tp-project-single-title">
                                                        <h3>{title}</h3>
                                                    </div>
                                                    <p>{description}</p>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="tp-project-single-content-des-right">
                                                        <ul>
                                                            <li>Location :<span>{location}</span></li>
                                                            <li>Client :<span>{client}</span></li>
                                                            <li>Project Type :<span>{projectType}</span></li>
                                                            <li>Duration :<span>{duration}</span></li>
                                                            <li>Completion :<span>{completion}</span></li>
                                                            <li>Developer :<span>Wahaj Ahmed Ansari</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tp-project-single-main-img">
                                                <Image src={pImg} alt="" />
                                            </div>
                                        </div>
                                        <div className="tp-project-single-item list-widget">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="tp-project-single-title">
                                                        <h3>Key Features</h3>
                                                    </div>
                                                    <p>Built with modern technologies and best practices to deliver a fast, secure, and user-friendly experience tailored to the client&apos;s business goals.</p>
                                                    <ul>
                                                        <li>Responsive design across all devices and screen sizes.</li>
                                                        <li>Clean, maintainable codebase with scalable architecture.</li>
                                                        <li>Performance optimized for fast load times and smooth UX.</li>
                                                        <li>SEO-friendly structure for better search visibility.</li>
                                                        <li>Thoroughly tested and deployed with client approval.</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="tp-project-single-item-quote">
                                                        <p>&quot;Wahaj delivered exactly what we needed — a professional, fast, and easy-to-manage website. Communication was clear throughout and the final result exceeded our expectations.&quot;</p>
                                                        <span>{client} — <span>{projectType}</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-project-single-item">
                                            <div className="tp-project-single-title">
                                                <h3>Project Overview</h3>
                                            </div>
                                            <p>{description} The project was delivered on schedule with full client satisfaction, including post-launch support and performance monitoring to ensure long-term success.</p>
                                        </div>
                                        <div className="tp-project-single-gallery">
                                            <div className="row mt-4">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="tp-p-details-img">
                                                        <Image src={psub1img1} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="tp-p-details-img">
                                                        <Image src={psub1img2} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-project-single-item list-widget">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="tp-project-single-title">
                                                        <h3>Goals Achieved</h3>
                                                    </div>
                                                    <ul>
                                                        <li>Delivered a fully functional product within the agreed timeline.</li>
                                                        <li>Implemented all requested features and design specifications.</li>
                                                        <li>Achieved mobile-responsive layout across all pages.</li>
                                                        <li>Optimized site performance and search engine visibility.</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 list-widget-s">
                                                    <div className="tp-project-single-title">
                                                        <h3>Results</h3>
                                                    </div>
                                                    <ul>
                                                        <li>Improved user engagement and site usability post-launch.</li>
                                                        <li>Client reported increased traffic and lead generation.</li>
                                                        <li>Streamlined content management for non-technical users.</li>
                                                        <li>Positive client feedback and ongoing maintenance support.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <RelatedProject />
                                        <div className="tp-project-single-item">
                                            <div className="tp-project-contact-area">
                                                <div className="tp-contact-title">
                                                    <h2>Have project in mind? Let's discuss</h2>
                                                    <p>Get in touch with us to see how we can help you with your project</p>
                                                </div>
                                                <div className="tp-contact-form-area">
                                                    <Contact />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default ProjectSingle;

