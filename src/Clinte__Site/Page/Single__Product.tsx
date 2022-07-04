/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";
import Category from "../Script/Category";
import Select from "react-select";
import ImageGallery from "react-image-gallery";
import { BiMinus, BiPlus } from "react-icons/bi";
import Footer from "../Common/Footer/Footer";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMediumM,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { MdOutlineDone } from "react-icons/md";
import { BsFillStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import ProgressBar from "@ramonak/react-progress-bar";
import { Rating } from 'react-simple-star-rating'




const images = [
  {
    original:
      "https://fzi4k1gk2dw3t0fqy18sw8qi-wpengine.netdna-ssl.com/wp-content/uploads/2013/08/282004-0286_1-510x649.jpeg",
    thumbnail:
      "https://fzi4k1gk2dw3t0fqy18sw8qi-wpengine.netdna-ssl.com/wp-content/uploads/2013/08/282004-0286_1-510x649.jpeg",
  },
  {
    original:
      "https://fzi4k1gk2dw3t0fqy18sw8qi-wpengine.netdna-ssl.com/wp-content/uploads/2013/08/282004-0046_2-510x649.jpeg",
    thumbnail:
      "https://fzi4k1gk2dw3t0fqy18sw8qi-wpengine.netdna-ssl.com/wp-content/uploads/2013/08/282004-0046_2-510x649.jpeg",
  },
  {
    original:
      "https://fzi4k1gk2dw3t0fqy18sw8qi-wpengine.netdna-ssl.com/wp-content/uploads/2013/08/282004-0001_3-510x649.jpeg",
    thumbnail:
      "https://fzi4k1gk2dw3t0fqy18sw8qi-wpengine.netdna-ssl.com/wp-content/uploads/2013/08/282004-0001_3-510x649.jpeg",
  },
  {
    original:
      "https://fzi4k1gk2dw3t0fqy18sw8qi-wpengine.netdna-ssl.com/wp-content/uploads/2013/08/282004-0286_1-510x649.jpeg",
    thumbnail:
      "https://fzi4k1gk2dw3t0fqy18sw8qi-wpengine.netdna-ssl.com/wp-content/uploads/2013/08/282004-0286_1-510x649.jpeg",
  },
  {
    original:
      "https://fzi4k1gk2dw3t0fqy18sw8qi-wpengine.netdna-ssl.com/wp-content/uploads/2013/08/282004-0046_2-510x649.jpeg",
    thumbnail:
      "https://fzi4k1gk2dw3t0fqy18sw8qi-wpengine.netdna-ssl.com/wp-content/uploads/2013/08/282004-0046_2-510x649.jpeg",
  },
  {
    original:
      "https://fzi4k1gk2dw3t0fqy18sw8qi-wpengine.netdna-ssl.com/wp-content/uploads/2013/08/282004-0001_3-510x649.jpeg",
    thumbnail:
      "https://fzi4k1gk2dw3t0fqy18sw8qi-wpengine.netdna-ssl.com/wp-content/uploads/2013/08/282004-0001_3-510x649.jpeg",
  },
];
const size = [
  { value: "SM", label: "SM" },
  { value: "M", label: "M" },
  { value: "LG", label: "LG" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];
const color = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

// Dropdown Category Components
const DropdownCategory1 = ({ value }: any) => {
  const [active, setActive] = useState(false);
  const activeDropdown = () => {
    setActive(!active);
  };

  return (
    <li>
      <Link to={"#"}>{value.category}</Link>

      {value.subCategory[0] && (
        <span>
          {!active ? (
            <div>
              <IoIosArrowDown
                className="dropdown__icon"
                type="checkbox"
                name=""
                id="category"
                onClick={activeDropdown}
              />
            </div>
          ) : (
            <IoIosArrowUp className="dropdown__icon" onClick={activeDropdown} />
          )}
        </span>
      )}

      <div className={active ? "dropdown active" : "dropdown"}>
        <ul>
          {value?.subCategory.map((innerValue: any) => (
            <li>
              <Link to={"/"}>{innerValue.category}</Link>
            </li>
          ))}{" "}
        </ul>
      </div>
    </li>
  );
};

// Main Product Components

const Single__Product = () => {
  // Increase And Decrease Vale Set
  const [value, setValue] = useState(0);
  const IncreaseValue = () => {
    setValue(value + 1);
  };
  const DecreaseValue = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  // Catch Rating value
  const [rating, setRating] = useState(0)
  const handleRating = (rate: number) => {
    setRating(rate)

  }
  return (
    <>
      {/* Helmet Intro Start */}

      <Meta_Data title={"Product"} />

      {/* Helmet Intro End*/}

      {/* Header Section start */}

      <Header />

      {/* Header Section End */}

      {/* Intro Section Start */}

      <Intro__Section title="Product" />

      {/* Intro Section End */}

      {/* Product Page Start */}
      <section className="product">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row>
                <Col lg={3} className="left__side">
                  <div className="inner">
                    <div className="header__text">
                      <h3>BROWSE</h3>
                    </div>
                    <div className="category">
                      <ul>
                        {Category.map((value, index) => {
                          return (
                            <DropdownCategory1 value={value} key={index} />
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col lg={9} className="right__side">
                  <div className="inner">
                    <Row>
                      <Col lg={6}>
                        <div className="display__img">
                          <div className="img__file">
                            <ImageGallery
                              items={images}
                              showFullscreenButton={true}
                              showPlayButton={false}
                              showNav={false}
                            />
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="text__file">
                          <div className="header">
                            <h2>D-Phone Android Latest UI New XP</h2>
                            <p className="price">$ 420</p>
                            <p className="des">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Voluptatibus laborum similique perferendis
                              laudantium rem in ratione cum eligendi, iste
                              molestias!
                            </p>
                          </div>
                          <div className="variable__items">
                            <div className="size">
                              <p>Size :</p>
                              <Select
                                className="select__size"
                                defaultValue={size[0]}
                                options={size}
                                styles={{
                                  option: (provided, state) => ({
                                    ...provided,
                                    borderBottom: "1px solid #ddd",
                                    color: state.isSelected ? "#fff" : "#666",
                                    background: state.isSelected
                                      ? "#252525"
                                      : "#fff",
                                    cursor: "pointer",
                                    margin: "0px",
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
                            <div className="color">
                              <p>Color :</p>
                              <Select
                                className="select__color"
                                defaultValue={color[0]}
                                options={color}
                                styles={{
                                  option: (provided, state) => ({
                                    ...provided,
                                    borderBottom: "1px solid #ddd",
                                    color: state.isSelected ? "#fff" : "#666",
                                    background: state.isSelected
                                      ? "#252525"
                                      : "#fff",
                                    cursor: "pointer",
                                    margin: "0px",
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
                          <div className="counter__cart">
                            <div className="counter__cart__inner"></div>
                          </div>
                        </div>

                        {/* Counter cart__section */}

                        <div className="count__product">
                          <div className="count__product__inner">
                            <button className="BiMinus" onClick={DecreaseValue}>
                              <BiMinus />
                            </button>

                            <span className="count__data">
                              {" "}
                              <input type="text" name="" id="" value={value} />
                            </span>
                            <button className="BiPlus" onClick={IncreaseValue}>
                              <BiPlus />
                            </button>
                          </div>
                          <div className="text">
                            <Link
                              to={"/"}
                              className="button__mid_solid_color_black"
                            >
                              Add To Cart
                            </Link>
                          </div>
                        </div>

                        {/* Product Tag and category */}
                        <div className="tag__category__section">
                          <div className="tag__category__section__inner">
                            <div className="tag__category__box">
                              <p>SKU : N/A</p>
                              <p>
                                Category: <Link to={"/"}>Shoes</Link>
                              </p>
                              <p>
                                Tags:<Link to={"/"}>Shoes</Link> ,
                                <Link to={"/"}>Diesel</Link> ,
                                <Link to={"/"}>shoe</Link>
                              </p>
                            </div>
                            <div className="social__share">
                              <div className="social__share__inner">
                                <Link to={"/"}>
                                  <FaFacebookF />
                                </Link>

                                <Link to={"/"}>
                                  <FaTwitter />
                                </Link>

                                <Link to={"/"}>
                                  <FaLinkedinIn />
                                </Link>

                                <Link to={"/"}>
                                  <FaWhatsapp />
                                </Link>

                                <Link to={"/"}>
                                  <FaInstagram />
                                </Link>

                                <Link to={"/"}>
                                  <FaMediumM />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        {/* Description and Review section */}
                        <div className="description__review__section">
                          <div className="description__review__section__inner">
                            <Tabs className="description__review__section_tabs">
                              <TabList>
                                <Tab>DESCRIPTION</Tab>
                                <Tab>ADDITIONAL INFORMATION</Tab>
                                <Tab>VENDOR INFO</Tab>
                                <Tab>REVIEWS (0)</Tab>
                              </TabList>

                              <TabPanel className="tabPanel__description">
                                <div className="tabPanel__description__inner ">
                                  <h3>Details</h3>

                                  <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Numquam doloribus
                                    similique temporibus itaque asperiores illo
                                    deleniti et esse eos voluptate optio libero
                                    architecto minus ex, voluptates sequi quis
                                    amet laudantium, nulla nihil error voluptas
                                    vel nam. Nulla et ipsam omnis temporibus
                                    consectetur similique pariatur officiis,
                                    neque tenetur repellendus doloremque
                                    tempore.
                                  </p>
                                  <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Numquam doloribus
                                    similique temporibus itaque asperiores illo
                                    deleniti et esse eos voluptate optio libero
                                    architecto minus ex, voluptates sequi quis
                                    amet laudantium, nulla nihil error voluptas
                                    vel nam. Nulla et ipsam omnis temporibus
                                    consectetur similique pariatur officiis,
                                    neque tenetur repellendus doloremque
                                    tempore.
                                  </p>

                                  <ul className="mt-20">
                                    <li>
                                      {" "}
                                      <MdOutlineDone className="mr-5" />
                                      Nunc nec porttitor turpis. In eu risus
                                      enim. In vitae mollis elit.
                                    </li>
                                    <li>
                                      {" "}
                                      <MdOutlineDone className="mr-5" />
                                      Vivamus finibus vel mauris ut vehicula.
                                    </li>
                                    <li>
                                      {" "}
                                      <MdOutlineDone className="mr-5" />
                                      Nullam a magna porttitor, dictum risus
                                      nec, faucibus sapien.
                                    </li>
                                  </ul>
                                </div>
                              </TabPanel>
                              <TabPanel className="tabPanel__information">
                                <div className="tabPanel__information__inner">
                                  <ul>
                                    <li>
                                      <span>Model</span>
                                      <span>D-Phone Android Latest</span>
                                    </li>
                                    <li>
                                      <span>Color</span>
                                      <span>Black, Blue, Green</span>
                                    </li>
                                    <li>
                                      <span>Size</span>
                                      <span>SM, MD, XL, XXL</span>
                                    </li>
                                    <li>
                                      <span>Guarantee Time</span>
                                      <span>12 Months</span>
                                    </li>
                                  </ul>
                                </div>
                              </TabPanel>
                              <TabPanel className="tabPanel__vendor__info">
                                <div className="pane__vendor__info__inner">
                                  <div className="info__part">
                                    <div className="img__file">
                                      <img
                                        className="img-fluid"
                                        src="/assets/images/client/client-7.png"
                                        alt=""
                                      />
                                    </div>
                                    <div className="details">
                                      <h3>Moni Biswas</h3>
                                      <div className="star__icon">
                                        <span>
                                          <BsFillStarFill />
                                          <BsFillStarFill />
                                          <BsFillStarFill />
                                          <BsFillStarFill />
                                          <BsFillStarFill />
                                        </span>
                                        <span>(38 Reviews)</span>
                                      </div>

                                      <div className="intro__data">
                                        <div className="intro__data__inner">
                                          <div className="items">
                                            <p>Store Name:</p>
                                            <p>Apple Intro</p>
                                          </div>
                                          <div className="items">
                                            <p>Address:</p>
                                            <p>Steven Street, El Carjon, CA 92020,
                                              United States (US)</p>
                                          </div>
                                          <div className="items">
                                            <p>Phone:</p>
                                            <p>+88 12345678</p>
                                          </div>
                                          <div className="items">
                                            <p>Email:</p>
                                            <p>info@gmail.com</p>
                                          </div>
                                        </div>

                                        <Link className="button__mid_solid_color_black" to={"/"}>VISIT STORE</Link>

                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </TabPanel>
                              <TabPanel className="tabpanel__customer__reviewer">
                                <div className="tabpanel__customer__reviewer__inner">

                                  <Row>
                                    <Col className="rating__section" lg={5}>
                                      <div className="rating__section__inner">
                                        <div className="rating__header">
                                          <div className="rate">
                                            <h2>4.3</h2>
                                          </div>
                                          <div className="rate__info">
                                            <span>Average Rating</span>
                                            <div className="star__icon">
                                              <span>
                                                <BsFillStarFill />
                                                <BsFillStarFill />
                                                <BsFillStarFill />
                                                <BsFillStarFill />
                                                <BsFillStarFill />
                                              </span>
                                              <span className="ml-5">(38 Reviews)</span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="rating__footer">
                                          <div className="recommended">
                                            <p>
                                              <span>66.8%</span>
                                              <span>Recommended
                                                <span className="text">(2 of 3)</span>
                                              </span>
                                            </p>
                                          </div>
                                        </div>
                                        <div className="rating__details">
                                          <div className="rating__details__inner">
                                            <div className="star__icon">
                                              <span>
                                                <BsFillStarFill className="BsFillStarFill" />
                                                <BsFillStarFill className="BsFillStarFill" />
                                                <BsFillStarFill className="BsFillStarFill" />
                                                <BsFillStarFill className="BsFillStarFill" />
                                                <BsFillStarFill className="BsFillStarFill" />
                                              </span>
                                            </div>
                                            <div className="progressbar">
                                              <ProgressBar completed={80} height="10px"
                                                bgColor="#999999"
                                                baseBgColor="#EEEEEE"
                                                isLabelVisible={false}
                                              />
                                            </div>

                                            <div className="label">
                                              <span>80%</span>
                                            </div>

                                          </div>



                                          <div className="rating__details__inner">
                                            <div className="star__icon">
                                              <span>
                                                <BsFillStarFill className="BsFillStarFill" />
                                                <BsFillStarFill className="BsFillStarFill" />
                                                <BsFillStarFill className="BsFillStarFill" />
                                                <BsFillStarFill className="BsFillStarFill" />
                                                <BsFillStarFill className="BsFillStarFillGray" />
                                              </span>
                                            </div>
                                            <div className="progressbar">
                                              <ProgressBar completed={60} height="10px"
                                                bgColor="#999999"
                                                baseBgColor="#EEEEEE"
                                                isLabelVisible={false}
                                              />
                                            </div>

                                            <div className="label">
                                              <span>60%</span>
                                            </div>

                                          </div>

                                          <div className="rating__details__inner">
                                            <div className="star__icon">
                                              <span>
                                                <BsFillStarFill className="BsFillStarFill" />
                                                <BsFillStarFill className="BsFillStarFill" />
                                                <BsFillStarFill className="BsFillStarFill" />
                                                <BsFillStarFill className="BsFillStarFillGray" />
                                                <BsFillStarFill className="BsFillStarFillGray" />
                                              </span>
                                            </div>
                                            <div className="progressbar">
                                              <ProgressBar completed={40} height="10px"
                                                bgColor="#999999"
                                                baseBgColor="#EEEEEE"
                                                isLabelVisible={false}
                                              />
                                            </div>

                                            <div className="label">
                                              <span>40%</span>
                                            </div>

                                          </div>
                                          <div className="rating__details__inner">
                                            <div className="star__icon">
                                              <span>
                                                <BsFillStarFill className="BsFillStarFill" />
                                                <BsFillStarFill className="BsFillStarFill" />
                                                <BsFillStarFill className="BsFillStarFillGray" />
                                                <BsFillStarFill className="BsFillStarFillGray" />
                                                <BsFillStarFill className="BsFillStarFillGray" />
                                              </span>
                                            </div>
                                            <div className="progressbar">
                                              <ProgressBar completed={20} height="10px"
                                                bgColor="#999999"
                                                baseBgColor="#EEEEEE"
                                                isLabelVisible={false}
                                              />
                                            </div>

                                            <div className="label">
                                              <span>20%</span>
                                            </div>

                                          </div>
                                          <div className="rating__details__inner">
                                            <div className="star__icon">
                                              <span>
                                                <BsFillStarFill className="BsFillStarFill" />
                                                <BsFillStarFill className="BsFillStarFillGray" />
                                                <BsFillStarFill className="BsFillStarFillGray" />
                                                <BsFillStarFill className="BsFillStarFillGray" />
                                                <BsFillStarFill className="BsFillStarFillGray" />
                                              </span>
                                            </div>
                                            <div className="progressbar">
                                              <ProgressBar completed={20} height="10px"
                                                bgColor="#999999"
                                                baseBgColor="#EEEEEE"
                                                isLabelVisible={false}
                                              />
                                            </div>

                                            <div className="label">
                                              <span>20%</span>
                                            </div>

                                          </div>
                                        </div>
                                      </div>
                                    </Col>



                                    <Col className="submit__review__section">
                                      <div className="submit__review__section__inner">
                                        <div className="header">
                                          <h2>Submit Your Review</h2>
                                          <p>Your email address will not be published. Required fields are marked *</p>
                                        </div>
                                        <div className="rate__post">
                                          <span>Your Rating Of This Product :
                                          </span>
                                          <span className="rating">
                                            <Rating onClick={handleRating} ratingValue={rating} />
                                          </span>
                                        </div>
                                        <div className="form__section">
                                          <form action="">
                                            <textarea placeholder="Write Your Review Here..." name="" id="" cols={30} rows={6}></textarea>
                                            <div className="input__filed">
                                              <input type="text" placeholder="Your Name" />
                                              <input type="email" placeholder="Your Email" />

                                            </div>
                                            <div className="checkbox">
                                              <input type="checkbox" name="" id="saveInfo" />
                                              <label htmlFor="saveInfo">Save my name, email, and website in this browser for the next time I comment.</label>

                                            </div>
                                            <Link to={'/'} className="button__mid_solid_color_black">SUBMIT REVIEW</Link>
                                          </form>
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </TabPanel>
                            </Tabs>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
      {/* Product Page End */}

      {/* Footer start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default Single__Product;
