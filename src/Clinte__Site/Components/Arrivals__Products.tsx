import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsHandbag, BsHeart, BsSearch, BsShuffle } from "react-icons/bs";

const Arrivals__Products = () => {
  return (
    <section className="arrivals__Products">
      <div className="wrapper">
        <div className="wrapper__body">
          <Container>
            <Tabs>
              <Row className="part__one">
                <Col>
                  <div className="inner__body">
                    <h2>New Top Sales!</h2>
                    <TabList>
                      <Tab>All</Tab>
                      <Tab>Audio/Video</Tab>
                      <Tab>Gaming</Tab>
                      <Tab>Headphone</Tab>
                      <Tab>Digital Camera</Tab>
                    </TabList>
                  </div>
                </Col>
              </Row>

              <TabPanel>
                <Row className="part__two">
                  <Col lg={3} className="part__two__inner__body">
                    <div className="inner__products">
                      <div className="items">
                        <div className="img__file">
                          <img
                            className="img-fluid"
                            src="https://htmldemo.net/elehaus/elehaus/assets/images/shop/b16.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text__file">
                          <Link to={"/"} className="title">
                            Game Triger Finger New Insulated PH-X
                          </Link>
                          <p className="price">
                            <span>$160.00</span> -{" "}
                            <span className="discount">$260.00</span>
                          </p>
                          <div className="rate">
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                          </div>
                          <div className="handbagFill">
                            <BsHandbag />
                          </div>
                        </div>

                        <div className="overlay__icons">
                          <div className="overlay__icons__body">
                            <Link to={"/"} className="icon__body">
                              <BsHeart className="icon" />
                            </Link>
                            <Link to={"/"} className="icon__body">
                              <BsShuffle className="icon" />
                            </Link>
                            <Link to={"/"} className="icon__body">
                              <BsSearch className="icon" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>{" "}
                  <Col lg={3} className="part__two__inner__body">
                    <div className="inner__products">
                      <div className="items">
                        <div className="img__file">
                          <img
                            className="img-fluid"
                            src="https://htmldemo.net/elehaus/elehaus/assets/images/shop/b16.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text__file">
                          <Link to={"/"} className="title">
                            Game Triger Finger New Insulated PH-X
                          </Link>
                          <p className="price">
                            <span>$160.00</span> -{" "}
                            <span className="discount">$260.00</span>
                          </p>
                          <div className="rate">
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                          </div>
                          <div className="handbagFill">
                            <BsHandbag />
                          </div>
                        </div>

                        <div className="overlay__icons">
                          <div className="overlay__icons__body">
                            <Link to={"/"} className="icon__body">
                              <BsHeart className="icon" />
                            </Link>
                            <Link to={"/"} className="icon__body">
                              <BsShuffle className="icon" />
                            </Link>
                            <Link to={"/"} className="icon__body">
                              <BsSearch className="icon" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>{" "}
                  <Col lg={3} className="part__two__inner__body">
                    <div className="inner__products">
                      <div className="items">
                        <div className="img__file">
                          <img
                            className="img-fluid"
                            src="https://htmldemo.net/elehaus/elehaus/assets/images/shop/b16.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text__file">
                          <Link to={"/"} className="title">
                            Game Triger Finger New Insulated PH-X
                          </Link>
                          <p className="price">
                            <span>$160.00</span> -{" "}
                            <span className="discount">$260.00</span>
                          </p>
                          <div className="rate">
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                          </div>
                          <div className="handbagFill">
                            <BsHandbag />
                          </div>
                        </div>

                        <div className="overlay__icons">
                          <div className="overlay__icons__body">
                            <Link to={"/"} className="icon__body">
                              <BsHeart className="icon" />
                            </Link>
                            <Link to={"/"} className="icon__body">
                              <BsShuffle className="icon" />
                            </Link>
                            <Link to={"/"} className="icon__body">
                              <BsSearch className="icon" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>{" "}
                  <Col lg={3} className="part__two__inner__body">
                    <div className="inner__products">
                      <div className="items">
                        <div className="img__file">
                          <img
                            className="img-fluid"
                            src="https://htmldemo.net/elehaus/elehaus/assets/images/shop/b16.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text__file">
                          <Link to={"/"} className="title">
                            Game Triger Finger New Insulated PH-X
                          </Link>
                          <p className="price">
                            <span>$160.00</span> -{" "}
                            <span className="discount">$260.00</span>
                          </p>
                          <div className="rate">
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                          </div>
                          <div className="handbagFill">
                            <BsHandbag />
                          </div>
                        </div>

                        <div className="overlay__icons">
                          <div className="overlay__icons__body">
                            <Link to={"/"} className="icon__body">
                              <BsHeart className="icon" />
                            </Link>
                            <Link to={"/"} className="icon__body">
                              <BsShuffle className="icon" />
                            </Link>
                            <Link to={"/"} className="icon__body">
                              <BsSearch className="icon" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>{" "}
                  <Col lg={3} className="part__two__inner__body">
                    <div className="inner__products">
                      <div className="items">
                        <div className="img__file">
                          <img
                            className="img-fluid"
                            src="https://htmldemo.net/elehaus/elehaus/assets/images/shop/b16.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text__file">
                          <Link to={"/"} className="title">
                            Game Triger Finger New Insulated PH-X
                          </Link>
                          <p className="price">
                            <span>$160.00</span> -{" "}
                            <span className="discount">$260.00</span>
                          </p>
                          <div className="rate">
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                          </div>
                          <div className="handbagFill">
                            <BsHandbag />
                          </div>
                        </div>

                        <div className="overlay__icons">
                          <div className="overlay__icons__body">
                            <Link to={"/"} className="icon__body">
                              <BsHeart className="icon" />
                            </Link>
                            <Link to={"/"} className="icon__body">
                              <BsShuffle className="icon" />
                            </Link>
                            <Link to={"/"} className="icon__body">
                              <BsSearch className="icon" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>{" "}
                  <Col lg={3} className="part__two__inner__body">
                    <div className="inner__products">
                      <div className="items">
                        <div className="img__file">
                          <img
                            className="img-fluid"
                            src="https://htmldemo.net/elehaus/elehaus/assets/images/shop/b16.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text__file">
                          <Link to={"/"} className="title">
                            Game Triger Finger New Insulated PH-X
                          </Link>
                          <p className="price">
                            <span>$160.00</span> -{" "}
                            <span className="discount">$260.00</span>
                          </p>
                          <div className="rate">
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                          </div>
                          <div className="handbagFill">
                            <BsHandbag />
                          </div>
                        </div>

                        <div className="overlay__icons">
                          <div className="overlay__icons__body">
                            <Link to={"/"} className="icon__body">
                              <BsHeart className="icon" />
                            </Link>
                            <Link to={"/"} className="icon__body">
                              <BsShuffle className="icon" />
                            </Link>
                            <Link to={"/"} className="icon__body">
                              <BsSearch className="icon" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>{" "}
                </Row>{" "}
              </TabPanel>
              <TabPanel>
                <Row className="part__two">
                  <Col lg={3} className="part__two__inner__body">
                    <div className="inner__products">
                      <div className="items">
                        <div className="img__file">
                          <img
                            className="img-fluid"
                            src="https://htmldemo.net/elehaus/elehaus/assets/images/shop/b17.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text__file">
                          <Link to={"/"} className="title">
                            Game Triger Finger New Insulated PH-X
                          </Link>
                          <p className="price">
                            <span>$160.00</span> -{" "}
                            <span className="discount">$260.00</span>
                          </p>
                          <div className="rate">
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                          </div>
                          <div className="handbagFill">
                            <BsHandbag />
                          </div>
                        </div>

                        <div className="overlay__icons">
                          <div className="overlay__icons__body">
                            <Link to={"/"} className="icon__body">
                              <BsHeart className="icon" />
                            </Link>
                            <Link to={"/"} className="icon__body">
                              <BsShuffle className="icon" />
                            </Link>
                            <Link to={"/"} className="icon__body">
                              <BsSearch className="icon" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>{" "}
                  <Col lg={3} className="part__two__inner__body">
                    <div className="inner__products">
                      <div className="items">
                        <div className="img__file">
                          <img
                            className="img-fluid"
                            src="https://htmldemo.net/elehaus/elehaus/assets/images/shop/b18.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text__file">
                          <Link to={"/"} className="title">
                            Game Triger Finger New Insulated PH-X
                          </Link>
                          <p className="price">
                            <span>$160.00</span> -{" "}
                            <span className="discount">$260.00</span>
                          </p>
                          <div className="rate">
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                            <MdStarRate className="icon" />
                          </div>
                          <div className="handbagFill">
                            <BsHandbag />
                          </div>
                        </div>

                        <div className="overlay__icons">
                          <div className="overlay__icons__body">
                            <Link to={"/"} className="icon__body">
                              <BsHeart className="icon" />
                            </Link>
                            <Link to={"/"} className="icon__body">
                              <BsShuffle className="icon" />
                            </Link>
                            <Link to={"/"} className="icon__body">
                              <BsSearch className="icon" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>{" "}
                </Row>{" "}
              </TabPanel>
            </Tabs>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Arrivals__Products;
