import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Product_Data from "../../Script/Product__Data";
import Slider__Setting from "../../Script/Slider__Setting";
const Product__Slider__One: React.FC = () => {
  const { Product__Slider__One__setting } = Slider__Setting();
  const { productSlider } = Product_Data();

  return (
    <>
      <div className="top__category__product">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row>
                <Col>
                  <div className="inner__body">
                    <h2>New Top Category</h2>
                    <div className="slider__intro">
                      <Slider {...Product__Slider__One__setting[0]}>
                        {productSlider.map((value, index) => (
                          <div key={index} className="overflow__intro">
                            <div className="imgFile">
                              <Link to={value.link}>
                                <img
                                  className="img-fluid"
                                  src={value.img}
                                  alt=""
                                />
                              </Link>
                            </div>
                            <h3>{value.categories}</h3>
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
    </>
  );
};

export default Product__Slider__One;
