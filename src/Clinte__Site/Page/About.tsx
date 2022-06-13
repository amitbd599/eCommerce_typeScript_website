import { title } from "process";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";
import Product_Data from "../Script/Product__Data";
import Team__Data from "../Script/Team__Data";
const About: React.FC = () => {
  const { productImgFile } = Product_Data();

  return (
    <>
      {/* Helmet Intro Start */}

      <Meta_Data title={"Home"} />

      {/* Helmet Intro End*/}

      {/* Header Section start */}

      <Header />

      {/* Header Section End */}

      {/* Intro Section Start */}

      <Intro__Section title={"About Us"} />

      {/* Intro Section End */}

      {/* About Body Section Start */}
      <section className="about__section">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <div className="part__one">
                <Row>
                  <Col lg={5} className="left__side">
                    <div className="inner__body">
                      <img
                        className="img-fluid"
                        src="/assets/images/about__section/about__model-1.png"
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col lg={7} className="right__side">
                    <div className="inner__body">
                      <h2>
                        Elehaus Story, We Craft Awesome With Great Experiences.
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmo tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minimo veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        eatrl commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptat velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>

                      <div>
                        <Link
                          to={"/contact"}
                          className="button__mid_solid_color_black"
                        >
                          Contact Now
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="part__two">
                <Row>
                  <Col lg={7} className="left__side">
                    <div className="inner__body">
                      <h2>
                        Stand Male Casual Coats Street Chamarras Para Hombre.
                      </h2>

                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis tempore ab itaque quam consequuntur illo ipsa
                        debitis rem quae eaque eligendi doloremque aspernatur
                        voluptates recusandae labore quia aperiam, asperiores
                        excepturi laudantium nostrum cum assumenda commodi
                        voluptatibus? Voluptatem illo odio et!
                      </p>
                      <ul>
                        <li>
                          {" "}
                          <BsFillArrowRightCircleFill className="icon" /> Please
                          note 1cm=0.39inch; 1inch=2.54cm.
                        </li>
                        <li>
                          {" "}
                          <BsFillArrowRightCircleFill className="icon" />{" "}
                          Measurement (Unit: CM) Original design-100% Real
                          Photos.
                        </li>
                        <li>
                          {" "}
                          <BsFillArrowRightCircleFill className="icon" />
                          Please allow 1-2cm (0.4-0.8") differences due to
                          manual measurement.
                        </li>
                        <li>
                          {" "}
                          <BsFillArrowRightCircleFill className="icon" />
                          Item color displayed in photos may be showing the
                          correct color.
                        </li>
                        <li>
                          {" "}
                          <BsFillArrowRightCircleFill className="icon" />
                          Please contact us if you have any questions about our
                          available sizes.
                        </li>
                        <li>
                          {" "}
                          <BsFillArrowRightCircleFill className="icon" />
                          Awesome allow 1-2cm (0.4-0.8") differences due to auto
                          measurement.
                        </li>
                      </ul>

                      <div>
                        <Link
                          to={"/contact"}
                          className="button__mid_solid_color_black"
                        >
                          Get Discount
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col lg={5} className="right__side">
                    <div className="inner__body">
                      <img
                        className="img-fluid"
                        src="/assets/images/about__section/about__model-3.png"
                        alt=""
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="part__three">
                <Row>
                  <Col>
                    <div className="inner__body">
                      <h2>Our Team</h2>

                      <div className="team__items">
                        <Row>
                          {Team__Data.map((value, index) => (
                            <Col lg={3} md={4} sm={6} xs={6}>
                              <div className="img__file">
                                <img
                                  className="img-fluid"
                                  src={value.img}
                                  alt=""
                                />
                                <div className="text__file">
                                  <div className="inner__text">
                                    <h3>{value.name}</h3>
                                    <p>{value.position}</p>
                                    <div className="icon__file">
                                      <a href={value.fb_link}>
                                        <FaFacebookSquare className="icon" />
                                      </a>
                                      <a href={value.tw_link}>
                                        <FaTwitterSquare className="icon" />
                                      </a>
                                      <a href={value.li_link}>
                                        <FaLinkedin className="icon" />
                                      </a>
                                      <a href={value.in_link}>
                                        <FaInstagramSquare className="icon" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="part__four">
                <Row>
                  <div className="inner__body">
                    <div className="header">
                      <h2>
                        Smart Fashion With <br />{" "}
                        <span className="theme-text">Smart Devices</span>
                      </h2>
                      <div className="img__section">
                        <Row>
                          <Col>
                            <div className="leftImg__section">
                              {productImgFile.map((value, index) => (
                                <img
                                  key={index}
                                  className="img-fluid"
                                  src={value.src}
                                  alt=""
                                />
                              ))}
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* About Body Section End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default About;
