import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";
import Product__Slider__One from "../Widget/Slider/Product__Slider__One";

const Wishlist: React.FC = () => {
  return (
    <>
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
                        <tr>
                          <td className="product-thumbnail">
                            <div className="img__file">
                              <img
                                className="img-fluid"
                                src="https://res.cloudinary.com/amitjs/image/upload/v1654985925/Ecommerce%20Product%20Img-%20Important/HTB12ExXQwHqK1RjSZFgq6y7JXXax_rzcy1b.jpg"
                                alt=""
                              />
                              <Link to={"/"} className="product__name">
                                Handmade Ring
                              </Link>
                              <span className="close__icon">
                                <IoMdClose />
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
                            <span className="button__mid_border_color_gray mr-20">
                              QUICK VIEW
                            </span>
                            <span className="button__mid_solid_color_black">
                              ADD TO CART
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="product-thumbnail">
                            <div className="img__file">
                              <img
                                className="img-fluid"
                                src="https://res.cloudinary.com/amitjs/image/upload/v1654985766/Ecommerce%20Product%20Img-%20Important/Ha0a6d0ca3c924d71b34c410ec73ea45cJ_iunk01.webp"
                                alt=""
                              />
                              <Link to={"/"} className="product__name">
                                Handmade Ring
                              </Link>
                              <span className="close__icon">
                                <IoMdClose />
                              </span>
                            </div>
                          </td>
                          <td className="product-price">
                            <span> $55.00</span>
                          </td>
                          <td className="product-stock-status">
                            {/* <span className="in__stock"> In Stock</span> */}
                            <span className="out__stock"> Out Stock</span>
                          </td>
                          <td className="action">
                            <span className="button__mid_border_color_gray mr-20">
                              QUICK VIEW
                            </span>
                            <span className="button__mid_solid_color_black">
                              ADD TO CART
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="product-thumbnail">
                            <div className="img__file">
                              <img
                                className="img-fluid"
                                src="https://res.cloudinary.com/amitjs/image/upload/v1654983754/Ecommerce%20Product%20Img-%20Important/Hdf29ae4a95ed4354956d22d96dfee6faZ_ts6cg5.webp"
                                alt=""
                              />
                              <Link to={"/"} className="product__name">
                                Handmade Ring
                              </Link>
                              <span className="close__icon">
                                <IoMdClose />
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
                            <span className="button__mid_border_color_gray mr-20">
                              QUICK VIEW
                            </span>
                            <span className="button__mid_solid_color_black">
                              ADD TO CART
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
