import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsCalendarDate, BsEyeFill, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";

type dataType = {
  title?: string;
  img?: string;
  des?: string;
  date?: string;
  author?: string;
};
let data: dataType[] = [
  {
    title: "Men Stretchy Ripped Skinny Biker Embroidery Cartoon Print",
    img: "/assets/images/blog/blog-1.png",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing  elit Placeat a quae perspiciatis consectetur ad fugiat, repellat excepturi officiis distinctio voluptates. Quas voluptatum placea corrupti.",
    date: "19 Dec 2022",
    author: "Amit Biswas",
  },
  {
    title: "Men Stretchy Ripped Skinny Biker Embroidery Cartoon Print",
    img: "/assets/images/blog/blog-2.png",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing  elit Placeat a quae perspiciatis consectetur ad fugiat, repellat excepturi officiis distinctio voluptates. Quas voluptatum placea corrupti.",
    date: "19 Dec 2022",
    author: "Amit Biswas",
  },
  {
    title: "Men Stretchy Ripped Skinny Biker Embroidery Cartoon Print",
    img: "/assets/images/blog/blog-3.png",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing  elit Placeat a quae perspiciatis consectetur ad fugiat, repellat excepturi officiis distinctio voluptates. Quas voluptatum placea corrupti.",
    date: "19 Dec 2022",
    author: "Amit Biswas",
  },
  {
    title: "Men Stretchy Ripped Skinny Biker Embroidery Cartoon Print",
    img: "/assets/images/blog/blog-4.png",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing  elit Placeat a quae perspiciatis consectetur ad fugiat, repellat excepturi officiis distinctio voluptates. Quas voluptatum placea corrupti.",
    date: "19 Dec 2022",
    author: "Amit Biswas",
  },
  {
    title: "Men Stretchy Ripped Skinny Biker Embroidery Cartoon Print",
    img: "/assets/images/blog/blog-5.png",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing  elit Placeat a quae perspiciatis consectetur ad fugiat, repellat excepturi officiis distinctio voluptates. Quas voluptatum placea corrupti.",
    date: "19 Dec 2022",
    author: "Amit Biswas",
  },
  {
    title: "Men Stretchy Ripped Skinny Biker Embroidery Cartoon Print",
    img: "/assets/images/blog/blog-6.png",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing  elit Placeat a quae perspiciatis consectetur ad fugiat, repellat excepturi officiis distinctio voluptates. Quas voluptatum placea corrupti.",
    date: "19 Dec 2022",
    author: "Amit Biswas",
  },
];

const Blog: React.FC = () => {
  return (
    <>
      {/* Helmet Intro Start */}

      <Meta_Data title={"Blog"} />

      {/* Helmet Intro End*/}

      {/* Header Section start */}

      <Header />

      {/* Header Section End */}

      {/* Intro Section Start */}

      <Intro__Section title="Blog" />

      {/* Intro Section End */}

      {/* Blog Section Start */}
      <section className="blog">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row>
                <Col lg={9} className="left__side">
                  <div className="inner__body">
                    {data.map((value, index) => (
                      <div key={index} className="inner__items">
                        <div className="img__file">
                          <div className="img__overflow">
                            <img className="img-fluid" src={value.img} alt="" />
                          </div>
                        </div>
                        <div className="text__file">
                          <div className="tag__box">
                            <span>Tag :</span>
                            <Link to={"/"}>Cloths,</Link>
                            <Link to={"/"}>Man</Link>
                          </div>
                          <div className="header__text">
                            <Link to={"/"}>{value.title}</Link>
                          </div>
                          <div className="des">
                            <p>{value.des}</p>
                          </div>
                          <div className="date__box">
                            <span className="date__icon">
                              <BsCalendarDate />
                            </span>
                            <span className="date">{value.date}</span>
                            <span className="view__icon pl-15">
                              <BsEyeFill />
                            </span>
                            <span className="view">300 views</span>
                          </div>
                          <div className="post">
                            <p>
                              by <Link to={"/"}>{value.author}</Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
                <Col lg={3} className="right__side">
                  <div className="inner__body">
                    <div className="search__box">
                      <input type="text" placeholder="Search Here..." />
                      <span className="searchIcon">
                        <BsSearch />
                      </span>
                    </div>

                    <div className="categories">
                      <div className="inner_categories">
                        <h2>Categories</h2>
                        <ul>
                          <li>
                            {" "}
                            <Link to={"/"}>Entertainment </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to={"/"}>Fashion </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to={"/"}>Clothes </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to={"/"}>Lifestyle </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to={"/"}>Technology </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to={"/"}>Shoes </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="popular__posts">
                      <h2>Popular Posts</h2>

                      {data.map((value, index) => (
                        <div key={index} className="inner__popular__posts">
                          <div className="img__file">
                            <div className="img__overlay">
                              <img
                                className="img-fluid"
                                src={value.img}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="text__file">
                            <div className="date">
                              <span>{value.date}</span>
                            </div>
                            <div className="title">
                              <Link to={"/"}>{value.title}</Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="tag">
                      <h2>Browse Tags</h2>
                      <div className="items">
                        <Link to={"/"}>Hobbies</Link>
                        <Link to={"/"}>Photography</Link>
                        <Link to={"/"}>Shopping</Link>
                        <Link to={"/"}>Women</Link>
                        <Link to={"/"}>Fashion</Link>
                        <Link to={"/"}>Style</Link>
                        <Link to={"/"}>Travel</Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
      {/* Blog Section End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default Blog;
