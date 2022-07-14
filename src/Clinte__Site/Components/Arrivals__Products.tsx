import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsHandbag, BsHeart, BsSearch, BsShuffle } from "react-icons/bs";
import ShopProduct from "../Script/ShopProduct";
import { UseCartState } from "../ContextAPI/ContextAPIRoot";
const Arrivals__Products = () => {
  const {
    cartReducer: { cart, product },
    dispatch,
    addToCart,
  } = UseCartState();

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
                    {freeShipping.map((value, index) => (
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
                                <BsHandbag onClick={() => addToCart(value)} />
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
