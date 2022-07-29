import React, { Fragment, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";
import Product__Slider__One from "../Widget/Slider/Product__Slider__One";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Link } from "react-router-dom";
import Select from "react-select";
import Category from "../Script/Category";
import Footer from "../Common/Footer/Footer";
import { FaAlignJustify, FaList, FaMinus, FaPlus } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import {
  BsCartDash,
  BsFillCartCheckFill,
  BsHandbag,
  BsHeart,
  BsSearch,
  BsShuffle,
} from "react-icons/bs";
import ShopProduct from "../Script/ShopProduct";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { UseCartState } from "../ContextAPI/ContextAPIRoot";
import { ToastContainer } from "react-toastify";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import TextField from "@mui/material/TextField";

const sortingItems = [
  { value: "Sort_by_latest", label: "Sort by latest" },
  { value: "Popularity", label: "Popularity" },
  { value: "Sort_by_rating", label: "Sort by rating" },

  { value: "Price_low_to_high", label: "Price low to high" },
  { value: "Price_high_to_low", label: "Price high to low" },
];
const show = [
  { value: "Show 6", label: "Show 6 " },
  { value: "Show 12", label: "Show 12 " },
  { value: "Show 20", label: "Show 12" },
  { value: "Show 25", label: "Show 25" },
  { value: "Show 30", label: "Show 30" },
];

