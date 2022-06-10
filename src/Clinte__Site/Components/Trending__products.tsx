import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product_Data from "../Script/Product__Data";

const Trending__products = () => {
  const { mixProduct } = Product_Data();
  const { product } = Product_Data();
  return (
    <>
      <div className="trending__products">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row className="header__intro">
                <Col>
                  <h2>Trending Products</h2>
                </Col>
              </Row>
              <Row className="product__intro">
                <Col lg={3} md={6} sm={12} className="inner__body">
                  <h2>LATEST</h2>
                  <div className="items__data">
                    {product.map((value, index) => (
                      <div className="item">
                        <div className="img__file" key={index}>
                          <img className="img-fluid" src={value.img} alt="" />
                        </div>
                        <div className="product__info">
                          <Link to={"/"} className="title">
                            {value.name}
                          </Link>
                          <p className="price">$ {value.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="inner__body">
                  <h2>BEST SELLING</h2>
                  <div className="items__data">
                    {product.map((value, index) => (
                      <div className="item">
                        <div className="img__file" key={index}>
                          <img className="img-fluid" src={value.img} alt="" />
                        </div>
                        <div className="product__info">
                          <Link to={"/"} className="title">
                            {value.name}
                          </Link>
                          <p className="price">$ {value.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="inner__body">
                  <h2>FEATURED</h2>
                  <div className="items__data">
                    {product.map((value, index) => (
                      <div className="item">
                        <div className="img__file" key={index}>
                          <img className="img-fluid" src={value.img} alt="" />
                        </div>
                        <div className="product__info">
                          <Link to={"/"} className="title">
                            {value.name}
                          </Link>
                          <p className="price">$ {value.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="inner__body">
                  <h2>TOP RATED PRODUCTS</h2>
                  <div className="items__data">
                    {product.map((value, index) => (
                      <div className="item">
                        <div className="img__file" key={index}>
                          <img className="img-fluid" src={value.img} alt="" />
                        </div>
                        <div className="product__info">
                          <Link to={"/"} className="title">
                            {value.name}
                          </Link>
                          <p className="price">$ {value.price}</p>
                        </div>
                      </div>
                    ))}
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

export default Trending__products;
