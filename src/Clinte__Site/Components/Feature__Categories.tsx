import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product_Data from "../Script/Product__Data";

const Feature__Categories = () => {
  const { productmixedSize } = Product_Data();
  const productSlice = productmixedSize.slice(0, 6);
  return (
    <>
      <div className="feature__categories">
        <div className="wrapper">
          <div className="wrapper__body">
            <Container>
              <Row>
                <h2>Feature Categories</h2>
                <Col lg={4} md={6} sm={12}>
                  <div className="inner__body">
                    <div className="header">
                      <h3>Women Fashion</h3>
                      <Link to={"/"}>View ALL</Link>
                    </div>
                    <div className="body">
                      <div className="items">
                        <img
                          src="https://res.cloudinary.com/amitjs/image/upload/v1654766180/productIMG/image-removebg-preview_rbjguw_jsn3aj.png"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/amitjs/image/upload/v1654766177/productIMG/image-removebg-preview_2_bn6lfq_qmvluh.png"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/amitjs/image/upload/v1654766176/productIMG/image-removebg-preview_2_xucldr.png"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/amitjs/image/upload/v1654766176/productIMG/image-removebg-preview_fgibdo.png"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/amitjs/image/upload/v1654766176/productIMG/image-removebg-preview_1_vkx229.png"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/amitjs/image/upload/v1654766176/productIMG/image-removebg-preview_1_eorrrg_jpq42q.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className="inner__body">
                    <div className="header">
                      <h3>Man Fashion</h3>
                      <Link to={"/"}>View ALL</Link>
                    </div>
                    <div className="body">
                      <div className="items">
                        <img
                          src="https://res.cloudinary.com/amitjs/image/upload/v1654766176/productIMG/image-removebg-preview_1_ooxosi_fssiwc.png"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/amitjs/image/upload/v1654766177/productIMG/image-removebg-preview_2_ef7rb2_r8swok.png"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/amitjs/image/upload/v1654766178/productIMG/image-removebg-preview_4_l6hcu2_zxkna9.png"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/amitjs/image/upload/v1654766178/productIMG/image-removebg-preview_5_m0sh4w_jpxaw2.png"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/amitjs/image/upload/v1654766179/productIMG/image-removebg-preview_3_sgxqoi_azsjzv.png"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/amitjs/image/upload/v1654766179/productIMG/image-removebg-preview_onlupv_kqrhek.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className="inner__body">
                    <div className="header">
                      <h3>Baby Fashion</h3>
                      <Link to={"/"}>View ALL</Link>
                    </div>
                    <div className="body">
                      <div className="items">
                        <img
                          src="https://res.cloudinary.com/amitjs/image/upload/v1654766180/productIMG/image-removebg-preview_zkmjol_vazsoz.png"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/amitjs/image/upload/v1654766180/productIMG/image-removebg-preview_6_llapfz_ilhn5y.png"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/amitjs/image/upload/v1654766178/productIMG/image-removebg-preview_4_rcch09_ek8wdc.png"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/amitjs/image/upload/v1654766178/productIMG/image-removebg-preview_3_fnnoml_inpn6z.png"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/amitjs/image/upload/v1654766177/productIMG/image-removebg-preview_2_uwd9dw_og4n8v.png"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/amitjs/image/upload/v1654766176/productIMG/image-removebg-preview_1_tt241s_aeq81t.png"
                          alt=""
                        />
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

export default Feature__Categories;
