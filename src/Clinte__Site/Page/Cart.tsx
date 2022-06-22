import React, { useState } from "react";
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
const Cart: React.FC = () => {
  const productData = [
    { id: 1, title: "CLASSIC SIMPLE BACKPACK", price: 50 },
    { id: 2, title: "Smart Watch", price: 150 },
  ];

  const area = [
    { value: "United States", label: "United States" },
    { value: "Brazil", label: "Brazil" },
    { value: "Colombia", label: "Colombia" },
    { value: "Mexico", label: "Mexico" },
    { value: "Canada", label: "Canada" },
  ];
  const city = [
    { value: "California", label: "California" },
    { value: "Ohaio", label: "Ohaio" },
    { value: "Haiti", label: "Haiti" },
    { value: "Cuba", label: "Cuba" },
  ];

  return (
    <>
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
                  <div className="inner__body">
                    {/* Product Show start */}
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
                        {productData.map((value) => {
                          return <Update__cartValue value={value} />;
                        })}
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
                        <Link
                          to={"/"}
                          className="button__mid_border_color_gray"
                        >
                          CLEAR CART
                        </Link>
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

                      <Link to={"/"} className="button__mid_solid_color_black">
                        APPLY COUPON
                      </Link>
                    </div>

                    {/* Coupon section End */}
                  </div>
                </Col>
                <Col lg={4} className="right__side">
                  <div className="inner__body">
                    <h2 className="header__text">Cart Totals</h2>
                    <hr />
                    <div className="total__price d-flex justify-content-between align-items-center">
                      <h5>Subtotal</h5>
                      <h5>$100.00</h5>
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
                          options={area}
                          defaultValue={area[1]}
                          styles={{
                            option: (styles) => ({
                              ...styles,
                              ":active": {
                                ...styles[":active"],
                                backgroundColor: "#ddd",
                              },
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
                          options={city}
                          defaultValue={city[1]}
                          styles={{
                            option: (styles) => ({
                              ...styles,
                              ":active": {
                                ...styles[":active"],
                                backgroundColor: "#ddd",
                              },
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
