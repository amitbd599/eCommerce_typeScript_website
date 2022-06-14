import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";

const Contact: React.FC = () => {
  return (
    <>
      {/* Helmet Intro Start */}

      <Meta_Data title={"Home"} />

      {/* Helmet Intro End*/}

      {/* Header Section start */}

      <Header />

      {/* Header Section End */}

      {/* Intro Section Start */}

      <Intro__Section title="Contact Us" />

      {/* Intro Section End */}

      {/* Contact Section Start */}
      <section className="contact__section">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row className="part__one">
                <Col>
                  <div className="inner__body">
                    <h2>Contact Information</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="part__two">
                <Col lg={3} md={6}>
                  <div className="inner__body">
                    <img src="/assets/images/icon/email_icon.png" alt="" />
                    <div className="text">
                      <h2>E-mail Address</h2>
                      <p>amitbd599@gmail.com</p>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={6}>
                  <div className="inner__body">
                    <img src="/assets/images/icon/home-address.png" alt="" />
                    <div className="text">
                      <h2>Phone Number</h2>
                      <p>+88 12541245</p>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={6}>
                  <div className="inner__body">
                    <img src="/assets/images/icon/phone-call.png" alt="" />
                    <div className="text">
                      <h2>Address</h2>
                      <p>1396 Columbia Mine Road Charleston</p>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={6}>
                  <div className="inner__body">
                    <img src="/assets/images/icon/printer.png" alt="" />
                    <div className="text">
                      <h2>Fax</h2>
                      <p>123-(415)-5241 2514</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </>
  );
};

export default Contact;
