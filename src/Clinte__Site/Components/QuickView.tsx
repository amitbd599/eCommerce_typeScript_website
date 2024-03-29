import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import Select from "react-select";
import Slider from "react-slick";
import { UseCartState } from "../ContextAPI/ContextAPIRoot";
import useHelperFunction from "../Hooks/useHelperFunction";
import { Size, Color } from "../Script/VariableDesignItems";
const QuickView: React.FC = () => {
  const {
    cartReducer: { quickViewData, cart },
    quickViewClick,
    activeQuickViewClick,
    addToCart,
    removeFromCart,
  } = UseCartState();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div
        className={!activeQuickViewClick ? "quick__view" : "quick__view active"}
      >
        <div className="wrapper">
          <div className="wrapper__body">
            <div className="overlay"></div>
            <Container>
              <Row>
                <Col>
                  <div className="inner__body">
                    {quickViewData.map((value: any, index: number) => (
                      <div className="quick__view__inner__body">
                        <div className="inner__box__items">
                          <div className="img__file">
                            <Slider {...settings}>
                              <div>
                                <img
                                  className="img-fluid"
                                  src={value.img}
                                  alt=""
                                />
                              </div>

                              <div>
                                <img
                                  className="img-fluid"
                                  src="https://res.cloudinary.com/amitjs/image/upload/v1657434129/Ecommerce%20Product%20Img-%20Important/image_104_tyluhw.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <img
                                  className="img-fluid"
                                  src="https://res.cloudinary.com/amitjs/image/upload/v1657434129/Ecommerce%20Product%20Img-%20Important/image_107_z84hit.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <img
                                  className="img-fluid"
                                  src="https://res.cloudinary.com/amitjs/image/upload/v1657434128/Ecommerce%20Product%20Img-%20Important/image_106_bnbi9j.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <img
                                  className="img-fluid"
                                  src="https://res.cloudinary.com/amitjs/image/upload/v1657434128/Ecommerce%20Product%20Img-%20Important/image_110_xd9r9l.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <img
                                  className="img-fluid"
                                  src="https://res.cloudinary.com/amitjs/image/upload/v1657434128/Ecommerce%20Product%20Img-%20Important/image_105_oa92qj.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <img
                                  className="img-fluid"
                                  src="https://res.cloudinary.com/amitjs/image/upload/v1657434128/Ecommerce%20Product%20Img-%20Important/image_108_hqp8it.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <img
                                  className="img-fluid"
                                  src="https://res.cloudinary.com/amitjs/image/upload/v1657434128/Ecommerce%20Product%20Img-%20Important/image_109_holnkr.png"
                                  alt=""
                                />
                              </div>
                            </Slider>
                          </div>

                          <div className="text__file">
                            <h2 className="header__text">{value.name}</h2>
                            <h3 className="price">$ {value.price}</h3>
                            <p className="des">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Dicta ipsam maxime vero tenetur repellat ex
                              distinctio id, corporis accusamus fuga.
                            </p>
                            <div className="select__size__body">
                              <div className="header__text__intro">
                                <span>Size :</span>
                              </div>
                              <div>
                                <Select
                                  className="select__size"
                                  defaultValue={Size[0]}
                                  options={Size}
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
                                      fontSize: "14px",
                                      ":active": {
                                        backgroundColor: "#ddd",
                                        cursor: "pointer",
                                      },
                                    }),
                                    singleValue: (provided, state) => ({
                                      ...provided,
                                      color: "#666",

                                      fontSize: "14px",
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
                            <div className="select__size__body">
                              <div className="header__text__intro">
                                <span>Color :</span>
                              </div>
                              <div>
                                <Select
                                  className="select__size"
                                  defaultValue={Color[0]}
                                  options={Color}
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
                                      fontSize: "14px",
                                      ":active": {
                                        backgroundColor: "#ddd",
                                        cursor: "pointer",
                                      },
                                    }),
                                    singleValue: (provided, state) => ({
                                      ...provided,
                                      color: "#666",

                                      fontSize: "14px",
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
                            <div className="footer__intro">
                              <div className="footer__intro__price">
                                <span>$ {value.price}</span>
                              </div>
                              <div className="cart__int">
                                <div className="input__field">
                                  <button>-</button>
                                  <input type="text" value={"3"} />
                                  <button>+</button>
                                </div>
                                <div className="button__cart">
                                  {cart.some((p: any) => p.id === value.id) ? (
                                    <button
                                      className="button__mid_solid_color_black"
                                      onClick={() => removeFromCart(value)}
                                    >
                                      REMOVE FROM CART
                                    </button>
                                  ) : (
                                    <button
                                      className="button__mid_solid_color_black"
                                      onClick={() => addToCart(value)}
                                    >
                                      ADD TO CART
                                    </button>
                                  )}
                                </div>
                              </div>

                              <div className="tag__info">
                                <ul>
                                  <li>
                                    <span>SKU:</span> N/A
                                  </li>
                                  <li>
                                    <span>Categories:</span> Clothing, Hoodies
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Close Icon */}
                        <div className="close__icon">
                          <GrFormClose onClick={quickViewClick} />
                        </div>
                      </div>
                    ))}
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

export default QuickView;
