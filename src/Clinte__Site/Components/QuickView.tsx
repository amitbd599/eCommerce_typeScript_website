import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from "react-select";

const size = [
  { value: "SM", label: "SM" },
  { value: "M", label: "M" },
  { value: "LG", label: "LG" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];
const QuickView: React.FC = () => {
  return (
    <Fragment>
      <div className="quick__view">
        <div className="wrapper">
          <div className="wrapper__body">
            <div className="overlay"></div>
            <Container>
              <Row>
                <Col>
                  <div className="inner__body">
                    <div className="quick__view__inner__body">
                      <div className="inner__box__items">
                        <div className="img__file">
                          <img
                            className="img-fluid"
                            src="https://res.cloudinary.com/amitjs/image/upload/v1654985876/Ecommerce%20Product%20Img-%20Important/Hfdb99d3fb49d4109805ef327ae33cdd8Q_kftf2i.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text__file">
                          <h2 className="header__text">
                            Summer Short Sleeve Polo Shirt Dress Women 2022
                            Fashion Preppy
                          </h2>
                          <h3 className="price">$93 - $150</h3>
                          <p className="des">
                            Marfa authentic High Life veniam. Tumblr post-ironic
                            typewriter, sriracha tote bag kogi you. Direct trade
                            Banksy Carles pop-up. Raglan Tee , Denim & Supply
                            Ralph Lauren. Tumblr post-ironic typewriter,
                            sriracha tote bag kogi you.
                          </p>
                          <div className="select__size__body">
                            <div className="header__text__intro">
                              <span>Color :</span>
                            </div>
                            <div>
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
                              <span>$35.00</span>
                            </div>
                            <div className="cart__int">
                              <div className="input__field">
                                <button>-</button>
                                <input type="text" value={"3"} />
                                <button>+</button>
                              </div>
                              <div className="button__cart">
                                <Link
                                  to={"/"}
                                  className="button__mid_solid_color_black"
                                >
                                  ADD TO CART
                                </Link>
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
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default QuickView;
