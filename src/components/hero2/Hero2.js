import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// image
import hero1 from '../../images/slider/1.jpg'
import hero2 from '../../images/slider/2.jpg'
import hero3 from '../../images/slider/3.jpg'

import himg1 from '../../images/slider/img-1.jpg'
import himg2 from '../../images/slider/img-2.jpg'
import himg3 from '../../images/slider/img-3.jpg'
import himg4 from '../../images/slider/img-4.jpg'
import himg5 from '../../images/slider/img-2.jpg'


const HeroSectionS2 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const Seting = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    }
    return (
        <section className="static-hero-s2">
            <div className="container-fluid">
                <div className="content">
                    <h2 className="title">We Are The <span className="text-bg1">Perfect</span>
                        <span className="text-bg2">Solution</span> For Your
                        Project</h2>
                    <p>Creating an agency is a long-term commitment and requires hard work, dedication, and
                        patience. But with the right planning and execution, we can build a successful and thriving
                        agency.</p>
                    <div className="hero-bottom">
                        <div className="hero-btn">
                            <Link to="/about" className="theme-btn" onClick={ClickHandler}>Get Started <i className="ti-arrow-right"></i></Link>
                        </div>
                        <div className="hero-slider">
                            <Slider {...Seting}>
                                <div className="item" >
                                    <img src={himg1} alt="" />
                                </div>
                                <div className="item" >
                                    <img src={himg2} alt="" />
                                </div>
                                <div className="item" >
                                    <img src={himg3} alt="" />
                                </div>
                                <div className="item" >
                                    <img src={himg4} alt="" />
                                </div>
                                <div className="item" >
                                    <img src={himg5} alt="" />
                                </div>
                            </Slider>

                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-one">
                        <img src={hero1} alt="" />
                    </div>
                    <div className="image-two">
                        <img src={hero2} alt="" />
                    </div>
                    <div className="image-three">
                        <img src={hero3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSectionS2;

