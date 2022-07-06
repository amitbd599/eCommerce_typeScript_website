import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";
import Product__Slider__One from "../Widget/Slider/Product__Slider__One";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Link } from "react-router-dom";

import Category from "../Script/Category";
import Footer from "../Common/Footer/Footer";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { FaMinus, FaPlus } from "react-icons/fa";
const ShopPage: React.FC = () => {
  return (
    <Fragment>
      {/* Helmet Intro Start */}

      <Meta_Data title={"Shop"} />

      {/* Helmet Intro End*/}

      {/* Header Section start */}

      <Header />

      {/* Header Section End */}

      {/* Intro Section Start */}

      <Intro__Section title="Shop" />

      {/* Intro Section End */}

      {/* Top Category Product Slider Start */}
      <section className="wishlist__page__product__Slider__One">
        <Product__Slider__One />
      </section>
      {/* Top Category Product Slider End */}

      {/* Shop items section start */}
      <section className="shop">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row>
                <Col lg={3}>
                  <div className="filter">
                    <span>Filter :</span>
                    <span>Clean All</span>
                  </div>
                  <div className="accordion__body">
                    <Accordion
                      preExpanded={["a", "b", "c", "d", "e"]}
                      allowMultipleExpanded
                    >
                      <AccordionItem uuid="a">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <span> All Category</span>
                            <span>
                              <FaPlus className="icons__BsPlus" />
                              <FaMinus className="icons__BiMinus" />
                            </span>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <ul>
                            {Category.map((value, index) => (
                              <li key={index}>
                                <Link to={"/"}>{value.category}</Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem uuid="b">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <span>Price</span>
                            <span>
                              <FaPlus className="icons__BsPlus" />
                              <FaMinus className="icons__BiMinus" />
                            </span>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <ul>
                            <li>
                              <Link to={"/"}>$0.00 - $100.00</Link>
                            </li>
                            <li>
                              <Link to={"/"}>$100.00 - $200.00</Link>
                            </li>
                            <li>
                              <Link to={"/"}>$200.00 - $300.00</Link>
                            </li>
                            <li>
                              <Link to={"/"}>$300.00 - $500.00</Link>
                            </li>
                            <li>
                              <Link to={"/"}>$500.00+</Link>
                            </li>
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem uuid="c">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <span>Size</span>
                            <span>
                              <FaPlus className="icons__BsPlus" />
                              <FaMinus className="icons__BiMinus" />
                            </span>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <ul>
                            <li>
                              <span>Extra Large</span>
                            </li>
                            <li>
                              <span>Large</span>
                            </li>
                            <li>
                              <span>Medium</span>
                            </li>
                            <li>
                              <span>Small</span>
                            </li>
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem uuid="d">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <span>Brand</span>
                            <span>
                              <FaPlus className="icons__BsPlus" />
                              <FaMinus className="icons__BiMinus" />
                            </span>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <ul>
                            <li>
                              <span>Fenty Beauty</span>
                            </li>
                            <li>
                              <span>Orvis</span>
                            </li>
                            <li>
                              <span>Bedding</span>
                            </li>
                            <li>
                              <span>Swarovski</span>
                            </li>
                            <li>
                              <span>Target</span>
                            </li>
                            <li>
                              <span>Dove</span>
                            </li>
                            <li>
                              <span>Michaels</span>
                            </li>
                            <li>
                              <span>Patagonia</span>
                            </li>
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem uuid="e">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <span>Color</span>
                            <span>
                              <FaPlus className="icons__BsPlus" />
                              <FaMinus className="icons__BiMinus" />
                            </span>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <ul>
                            <li>
                              <span>Brown</span>
                            </li>
                            <li>
                              <span>Black</span>
                            </li>
                            <li>
                              <span>Blue</span>
                            </li>
                            <li>
                              <span>Green</span>
                            </li>
                            <li>
                              <span>Orange</span>
                            </li>
                            <li>
                              <span>Grey</span>
                            </li>
                            <li>
                              <span>Yellow</span>
                            </li>
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
      {/* Shop items section End */}

      {/* Footer start */}
      <Footer />
      {/* Footer End */}
    </Fragment>
  );
};

export default ShopPage;
