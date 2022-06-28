/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsCheckAll, BsSearch } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";
import Calendar from "react-calendar";
import Footer from "../Common/Footer/Footer";

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
const Single__Blog: React.FC = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      {/* Helmet Intro Start */}

      <Meta_Data title={"Single-Blog"} />

      {/* Helmet Intro End*/}

      {/* Header Section start */}

      <Header />

      {/* Header Section End */}

      {/* Intro Section Start */}

      <Intro__Section title="Single-Blog" />

      {/* Intro Section End */}

      {/* Single Blog Start */}
      <section className="single_blog">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row>
                <Col lg={9} className="left__side">
                  <div className="inner__body">
                    {/*  Blog Body Design */}
                    <div className="blog__body">
                      <div className="img__file">
                        <img
                          className="img-fluid"
                          src="/assets/images/single-blog/single-blog.png"
                          alt=""
                        />
                      </div>
                      <div className="author__box">
                        <p>
                          by
                          <Link to={"/"} className="author pl-5">
                            Amit Biswas
                          </Link>
                          <span className="date pl-10">03-01-2022</span>
                          <FaCommentDots className="commentIcon ml-15 font-15" />
                          <Link to={"/"} className="comment pl-5">
                            2 Comments
                          </Link>
                        </p>
                      </div>
                      <div className="main__text__body">
                        <div className="header__text">
                          <h2>
                            Fashion women's backpack multifunctional leather
                            women's bag high quality head layer cowhine
                          </h2>
                        </div>
                        <div className="des">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In sed vulputate massa. Fusce ante magna,
                            iaculis ut purus ut, facilisis ultrices nibh.
                            Quisque commodo nunc eget tortor dapibus, et
                            tristique magna convallis. Phasellus egestas nunc eu
                            venenatis vehicula. Phasellus et magna nulla. Proin
                            ante nunc, mollis a lectus ac, volutpat placerat
                            ante. Vestibulum sit amet magna sit amet nunc
                            faucibus mollis. Aliquam vel lacinia purus, id
                            tristique ipsum. Quisque vitae nibh ut libero
                            vulputate ornare quis in risus. Nam sodales justo
                            orci, a bibendum risus tincidunt id. Etiam
                            hendrerit, metus in volutpat tempus, neque libero
                            viverra lorem, ac tristique orci augue eu metus.
                            Aenean elementum nisi vitae justo adipiscing gravida
                            sit amet et risus. Suspendisse dapibus elementum
                            quam, vel semper mi tempus ac.
                          </p>
                          <div className="img__file">
                            <img
                              className="img-fluid"
                              src="https://res.cloudinary.com/amitjs/image/upload/v1654986407/Ecommerce%20Product%20Img-%20Important/Hcf988b8f4d4645bb9431372045fe96b6U_s1ptp5.webp"
                              alt=""
                            />
                            <img
                              className="img-fluid"
                              src="https://res.cloudinary.com/amitjs/image/upload/v1654985884/Ecommerce%20Product%20Img-%20Important/H98e382fd292b448a91b93728f0c04a6f0_jjgr91.jpg"
                              alt=""
                            />
                            <img
                              className="img-fluid"
                              src="https://res.cloudinary.com/amitjs/image/upload/v1654986294/Ecommerce%20Product%20Img-%20Important/S7b9561440dc44b3cbba0747665af518bz_myoyux.webp"
                              alt=""
                            />
                            <img
                              className="img-fluid"
                              src="https://res.cloudinary.com/amitjs/image/upload/v1654986434/Ecommerce%20Product%20Img-%20Important/S4a089189c7744c74a267d0ef908ecd0d6_oxvvft.webp"
                              alt=""
                            />

                            <img
                              className="img-fluid"
                              src="https://res.cloudinary.com/amitjs/image/upload/v1654985876/Ecommerce%20Product%20Img-%20Important/Hfdb99d3fb49d4109805ef327ae33cdd8Q_kftf2i.jpg"
                              alt=""
                            />

                            <img
                              className="img-fluid"
                              src="https://res.cloudinary.com/amitjs/image/upload/v1654985705/Ecommerce%20Product%20Img-%20Important/He99a2f79529446979821fd1212a362a1m_jqkjf3.webp"
                              alt=""
                            />
                            <img
                              className="img-fluid"
                              src="https://res.cloudinary.com/amitjs/image/upload/v1654986416/Ecommerce%20Product%20Img-%20Important/H34579b28cbf44b11aebd2242ed0f35f2K_jpaw2i.jpg"
                              alt=""
                            />
                            <img
                              className="img-fluid"
                              src="https://res.cloudinary.com/amitjs/image/upload/v1654985328/Ecommerce%20Product%20Img-%20Important/H1d97e67af1d04b5da490e56462b4d17ei_lp8ljd.jpg"
                              alt=""
                            />
                          </div>

                          <h3>
                            Phasellus hendrerit. Pellentesque aliquet nibh nec
                            urna
                          </h3>
                          <br />
                          <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Delectus quasi, quae obcaecati atque iure modi
                            facilis tenetur et. Repellat eos consectetur omnis
                            suscipit architecto distinctio ab velit delectus
                            numquam perspiciatis. Quam labore quos iste earum
                            dolorem ex nisi, sit ipsum similique harum minima
                            error vero maxime, velit provident facere officiis!
                          </p>
                          <div className="listData">
                            <ul>
                              <li>
                                {" "}
                                <BsCheckAll className="mr-5" />
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                              </li>
                              <li>
                                {" "}
                                <BsCheckAll className="mr-5" />
                                Phasellus et magna nulla.{" "}
                              </li>
                              <li>
                                {" "}
                                <BsCheckAll className="mr-5" />
                                Vestibulum sit amet magna sit amet nunc faucibus
                                mollis.{" "}
                              </li>
                              <li>
                                {" "}
                                <BsCheckAll className="mr-5" />
                                Quisque vitae nibh ut libero vulputate ornare
                                quis in risus.{" "}
                              </li>
                              <li>
                                {" "}
                                <BsCheckAll className="mr-5" />
                                Etiam hendrerit, metus in volutpat tempus, neque
                                libero viverra lorem.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Tag Box start */}
                    <div className="tag__box">
                      <div className="tag__box__inner">
                        <div className="title">
                          <span>Tags :</span>
                        </div>
                        <div className="items">
                          <Link to={"/"}>Women</Link>
                          <Link to={"/"}>Travel</Link>
                          <Link to={"/"}>Fashion</Link>
                          <Link to={"/"}>Man</Link>
                        </div>
                      </div>
                    </div>
                    {/* Tag Box End*/}

                    {/* Related Post Start */}
                    <div className="related__post"></div>
                    {/* Related Post End */}
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

                    <div className="block">
                      <h2>Custom Block</h2>
                      <p>
                        Sed pretium, ligula sollicitudin laoreet viverra, tortor
                        libero sodales leo, eget blandit nunc tortor eu nibh.
                        Suspendisse potenti.Sed egstas, ant at vulputate
                        volutpat, uctus metus libero eu augue, vitae luctus
                      </p>
                    </div>
                    <div className="calendar">
                      <h2>Calendar</h2>
                      <div>
                        <Calendar onChange={onChange} value={value} />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
      {/* Single Blog End */}
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default Single__Blog;
