import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { MdLanguage, MdFavorite } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import custom_Data from "../../Script/Custom__Data";
import Image__Data from "../../Script/Image__Data";
import nav__Items from "../../Script/Nav_items";
import Product_Data from "../../Script/Product__Data";
import QuickView from "../../Components/QuickView";
import { UseCartState } from "../../ContextAPI/ContextAPIRoot";
import SideCartDataShow from "../../Components/SideCartDataShow";

const Header: React.FC = () => {
  const [data, setData] = useState("Eng");
  const [active, setActive] = useState(false);
  const [close, setClose] = useState(false);
  const { language } = custom_Data();
  const { logo } = Image__Data();
  const { mixProduct } = Product_Data();
  const {
    cartReducer: { cart },
    cartSide,
  } = UseCartState();

  // Handel typeScript & Langauge change
  let handelClick: (e: string) => void;
  handelClick = (e: string) => {
    setData(e);
  };

  // Close item Handel ...
  let OpenClose__hendelClick: () => void;
  OpenClose__hendelClick = () => {
    setClose(!close);
  };
  // Search item Handel ...
  let search__hendelClick: () => void;
  search__hendelClick = () => {
    setActive(!active);
  };

  // Tooltip load here....
  useEffect(() => {
    tippy("#Newsletter", {
      content: 'SignUp for <span style="color: #F9D342;">Newsletter</span>',
      placement: "bottom",
      arrow: true,
      animation: "scale-extreme",
      theme: "light",
      allowHTML: true,
    });
  }, []);

  return (
    <section className="header__section">
      {/* ============= Top header section =============== */}
      {/* Top header section start */}
      <div className="top__headerSection">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row className="part__one">
                <Col lg={4} className="left__side">
                  <div className="inner__show">
                    <p>ADD ANYTHING HERE OR JUST REMOVE IT....</p>
                  </div>
                </Col>
                <Col lg={8} className="right__side">
                  <div className="inner__show">
                    <ul className="dropdown__inner_one">
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/">Our Stores</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/faqs">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/">
                          {" "}
                          <FaRegEnvelope className="icon mr-5" />
                          <span id="Newsletter">Newsletter</span>
                        </Link>
                      </li>
                    </ul>

                    <ul className="dropdown__inner_two">
                      <li className="Languages">
                        <Link to="/">
                          <MdLanguage className="icon mr-3" /> {data}
                        </Link>

                        <ul className="dropdown__inner">
                          {language.map((item) => (
                            <li
                              key={item.id}
                              onClick={(e) => handelClick(item.sort_title)}
                            >
                              {item.title}
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <Link to="/">
                          <MdFavorite className="icon mr-3" /> Wishlist
                        </Link>
                      </li>
                    </ul>
                    {/* Icon store */}
                    <div className="icon__show">
                      <span>
                        <a href="#">
                          <FaFacebookF className="icon" />
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <FaTwitter className="icon" />
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <FaInstagram className="icon" />
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <FaLinkedinIn className="icon" />
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <FaRegEnvelope className="icon" />
                        </a>
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      {/* Top header section End */}

      {/* =============  Desktop Menu Area ============= */}
      <div className="desktop__menu">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row>
                <Col>
                  <nav>
                    <div className="logo__section">
                      <Link to={"/"}>
                        <img src={logo[0].img} alt="" />
                      </Link>
                    </div>
                    <ul className="nav__items">
                      {nav__Items.map((item, index) => (
                        <li
                          className={
                            item.className
                              ? `nav__item ${item.className}`
                              : `nav__item`
                          }
                          key={index}
                        >
                          <Link className="link" to={item.link}>
                            {item.item}
                          </Link>

                          {/* Only Dropdown Items Start */}

                          {item.dropdown && (
                            <ul className="dropdown__items">
                              {item.dropdown?.map((dropItem: any) => (
                                <li className="dropdown__item">
                                  <Link className="link" to={dropItem.link}>
                                    {dropItem.item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Mega menu Items Start */}

                          {item.megaMenu && (
                            <div className="megaMenu">
                              <div className="inner__megaMenu">
                                <div className="categories__items">
                                  <h3>All Categories</h3>
                                  <ul>
                                    <li>
                                      <Link className="link" to={"/"}>
                                        Children
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="link" to={"/"}>
                                        Boys
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="link" to={"/"}>
                                        Girls
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="link" to={"/"}>
                                        Women
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="link" to={"/"}>
                                        Men
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="link" to={"/"}>
                                        Accessory
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="link" to={"/"}>
                                        Shoes
                                      </Link>
                                    </li>

                                    <Link
                                      className="button__mid_solid_color_black"
                                      to={"/"}
                                    >
                                      All Product{" "}
                                      <span>
                                        <FaArrowRight className="ml-5" />
                                      </span>
                                    </Link>
                                  </ul>
                                </div>
                                <div className="product__items">
                                  <div className="product__item">
                                    {mixProduct.map((item, index) => (
                                      <div
                                        key={index}
                                        className="product__item__inner"
                                      >
                                        <img
                                          className="img-fluid"
                                          src={item.img}
                                          alt=""
                                        />
                                        <p>{item.categories}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                    <div className="login__section">
                      <ul className="login__innerSection">
                        <li className="search__intro">
                          {!active ? (
                            <FaSearch
                              className="Search__icon"
                              onClick={search__hendelClick}
                            />
                          ) : (
                            <GrFormClose
                              className="Search__icon"
                              onClick={search__hendelClick}
                            />
                          )}

                          <div
                            className={
                              active
                                ? "search__section active"
                                : "search__section"
                            }
                          >
                            <div className="inner__section">
                              <form action="">
                                <input
                                  type="text"
                                  placeholder="search here..."
                                />
                                <FaSearch className="Search__icon" />
                              </form>
                            </div>
                          </div>
                        </li>
                        <li>
                          <Link to={"/login-register"}>LOGIN</Link>
                        </li>
                        <li className="cart__total" onClick={cartSide}>
                          CART / <span>$0.00</span>{" "}
                          <BsFillCartFill className="icon" />
                          <span className="cart__item">{cart.length}</span>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

      {/* =============  Mobile Menu Area ============= */}

      <div className={!close ? "mobile__menu active" : "mobile__menu"}>
        <div className="header__item">
          <div className="menu__icon">
            {!close ? (
              <BiMenu className="icon" onClick={OpenClose__hendelClick} />
            ) : (
              <GrFormClose
                className="close__menu__icon"
                onClick={OpenClose__hendelClick}
              />
            )}
          </div>
          <div className="logo__section">
            <Link to={"/"}>
              {" "}
              <img src={logo[0].img} alt="" />
            </Link>
          </div>
          <div className="cart__Count">
            <BsFillCartFill className="icon" />
            <span className="cart__item">0</span>
          </div>
        </div>
        <div className="wrapper">
          <div className="wrapper__body">
            <nav>
              <div className="search__intro">
                <input type="text" placeholder="Search Here..." />{" "}
                <FaSearch className="Search__icon" />
              </div>
              <ul className="nav__items">
                {nav__Items.map((item, index) => (
                  <li
                    className={
                      item.className ? `nav__item pageItem` : `nav__item`
                    }
                    key={index}
                  >
                    <Link className="link" to={item.link}>
                      {item.item}1
                    </Link>

                    {item.dropdown && (
                      <ul className="dropdown__items">
                        {item.dropdown?.map((dropItem: any) => (
                          <li className="dropdown__item">
                            <Link className="link" to={dropItem.link}>
                              {dropItem.item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="social__icon">
                <span>
                  <a href="#">
                    <FaFacebookF className="icon" />
                  </a>
                </span>
                <span>
                  <a href="#">
                    <FaTwitter className="icon" />
                  </a>
                </span>
                <span>
                  <a href="#">
                    <FaInstagram className="icon" />
                  </a>
                </span>
                <span>
                  <a href="#">
                    <FaLinkedinIn className="icon" />
                  </a>
                </span>
                <span>
                  <a href="#">
                    <FaRegEnvelope className="icon" />
                  </a>
                </span>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* ============= Quick View  Area =============*/}

      <QuickView />

      {/* Side Cart Data Show */}

      <SideCartDataShow />
    </section>
  );
};

export default Header;
