import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider__Data from "../Script/Slider__Data";
import Slider__Setting from "../Script/Slider__Setting";
import Slider from "react-slick";
const Customer__Review = () => {
  const { customer__review } = Slider__Data();
  const { customer__slider__review__setting } = Slider__Setting();
  return (
    <div>
      <div className="customer__review">
        <div className="wrapper">
          <div className="wrapper__body bgImg-6">
            <Container>
              <Row>
                <Col>
                  <div className="inner__body">
                    <h2>Customer Review</h2>

                    <div className="mainSlider">
                      <Slider {...customer__slider__review__setting[0]}>
                        {customer__review.map((value, index) => (
                          <div className="items">
                            <p className="des">{value.des}</p>
                            <div className="name__position">
                              <img
                                className="img-fluid"
                                src={value.img}
                                alt=""
                              />
                              <div className="ml-20">
                                <p>{value.name}</p>
                                <p>{value.position}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer__Review;
