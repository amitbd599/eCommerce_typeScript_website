import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdMarkEmailUnread } from "react-icons/md";

const Subscribe__Section = () => {
  return (
    <>
      <div className="subscribe__section ">
        <div className="wrapper">
          <div className="wrapper__body bgImg-7">
            <Container>
              <Row>
                <Col className="text__file">
                  <div className="inner__body ">
                    <div>
                      <h2>Join our newsletter & 10% Off</h2>
                      <p>
                        Sign up for our newsletter to get up-to-date from us
                      </p>
                      <form action="" className="form__intro">
                        <input type="text" placeholder="Enter your Email ..." />
                        <button type="submit" className="sub__btn">
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe__Section;
