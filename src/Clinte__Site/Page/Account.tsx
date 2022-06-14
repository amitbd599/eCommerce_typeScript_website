import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Footer from "../Common/Footer/Footer";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";
const Account: React.FC = () => {
  return (
    <>
      {/* Helmet Intro Start */}

      <Meta_Data title={"Home"} />

      {/* Helmet Intro End*/}

      {/* Header Section start */}

      <Header />

      {/* Header Section End */}

      {/* Intro Section Start */}

      <Intro__Section title={"Account"} />

      {/* Intro Section End */}

      {/* Account Section Start */}
      <section className="account__section">
        <div className="wrapper">
          <div className="wrapper__body">
            <Tabs>
              <Container>
                <Row>
                  <Col lg={3} md={12} className="left__side">
                    <div className="inner__body">
                      <TabList>
                        <Tab>Profile Info</Tab>
                        <Tab>Orders</Tab>
                        <Tab>Download</Tab>
                        <Tab>Edit Profile</Tab>
                        <Tab>Logout</Tab>
                      </TabList>
                    </div>
                  </Col>
                  <Col lg={9} md={12} className="right__side">
                    <div className="inner__body">
                      <TabPanel>
                        <div className="dashBoard__body">
                          <div className="header">
                            <h3>Dashboard</h3>
                            <p>
                              Hello, <span>Amit Biswas</span> (If Not Tuntuni !
                              Logout) From your account dashboard. you can
                              easily check & view your recent orders, manage
                              your shipping and billing addresses and edit your
                              password and account details.
                            </p>
                          </div>
                          <div className="body">
                            <div className="img__file">
                              <img
                                src="/assets/images/other/avatar.png"
                                alt=""
                              />
                            </div>
                            <div className="text__file">
                              <ul>
                                <li>Name : Amit Biswas</li>
                                <li>Username : Amit1994</li>
                                <li>Age : 27</li>
                                <li>Phone : +880112345678</li>
                                <li>Birthday : 10-06-1994</li>
                                <li>Email Address : amitbd599@gmail.com</li>
                                <li>Website : https://www.amitjs.com</li>
                                <li>Country : Bangladesh</li>
                                <li>Currency : TK, USD</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="data__table">
                          <table>
                            <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th>Total</th>
                              <th>Action</th>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>Game Triger Finger New Insulated PH-X</td>
                              <td>10-5-2022</td>
                              <td className="text-success">Approved</td>
                              <td>$ 200</td>
                              <td>view</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Bluetooth Speaker New Without Cable</td>
                              <td>10-5-2022</td>
                              <td>Pending</td>
                              <td>$ 200</td>
                              <td>view</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Headphone Supersonic</td>
                              <td>10-5-2022</td>
                              <td className="text-danger">Decline</td>
                              <td>$ 200</td>
                              <td>view</td>
                            </tr>
                          </table>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="data__table">
                          <table>
                            <tr>
                              <th>Product</th>
                              <th>Date</th>
                              <th>Expire</th>
                              <th>Download</th>
                            </tr>
                            <tr>
                              <td>Microsoft Product key 2022 edition</td>
                              <td>10-5-2022</td>
                              <td>20-6-2023</td>
                              <td>
                                <FaCloudDownloadAlt className="mr-5" /> Download
                                File
                              </td>
                            </tr>
                            <tr>
                              <td>Microsoft Product key 2022 edition</td>
                              <td>10-5-2022</td>
                              <td>20-6-2023</td>
                              <td>
                                <FaCloudDownloadAlt className="mr-5" /> Download
                                File
                              </td>
                            </tr>
                            <tr>
                              <td>Microsoft Product key 2022 edition</td>
                              <td>10-5-2022</td>
                              <td>20-6-2023</td>
                              <td>
                                <FaCloudDownloadAlt className="mr-5" /> Download
                                File
                              </td>
                            </tr>
                          </table>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="edit__profile">
                          <div className="inner__body">
                            <h2 className="header__text">
                              {" "}
                              <MdManageAccounts className="icon" /> Account
                              Details
                            </h2>

                            <form action="">
                              <div className="form__text">
                                <div className="top__section">
                                  <div className="form__input">
                                    <p>First name *</p>
                                    <input type="text" placeholder="John" />
                                  </div>
                                  <div className="form__input ">
                                    <p>Last name *</p>
                                    <input type="text" placeholder="Doe" />
                                  </div>
                                </div>

                                <div className="last__section">
                                  <div className="form__input">
                                    <p>Display name *</p>
                                    <input type="text" placeholder="John Doe" />
                                    <span>
                                      This will be how your name will be
                                      displayed in the account section and in
                                      reviews
                                    </span>
                                  </div>

                                  <div className="form__input">
                                    <p>Email address *</p>
                                    <input
                                      type="text"
                                      placeholder="John@gmail.com"
                                    />
                                  </div>
                                  <div className="form__input">
                                    <h2>Password change</h2>
                                    <p>
                                      Current Password leave blank to leave
                                      unchanged
                                    </p>

                                    <input type="password" placeholder="" />
                                  </div>
                                  <div className="form__input">
                                    <p>
                                      New Password leave blank to leave
                                      unchanged
                                    </p>

                                    <input type="password" placeholder="" />
                                  </div>
                                  <div className="form__input">
                                    <p>Confirm Password</p>

                                    <input type="password" placeholder="" />
                                  </div>

                                  <button
                                    type="submit"
                                    className="button__mid_solid_color_black"
                                  >
                                    Save Changes
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </TabPanel>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Tabs>
          </div>
        </div>
      </section>
      {/* Account Section End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default Account;
