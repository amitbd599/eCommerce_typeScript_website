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
import Select from "react-select";
import Category from "../Script/Category";
import Footer from "../Common/Footer/Footer";
import { FaAlignJustify, FaList, FaMinus, FaPlus } from "react-icons/fa";
import { MdMenu, MdStarRate } from "react-icons/md";
import { BsHandbag, BsHeart, BsSearch, BsShuffle } from "react-icons/bs";
import ShopProduct from "../Script/ShopProduct";
const size = [
  { value: "Default sorting", label: "Default sorting" },
  { value: "Popularity", label: "Popularity" },
  { value: "Average rating", label: "Average rating" },
  { value: "Sort by latest", label: "Sort by latest" },
  { value: "Price low to high", label: "Price low to high" },
  { value: "Price high to low", label: "Price high to low" },
];
const show = [
  { value: "Show 6", label: "Show 6 " },
  { value: "Show 12", label: "Show 12 " },
  { value: "Show 20", label: "Show 12" },
  { value: "Show 25", label: "Show 25" },
  { value: "Show 30", label: "Show 30" },
];

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
                <Col lg={3} className="left__side">
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
                <Col lg={9} className="right__side">
                  {/* Sort Filter Start */}
                  <div className="sort__intro">
                    <div className="sort__intro__inner">
                      <div className="sort__title">
                        <span>Sort By :</span>
                      </div>
                      <div className="select__data__left">
                        <Select
                          className="select__size"
                          defaultValue={size[0]}
                          options={size}
                          styles={{
                            option: (provided, state) => ({
                              ...provided,
                              borderBottom: "1px solid #ddd",
                              color: state.isSelected ? "#fff" : "#666",
                              background: state.isSelected ? "#252525" : "#fff",
                              cursor: "pointer",
                              margin: "0px",
                              height: "40px",
                              fontSize: "15px",
                              ":active": {
                                backgroundColor: "#ddd",
                                cursor: "pointer",
                              },
                            }),
                            singleValue: (provided, state) => ({
                              ...provided,
                              color: "#666",

                              fontSize: "15px",
                            }),
                            control: (styles) => ({
                              ...styles,
                              backgroundColor: "#ffffff",
                              padding: "0px 0px",
                              margin: "0px 0px",

                              ":focus-within": {
                                ...styles[":focus-within"],
                                border: "1px solid #ddd",
                                boxShadow: "none",
                              },
                            }),
                            menuList: (styles) => ({
                              ...styles,
                              margin: "0px",
                              padding: "0px",
                            }),
                            noOptionsMessage: (styles) => ({
                              ...styles,
                              background: "red",
                              color: "#fff",
                            }),
                          }}
                        />
                      </div>
                    </div>
                    <div className="sort__intro__inner">
                      <div className="sort__title">
                        <span>Show Items :</span>
                      </div>
                      <div className="select__data__right">
                        <Select
                          className="select__size"
                          defaultValue={show[0]}
                          options={show}
                          styles={{
                            option: (provided, state) => ({
                              ...provided,
                              borderBottom: "1px solid #ddd",
                              color: state.isSelected ? "#fff" : "#666",
                              background: state.isSelected ? "#252525" : "#fff",
                              cursor: "pointer",
                              margin: "0px",
                              height: "40px",
                              fontSize: "15px",
                              ":active": {
                                backgroundColor: "#ddd",
                                cursor: "pointer",
                              },
                            }),
                            singleValue: (provided, state) => ({
                              ...provided,
                              color: "#666",

                              fontSize: "15px",
                            }),
                            control: (styles) => ({
                              ...styles,
                              backgroundColor: "#ffffff",
                              padding: "0px 0px",
                              margin: "0px 0px",

                              ":focus-within": {
                                ...styles[":focus-within"],
                                border: "1px solid #ddd",
                                boxShadow: "none",
                              },
                            }),
                            menuList: (styles) => ({
                              ...styles,
                              margin: "0px",
                              padding: "0px",
                            }),
                            noOptionsMessage: (styles) => ({
                              ...styles,
                              background: "red",
                              color: "#fff",
                            }),
                          }}
                        />
                      </div>
                      <div className="icon__section">
                        <span>
                          <FaAlignJustify />
                        </span>
                        <span>
                          <FaList />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Sort Filter End */}

                  {/* Product items Show start Here */}
                  <div className="product__items">
                    <div className="product__items__inner">
                      <Row>
                        {ShopProduct.map((value: any, index: any) => (
                          <Col
                            key={index}
                            lg={4}
                            md={6}
                            sm={6}
                            className="part__two__inner__body"
                          >
                            <div className="inner__products">
                              <div className="items">
                                <div className="img__file">
                                  <img
                                    className="img-fluid"
                                    src={value.img}
                                    alt=""
                                  />
                                  <img
                                    className="img-fluid"
                                    src={value.imgThum}
                                    alt=""
                                  />
                                </div>
                                <div className="text__file">
                                  <Link
                                    to={"/single-product"}
                                    className="title"
                                  >
                                    {value.name?.slice(0, 50)} ...
                                  </Link>
                                  <p className="price">
                                    <span>{value.price}</span> -{" "}
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
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </div>
                  {/* Product items Show End Here */}
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
