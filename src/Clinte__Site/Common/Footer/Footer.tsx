import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaNewspaper,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer__section">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row>
                <Col lg={3} md={6} className="part__one">
                  <div className="inner__body">
                    <h2>Company Info</h2>
                    <p>
                      Nemo id laborum ducimus, eum totam repellendus ipsam ab
                      maiores quo explicabo eos dignissimos qui nihil dolorum
                      ratione esse temporibus? Harum facilis ratione, aut
                      aliquid minima maiores nulla eveniet ea facere distinctio.
                    </p>
                    <div className="icon__body">
                      <Link to={"/"}>
                        <FaFacebookF className="icon" />
                      </Link>
                      <Link to={"/"}>
                        <FaInstagram className="icon" />
                      </Link>
                      <Link to={"/"}>
                        <FaLinkedinIn className="icon" />
                      </Link>
                      <Link to={"/"}>
                        <FaTwitter className="icon" />
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={6} className="part__two">
                  <div className="inner__body">
                    <h2>Important Link</h2>

                    <ul>
                      <li>
                        <Link to={"/"}>Disclaimer</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Terms of Use</Link>
                      </li>
                      <li>
                        <Link to={"/"}>About Us</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Advertise</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Contact</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3} md={6} className="part__three">
                  <div className="inner__body">
                    <h2>Latest News</h2>

                    <ul>
                      <li>
                        <FaNewspaper className="icon" />
                        <Link to={"/"}>Just another post with A Gallery</Link>
                      </li>
                      <li>
                        <FaNewspaper className="icon" />
                        <Link to={"/"}>A Video Blog Post</Link>
                      </li>
                      <li>
                        <FaNewspaper className="icon" />
                        <Link to={"/"}>Terms of Use</Link>
                      </li>
                      <li>
                        <FaNewspaper className="icon" />
                        <Link to={"/"}>Welcome to Flatsome</Link>
                      </li>
                      <li>
                        <FaNewspaper className="icon" />
                        <Link to={"/"}>Lorem ipsum dolor sit amet</Link>
                      </li>
                      <li>
                        <FaNewspaper className="icon" />
                        <Link to={"/"}>Daisy Bag Sonia by Sonia Rykiel</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3} md={6} className="part__four">
                  <div className="inner__body">
                    <h2>Newsletter</h2>

                    <p>
                      Nemo id laborum ducimus, eum totam repellendus ipsam ab
                      maiores quo explicabo eos.
                    </p>

                    <form action="">
                      <input type="text" placeholder="Email..." />
                      <Link to={"/"} className="">
                        SIGN UP
                      </Link>
                    </form>
                  </div>
                </Col>
              </Row>

              <Row className="footer__intro">
                <Col>
                  <p>
                    © Falkon - 2022 - Developed By{" "}
                    <span>
                      <a href="https://www.linkedin.com/in/amitbiswas-tm">
                        Amit Biswas
                      </a>
                    </span>
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
