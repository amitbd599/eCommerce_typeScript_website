import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider__Setting from "../../Script/Slider__Setting";
import { Link } from "react-router-dom";

const Hero__Slider: React.FC = () => {
  const { Hero__Slider__setting } = Slider__Setting();

  return (
    <section className="hero__slider__section">
      <div className="wrapper">
        <div className="wrapper__body">
          <Slider {...Hero__Slider__setting[0]}>
            <div className="slider__inner_one bgImg-5">
              <div className="inner__body">
                <div className="text__info ">
                  <h2 className="">
                    1Score An Extra 60% Off Your Entire Order
                  </h2>
                  <h3>Get Awesome Product</h3>
                  <div className="btn">
                    <Link to={"/"} className="button__mid_border_color_white">
                      SHOP NOW
                    </Link>
                  </div>
                </div>
                <div className="round__shape">
                  <div className="round__shape_inner">
                    <div className="border__intro">
                      <h2>Get 60% Off</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slider__inner_two bgImg-2">
              <div className="inner__body">
                <div className="text__info ">
                  <div className="animation__hold">
                    <h2 className="">BUY</h2>
                    <h3>Flash Sale With Free Shipping</h3>
                    <Link to={"/"} className="button__mid_border_color_white">
                      SHOP NOW
                    </Link>
                  </div>
                </div>
                <div className="round__shape">
                  <div className="round__shape_inner">
                    <div className="border__intro">
                      <h2>Get 20% Off</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slider__inner_one bgImg-4">
              <div className="inner__body">
                <div className="text__info ">
                  <h2 className="">Rose Garden Scented Candle 30% Off</h2>
                  <h3>Buy Your Favorite Product</h3>
                  <Link to={"/"} className="button__mid_border_color_white">
                    SHOP NOW
                  </Link>
                </div>
                <div className="round__shape">
                  <div className="round__shape_inner">
                    <div className="border__intro">
                      <h2>Get 30% Off</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slider__inner_two bgImg-1">
              <div className="inner__body">
                <div className="text__info ">
                  <div className="animation__hold">
                    <h2 className="">Careers</h2>
                    <h3>Patterned Outsole For Durability</h3>
                    <Link to={"/"} className="button__mid_border_color_white">
                      SHOP NOW
                    </Link>
                  </div>
                </div>
                <div className="round__shape">
                  <div className="round__shape_inner">
                    <div className="border__intro">
                      <h2>Get 30% Off</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero__Slider;
