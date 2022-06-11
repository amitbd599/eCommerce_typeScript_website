import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Intro__Section = ({ title }: { title: string }) => {
  return (
    <>
      <div className="intro__section">
        <div className="wrapper bgImg-8">
          <div className="wrapper__body">
            <Container>
              <Row>
                <Col>
                  <div className="inner__body">
                    <h2>{title}</h2>
                    <div>
                      <Link to={"/"}>Home // </Link>
                      <span>{title}</span>
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

export default Intro__Section;
