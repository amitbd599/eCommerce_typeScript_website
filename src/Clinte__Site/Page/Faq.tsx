import React from "react";
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
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Common/Footer/Footer";
const Faq: React.FC = () => {
  return (
    <>
      {/* Helmet Intro Start */}

      <Meta_Data title={"FAQs"} />

      {/* Helmet Intro End*/}

      {/* Header Section start */}

      <Header />

      {/* Header Section End */}

      {/* Intro Section Start */}

      <Intro__Section title="FAQs" />

      {/* Intro Section End */}

      {/* FAQs Section start */}
      <section className="FAQs">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row className="part__one">
                <Col>
                  <div className="inner__body">
                    <h2>Frequent Asked Questions</h2>
                    <p>You can show the faqs with Wolmart Elements easily.</p>
                  </div>
                </Col>
              </Row>
              <Row className="part__two">
                <div className="header">
                  <h2>Shipping Information</h2>
                </div>
                <Col lg={6}>
                  <Accordion preExpanded={["a"]}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          What Shipping Methods are Available?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim
                          minim esse tempor laborum consequat esse adipisicing
                          eu reprehenderit enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Do You Ship Internationally?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim
                          minim esse tempor laborum consequat esse adipisicing
                          eu reprehenderit enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </Col>
                <Col lg={6}>
                  <Accordion preExpanded={["a"]}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          How Long Will it Take to Get My Package?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim
                          minim esse tempor laborum consequat esse adipisicing
                          eu reprehenderit enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          What Shipping Methods are Available?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim
                          minim esse tempor laborum consequat esse adipisicing
                          eu reprehenderit enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </Col>
              </Row>
              <Row className="part__two">
                <div className="header">
                  <h2>Payment</h2>
                </div>
                <Col lg={6}>
                  <Accordion preExpanded={["a"]}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          What Payment Methods are Accepted?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim
                          minim esse tempor laborum consequat esse adipisicing
                          eu reprehenderit enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Is Buying On-Line Safe?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim
                          minim esse tempor laborum consequat esse adipisicing
                          eu reprehenderit enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </Col>
                <Col lg={6}>
                  <Accordion preExpanded={["a"]}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          What harsh truths do you prefer to ignore?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim
                          minim esse tempor laborum consequat esse adipisicing
                          eu reprehenderit enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Is free will real or just an illusion?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim
                          minim esse tempor laborum consequat esse adipisicing
                          eu reprehenderit enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </Col>
              </Row>
              <Row className="part__two">
                <div className="header">
                  <h2>Orders & Returns</h2>
                </div>
                <Col lg={6}>
                  <Accordion preExpanded={["a"]}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          How do I Place an Order?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim
                          minim esse tempor laborum consequat esse adipisicing
                          eu reprehenderit enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Do I Need an Account to Place an Order?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim
                          minim esse tempor laborum consequat esse adipisicing
                          eu reprehenderit enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Can I return a product I bought online in-store?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim
                          minim esse tempor laborum consequat esse adipisicing
                          eu reprehenderit enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </Col>
                <Col lg={6}>
                  <Accordion preExpanded={["a"]}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          How Can I Return a Product?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim
                          minim esse tempor laborum consequat esse adipisicing
                          eu reprehenderit enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          How Can I or Change My Order?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim
                          minim esse tempor laborum consequat esse adipisicing
                          eu reprehenderit enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          How do I create a return label?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim
                          minim esse tempor laborum consequat esse adipisicing
                          eu reprehenderit enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
      {/* FAQs Section End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default Faq;
