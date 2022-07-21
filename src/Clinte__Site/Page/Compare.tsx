import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";
import { UseCartState } from "../ContextAPI/ContextAPIRoot";
import Product__Slider__One from "../Widget/Slider/Product__Slider__One";

const Compare: React.FC = () => {
  const {
    cartReducer: { compare, cart },
    addToCart,
    removeFromCart,
    removeFromCompare,
  } = UseCartState();
  console.log(compare.length);

  return (
    <>
      <ToastContainer hideProgressBar={true} />
      {/* Helmet Intro Start */}

      <Meta_Data title={"Compare"} />

      {/* Helmet Intro End*/}

      {/* Header Section start */}

      <Header />

      {/* Header Section End */}

      {/* Intro Section Start */}

      <Intro__Section title="Compare" />

      {/* Intro Section End */}

      {/* Top Category Product Slider Start */}
      <section className="compare__page__product__Slider__One">
        <Product__Slider__One />
      </section>
      {/* Top Category Product Slider End */}

      {/* compare  Body Start*/}
      <section className="compare__page">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container className="main__container">
              <Row className="section__one">
                <Col>
                  <div className="header__text">
                    <h2>My Compare Products</h2>
                  </div>
                </Col>
              </Row>

              {compare.length > 0 ? (
                <div className="section__two">
                  <div className="data__table__section">
                    <Row className="main__section">
                      <table style={{ width: "100%" }}>
                        <tbody>
                          <tr>
                            <th>Product :</th>
                            {compare.map((value: any, index: number) => (
                              <>
                                <td>
                                  <div>
                                    <div className="img__file">
                                      <img src={value.img} alt="" />

                                      {cart.some(
                                        (p: any) => p.id === value.id
                                      ) ? (
                                        <span
                                          className="button__mid_solid_color_black"
                                          onClick={() => removeFromCart(value)}
                                        >
                                          Remove From Cart
                                        </span>
                                      ) : (
                                        <span
                                          className="button__mid_solid_color_black"
                                          onClick={() => addToCart(value)}
                                        >
                                          Add To Cart
                                        </span>
                                      )}

                                      <span
                                        className="icon"
                                        onClick={() => removeFromCompare(value)}
                                      >
                                        {" "}
                                        REMOVE
                                        <MdClose />
                                      </span>
                                    </div>
                                  </div>
                                </td>
                              </>
                            ))}{" "}
                          </tr>
                          <tr>
                            <th>Name:</th>
                            {compare.map((value: any, index: number) => (
                              <>
                                <td>
                                  <div>
                                    <p>{value.name}</p>
                                  </div>
                                </td>
                              </>
                            ))}{" "}
                          </tr>
                          <tr>
                            <th>Price:</th>
                            {compare.map((value: any, index: number) => (
                              <>
                                <td>
                                  <div>
                                    <p>{value.price}</p>
                                  </div>
                                </td>
                              </>
                            ))}{" "}
                          </tr>
                          <tr>
                            <th>COLOR:</th>
                            {compare.map((value: any, index: number) => (
                              <>
                                <td>
                                  <div>
                                    <p>Red, Blue, Black</p>
                                  </div>
                                </td>
                              </>
                            ))}{" "}
                          </tr>
                          <tr>
                            <th>AVAILABILITY:</th>
                            {compare.map((value: any, index: number) => (
                              <>
                                <td>
                                  <div>
                                    <p>In Stock</p>
                                  </div>
                                </td>
                              </>
                            ))}{" "}
                          </tr>
                          <tr>
                            <th>Categories:</th>
                            {compare.map((value: any, index: number) => (
                              <>
                                <td>
                                  <div>
                                    <p>{value.categories}</p>
                                  </div>
                                </td>
                              </>
                            ))}{" "}
                          </tr>
                          <tr>
                            <th>SIZE:</th>
                            {compare.map((value: any, index: number) => (
                              <>
                                <td>
                                  <div>
                                    <p>XXL, XL</p>
                                  </div>
                                </td>
                              </>
                            ))}{" "}
                          </tr>
                          <tr>
                            <th>Discount:</th>
                            {compare.map((value: any, index: number) => (
                              <>
                                <td>
                                  <div>
                                    <p>{value.discount}</p>
                                  </div>
                                </td>
                              </>
                            ))}{" "}
                          </tr>
                          <tr>
                            <th>Reviews:</th>
                            {compare.map((value: any, index: number) => (
                              <>
                                <td>
                                  <div>
                                    <p>Reviews</p>
                                  </div>
                                </td>
                              </>
                            ))}{" "}
                          </tr>
                          <tr>
                            <th>Brand:</th>
                            {compare.map((value: any, index: number) => (
                              <>
                                <td>
                                  <div>
                                    <p>Brand Name</p>
                                  </div>
                                </td>
                              </>
                            ))}{" "}
                          </tr>
                        </tbody>
                      </table>
                    </Row>
                  </div>
                </div>
              ) : (
                <div>
                  <p>No Product Available On Your Compare! </p>
                </div>
              )}
            </Container>
          </div>
        </div>
      </section>
      {/* compare Body End*/}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default Compare;
