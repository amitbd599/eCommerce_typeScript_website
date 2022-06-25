import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";

const Login__Register: React.FC = () => {
  return (
    <>
      {/* Helmet Intro Start */}

      <Meta_Data title={"Login / Register"} />

      {/* Helmet Intro End*/}

      {/* Header Section start */}

      <Header />

      {/* Header Section End */}

      {/* Intro Section Start */}

      <Intro__Section title="Login - Register" />

      {/* Intro Section End */}

      {/* Login - Register Section start */}
      <section className="login-register">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row>
                <Col className="left__side" lg={5}>
                  <div className="inner__body">
                    <div className="header__text">
                      <h2>LOGIN</h2>
                      <p>
                        Welcome back! Please enter your username and password to
                        login.
                      </p>
                    </div>
                    <form action="">
                      <input
                        className="email__input"
                        type="email"
                        placeholder="Username or email address"
                      />
                      <input
                        className="pass__input"
                        type="password"
                        placeholder=" Password"
                      />
                      <div className="checkbox__input__body">
                        <input
                          className="checkbox__input"
                          type="checkbox"
                          name=""
                          id="checkbox__2"
                        />
                        <label htmlFor="checkbox__2">Remember me</label>
                      </div>
                      <Link to={"/"} className="button__mid_solid_color_black">
                        LOGIN
                      </Link>
                    </form>
                  </div>
                </Col>
                <Col className="right__side" lg={7}>
                  <div className="inner__body">
                    <div className="header__text">
                      <h2>REGISTER</h2>
                      <p>
                        Create new account today to reap the benefits of a
                        personalized shopping experience.
                      </p>
                    </div>
                    <form action="">
                      <input
                        className="pass__name"
                        type="text"
                        placeholder="Username"
                      />
                      <input
                        className="email__input"
                        type="email"
                        placeholder="Username or email address"
                      />
                      <input
                        className="pass__input"
                        type="password"
                        placeholder=" Password"
                      />
                      <hr />
                      <p>
                        Your personal data will be used to support your
                        experience throughout this website, to manage access to
                        your account, and for other purposes described in our{" "}
                        <Link to={"/"} className="">
                          privacy policy
                        </Link>
                        .
                      </p>
                      <Link to={"/"} className="button__mid_solid_color_black">
                        LOGIN
                      </Link>
                    </form>
                    <div className="intro__box">
                      <h2>SIGN UP TODAY AND YOU WILL BE ABLE TO :</h2>
                      <p>
                        The Loke Buyer Protection has you covered from click to
                        delivery. Sign up or sign in and you will be able to:
                      </p>
                      <ul>
                        <li>
                          {" "}
                          <BsArrowRightCircleFill className="icon" /> Speed your
                          way through checkout
                        </li>
                        <li>
                          {" "}
                          <BsArrowRightCircleFill className="icon" /> Track your
                          orders easily
                        </li>
                        <li>
                          {" "}
                          <BsArrowRightCircleFill className="icon" /> Keep a
                          record of all your purchases
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
      {/* Login - Register Section End */}

      {/* Footer start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default Login__Register;