const ShopPage: React.FC = () => {
  const {
    cartReducer: { cart, product, wishlist, compare },
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
    addToCart,
    quickViewClick,
    addToCompare,
    removeFromCompare,
    sortReducer: { sort, filterCategory, filterPrice, clearFilter },
    sortDispatch,
  } = UseCartState();

  const marks = {
    0: "10",
    20: "80",
    40: "100",
    60: "200",
    80: "250",
    100: "1000",
  };

  const [selectedOptions, setSelectedOptions] = useState("Sort_by_latest");

  const handleChange = (e: any) => {
    setSelectedOptions(e.value);
  };

  useEffect(() => {
    sortDispatch({
      type: "SORT",
      payload: selectedOptions,
    });
  }, [selectedOptions]);

  const sortingAllProducts = () => {
    let sortProduct = product;
    if (sort === "Sort_by_latest") {
      sortProduct = sortProduct.sort(
        (a: any, b: any) => sort === "Sort_by_latest" && b.date - a.date
      );
      return sortProduct;
    } else if (sort === "Price_low_to_high") {
      sortProduct = sortProduct.sort(
        (a: any, b: any) => sort === "Price_low_to_high" && a.price - b.price
      );
      return sortProduct;
    } else if (sort === "Price_high_to_low") {
      sortProduct = sortProduct.sort(
        (a: any, b: any) => sort === "Price_high_to_low" && b.price - a.price
      );
      return sortProduct;
    } else if (sort === "Sort_by_rating") {
      sortProduct = sortProduct.sort(
        (a: any, b: any) => sort === "Sort_by_rating" && b.rating - a.rating
      );
      return sortProduct;
    } else if (sort === "Popularity") {
      sortProduct = sortProduct.sort(
        (a: any, b: any) => sort === "Popularity" && b.popularity - a.popularity
      );
      return sortProduct;
    } else {
      return sortProduct;
    }
  };

  // const filterCategoryProducts = () => {
  //   let FilterProducts = sortingAllProducts();

  //   if (filterCategory === "Women's Fashion") {
  //     FilterProducts = FilterProducts.filter((product: any) => {
  //       return product.categories === "Women's Fashion";
  //     });
  //     return FilterProducts;
  //   } else if (filterCategory === "Men's Fashion") {
  //     FilterProducts = FilterProducts.filter((product: any) => {
  //       return product.categories === "Men's Fashion";
  //     });
  //     return FilterProducts;
  //   } else if (filterCategory === "Phones & Telecommunications") {
  //     FilterProducts = FilterProducts.filter((product: any) => {
  //       return product.categories === "Phones & Telecommunications";
  //     });
  //     return FilterProducts;
  //   } else if (filterCategory === "Computer, Office & Security") {
  //     FilterProducts = FilterProducts.filter((product: any) => {
  //       return product.categories === "Computer, Office & Security";
  //     });
  //     return FilterProducts;
  //   } else if (filterCategory === "Consumer Electronics") {
  //     FilterProducts = FilterProducts.filter((product: any) => {
  //       return product.categories === "Consumer Electronics";
  //     });
  //     return FilterProducts;
  //   } else if (filterCategory === "Jewelry & Watches") {
  //     FilterProducts = FilterProducts.filter((product: any) => {
  //       return product.categories === "Jewelry & Watches";
  //     });
  //     return FilterProducts;
  //   } else if (filterCategory === "Home, Pet & Appliances") {
  //     FilterProducts = FilterProducts.filter((product: any) => {
  //       return product.categories === "Home, Pet & Appliances";
  //     });
  //     return FilterProducts;
  //   } else if (filterCategory === "Bags & Shoes") {
  //     FilterProducts = FilterProducts.filter((product: any) => {
  //       return product.categories === "Bags & Shoes";
  //     });
  //     return FilterProducts;
  //   } else if (filterCategory === "Toys, Kids & Babies") {
  //     FilterProducts = FilterProducts.filter((product: any) => {
  //       return product.categories === "Toys, Kids & Babies";
  //     });
  //     return FilterProducts;
  //   } else if (filterCategory === "Beauty, Health & Hair") {
  //     FilterProducts = FilterProducts.filter((product: any) => {
  //       return product.categories === "Beauty, Health & Hair";
  //     });
  //     return FilterProducts;
  //   } else if (filterCategory === "Automobiles & Motorcycles") {
  //     FilterProducts = FilterProducts.filter((product: any) => {
  //       return product.categories === "Automobiles & Motorcycles";
  //     });
  //     return FilterProducts;
  //   } else if (filterCategory === "Home Improvement & Tools") {
  //     FilterProducts = FilterProducts.filter((product: any) => {
  //       return product.categories === "Home Improvement & Tools";
  //     });
  //     return FilterProducts;
  //   } else if (filterCategory === "Clear All Filter") {
  //     FilterProducts = FilterProducts.filter((product: any) => {
  //       return product;
  //     });
  //     return FilterProducts;
  //   } else {
  //     return FilterProducts;
  //   }
  // };

  // console.log(filterCategoryProducts());

  //! ==================

  // const [filterItems, setFilterItems] = useState(sortingAllProducts());

  // const filterResult = (value: any) => {
  //   let FilterProducts = sortingAllProducts();
  //   let result = FilterProducts.filter((curData: any) => {
  //     return curData.categories === value;
  //   });
  //   return setFilterItems(result);
  // };

  let filterCategoryFun = () => {
    let FilterProducts = sortingAllProducts();
    if (filterCategory) {
      FilterProducts = FilterProducts.filter((curData: any) => {
        return curData.categories === filterCategory;
      });
    }
    if (filterPrice) {
      FilterProducts = FilterProducts.filter((curData: any) => {
        return curData.price <= filterPrice;
      });
    }
    if (clearFilter === true) {
      FilterProducts = FilterProducts.filter((product: any) => {
        return product;
      });
    }
    return FilterProducts;
  };

  return (
    <Fragment>
      <ToastContainer hideProgressBar={true} />
      {/* Helmet Intro Start */}

      <Meta_Data title={"Shop"} />

      {/* Helmet Intro End*/}

      {/* Header Section start */}

      <Header />

      {/* Header Section End */}

      {/* Intro Section Start */}

      <Intro__Section title="Shop" />

      {/* Intro Section End */}

      {/* Top Category Product Slider Start */}
      <section className="wishlist__page__product__Slider__One">
        <Product__Slider__One />
      </section>
      {/* Top Category Product Slider End */}

      {/* Shop items section start */}
      <section className="shop">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row>
                <Col lg={3} className="left__side">
                  <div className="filter">
                    <span>Filter :</span>
                    <span>
                      <input type="radio" name="category" id="clear" />
                      <label htmlFor="clear"></label>
                    </span>
                    <span
                      onClick={() =>
                        sortDispatch({
                          type: "CLEAR_FILTER",
                          payload: true,
                        })
                        
                      }
                    >
                      Clean All
                    </span>
                  </div>
                  <div className="accordion__body">
                    <Accordion
                      preExpanded={["a", "b", "c", "d", "e"]}
                      allowMultipleExpanded
                    >
                      <AccordionItem uuid="a">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <span> All Category</span>
                            <span>
                              <FaPlus className="icons__BsPlus" />
                              <FaMinus className="icons__BiMinus" />
                            </span>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className="category__items">
                            {Category.map((value: any, index: number) => (
                              <div>
                                <input
                                  type="radio"
                                  name="category"
                                  id={index.toString()}
                                />
                                <label
                                  htmlFor={index.toString()}
                                  onClick={() =>
                                    sortDispatch({
                                      type: "FILTER_CATEGORY",
                                      payload: value.category,
                                    })
                                  }
                                >
                                  {value.category}
                                </label>
                              </div>
                            ))}
                          </div>
                          {/* <ul className="items__body">
                            {Category.map((value: any, index: any) => (
                              <li key={index}>
                                <span
                                  // onClick={() => filterResult(value.category)}

                                  onClick={() =>
                                    sortDispatch({
                                      type: "FILTER_CATEGORY",
                                      payload: value.category,
                                    })
                                  }
                                >
                                  {value.category}
                                </span>
                              </li>
                            ))}
                          </ul> */}
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem uuid="b">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <span>Price</span>
                            <span>
                              <FaPlus className="icons__BsPlus" />
                              <FaMinus className="icons__BiMinus" />
                            </span>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <form action="">
                            <ul className="items__body">
                              <li>
                                <input
                                  type="radio"
                                  name="Price__Filter"
                                  id="price__one"
                                />
                                <label
                                  htmlFor="price__one"
                                  onClick={() =>
                                    sortDispatch({
                                      type: "FILTER_PRICE",
                                      payload: 100,
                                    })
                                  }
                                >
                                  $0.00 - $100.00
                                </label>
                              </li>
                              <li>
                                <input
                                  type="radio"
                                  name="Price__Filter"
                                  id="price_1"
                                />
                                <label
                                  htmlFor="price_1"
                                  onClick={() =>
                                    sortDispatch({
                                      type: "FILTER_PRICE",
                                      payload: 200,
                                    })
                                  }
                                >
                                  $100.00 - $200.00
                                </label>
                              </li>
                              <li>
                                <input
                                  type="radio"
                                  name="Price__Filter"
                                  id="price_2"
                                />
                                <label
                                  htmlFor="price_2"
                                  onClick={() =>
                                    sortDispatch({
                                      type: "FILTER_PRICE",
                                      payload: 300,
                                    })
                                  }
                                >
                                  $200.00 - $300.00
                                </label>
                              </li>
                              <li>
                                <input
                                  type="radio"
                                  name="Price__Filter"
                                  id="price_3"
                                />
                                <label
                                  htmlFor="price_3"
                                  onClick={() =>
                                    sortDispatch({
                                      type: "FILTER_PRICE",
                                      payload: 500,
                                    })
                                  }
                                >
                                  $300.00 - $500.00
                                </label>
                              </li>
                              <li>
                                <input
                                  type="radio"
                                  name="Price__Filter"
                                  id="price_4"
                                />
                                <label
                                  htmlFor="price_4"
                                  onClick={() =>
                                    sortDispatch({
                                      type: "FILTER_PRICE",
                                      payload: 1000,
                                    })
                                  }
                                >
                                  $1000.00 +
                                </label>
                              </li>
                            </ul>
                          </form>

                          <div className="price__filter__slider">
                            <h2>FILTER BY PRICE</h2>

                            <Slider
                              range
                              min={0}
                              marks={marks}
                              step={null}
                              defaultValue={[0, 20]}
                              allowCross={false}
                              pushable
                              draggableTrack
                            />
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem uuid="c">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <span>Size</span>
                            <span>
                              <FaPlus className="icons__BsPlus" />
                              <FaMinus className="icons__BiMinus" />
                            </span>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <ul className="items__body">
                            <li>
                              <input type="checkbox" name="" id="ExtraLarge" />
                              <label htmlFor="ExtraLarge">Extra Large</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Large" />
                              <label htmlFor="Large">Large</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Medium" />
                              <label htmlFor="Medium">Medium</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Small" />
                              <label htmlFor="Small">Small</label>
                            </li>
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem uuid="d">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <span>Brand</span>
                            <span>
                              <FaPlus className="icons__BsPlus" />
                              <FaMinus className="icons__BiMinus" />
                            </span>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <ul className="items__body">
                            <li>
                              <input type="checkbox" name="" id="FentyBeauty" />
                              <label htmlFor="FentyBeauty">Fenty Beauty</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Orvis" />
                              <label htmlFor="Orvis">Orvis</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Bedding" />
                              <label htmlFor="Bedding">Bedding</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Swarovski" />
                              <label htmlFor="Swarovski">Swarovski</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Target" />
                              <label htmlFor="Target">Target</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Dove" />
                              <label htmlFor="Dove">Dove</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Michaels" />
                              <label htmlFor="Michaels">Michaels</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Patagonia" />
                              <label htmlFor="Patagonia">Patagonia</label>
                            </li>
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem uuid="e">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <span>Color</span>
                            <span>
                              <FaPlus className="icons__BsPlus" />
                              <FaMinus className="icons__BiMinus" />
                            </span>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <ul className="items__body">
                            <li>
                              <input type="checkbox" name="" id="Brown" />
                              <label htmlFor="Brown">Brown</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Black" />
                              <label htmlFor="Black">Black</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Blue" />
                              <label htmlFor="Blue">Blue</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Green" />
                              <label htmlFor="Green">Green</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Grey" />
                              <label htmlFor="Grey">Grey</label>
                            </li>
                            <li>
                              <input type="checkbox" name="" id="Yellow" />
                              <label htmlFor="Yellow">Yellow</label>
                            </li>
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </Col>
                <Col lg={9} className="right__side">
                  {/* Sort Filter Start */}
                  <div className="sort__intro">
                    <div className="sort__intro__inner">
                      <div className="sort__title">
                        <span>Sort By :</span>
                      </div>
                      <div className="select__data__left">
                        <Select
                          className="select__size"
                          // onChange={handleChange}

                          onChange={handleChange}
                          defaultValue={sortingItems[0]}
                          options={sortingItems}
                          styles={{
                            option: (provided, state) => ({
                              ...provided,
                              borderBottom: "1px solid #ddd",
                              color: state.isSelected ? "#fff" : "#666",
                              background: state.isSelected ? "#252525" : "#fff",
                              cursor: "pointer",
                              margin: "0px",
                              height: "40px",
                              fontSize: "15px",
                              ":active": {
                                backgroundColor: "#ddd",
                                cursor: "pointer",
                              },
                            }),
                            singleValue: (provided, state) => ({
                              ...provided,
                              color: "#666",

                              fontSize: "15px",
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
                    <div className="sort__intro__inner">
                      <div className="sort__title">
                        <span>Show Items :</span>
                      </div>
                      <div className="select__data__right">
                        <Select
                          className="select__size"
                          defaultValue={show[0]}
                          options={show}
                          styles={{
                            option: (provided, state) => ({
                              ...provided,
                              borderBottom: "1px solid #ddd",
                              color: state.isSelected ? "#fff" : "#666",
                              background: state.isSelected ? "#252525" : "#fff",
                              cursor: "pointer",
                              margin: "0px",
                              height: "40px",
                              fontSize: "15px",
                              ":active": {
                                backgroundColor: "#ddd",
                                cursor: "pointer",
                              },
                            }),
                            singleValue: (provided, state) => ({
                              ...provided,
                              color: "#666",

                              fontSize: "15px",
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
                      <div className="icon__section">
                        <span>
                          <FaAlignJustify />
                        </span>
                        <span>
                          <FaList />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Sort Filter End */}

                  {/* Product items Show start Here */}
                  <div className="product__items">
                    <div className="product__items__inner">
                      <Row>
                        {filterCategoryFun().map((value: any, index: any) => (
                          <Col
                            key={index}
                            lg={4}
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
                                  <Link
                                    to={"/single-product"}
                                    className="title"
                                  >
                                    {value.name?.slice(0, 50)} ...
                                  </Link>
                                  <p className="price">
                                    <span>{value.price}</span> -{" "}
                                    <span className="discount">
                                      ${value.discount}
                                    </span>
                                  </p>
                                  <div className="rate">
                                    {[...Array(5)].map((_: any, i: any) => (
                                      <span key={i}>
                                        {value.rating > i ? (
                                          <AiFillStar className="icon" />
                                        ) : (
                                          <AiOutlineStar className="icon" />
                                        )}
                                      </span>
                                    ))}
                                  </div>
                                  <div className="handbagFill">
                                    {cart.some(
                                      (p: any) => p.id === value.id
                                    ) ? (
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
                                      <button
                                        className="icon__body active"
                                        id="WishList"
                                        onClick={() =>
                                          removeFromWishlist(value)
                                        }
                                      >
                                        <BsHeart className="icon" />
                                      </button>
                                    ) : (
                                      <button
                                        className="icon__body "
                                        id="WishList"
                                        onClick={() => addToWishlist(value)}
                                      >
                                        <BsHeart className="icon" />
                                      </button>
                                    )}

                                    {compare.some(
                                      (p: any) => p.id === value.id
                                    ) ? (
                                      <button
                                        className="icon__body active"
                                        id="Compare"
                                        onClick={() => removeFromCompare(value)}
                                      >
                                        <BsShuffle className="icon" />
                                      </button>
                                    ) : (
                                      <button
                                        className="icon__body"
                                        id="Compare"
                                        onClick={() => addToCompare(value)}
                                      >
                                        <BsShuffle className="icon" />
                                      </button>
                                    )}

                                    <button
                                      className="icon__body"
                                      id="QuickView"
                                      onClick={() => quickViewClick(value)}
                                    >
                                      <BsSearch className="icon" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                    <div className="product__items__pagination">
                      <div className="product__items__pagination__inner">
                        <div className="left__side">
                          <span>
                            Showing <span>1-12 </span> of <span>60</span>{" "}
                            Products
                          </span>
                        </div>
                        <div className="right__side">
                          <Link to={"/"}> Prev</Link>
                          <Link to={"/"} className="active">
                            1
                          </Link>
                          <Link to={"/"}>2</Link>
                          <Link to={"/"}>3</Link>
                          <Link to={"/"}>Next</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product items Show End Here */}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
      {/* Shop items section End */}

      {/* Footer start */}
      <Footer />
      {/* Footer End */}
    </Fragment>
  );
};

export default ShopPage;
