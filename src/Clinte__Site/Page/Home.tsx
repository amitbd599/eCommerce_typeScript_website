import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Common/Header/Header";
import Hero__Slider from "../Widget/Slider/Hero__Slider";
import Meta_Data from "../Common/Meta_Data";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product__Slider__One from "../Widget/Slider/Product__Slider__One";
import Arrivals__Products from "../Components/Arrivals__Products";
import BestSeller__products from "../Components/BestSeller__products";
import Customer__Review from "../Components/Customer__Review";
import Trending__products from "../Components/Trending__products";

const Home: React.FC = () => {
  return (
    <>
      {/* Helmet Intro Start */}
      <Meta_Data title={"Home"} />
      {/* Helmet Intro End*/}

      {/* Header Section start */}
      <Header />
      {/* Header Section End */}

      {/* Slider section Start */}
      <Hero__Slider />
      {/* Slider section End */}

      {/* Intro Product Start */}
      <div className="intro__product">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row>
                <Col
                  className="left__side inner__wrapper"
                  lg={6}
                  md={6}
                  sm={12}
                >
                  <div className="inner__body">
                    <div className="img__file">
                      <img
                        src="/assets/images/intro_product/intro_product-1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="text__body">
                      <h2>Top Accessories For Girls</h2>
                      <h3>Women Fashion Hair Accessories</h3>
                      <Link to={"/"} className="button__mid_solid_color_black">
                        SHOP NOW{" "}
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col className="right__side inner__wrapper" lg={6}>
                  <div className="inner__body">
                    <div className="img__file">
                      <img
                        src="/assets/images/intro_product/intro_product-2.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="text__body">
                      <h2>Shoe For Boys Stylish</h2>
                      <h3>Men Weightless Top Shoes</h3>
                      <Link to={"/"} className="button__mid_solid_color_black">
                        SHOP NOW{" "}
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      {/* Intro Product End */}

      {/* Top Category Product Slider Start */}
      <Product__Slider__One />
      {/* Top Category Product Slider End */}

      {/* Arrivals Products Start */}
      <Arrivals__Products />
      {/* Arrivals Products End */}

      {/* Product Banner Start */}
      <div className="product__banner">
        <div className="wrapper">
          <div className="wrapper__body">
            <div className="inner__body">
              <img
                className="img-fluid"
                src="/assets/images/bannerImg/banner_1.png"
                alt=""
              />
              <div className="text__inner">
                <h2>Score An Extra 30% Off Your Entire Order</h2>

                <Link className="button__mid_solid_color_black" to={"/"}>
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Banner End */}

      {/* Bestseller Products Start  */}

      <BestSeller__products />

      {/* Bestseller Products End  */}

      {/* Customer Review Start */}

      <Customer__Review />

      {/* Customer Review End */}

      {/* Trending products Start */}

      <Trending__products />

      {/* Trending products End */}

      <br />
    </>
  );
};

export default Home;
