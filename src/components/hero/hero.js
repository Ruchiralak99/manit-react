import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
import LikeShape from "../../images/slider/like.svg";
import liderd12 from "../../images/slider/1.png";
import Arrow from "../../images/slider/award.svg";

import himg1 from "../../images/slider/img-1.jpg";
import himg2 from "../../images/slider/img-2.jpg";
import himg3 from "../../images/slider/img-3.jpg";
import himg4 from "../../images/slider/img-4.jpg";
import himg5 from "../../images/slider/img-2.jpg";

const Hero = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const Seting = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <section className="static-hero">
      <div className="container-fluid">
        <div className="content">
          <div className="sub-title">
            <h2> Get in Touch Together,</h2>{" "}
          </div>{" "}
          <p>
            {" "}
            We Can Build a Better Sri Lanka We want to hear from you! Your
            opinions and feedback are essential as we strive to foster positive
            change and enhance our community. Let’s unite and create a lasting
            impact together.{" "}
          </p>{" "}
          <div className="hero-btn">
            <Link to="/about" className="theme-btn" onClick={ClickHandler}>
              {" "}
              Get Started <i className="ti-arrow-right"> </i>
            </Link>
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="image">
        <img src={liderd12} alt="" />
        <div className="bg-shape">
          <svg width="652" height="668" viewBox="0 0 652 668" fill="none">
            <path d="M0 367.646C0 360.448 3.86838 353.805 10.129 350.252L622.129 2.95135C635.462 -4.6148 652 5.01565 652 20.3457V648C652 659.046 643.046 668 632 668H20C8.95432 668 0 659.046 0 648V367.646Z" />
          </svg>{" "}
        </div>{" "}
      </div>{" "}
      <div className="hero-slider">
        <Slider {...Seting}>
          <div className="item">
            <img src={himg1} alt="" />
          </div>{" "}
          <div className="item">
            <img src={himg2} alt="" />
          </div>{" "}
          <div className="item">
            <img src={himg3} alt="" />
          </div>{" "}
          <div className="item">
            <img src={himg4} alt="" />
          </div>{" "}
          <div className="item">
            <img src={himg5} alt="" />
          </div>{" "}
        </Slider>{" "}
      </div>{" "}
      <div className="award">
        <div className="icon">
          <img src={Arrow} alt="" />
        </div>{" "}
        <div className="text">
          <h3>
            {" "}
            <span>
              {" "}
              <CountUp enableScrollSpy end={25} />
            </span>{" "}
            +{" "}
          </h3>{" "}
          <span> Years Of Experience </span>{" "}
        </div>{" "}
      </div>{" "}
      <div className="shape-1">
        <svg width="362" height="481" viewBox="0 0 362 481" fill="none">
          <circle cx="121.5" cy="240.5" r="240.5" fill="url(#paint_505)" />
          <defs>
            <radialGradient
              id="paint_505"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(121.5 240.5) rotate(90) scale(240.5)"
            >
              <stop offset="0" stopColor="#CED0FF" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>{" "}
          </defs>{" "}
        </svg>{" "}
      </div>{" "}
      <div className="shape-2">
        <svg width="593" height="593" viewBox="0 0 593 593" fill="none">
          <circle cx="296.5" cy="296.5" r="296.5" fill="url(#paint0_318)" />
          <defs>
            <radialGradient
              id="paint0_318"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(296.5 296.5) rotate(90) scale(296.5)"
            >
              <stop offset="0" stopColor="#CED0FF" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>{" "}
          </defs>{" "}
        </svg>{" "}
      </div>{" "}
      <div className="shape-3">
        <svg width="358" height="484" viewBox="0 0 358 484" fill="none">
          <circle cx="296.5" cy="187.5" r="296.5" fill="url(#paint0_rad)" />
          <defs>
            <radialGradient
              id="paint0_rad"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(296.5 187.5) rotate(90) scale(296.5)"
            >
              <stop offset="0" stopColor="#FBB132" stopOpacity="0.2" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>{" "}
          </defs>{" "}
        </svg>
      </div>{" "}
    </section>
  );
};

export default Hero;
