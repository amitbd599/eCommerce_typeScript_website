import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";
import Select from "react-select";
import { Link } from "react-router-dom";
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
