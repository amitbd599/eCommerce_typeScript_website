/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FiMinus, FiPlus } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";
import Update__cartValue from "../Components/Update__cartValue";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Select from "react-select";
import { City, Area } from "../Script/VariableDesignItems";
import { MdClose } from "react-icons/md";
import { UseCartState } from "../ContextAPI/ContextAPIRoot";
import { ToastContainer } from "react-toastify";

const Cart: React.FC = () => {
  const {
    cartReducer: { cart, product, count, totalItem, totalAmount },
    dispatch,
    addToCart,
    decreaseValue,
    increaseValue,
    removeFromCart,
    removeAllFromCart,
    filterReducer: {
      popularity,
      rating,
      latest,
      lowToHigh,
      highToLow,
      searchQuery,
      stock,
    },
    filterDispatch,
  } = UseCartState();

  useEffect(() => {
    dispatch({
      type: "GET_TOTAL",
    });
  }, [cart]);

  return (
    <>
      <ToastContainer hideProgressBar={true} />
      {/* Helmet Intro Start */}

      <Meta_Data title={"Cart"} />

      {/* Helmet Intro End*/}

      {/* Header Section start */}

      <Header />

      {/* Header Section End */}

      {/* Intro Section Start */}

      <Intro__Section title="Cart" />

      {/* Intro Section End */}

      {/* Cart Section Start */}
      <section className="cart__section">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row>
                <Col lg={8} className="left__side">
                  {cart.length > 0 ? (
                    <div className="inner__body">
                      {/*======= Product Show start ========*/}
                      <table>
                        <thead>
                          <tr>
                            <th className="w-50">Product</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Quantity</th>
                            <th className="text-center">Subtotal</th>
                            <th></th>
                          </tr>
                        </thead>

                        <tbody>
                          {cart.map((value: any) => (
                            <tr>
                              <td className="d-flex ">
                                <div className="img__file">
                                  <img
                                    className="img-fluid"
                                    src={value.img}
                                    alt=""
                                  />
                                  <MdClose
                                    className="close__button"
                                    onClick={() => removeFromCart(value)}
                                  />
                                </div>

                                <div className="text__file">
                                  <span>{value.name}</span>
                                </div>
                              </td>
                              <td className="text-center">${value.price}</td>
                              <td className="text-center">
                                <div className="count">
                                  <button
                                    className="minus"
                                    onClick={() => decreaseValue(value.id)}
                                  >
                                    <FiMinus />
                                  </button>
                                  <span>{value.qty}</span>
                                  <button
                                    className="plus"
                                    onClick={() => increaseValue(value.id)}
                                  >
                                    <FiPlus />
                                  </button>
                                </div>
                              </td>
                              <td className="text-center">$ {value.price}</td>
                            </tr>
                          ))}
                        </tbody>

                        <tbody>
                          {/* {productData.map((value) => {
                          return (
                            <ContextAPI.Consumer>
                              {({ hold, hendelIncrease, hendelDecrease }) => (
                                <Update__cartValue
                                  value={value}
                                  data={"Hello"}
                                />
                              )}
                            </ContextAPI.Consumer>
                          );
                        })} */}
                        </tbody>
                      </table>
                      {/* Product Show End */}
                      <hr className="d-md-block d-none" />
                      {/* Middle Button Section start */}

                      <div className="meddle__section">
                        <div className="leftButton">
                          <Link
                            to={"/"}
                            className="button__mid_solid_color_black"
                          >
                            CONTINUE SHOPPING
                          </Link>
                        </div>
                        <div className="rightButton">
                          <span
                            className="button__mid_border_color_gray"
                            onClick={removeAllFromCart}
                          >
                            CLEAR CART
                          </span>
                          <Link
                            to={"/"}
                            className="button__mid_border_color_gray"
                          >
                            UPDATE CART
                          </Link>
                        </div>
                      </div>
                      {/* Middle Button Section End */}
                      {/* Coupon section start */}
                      <div className="coupon__section">
                        <h3>COUPON DISCOUNT</h3>
                        <input
                          type="text"
                          placeholder="Enter coupon code here..."
                        />

                        <Link
                          to={"/"}
                          className="button__mid_solid_color_black"
                        >
                          APPLY COUPON
                        </Link>
                      </div>

                      {/* Coupon section End */}
                    </div>
                  ) : (
                    <div className="cart__empty">
                      <p>Total Product select : {cart.length}</p>
                      <Link to={"/"} className="button__mid_solid_color_black">
                        Continue browsing
                      </Link>
                    </div>
                  )}
                </Col>
                <Col lg={4} className="right__side">
                  <div className="inner__body">
                    <h2 className="header__text">Cart Totals</h2>
                    <hr />
                    <div className="total__price d-flex justify-content-between align-items-center">
                      <h5>Subtotal</h5>
                      <h5>$ {totalAmount}</h5>
                    </div>
                    <hr />
                    <div className="shipping">
                      <h2>Shipping</h2>

                      <div className="items">
                        <div className="customInput">
                          <input
                            type="radio"
                            id="free-shipping"
                            className="custom-control-input"
                            name="shipping"
                          />
                          <label htmlFor="free-shipping">Free Shipping</label>
                        </div>
                        <div className="customInput">
                          <input
                            type="radio"
                            id="Local-Pickup"
                            className="custom-control-input"
                            name="shipping"
                          />
                          <label htmlFor="Local-Pickup">Local Pickup</label>
                        </div>
                        <div className="customInput">
                          <input
                            type="radio"
                            id="Flat-rate"
                            className="custom-control-input"
                            name="shipping"
                          />
                          <label htmlFor="Flat-rate">Flat rate</label>
                        </div>
                      </div>
                    </div>

                    <div className="custom__select__body">
                      <h2>Shipping to CA.</h2>
                      <div className="custom__select">
                        <Select
                          options={Area}
                          defaultValue={Area[1]}
                          styles={{
                            option: (provided, state) => ({
                              ...provided,
                              borderBottom: "1px solid #ddd",
                              color: state.isSelected ? "#fff" : "#666",
                              background: state.isSelected ? "#252525" : "#fff",
                              cursor: "pointer",
                              margin: "0px",
                              fontSize: "16px",
                              ":active": {
                                backgroundColor: "#ddd",
                                cursor: "pointer",
                              },
                            }),
                            singleValue: (provided, state) => ({
                              ...provided,
                              color: "#666",

                              fontSize: "16px",
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
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: 5,
                            border: "none",
                            colors: {
                              ...theme.colors,
                              primary25: "#ddd",
                              primary: "black",
                            },
                          })}
                        />
                      </div>
                      <div className="custom__select">
                        <Select
                          options={City}
                          defaultValue={City[1]}
                          styles={{
                            option: (provided, state) => ({
                              ...provided,
                              borderBottom: "1px solid #ddd",
                              color: state.isSelected ? "#fff" : "#666",
                              background: state.isSelected ? "#252525" : "#fff",
                              cursor: "pointer",
                              margin: "0px",
                              fontSize: "16px",
                              ":active": {
                                backgroundColor: "#ddd",
                                cursor: "pointer",
                              },
                            }),
                            singleValue: (provided, state) => ({
                              ...provided,
                              color: "#666",

                              fontSize: "16px",
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
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: 5,
                            border: "none",
                            colors: {
                              ...theme.colors,
                              primary25: "#ddd",
                              primary: "black",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div className="input__town">
                      <input type="text" placeholder="Town / City" />
                    </div>
                    <div className="input__zip">
                      <input type="text" placeholder="ZIP" />
                    </div>
                    <div>
                      <Link to={"/"} className="button__mid_solid_color_black">
                        UPDATE TOTALS
                      </Link>
                    </div>
                    <hr />
                    <div className="total__price d-flex justify-content-between align-items-center">
                      <h5>Total</h5>
                      <h5>$100.00</h5>
                    </div>
                    <div>
                      <Link to={"/"} className="button__mid_solid_color_black">
                        PROCEED TO CHECKOUT
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
      {/* Cart Section End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default Cart;
