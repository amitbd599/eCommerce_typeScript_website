import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";

const Product: React.FC = () => {
  return (
    <>
      {/* Helmet Intro Start */}

      <Meta_Data title={"Product"} />

      {/* Helmet Intro End*/}

      {/* Header Section start */}

      <Header />

      {/* Header Section End */}

      {/* Intro Section Start */}

      <Intro__Section title="Product" />

      {/* Intro Section End */}

      {/* Product Page Start */}
      <section className="product">
        <div className="wrapper">
            <div className="wrapper__body">
                <Container>
                    <Row>
                        <Col lg={3}>
                        <div className="inner">
                            <div className="header__text">
                                <h3>BROWSE</h3>
                            </div>
                            <div className="category">
                                
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
      </section>
      {/* Product Page End */}
    </>
  );
};

export default Product;
