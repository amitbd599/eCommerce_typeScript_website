import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";

const Error: React.FC = () => {
  return (
    <>
      {/* Helmet Intro Start */}

      <Meta_Data title={"Error"} />

      {/* Helmet Intro End*/}

      {/* Header Section start */}

      <Header />

      {/* Header Section End */}

      {/* Error section start */}
      <section className="error__section">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row>
                <Col>
                  <div className="inner__body">
                    <div className="img__file">
                      <img
                        className="img-fluid"
                        src="/assets/images/other/error.png"
                        alt=""
                      />
                    </div>
                    <div className="text__file">
                      <h2>
                        <span className="theme-color">Oops!!!</span> Something
                        Went Wrong Here
                      </h2>
                      <p>
                        There may be a misspelling in the URL entered, or the
                        page you are looking for may no longer exist
                      </p>
                      <Link to={"/"} className="button__mid_solid_color_black">
                        Go Back Home
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
      {/* Error section End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default Error;
