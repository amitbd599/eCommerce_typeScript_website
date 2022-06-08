import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFillStarFill, BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Slider__Setting from "../Script/Slider__Setting";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const BestSeller__products = () => {
  const { bestSeller__product__setting } = Slider__Setting();
  return (
    <>
      <div className="bestSeller__product">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row>
                <Col lg={5} className="left__side">
                  <div className="inner__body">
                    <h2>Daily Deals!</h2>

                    <Slider {...bestSeller__product__setting[0]}>
                      <div className="products">
                        <div className="product__data">
                          <div className="timeZoon">Time</div>
                          <Link to={"/"} className="title">
                            Realme Mobile Game Trigger Black
                          </Link>
                          <p className="price">$350.00</p>
                          <div className="rate">
                            <BsFillStarFill className="icon" />
                            <BsFillStarFill className="icon" />
                            <BsFillStarFill className="icon" />
                            <BsFillStarFill className="icon" />
                            <BsFillStarFill className="icon" />
                          </div>
                          <Link to={"/"} className="bag">
                            <BsHandbag className="icon" />
                          </Link>
                        </div>
                        <div className="img_file">
                          <img
                            className="img-fluid"
                            src="https://htmldemo.net/elehaus/elehaus/assets/images/shop/d4.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="products">
                        <div className="product__data">
                          <div className="timeZoon">Time</div>
                          <Link to={"/"} className="title">
                            Realme Mobile Game Trigger Black
                          </Link>
                          <p className="price">$350.00</p>
                          <div className="rate">
                            <BsFillStarFill className="icon" />
                            <BsFillStarFill className="icon" />
                            <BsFillStarFill className="icon" />
                            <BsFillStarFill className="icon" />
                            <BsFillStarFill className="icon" />
                          </div>
                          <Link to={"/"} className="bag">
                            <BsHandbag className="icon" />
                          </Link>
                        </div>
                        <div className="img_file">
                          <img
                            className="img-fluid"
                            src="https://htmldemo.net/elehaus/elehaus/assets/images/shop/d4.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="products">
                        <div className="product__data">
                          <div className="timeZoon">Time</div>
                          <Link to={"/"} className="title">
                            Realme Mobile Game Trigger Black
                          </Link>
                          <p className="price">$350.00</p>
                          <div className="rate">
                            <BsFillStarFill className="icon" />
                            <BsFillStarFill className="icon" />
                            <BsFillStarFill className="icon" />
                            <BsFillStarFill className="icon" />
                            <BsFillStarFill className="icon" />
                          </div>
                          <Link to={"/"} className="bag">
                            <BsHandbag className="icon" />
                          </Link>
                        </div>
                        <div className="img_file">
                          <img
                            className="img-fluid"
                            src="https://htmldemo.net/elehaus/elehaus/assets/images/shop/d4.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </Slider>
                  </div>
                </Col>
                <Col lg={7}>
                  <div className="right__side">
                    <div className="inner__body">
                      <Tabs>
                        <div className="header__section">
                          <TabList>
                            <Tab>Audio & Video</Tab>
                            <Tab>Women Items</Tab>
                            <Tab>Baby Items</Tab>
                          </TabList>
                        </div>
                        <div className="body__section">
                          <TabPanel>
                            <div className="inner__tab__data">
                              <div className="products__items">
                                <div className="products">
                                  <div className="img__file">
                                    <img
                                      className="img-fluid"
                                      src="https://htmldemo.net/elehaus/elehaus/assets/images/shop/p7.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="text__file">
                                    <Link to={"/"} className="title">
                                      D-Phone Android Latest UI New XP
                                    </Link>
                                    <p className="price">$330.00</p>
                                    <div className="rate">
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="inner__tab__data">
                              <div className="products__items">
                                <div className="products">
                                  <div className="img__file">
                                    <img
                                      className="img-fluid"
                                      src="https://htmldemo.net/elehaus/elehaus/assets/images/shop/p7.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="text__file">
                                    <p className="title">
                                      D-Phone Android Latest UI New XP
                                    </p>
                                    <p className="price">$330.00</p>
                                    <div className="rate">
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="inner__tab__data">
                              <div className="products__items">
                                <div className="products">
                                  <div className="img__file">
                                    <img
                                      className="img-fluid"
                                      src="https://htmldemo.net/elehaus/elehaus/assets/images/shop/p7.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="text__file">
                                    <p className="title">
                                      D-Phone Android Latest UI New XP
                                    </p>
                                    <p className="price">$330.00</p>
                                    <div className="rate">
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="inner__tab__data">
                              <div className="products__items">
                                <div className="products">
                                  <div className="img__file">
                                    <img
                                      className="img-fluid"
                                      src="https://htmldemo.net/elehaus/elehaus/assets/images/shop/p7.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="text__file">
                                    <p className="title">
                                      D-Phone Android Latest UI New XP
                                    </p>
                                    <p className="price">$330.00</p>
                                    <div className="rate">
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="inner__tab__data">
                              <div className="products__items">
                                <div className="products">
                                  <div className="img__file">
                                    <img
                                      className="img-fluid"
                                      src="https://htmldemo.net/elehaus/elehaus/assets/images/shop/p7.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="text__file">
                                    <p className="title">
                                      D-Phone Android Latest UI New XP
                                    </p>
                                    <p className="price">$330.00</p>
                                    <div className="rate">
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                          <TabPanel>
                            <div className="inner__tab__data">
                              <div className="products__items">
                                <div className="products">
                                  <div className="img__file">
                                    <img
                                      className="img-fluid"
                                      src="https://htmldemo.net/elehaus/elehaus/assets/images/shop/p7.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="text__file">
                                    <Link to={"/"} className="title">
                                      D-Phone Android Latest UI New XP
                                    </Link>
                                    <p className="price">$330.00</p>
                                    <div className="rate">
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                      <BsFillStarFill className="icon" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                        </div>
                      </Tabs>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller__products;
