import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/home.scss';


const Home = () => {
    //const faPropIcon = FontAwesomeIcon as IconProp;

    const clickHandler =() => {
        alert('clickHandlerclickHandler');
    }

    return(
        <>
            <div className="header-title">
                <h1>
                    We’re a finance and consulting company based in Manhattan, New York.
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>
                <button className="home-header-btn custom-btn">Read More</button>
            </div>
            <div className="home-container">
                <div className="home-desc">
                    <div className="section section-border-both-sides d-flex justify-content-start flex-column align-items-start">
                        <div className="title">About us</div>
                        <div className="desc">
                            We have different experts for different financial services duis ut tincidunt est aenean molestie purus odio.
                        </div>
                    </div>
                    <div className="section section-border-one-side d-flex justify-content-start flex-column align-items-start">
                        <p className="title">WHAT WE DO</p>
                        <h2 className="desc desc-big">
                            We have different experts for different financial services duis ut tincidunt est aenean molestie purus odio.
                        </h2>
                        <h3 className="desc">We provide personalized solutions that are tailored to the unique needs of each of our clients. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat, velit in interdum pretium, urna turpis faucibus augue, nec rhoncus lacus libero at lorem. Phasellus volutpat.</h3>
                        <button className='section-btn'>Read More</button>
                    </div>
                    <div className="section right d-flex justify-content-start flex-column align-items-start">
                        <div className="title">SERVICES</div>
                        <div className="desc desc-big">
                            We offer a wide variety of financial services
                        </div>
                        <div className="services-detail d-flex justify-content-start align-items-start">
                            <div className="service mt-2 d-flex justify-content-around flex-column align-items-start">
                                <div className='service-number'>01</div>
                                <div className="service-desc">
                                    <div>Financial Strategies</div>
                                    <div>Ut consequat, velit in interdum pretium, urna turpis faucibus augue, nec rhoncus.</div>
                                </div>
                            </div>
                            <div className="service mt-2">
                                <div className='service-number'>02</div>
                                <div className="service-desc">
                                    <div>Financial Strategies</div>
                                    <div>Ut consequat, velit in interdum pretium, urna turpis faucibus augue, nec rhoncus.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section d-flex justify-content-end flex-column align-items-end">
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div className="services-detail d-flex justify-content-end align-items-start">
                            <div className="service mt-2 d-flex justify-content-around flex-column align-items-start">
                                <div className='service-number'>01</div>
                                <div className="service-desc">
                                    <div>Financial Strategies</div>
                                    <div>Ut consequat, velit in interdum pretium, urna turpis faucibus augue, nec rhoncus.</div>
                                </div>
                            </div>
                            <div className="service mt-2">
                                <div className='service-number'>02</div>
                                <div className="service-desc">
                                    <div>Financial Strategies</div>
                                    <div>Ut consequat, velit in interdum pretium, urna turpis faucibus augue, nec rhoncus.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-featured-container'>
                    <div className="home-featured">
                        <div 
                            className='section p-3 d-flex flex-column justify-content-start align-items-start border-end border-top border-white-color'>
                            <div className="featured-title">PROJECTS</div>
                            <div className="featured-desc">Featured case studies</div>
                        </div>
                        <div 
                            className='section p-3 h-100 border-top border-white-color'>&nbsp;</div>
                        <div className='section p-3 h-100 border-end border-top border-white-color'>&nbsp;</div>
                        <div className='section p-3 d-flex flex-column justify-content-start align-items-start border-top border-white-color'>
                            <div className="featured-title_with-btn">Dynamic Corp</div>
                            <div className="featured-desc_with-btn">
                                <div className="desc-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellusleo.</div>
                                <div className="desc-btn d-flex justify-content-end align-items-center" onClick={clickHandler}>
                                    <span>CASE STUDY</span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                        <div className='section p-3 h-100 border-end border-top border-white-color'>&nbsp;</div>
                        <div className='section p-3 d-flex flex-column justify-content-start align-items-start border-top border-white-color'>
                            <div className="featured-title_with-btn">ACME Industries</div>
                            <div className="featured-desc_with-btn">
                            <div className="desc-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellusleo.</div>
                                <div className="desc-btn d-flex justify-content-end align-items-center">
                                    <span>CASE STUDY</span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                        <div className='section p-3 h-100 border-end border-top border-white-color'>&nbsp;</div>
                        <div className='section p-3 d-flex flex-column justify-content-start align-items-start border-top border-white-color'>
                            <div className="featured-title_with-btn">Dynamic Corp</div>
                            <div className="featured-desc_with-btn">
                            <div className="desc-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellusleo.</div>
                                <div className="desc-btn d-flex justify-content-end align-items-center">
                                    <span>CASE STUDY</span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-account-container">
                    <div className="home-account">
                            <span></span>
                            <h1 className="acc-title">Open your account today and experience the future of finance!</h1>
                            <p className='acc-desc'>Ut id dui quis ex sodales ornare ac quis libero. Pellentesque sagittis efficitur ex eget hendrerit.</p>
                            <button className="acc-btn">open account</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;