import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiShow } from "react-icons/bi";
import { BsCalendar2Day } from "react-icons/bs";
import { Link } from "react-router-dom";

const Blog__Section = () => {
  return (
    <>
      <div className="blog__section">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row>
                <h2>Our Latest Blog</h2>
                <Col lg={4} md={6} sm={12}>
                  <div className="inner__section">
                    <div className="item">
                      <div className="img__file">
                        <img
                          className="img-fluid"
                          src="/assets/images/blog/blog-1.png"
                          alt=""
                        />
                      </div>
                      <div className="date__items">
                        <div className="d-flex aline-center">
                          <BsCalendar2Day className="icon" />{" "}
                          <span className="date ml-5">13 Feb 2022</span>
                        </div>
                        <div className="ml-15 d-flex aline-center">
                          <BiShow className="icon " />{" "}
                          <span className="view ml-5">490 Views</span>
                        </div>
                      </div>
                      <div className="des">
                        <h2>Pellentesque Habitant Morbi Tristique</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Laudantium unde est placeat incidunt, odit,
                          labore porro enim quaerat accusamus quod cumque modi.
                        </p>{" "}
                        <Link
                          to={"/"}
                          className="button__mid_solid_color_black"
                        >
                          READ MORE
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className="inner__section">
                    <div className="item">
                      <div className="img__file">
                        <img
                          className="img-fluid"
                          src="/assets/images/blog/blog-2.png"
                          alt=""
                        />
                      </div>
                      <div className="date__items">
                        <div className="d-flex aline-center">
                          <BsCalendar2Day className="icon" />{" "}
                          <span className="date ml-5">13 Feb 2022</span>
                        </div>
                        <div className="ml-15 d-flex aline-center">
                          <BiShow className="icon " />{" "}
                          <span className="view ml-5">490 Views</span>
                        </div>
                      </div>
                      <div className="des">
                        <h2>Pellentesque Habitant Morbi Tristique</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Laudantium unde est placeat incidunt, odit,
                          labore porro enim quaerat accusamus quod cumque modi.
                        </p>{" "}
                        <Link
                          to={"/"}
                          className="button__mid_solid_color_black"
                        >
                          READ MORE
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className="inner__section">
                    <div className="item">
                      <div className="img__file">
                        <img
                          className="img-fluid"
                          src="/assets/images/blog/blog-3.png"
                          alt=""
                        />
                      </div>
                      <div className="date__items">
                        <div className="d-flex aline-center">
                          <BsCalendar2Day className="icon" />{" "}
                          <span className="date ml-5">13 Feb 2022</span>
                        </div>
                        <div className="ml-15 d-flex aline-center">
                          <BiShow className="icon " />{" "}
                          <span className="view ml-5">490 Views</span>
                        </div>
                      </div>
                      <div className="des">
                        <h2>Pellentesque Habitant Morbi Tristique</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Laudantium unde est placeat incidunt, odit,
                          labore porro enim quaerat accusamus quod cumque modi.
                        </p>{" "}
                        <Link
                          to={"/"}
                          className="button__mid_solid_color_black"
                        >
                          READ MORE
                        </Link>
                      </div>
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

export default Blog__Section;
