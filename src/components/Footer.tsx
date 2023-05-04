import Logo from '../assets/logo.png';
import '../assets/styles/footer.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <footer className='footer-container'>
            <div className="footer_text-part">
                <div className="footer-titles__brown">
                    <a href="#">Financial Services</a>
                    <a href="#">Investment Planning</a>
                    <a href="#">Tax & Accountancy</a>
                    <a href="#">Insurance Guidance</a>
                    <a href="#">Asset Management</a>
                    <a href="#">Brokerage</a>
                </div>
                <div className='footer-desc'>
                    <div className="icon-container">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="desc__footer">WE ARE DEDICATED TO HELPING BUSINESSES AND INDIVIDUALS NAVIGATE THE COMPLEX WORLD OF FINANCE</div>
                    <div className='footer__contact'>
                        <div className="phone">555-346-7495</div>
                        <div className="email">contact@info.com</div>
                    </div>
                </div>
                <div className='footer_pages__links'>
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/aboutUs">About Us</Link>
                    <Link to="/clients">Clients</Link>
                    <Link to="/careers">Careers</Link>
                    <Link to="/contactUs">Contact Us</Link>
                </div>
            </div>
            <hr />
            <div className="footer_icon-part">
            <div className='ast-footer-copywrite'>Copyright © 2023 Finance & Consulting</div>
                <div className='ast-footer-icons'>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagramSquare} />
                </div>
                <div className='ast-footer-copywrite'>Powered by Finance & Consulting</div>
            </div>
        </footer>
    )
}

export default Footer;