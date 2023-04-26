import '../assets/styles/home.scss';


const Home = () => {
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
                        <div className="desc">
                            We offer a wide variety of financial services
                        </div>
                    </div>
                    <div className="section d-flex justify-content-start flex-column align-items-start">&nbsp;</div>
                </div>
            </div>
        </>
    )
}

export default Home;