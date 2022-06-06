import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Common/Header/Header";
import Hero__Slider from "../Block/Slider/Hero__Slider";
import Meta_Data from "../Common/Meta_Data";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                <Col className="left__side inner__wrapper" lg={6}>
                  <div className="inner__body">
                    <img
                      src="/assets/images/intro_product/intro_product-1.png"
                      alt=""
                      className="img-fluid"
                    />
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
                    <img
                      src="/assets/images/intro_product/intro_product-2.png"
                      alt=""
                      className="img-fluid"
                    />
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
    </>
  );
};

export default Home;
