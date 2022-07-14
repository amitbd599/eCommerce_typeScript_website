import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { UseCartState } from "../ContextAPI/ContextAPIRoot";
const SideCartDataShow = () => {
  const {
    cartReducer: { cart },
    cartSideActive,
    cartSide,
  } = UseCartState();

  return (
    <div
      className={
        !cartSideActive ? "sideCartDataShow" : "sideCartDataShow active"
      }
    >
      <div className="wrapper">
        <div className="wrapper__body">
          <div className="overlay"></div>

          <div className="wrapper__hold__inner">
            <div className="wrapper__body__inner">
              <Row>
                <Col>
                  <div className="header__text">
                    <h2>SHOPPING CART</h2>
                    <span className="close__body" onClick={cartSide}>
                      {" "}
                      Close
                      <HiOutlineArrowNarrowRight className="ml-5" />
                    </span>
                  </div>

                  {cart.length > 0 ? (
                    <div>
                      <div className="items">
                        {cart.map((value: any) => (
                          <div className="item__card">
                            <div className="left__side">
                              <p className="title">{value.name.slice(0, 50)}</p>
                              <p className="price">
                                {" "}
                                <span>1</span>{" "}
                                <span>
                                  <AiOutlineClose />
                                </span>{" "}
                                <span>$ {value.price}</span>
                              </p>
                            </div>
                            <div className="right__side">
                              <div className="img__file">
                                <img
                                  className="img-fluid"
                                  src={value.img}
                                  alt=""
                                />
                                <span>
                                  <AiOutlineClose className="close__item" />
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="sub__total">
                        <span>Subtotal:</span>
                        <span>$ 200</span>
                      </div>
                      <div className="button__section">
                        <Link
                          to={"/cart"}
                          className="button__mid_solid_color_black"
                        >
                          View Cart
                        </Link>
                        <Link
                          to={"/"}
                          className="button__mid_solid_color_black"
                        >
                          CHECKOUT
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <span>Your cart is currently empty.</span>
                    </div>
                  )}
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCartDataShow;
