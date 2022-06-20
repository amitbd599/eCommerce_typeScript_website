import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Countdown from "react-countdown";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ComingSoon: React.FC = () => {
  const renderer = ({ days, hours, minutes, seconds }: any) => {
    return (
      <span className="date__intro">
        <ul>
          <li>
            <div className="text">{days}</div>
            <div className="time">Day</div>
          </li>
          <li>
            <div className="text">{hours}</div>
            <div className="time">Hours</div>
          </li>
          <li>
            <div className="text">{minutes}</div>
            <div className="time">Minutes</div>
          </li>
          <li>
            <div className="text">{seconds}</div>
            <div className="time">Seconds</div>
          </li>
        </ul>
      </span>
    );
  };
  return (
    <>
      <div className="comingSoon">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row>
                <Col lg={6} className=" d-none d-lg-block"></Col>
                <Col lg={6}>
                  <div className="inner__body">
                    <div className="img__file">
                      <Link to={"/"}>
                        {" "}
                        <img
                          className="img-fluid"
                          src="/assets/images/logo/Falkon.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="text__file">
                      <h2>
                        COMING <span className="">SOON...</span>
                      </h2>
                      <p>
                        We are currently working on an awesome new site. Stay
                        tuned for more information. Subscribe to our newsletter
                        to stay updated on our progress.
                      </p>
                    </div>
                    <div className="time__zoon">
                      <Countdown
                        date={Date.now() + 904800520}
                        renderer={renderer}
                      />
                    </div>
                    <div className="icon__zoon">
                      <div className="icons">
                        <Link to={"/"} className="icon">
                          {" "}
                          <FaFacebookF />
                        </Link>
                        <Link to={"/"} className="icon">
                          {" "}
                          <FaTwitter />
                        </Link>
                        <Link to={"/"} className="icon">
                          {" "}
                          <FaLinkedinIn />
                        </Link>
                        <Link to={"/"} className="icon">
                          {" "}
                          <FaInstagramSquare />
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

export default ComingSoon;
