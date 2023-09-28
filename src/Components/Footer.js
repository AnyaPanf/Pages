import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"
import facebook_logo from "../assets/facebook_logo.png"
import instagram_logo from "../assets/instagram_logo.png"
import linkedin_logo from "../assets/linkedin_logo.png"
import twitter_logo from "../assets/twitter_logo.png"

export const Footer = () => {
    return (
            <footer className='footer'>
                <div className='container'>
                    <div className='footer__wrapper'>
                        <div className='footer__social'>
                        <NavLink to="/"><div className='footer__logo'>
                                <div className='footer__img'><img src={logo} alt="Logo" /></div>
                                <p className='footer__text'>Pages</p>
                            </div></ NavLink>
                            <div className='footer__icons'>
                                <div className='footer__icon'>
                                    <a href="#"><img src={facebook_logo} alt="Facebook logo" /></a>
                                </div>
                                <div className='footer__icon'>
                                    <a href="#"><img src={instagram_logo} alt="Instagram logo" /></a>
                                </div>
                                <div className='footer__icon'>
                                    <a href="#"><img src={linkedin_logo} alt="LinkedIn logo" /></a>
                                </div>
                                <div className='footer__icon'>
                                    <a href="#"><img src={twitter_logo} alt="Twitter logo" /></a>
                                </div>
                            </div>
                        </div>
                        <div className='footer__explore'>
                            <h3 className='footer__title'>Explore</h3>
                            <ul className='footer__nav'>
                                <li><NavLink to="/" className="footer__link">Home</NavLink></li>
                                <li><NavLink to="/books" className="footer__link">Books</NavLink></li>
                                <li><NavLink to="/posts" className="footer__link">Posts</NavLink></li>
                            </ul>
                        </div>
                        <div className='footer__contacts'>
                            <h3 className='footer__title'>Keep in Touch</h3>
                            <div className='footer__address'>
                                <p>Address:</p>
                                <p>24A, Kingstone St., Las Vegas, <br />NC 28202, USA</p>
                            </div>
                            <div className='footer__mail'>
                                <p>E-mail:</p>
                                <p>support@pages.com</p>
                            </div>
                            <div className='footer__phone'>
                                <p>Phone:</p>
                                <p>(+1) 123-4567-890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
}
