/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";
import Category from "../Script/Category";
import Select from "react-select";
import ImageGallery from "react-image-gallery";
import { BiMinus, BiPlus } from "react-icons/bi";

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

const Product = () => {
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
                        <div className="img__file">
                          <ImageGallery
                            items={images}
                            showFullscreenButton={true}
                            showPlayButton={false}
                            showNav={false}
                          />
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
    </>
  );
};

export default Product;
