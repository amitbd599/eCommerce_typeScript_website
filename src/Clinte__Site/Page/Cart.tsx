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
const Cart: React.FC = () => {
  const productData = [
    { id: 1, title: "CLASSIC SIMPLE BACKPACK", price: 50 },
    { id: 2, title: "Smart Watch", price: 150 },
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
                  </div>
                </Col>
                <Col lg={4} className="right__side">
                  <div className="inner__body">
                    <h2 className="header__text">CART TOTALS</h2>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5>Subtotal</h5>
                      <h5>$100.00</h5>
                    </div>
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
                    <h2>Shipping to CA.</h2>
                    <div className="custom-select">
                      <select>
                        <option value="0">United States</option>
                        <option value="1">Brazil</option>
                        <option value="2">Colombia</option>
                        <option value="3">Mexico</option>
                        <option value="4">Canada</option>
                      </select>
                    </div>
                    <div className="custom-select">
                      <select>
                        <option value="0">California</option>
                        <option value="1">Ohaio</option>
                        <option value="2">Haiti</option>
                        <option value="3"> Cuba</option>
                      </select>
                    </div>
                    <div className="custom-select">
                      <input type="text" placeholder="Town / City" />
                    </div>
                    <div className="custom-select">
                      <input type="text" placeholder="ZIP" />
                    </div>
                    <div>
                      <Link to={"/"} className="button__mid_solid_color_black">
                        UPDATE TOTALS
                      </Link>
                    </div>
                    <hr />
                    <div>
                      <p>Total</p>
                      <p>$100.00</p>
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
