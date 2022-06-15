import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Footer from "../Common/Footer/Footer";
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
                <Col lg={3} md={6} sm={6} xs={6}>
                  <div className="inner__body">
                    <img src="/assets/images/icon/email_icon.png" alt="" />
                    <div className="text">
                      <h2>E-mail Address</h2>
                      <p>amitbd599@gmail.com</p>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={6} sm={6} xs={6}>
                  <div className="inner__body">
                    <img src="/assets/images/icon/home-address.png" alt="" />
                    <div className="text">
                      <h2>Phone Number</h2>
                      <p>+88 12541245</p>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={6} sm={6} xs={6}>
                  <div className="inner__body">
                    <img src="/assets/images/icon/phone-call.png" alt="" />
                    <div className="text">
                      <h2>Address</h2>
                      <p>1396 Columbia Mine Road Charleston</p>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={6} sm={6} xs={6}>
                  <div className="inner__body">
                    <img src="/assets/images/icon/printer.png" alt="" />
                    <div className="text">
                      <h2>Fax</h2>
                      <p>123-(415)-5241 2514</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="part__three">
                <Col lg={6} className="left__side">
                  <div className="inner__body">
                    <h2>People usually ask these</h2>
                    <div>
                      <Accordion allowZeroExpanded preExpanded={["a"]}>
                        <AccordionItem uuid="a">
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              How can I cancel my order?
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              Exercitation in fugiat est ut ad ea cupidatat ut
                              in cupidatat occaecat ut occaecat consequat est
                              minim minim esse tempor laborum consequat esse
                              adipisicing eu reprehenderit enim.
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              Why is my registration delayed?
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              Exercitation in fugiat est ut ad ea cupidatat ut
                              in cupidatat occaecat ut occaecat consequat est
                              minim minim esse tempor laborum consequat esse
                              adipisicing eu reprehenderit enim.
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              What do I need to buy products?
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              Exercitation in fugiat est ut ad ea cupidatat ut
                              in cupidatat occaecat ut occaecat consequat est
                              minim minim esse tempor laborum consequat esse
                              adipisicing eu reprehenderit enim.
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              How can I track an order?
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              Exercitation in fugiat est ut ad ea cupidatat ut
                              in cupidatat occaecat ut occaecat consequat est
                              minim minim esse tempor laborum consequat esse
                              adipisicing eu reprehenderit enim.
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              How can I get money back?
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              Exercitation in fugiat est ut ad ea cupidatat ut
                              in cupidatat occaecat ut occaecat consequat est
                              minim minim esse tempor laborum consequat esse
                              adipisicing eu reprehenderit enim.
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </Col>
                <Col lg={6} className="right__side">
                  <div className="inner__body">
                    <h2>Send Us a Message</h2>

                    <form action="">
                      <div className="form__text">
                        <p>Your Name *</p>
                        <input type="text" />
                      </div>
                      <div className="form__text">
                        <p>Your Email *</p>
                        <input type="text" />
                      </div>
                      <div className="form__text">
                        <p>Your Message *</p>
                        <textarea name="" id="" cols={30} rows={8}></textarea>
                      </div>
                      <button
                        type="submit"
                        className="button__mid_solid_color_black"
                      >
                        SEND
                      </button>
                    </form>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
      {/* Contact Section End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default Contact;
