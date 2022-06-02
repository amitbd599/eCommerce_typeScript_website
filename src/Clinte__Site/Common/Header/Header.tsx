import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLanguage, MdFavorite } from "react-icons/md";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import custom_Data from "../../Script/Custom__Data";

const Header = () => {
  const [data, setData] = useState("Eng");
  const { langauge } = custom_Data();

  let hendelClick: (e: string) => void;

  hendelClick: hendelClick = (e: string) => {
    setData(e);
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
                        <Link to="/">About</Link>
                      </li>
                      <li>
                        <Link to="/">Our Stores</Link>
                      </li>
                      <li>
                        <Link to="/">Blog</Link>
                      </li>
                      <li>
                        <Link to="/">Contact</Link>
                      </li>
                      <li>
                        <Link to="/">FAQ</Link>
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
                          {langauge.map((item) => (
                            <li
                              key={item.id}
                              onClick={(e) => hendelClick(item.sort_title)}
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
    </section>
  );
};

export default Header;
