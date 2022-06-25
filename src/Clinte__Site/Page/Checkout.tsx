import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";
import Select from "react-select";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const Checkout: React.FC = () => {
  const [active, setActive] = useState(false);

  const handelClick = () => {
    setActive(!active);
  };

  return (
    <>
      {/* Helmet Intro Start */}

      <Meta_Data title={"Checkout"} />

      {/* Helmet Intro End*/}

      {/* Header Section start */}

      <Header />

      {/* Header Section End */}

      {/* Intro Section Start */}

      <Intro__Section title="Checkout" />

      {/* Intro Section End */}

      {/* Checkout Start  */}
      <section className="checkout">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row>
                <Col className="left__side" lg={7}>
                  <div className="inner__body">
                    <div className="login__source">
                      <p>
                        Returning customer? <Link to={"/"}>LOGIN</Link>
                      </p>
                      <p>
                        Have a coupon? <Link to={"/"}>ENTER YOUR CODE</Link>
                      </p>
                    </div>
                    <div className="billing__address">
                      <h3>BILLING DETAILS</h3>

                      <div className="main__address">
                        <form action="">
                          <div className="form__group d-flex">
                            <div className="leftGroup">
                              <p>First name *</p>
                              <input type="text" />
                            </div>
                            <div className="rightGroup">
                              <p>First name *</p>
                              <input type="text" />
                            </div>
                          </div>
                          <div className="form__group">
                            <div className="singleGroup">
                              <p>Company name (optional)</p>
                              <input type="text" />
                            </div>
                          </div>
                          <div className="form__group">
                            <div className="singleGroup">
                              <p>Country / Region *</p>
                              <Select
                                defaultValue={options[0]}
                                options={options}
                                styles={{
                                  option: (provided, state) => ({
                                    ...provided,
                                    color: state.isSelected ? "#fff" : "#333",
                                    backgroundColor: state.isSelected
                                      ? "#333"
                                      : "#fff",
                                    cursor: "pointer",
                                    ":active": {
                                      backgroundColor: "#ddd",
                                      cursor: "pointer",
                                    },
                                  }),
                                  singleValue: (provided, state) => ({
                                    ...provided,
                                    color: "#666",
                                    padding: "0px 0px",
                                    margin: "0px 0px",
                                  }),
                                  control: (styles) => ({
                                    ...styles,
                                    backgroundColor: "#fff",
                                    padding: "0px 0px",
                                    margin: "0px 0px",

                                    ":focus-within": {
                                      ...styles[":focus-within"],
                                      border: "1px solid #ddd",
                                      boxShadow: "none",
                                    },
                                  }),
                                  input: (styles) => ({
                                    ...styles,
                                    fontSize: "14px",
                                    padding: "0px 0px",
                                    margin: "0px 0px",
                                  }),
                                }}
                              />
                            </div>
                          </div>
                          <div className="form__group">
                            <div className="singleGroup">
                              <p>Street address *</p>
                              <input
                                type="text"
                                placeholder="House number and street name"
                              />
                              <input
                                className="mt-15"
                                type="text"
                                placeholder="Apartment, suite, unit, etc. (optional)"
                              />
                            </div>
                          </div>
                          <div className="form__group d-flex">
                            <div className="leftGroup">
                              <p>ZIP *</p>
                              <input type="text" />
                            </div>
                            <div className="rightGroup">
                              <p>Phone *</p>
                              <input type="text" />
                            </div>
                          </div>
                          <div className="form__group">
                            <div className="singleGroup">
                              <p>Email address *</p>
                              <input type="text" />
                            </div>
                          </div>
                        </form>
                      </div>

                      {/* different address Section */}

                      <div className="different__address main__address">
                        <input
                          type="checkbox"
                          name=""
                          id="different__address"
                        />
                        <label
                          htmlFor="different__address"
                          onClick={handelClick}
                        >
                          Ship to a different address?
                        </label>
                        <form action="" className={active ? "active" : ""}>
                          <div className="form__group d-flex">
                            <div className="leftGroup">
                              <p>First name *</p>
                              <input type="text" />
                            </div>
                            <div className="rightGroup">
                              <p>First name *</p>
                              <input type="text" />
                            </div>
                          </div>
                          <div className="form__group">
                            <div className="singleGroup">
                              <p>Company name (optional)</p>
                              <input type="text" />
                            </div>
                          </div>
                          <div className="form__group">
                            <div className="singleGroup">
                              <p>Country / Region *</p>
                              <Select
                                defaultValue={options[0]}
                                options={options}
                                styles={{
                                  option: (provided, state) => ({
                                    ...provided,
                                    color: state.isSelected ? "#fff" : "#333",
                                    backgroundColor: state.isSelected
                                      ? "#333"
                                      : "#fff",
                                    cursor: "pointer",
                                    ":active": {
                                      backgroundColor: "#ddd",
                                      cursor: "pointer",
                                    },
                                  }),
                                  singleValue: (provided, state) => ({
                                    ...provided,
                                    color: "#666",
                                    padding: "0px 0px",
                                    margin: "0px 0px",
                                  }),
                                  control: (styles) => ({
                                    ...styles,
                                    backgroundColor: "#fff",
                                    padding: "0px 0px",
                                    margin: "0px 0px",

                                    ":focus-within": {
                                      ...styles[":focus-within"],
                                      border: "1px solid #ddd",
                                      boxShadow: "none",
                                    },
                                  }),
                                  input: (styles) => ({
                                    ...styles,
                                    fontSize: "14px",
                                    padding: "0px 0px",
                                    margin: "0px 0px",
                                  }),
                                }}
                              />
                            </div>
                          </div>
                          <div className="form__group">
                            <div className="singleGroup">
                              <p>Street address *</p>
                              <input
                                type="text"
                                placeholder="House number and street name"
                              />
                              <input
                                className="mt-15"
                                type="text"
                                placeholder="Apartment, suite, unit, etc. (optional)"
                              />
                            </div>
                          </div>
                          <div className="form__group d-flex">
                            <div className="leftGroup">
                              <p>ZIP *</p>
                              <input type="text" />
                            </div>
                            <div className="rightGroup">
                              <p>Phone *</p>
                              <input type="text" />
                            </div>
                          </div>
                          <div className="form__group">
                            <div className="singleGroup">
                              <p>Email address *</p>
                              <input type="text" />
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* order Note Start */}
                      <div className="orderNote">
                        <p>Order notes (optional)</p>
                        <textarea name="" id="" cols={20} rows={6}></textarea>
                      </div>
                      {/* order Note End */}
                    </div>
                  </div>
                </Col>

                <Col lg={5} className="right__side">
                  <div className="inner__body">
                    <h2 className="header__text">Cart Totals</h2>
                    <hr />
                    <div className="total__price ">
                      <div className="item">
                        <p>
                          Palm Print Jacket{" "}
                          <span>
                            <IoMdClose />
                          </span>{" "}
                          1
                        </p>
                        <p>$200</p>
                      </div>
                      <div className="item">
                        <p>
                          Brown Backpack{" "}
                          <span>
                            <IoMdClose />
                          </span>{" "}
                          1
                        </p>
                        <p>$230</p>
                      </div>
                    </div>
                    <hr />
                    <div className="subtotal__count">
                      <p>Subtotal :</p>
                      <p>$ 430</p>
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
                    <hr />
                    <div className="Total__count">
                      <p>Total :</p>
                      <p>$ 430</p>
                    </div>
                    {/* <div className="payment__methods">
                      <p>Shipping to CA.</p>
                    </div> */}

                    <div className="payment__block">
                      <Accordion allowZeroExpanded>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <span className="inner__head"> </span>
                              <span className="text">
                                {" "}
                                Direct Bank Transfor
                              </span>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order will not be shipped until the funds
                              have cleared in our account.
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <span className="inner__head"> </span>
                              <span className="text">
                                {" "}
                                Direct Bank Transfor
                              </span>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              Please send a check to Store Name, Store Street,
                              Store Town, Store State / County, Store Postcode.
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <span className="inner__head"> </span>
                              <span className="text"> Cash on delivery</span>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>Pay with cash upon delivery.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <span className="inner__head"> </span>
                              <span className="text">
                                {" "}
                                Paypal <a href="#">What is PayPal?</a>
                              </span>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              Please send a check to Store Name, Store Street,
                              Store Town, Store State / County, Store Postcode.
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <div>
                      <Link to={"/"} className="button__mid_solid_color_black">
                        PLACE ORDER
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
      {/* Checkout End  */}

      {/* Footer start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default Checkout;
