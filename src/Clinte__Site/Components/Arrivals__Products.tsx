import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  BsCartDash,
  BsFillCartCheckFill,
  BsHandbag,
  BsHandbagFill,
  BsHeart,
  BsHeartFill,
  BsSearch,
  BsShuffle,
} from "react-icons/bs";
import ShopProduct from "../Script/ShopProduct";
import tippy from "tippy.js";
import { UseCartState } from "../ContextAPI/ContextAPIRoot";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
const Arrivals__Products = () => {
  const {
    cartReducer: { cart, product, wishlist, compare },
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
    addToCart,
    quickViewClick,
    addToCompare,
    removeFromCompare,
  } = UseCartState();

  //! ====================

  let popup: () => void;
  popup = () => {
    alert("Hello");
  };

  useEffect(() => {
    tippy("#WishList", {
      content: 'Add to <span style="color: #F9D342;">WishList</span>',
      placement: "left",
      arrow: true,
      animation: "scale-extreme",
      theme: "light",
      allowHTML: true,
    });
    tippy("#QuickView", {
      content: 'See <span style="color: #F9D342;">QuickView</span>',
      placement: "left",
      arrow: true,
      animation: "scale-extreme",
      theme: "light",
      allowHTML: true,
    });
    tippy("#Compare", {
      content: 'Add to <span style="color: #F9D342;">Compare</span>',
      placement: "left",
      arrow: true,
      animation: "scale-extreme",
      theme: "light",
      allowHTML: true,
    });
  }, []);

  const Trending = ShopProduct.slice(0, 8);
  const freeShipping = ShopProduct.slice(8, 16);
  const discountProduct = ShopProduct.slice(16, 20);
  return (
    <>
      {/* // <section className="arrivals__Products"> */}
      <section className="arrivals__Products">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Tabs>
                <Row className="part__one">
                  <Col>
                    <div className="inner__body">
                      <h2>New Top Sales!</h2>
                      <TabList>
                        <Tab>Trending</Tab>
                        <Tab>Free Shipping</Tab>
                        <Tab>Discount Offer</Tab>
                      </TabList>
                    </div>
                  </Col>
                </Row>

                <TabPanel>
                  <Row className="part__two">
                    {product.map((value: any, index: number) => (
                      <Col
                        key={index}
                        lg={3}
                        md={6}
                        sm={6}
                        className="part__two__inner__body"
                      >
                        <div className="inner__products">
                          <div className="items">
                            <div className="img__file">
                              <img
                                className="img-fluid"
                                src={value.img}
                                alt=""
                              />
                              <img
                                className="img-fluid"
                                src={value.imgThum}
                                alt=""
                              />
                            </div>
                            <div className="text__file">
                              <Link to={"/single-product"} className="title">
                                {value.name?.slice(0, 50)} ...
                              </Link>
                              <p className="price">
                                <span>{value.price}</span> -{" "}
                                <span className="discount">
                                  ${value.discount}
                                </span>
                              </p>
                              <div className="rate">
                                <MdStarRate className="icon" />
                                <MdStarRate className="icon" />
                                <MdStarRate className="icon" />
                                <MdStarRate className="icon" />
                                <MdStarRate className="icon" />
                              </div>
                              <div className="handbagFill">
                                {cart.some((p: any) => p.id === value.id) ? (
                                  <div>
                                    <BsFillCartCheckFill
                                      className="BsFillCartCheckFill"
                                      onClick={() => removeFromCart(value)}
                                    />
                                  </div>
                                ) : (
                                  <div>
                                    <div>
                                      <BsCartDash
                                        className="BsCartDash"
                                        onClick={() => addToCart(value)}
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="overlay__icons">
                              <div className="overlay__icons__body">
                                {wishlist.some(
                                  (p: any) => p.id === value.id
                                ) ? (
                                  <span
                                    className="icon__body active"
                                    id="WishList"
                                    onClick={() => removeFromWishlist(value)}
                                  >
                                    <BsHeart className="icon" />
                                  </span>
                                ) : (
                                  <span
                                    className="icon__body "
                                    id="WishList"
                                    onClick={() => addToWishlist(value)}
                                  >
                                    <BsHeart className="icon" />
                                  </span>
                                )}

                                {compare.some((p: any) => p.id === value.id) ? (
                                  <span
                                    className="icon__body active"
                                    id="Compare"
                                    onClick={() => removeFromCompare(value)}
                                  >
                                    <BsShuffle className="icon" />
                                  </span>
                                ) : (
                                  <span
                                    className="icon__body"
                                    id="Compare"
                                    onClick={() => addToCompare(value)}
                                  >
                                    <BsShuffle className="icon" />
                                  </span>
                                )}

                                <Link
                                  to={"/"}
                                  className="icon__body"
                                  id="QuickView"
                                  onClick={() => quickViewClick(value)}
                                >
                                  <BsSearch className="icon" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>{" "}
                </TabPanel>
                <TabPanel>
                  <Row className="part__two">
                    {Trending.map((value, index) => (
                      <Col
                        key={index}
                        lg={3}
                        md={6}
                        sm={6}
                        className="part__two__inner__body"
                      >
                        <div className="inner__products">
                          <div className="items">
                            <div className="img__file">
                              <img
                                className="img-fluid"
                                src={value.img}
                                alt=""
                              />
                              <img
                                className="img-fluid"
                                src={value.imgThum}
                                alt=""
                              />
                            </div>
                            <div className="text__file">
                              <Link to={"/single-product"} className="title">
                                {value.name?.slice(0, 50)} ...
                              </Link>
                              <p className="price">
                                <span>{value.price}</span> -{" "}
                                <span className="discount">
                                  ${value.discount}
                                </span>
                              </p>
                              <div className="rate">
                                <MdStarRate className="icon" />
                                <MdStarRate className="icon" />
                                <MdStarRate className="icon" />
                                <MdStarRate className="icon" />
                                <MdStarRate className="icon" />
                              </div>
                              <div className="handbagFill">
                                <BsHandbag />
                              </div>
                            </div>

                            <div className="overlay__icons">
                              <div className="overlay__icons__body">
                                <Link to={"/"} className="icon__body">
                                  <BsHeart className="icon" />
                                </Link>
                                <Link to={"/"} className="icon__body">
                                  <BsShuffle className="icon" />
                                </Link>
                                {/* <Link
                                  to={"/"}
                                  className="icon__body"
                                  onClick={quickViewClick}
                                >
                                  <BsSearch className="icon" />
                                </Link> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>{" "}
                </TabPanel>
                <TabPanel>
                  <Row className="part__two">
                    {discountProduct.map((value, index) => (
                      <Col
                        key={index}
                        lg={3}
                        md={6}
                        sm={6}
                        className="part__two__inner__body"
                      >
                        <div className="inner__products">
                          <div className="items">
                            <div className="img__file">
                              <img
                                className="img-fluid"
                                src={value.img}
                                alt=""
                              />
                              <img
                                className="img-fluid"
                                src={value.imgThum}
                                alt=""
                              />
                            </div>
                            <div className="text__file">
                              <Link to={"/single-product"} className="title">
                                {value.name?.slice(0, 50)} ...
                              </Link>
                              <p className="price">
                                <span>{value.price}</span> -{" "}
                                <span className="discount">
                                  ${value.discount}
                                </span>
                              </p>
                              <div className="rate">
                                <MdStarRate className="icon" />
                                <MdStarRate className="icon" />
                                <MdStarRate className="icon" />
                                <MdStarRate className="icon" />
                                <MdStarRate className="icon" />
                              </div>
                              <div className="handbagFill">
                                <BsHandbag />
                              </div>
                            </div>

                            <div className="overlay__icons">
                              <div className="overlay__icons__body">
                                <Link to={"/"} className="icon__body">
                                  <BsHeart className="icon" />
                                </Link>
                                <Link to={"/"} className="icon__body">
                                  <BsShuffle className="icon" />
                                </Link>
                                {/* <Link
                                  to={"/"}
                                  className="icon__body"
                                  onClick={quickViewClick}
                                >
                                  <BsSearch className="icon" />
                                </Link> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>{" "}
                </TabPanel>
              </Tabs>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
};

export default Arrivals__Products;

// <section className="arrivals__Products">
// <div className="wrapper">
//   <div className="wrapper__body">
//     <Container>
//       <Tabs>
//         <Row className="part__one">
//           <Col>
//             <div className="inner__body">
//               <h2>New Top Sales!</h2>
//               <TabList>
//                 <Tab>Trending</Tab>
//                 <Tab>Free Shipping</Tab>
//                 <Tab>Discount Offer</Tab>
//               </TabList>
//             </div>
//           </Col>
//         </Row>

//         <TabPanel>
//           <Row className="part__two">
//             {freeShipping.map((value, index) => (
//               <Col
//                 key={index}
//                 lg={3}
//                 md={6}
//                 sm={6}
//                 className="part__two__inner__body"
//               >
//                 <div className="inner__products">
//                   <div className="items">
//                     <div className="img__file">
//                       <img
//                         className="img-fluid"
//                         src={value.img}
//                         alt=""
//                       />
//                       <img
//                         className="img-fluid"
//                         src={value.imgThum}
//                         alt=""
//                       />
//                     </div>
//                     <div className="text__file">
//                       <Link to={"/single-product"} className="title">
//                         {value.name?.slice(0, 50)} ...
//                       </Link>
//                       <p className="price">
//                         <span>{value.price}</span> -{" "}
//                         <span className="discount">
//                           ${value.discount}
//                         </span>
//                       </p>
//                       <div className="rate">
//                         <MdStarRate className="icon" />
//                         <MdStarRate className="icon" />
//                         <MdStarRate className="icon" />
//                         <MdStarRate className="icon" />
//                         <MdStarRate className="icon" />
//                       </div>
//                       <div className="handbagFill">
//                         <BsHandbag />
//                       </div>
//                     </div>

//                     <div className="overlay__icons">
//                       <div className="overlay__icons__body">
//                         <Link to={"/"} className="icon__body">
//                           <BsHeart className="icon" />
//                         </Link>
//                         <Link to={"/"} className="icon__body">
//                           <BsShuffle className="icon" />
//                         </Link>
//                         <Link
//                           to={"/"}
//                           className="icon__body"
//                           onClick={quickViewClick}
//                         >
//                           <BsSearch className="icon" />
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Col>
//             ))}
//           </Row>{" "}
//         </TabPanel>
//         <TabPanel>
//           <Row className="part__two">
//             {Trending.map((value, index) => (
//               <Col
//                 key={index}
//                 lg={3}
//                 md={6}
//                 sm={6}
//                 className="part__two__inner__body"
//               >
//                 <div className="inner__products">
//                   <div className="items">
//                     <div className="img__file">
//                       <img
//                         className="img-fluid"
//                         src={value.img}
//                         alt=""
//                       />
//                       <img
//                         className="img-fluid"
//                         src={value.imgThum}
//                         alt=""
//                       />
//                     </div>
//                     <div className="text__file">
//                       <Link to={"/single-product"} className="title">
//                         {value.name?.slice(0, 50)} ...
//                       </Link>
//                       <p className="price">
//                         <span>{value.price}</span> -{" "}
//                         <span className="discount">
//                           ${value.discount}
//                         </span>
//                       </p>
//                       <div className="rate">
//                         <MdStarRate className="icon" />
//                         <MdStarRate className="icon" />
//                         <MdStarRate className="icon" />
//                         <MdStarRate className="icon" />
//                         <MdStarRate className="icon" />
//                       </div>
//                       <div className="handbagFill">
//                         <BsHandbag />
//                       </div>
//                     </div>

//                     <div className="overlay__icons">
//                       <div className="overlay__icons__body">
//                         <Link to={"/"} className="icon__body">
//                           <BsHeart className="icon" />
//                         </Link>
//                         <Link to={"/"} className="icon__body">
//                           <BsShuffle className="icon" />
//                         </Link>
//                         <Link to={"/"} className="icon__body">
//                           <BsSearch className="icon" />
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Col>
//             ))}
//           </Row>{" "}
//         </TabPanel>
//         <TabPanel>
//           <Row className="part__two">
//             {discountProduct.map((value, index) => (
//               <Col
//                 key={index}
//                 lg={3}
//                 md={6}
//                 sm={6}
//                 className="part__two__inner__body"
//               >
//                 <div className="inner__products">
//                   <div className="items">
//                     <div className="img__file">
//                       <img
//                         className="img-fluid"
//                         src={value.img}
//                         alt=""
//                       />
//                       <img
//                         className="img-fluid"
//                         src={value.imgThum}
//                         alt=""
//                       />
//                     </div>
//                     <div className="text__file">
//                       <Link to={"/single-product"} className="title">
//                         {value.name?.slice(0, 50)} ...
//                       </Link>
//                       <p className="price">
//                         <span>{value.price}</span> -{" "}
//                         <span className="discount">
//                           ${value.discount}
//                         </span>
//                       </p>
//                       <div className="rate">
//                         <MdStarRate className="icon" />
//                         <MdStarRate className="icon" />
//                         <MdStarRate className="icon" />
//                         <MdStarRate className="icon" />
//                         <MdStarRate className="icon" />
//                       </div>
//                       <div className="handbagFill">
//                         <BsHandbag />
//                       </div>
//                     </div>

//                     <div className="overlay__icons">
//                       <div className="overlay__icons__body">
//                         <Link to={"/"} className="icon__body">
//                           <BsHeart className="icon" />
//                         </Link>
//                         <Link to={"/"} className="icon__body">
//                           <BsShuffle className="icon" />
//                         </Link>
//                         <Link to={"/"} className="icon__body">
//                           <BsSearch className="icon" />
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Col>
//             ))}
//           </Row>{" "}
//         </TabPanel>
//       </Tabs>
//     </Container>
//   </div>
// </div>
// </section>
