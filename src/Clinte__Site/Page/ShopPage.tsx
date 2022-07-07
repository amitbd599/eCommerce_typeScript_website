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
import { FaMinus, FaPlus } from "react-icons/fa";

const ShopPage: React.FC = () => {
  var item = document.querySelector(".item");
  var items = document.querySelector(".items");
  item?.addEventListener("click", () => {
    items?.classList.add("active");
  });

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
                          <ul className="items__body">
                            {Category.map((value, index) => (
                              // <li key={index}>
                              //   <Link to={"/"}>{value.category}</Link>
                              // </li>
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
                          <ul className="items__body">
                            <li>
                              <input type="checkbox" name="" id="price_0" />
                              <label htmlFor="price_0">$0.00 - $100.00</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="price_1" />
                              <label htmlFor="price_1">$100.00 - $200.00</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="price_2" />
                              <label htmlFor="price_2">$200.00 - $300.00</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="price_3" />
                              <label htmlFor="price_3">$300.00 - $500.00</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="price_4" />
                              <label htmlFor="price_4">$500.00</label>
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
                          <ul className="items__body">
                            <li>
                              <input type="checkbox" name="" id="ExtraLarge" />
                              <label htmlFor="ExtraLarge">Extra Large</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Large" />
                              <label htmlFor="Large">Large</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Medium" />
                              <label htmlFor="Medium">Medium</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Small" />
                              <label htmlFor="Small">Small</label>
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
                          <ul className="items__body">
                            <li>
                              <input type="checkbox" name="" id="FentyBeauty" />
                              <label htmlFor="FentyBeauty">Fenty Beauty</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Orvis" />
                              <label htmlFor="Orvis">Orvis</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Bedding" />
                              <label htmlFor="Bedding">Bedding</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Swarovski" />
                              <label htmlFor="Swarovski">Swarovski</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Target" />
                              <label htmlFor="Target">Target</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Dove" />
                              <label htmlFor="Dove">Dove</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Michaels" />
                              <label htmlFor="Michaels">Michaels</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Patagonia" />
                              <label htmlFor="Patagonia">Patagonia</label>
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
                          <ul className="items__body">
                            <li>
                              <input type="checkbox" name="" id="Brown" />
                              <label htmlFor="Brown">Brown</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Black" />
                              <label htmlFor="Black">Black</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Blue" />
                              <label htmlFor="Blue">Blue</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Green" />
                              <label htmlFor="Green">Green</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Grey" />
                              <label htmlFor="Grey">Grey</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Yellow" />
                              <label htmlFor="Yellow">Yellow</label>
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
