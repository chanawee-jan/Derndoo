import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-area bg-f7fafd">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                {/* <div className="logo">
                                    <Link href="#">
                                        <a>
                                            <img src={'https://storage.googleapis.com/derndoostorage/images/logo_lat.png'} alt="logo" />
                                        </a>
                                    </Link>
                                </div> */}
                                <h3> Who are we?</h3>
                                <p>     At derndoo, our mission is to experience life through immersive story. We aim to provide platform for those who experienced and capture the world around us, bringing them together to create the world story; so that people everywhere can experience life socially and interactively through narrative expertists, can be motivated, inspired and empowered to create a better world.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            {/* <div className="single-footer-widget pl-5">
                                <h3>Company</h3>
                                <ul className="list">
                                    <li>
                                        <Link href="/about">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/features">
                                            <a>Features</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing">
                                            <a>Our Pricing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <a>Latest News</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
                        </div>

                        <div className="col-lg-3 col-md-6">
                            {/* <div className="single-footer-widget">
                                <h3>Support</h3>
                                <ul className="list">
                                    <li>
                                        <Link href="/faq">
                                            <a>FAQ's</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Terms & Condition</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Community</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Address</h3>
                                
                                <ul className="footer-contact-info">
                                    <li> 
                                        <Icon.MapPin />
                                        80 ถนนลาดพร้าว ซอยลาดพร้าว 4 <br /> แขวงจอมพล เขตจตุจักร  <br /> กรุงเทพมหานคร 10900, ประเทศไทย
                                    </li>
                                    <li>
                                        <Icon.Mail />
                                        Email: <Link href="#"><a>derndoovr@gmail.com</a></Link>
                                    </li>
                                    <li> 
                                        <Icon.PhoneCall />
                                        Phone: <Link href="#"><a>(+66) 81-991-1074</a></Link>
                                    </li>
                                </ul>
                                <ul className="social-links">
                                    <li>                
                                            <a href="https://www.facebook.com/aroundme360" className="facebook" target="_blank">
                                                <Icon.Facebook />
                                            </a>
                                    </li>
                                    <li>
                                            <a href="https://twitter.com/aroundme360" className="twitter" target="_blank">
                                                <Icon.Twitter />
                                            </a>
                                    </li>
                                    <li>
                                            <a href="https://www.instagram.com/aroundme360_th/" className="instagram" target="_blank">
                                                <Icon.Instagram />
                                            </a>
                                    </li>
                                    <li>
                                            <a href="https://www.linkedin.com/company/aroundme360/" className="linkedin">
                                                <Icon.Linkedin />
                                            </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="copyright-area">
                                <p>Derndoo</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={'https://storage.googleapis.com/derndoostorage/images/map.png'} className="map" alt="map" />
                <div className="shape1"><img src={'https://storage.googleapis.com/derndoostorage/images/shape1.png'} alt="shape" /></div>
                <div className="shape8 rotateme"><img src={'https://storage.googleapis.com/derndoostorage/images/shape2.svg'} alt="shape" /></div>
            </footer>
        )
    }
}
