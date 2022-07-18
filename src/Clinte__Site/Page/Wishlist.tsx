import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";
import { UseCartState } from "../ContextAPI/ContextAPIRoot";
import Product__Slider__One from "../Widget/Slider/Product__Slider__One";

const Wishlist: React.FC = () => {
  const {
    cartReducer: { wishlist, cart },
    addToCart,
    removeFromCart,
    quickViewClick,
    removeFromWishlist,
  } = UseCartState();
  return (
    <>
      <ToastContainer hideProgressBar={true} />
      {/* Helmet Intro Start */}

      <Meta_Data title={"Wishlist"} />

      {/* Helmet Intro End*/}

      {/* Header Section start */}

      <Header />

      {/* Header Section End */}

      {/* Intro Section Start */}

      <Intro__Section title="Wishlist" />

      {/* Intro Section End */}

      {/* Top Category Product Slider Start */}
      <section className="wishlist__page__product__Slider__One">
        <Product__Slider__One />
      </section>
      {/* Top Category Product Slider End */}

      {/* Wishlist Body Start*/}
      <section className="wishlist__page">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row className="section__one">
                <Col>
                  <div className="header__text">
                    <h2>My wishlist</h2>
                  </div>
                </Col>
              </Row>

              <Row className="section__two">
                <Col>
                  {wishlist.length > 0 ? (
                    <div className="table__section">
                      <table>
                        <thead>
                          <tr>
                            <th className="product__name">
                              <span>Product</span>
                            </th>
                            <th className="price">
                              <span>Price</span>
                            </th>
                            <th className="status">
                              <span>Stock Status</span>
                            </th>
                            <th className="wishlist">
                              <span>Wishlist-Actions</span>
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {wishlist.map((value: any, index: number) => (
                            <tr key={index}>
                              <td className="product-thumbnail">
                                <div className="img__file">
                                  <img
                                    className="img-fluid"
                                    src={value.img}
                                    alt=""
                                  />
                                  <Link to={"/"} className="product__name">
                                    {value.name}
                                  </Link>
                                  <span className="close__icon">
                                    <IoMdClose
                                      onClick={() => removeFromWishlist(value)}
                                    />
                                  </span>
                                </div>
                              </td>
                              <td className="product-price">
                                <span> $55.00</span>
                              </td>
                              <td className="product-stock-status">
                                <span className="in__stock"> In Stock</span>
                                {/* <span className='out__stock'> In Stock</span> */}
                              </td>
                              <td className="action">
                                <span
                                  className="button__mid_border_color_gray mr-20"
                                  onClick={() => quickViewClick(value)}
                                >
                                  QUICK VIEW
                                </span>

                                {cart.some((p: any) => p.id === value.id) ? (
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
                                    Add to Cart
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="wishlist__empty">
                      <p>Your Wishlist is empty !</p>
                    </div>
                  )}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
      {/* Wishlist Body End*/}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default Wishlist;
