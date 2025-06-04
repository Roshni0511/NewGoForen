import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "aos/dist/aos.css";
const Activities = () => {
  const [background, setBackground] = useState("");

  useEffect(() => {
    const backgroundUrl = "/assets/pic/breadcrumb-bg.jpg";
    setBackground(backgroundUrl);
  }, []);
  const [background1, setBackground1] = useState("");

  useEffect(() => {
    const backgroundUrl1 =
      "https://html.xpressbuddy.com/e.visa/assets/img/bg/b_bg.jpg";
    setBackground1(backgroundUrl1);
  }, []);

  
          const [background12, setBackground12] = useState("");
        
          useEffect(() => {
            const backgroundUrl12 = "assets/img/bg/blog_bg.png";
            setBackground12(backgroundUrl12);
          }, []);

  return (
    <>
      <Navbar />
      {/* <!-- breadcrumb start --> */}
      <section
        className="breadcrumb pos-rel bg_img"
        style={{
          backgroundImage: `url(${background})`,
          minHeight: "400px",
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // black overlay with 50% opacity
            zIndex: 1,
          }}
        ></div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="breadcrumb__content">
            <h2 className="breadcrumb__title" style={{ color: "#fff" }}>
              Activities
            </h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">Activities</li>
            </ul>
          </div>
        </div>

        <div className="breadcrumb__circle">
          <span
            className="big"
            data-parallax='{"y" : 100, "scale" : 0.1}'
          ></span>
          <span
            className="small"
            data-parallax='{"y" : 100, "scale" : 0.1}'
          ></span>
        </div>
        <div className="breadcrumb__shape">
          <div className="shape shape--1">
            <div className="shape-inner" data-parallax='{"x":-50,"y":80}'>
              <img src="assets/img/shape/br_shape1.png" alt="" />
            </div>
          </div>
          <div className="shape shape--2">
            <div className="shape-inner" data-parallax='{"x":50,"y":-90}'>
              <img src="assets/img/shape/br_shape2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumb end --> */}

      {/* <!-- country start --> */}
      {/* <section className="country pt-50 pb-130">
        <div className="container">
          <div
            className="sec-title"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "30px",
            }}
          >
            <h2 className="mb-20 wow skewIn">Our Activities</h2>
          </div>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane animated fadeInUp show active"
              id="xbc-tab-pane1"
              role="tabpanel"
              aria-labelledby="xbc-tab1"
              tabIndex="0"
            >
              <div className="xb-country ul_li">

                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <img src="/assets/pic/g1.jpg" className="uniform-img" />
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <img src="/assets/pic/g2.webp" className="uniform-img" />
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <img src="/assets/pic/g3.webp" className="uniform-img" />
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <img src="/assets/pic/g4.jpeg" className="uniform-img" />
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <img src="/assets/pic/g5.webp" className="uniform-img" />
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <img src="/assets/pic/g6.jpeg" className="uniform-img" />
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <img src="/assets/pic/g7.jpg" className="uniform-img" />
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <img src="/assets/pic/g8.jpeg" className="uniform-img" />
                  </a>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- country end --> */}
      <section className="country pt-120 pb-130">
        <div className="container">
          <div
            className="sec-title"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "30px",
            }}
          >
            <h2 className="mb-20 wow skewIn">Our Activities</h2>
          </div>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane animated fadeInUp show active"
              id="xbc-tab-pane1"
              role="tabpanel"
              aria-labelledby="xbc-tab1"
              tabIndex="0"
            >
              <div className="xb-countryes row">
                <div className="xb-itemes--itemes col-lg-3 col-md-4 col-12">
                  <a
                    href="/assets/pic/g1.jpg"
                    data-fancybox="gallery"
                    className="xb-item--inner"
                  >
                    <div
                      className="image"
                      style={{ backgroundImage: "url('/assets/pic/g1.jpg')" }}
                    >
                      <div className="overlay">
                        <em className="mdi mdi-magnify-plus"></em>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="xb-itemes--itemes col-lg-3 col-md-4 col-12">
                  <a
                    href="/assets/pic/g2.webp"
                    data-fancybox="gallery"
                    className="xb-item--inner"
                  >
                    <div
                      className="image"
                      style={{ backgroundImage: "url('/assets/pic/g2.webp')" }}
                    >
                      <div className="overlay">
                        <em className="mdi mdi-magnify-plus"></em>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="xb-itemes--itemes col-lg-3 col-md-4 col-12">
                  <a
                    href="/assets/pic/g3.webp"
                    data-fancybox="gallery"
                    className="xb-item--inner"
                  >
                    <div
                      className="image"
                      style={{ backgroundImage: "url('/assets/pic/g3.webp')" }}
                    >
                      <div className="overlay">
                        <em className="mdi mdi-magnify-plus"></em>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="xb-itemes--itemes col-lg-3 col-md-4 col-12">
                  <a
                    href="/assets/pic/g4.jpeg"
                    data-fancybox="gallery"
                    className="xb-item--inner"
                  >
                    <div
                      className="image"
                      style={{ backgroundImage: "url('/assets/pic/g4.jpeg')" }}
                    >
                      <div className="overlay">
                        <em className="mdi mdi-magnify-plus"></em>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="xb-itemes--itemes col-lg-3 col-md-4 col-12">
                  <a
                    href="/assets/pic/g5.webp"
                    data-fancybox="gallery"
                    className="xb-item--inner"
                  >
                    <div
                      className="image"
                      style={{ backgroundImage: "url('/assets/pic/g5.webp')" }}
                    >
                      <div className="overlay">
                        <em className="mdi mdi-magnify-plus"></em>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="xb-itemes--itemes col-lg-3 col-md-4 col-12">
                  <a
                    href="/assets/pic/g6.jpeg"
                    data-fancybox="gallery"
                    className="xb-item--inner"
                  >
                    <div
                      className="image"
                      style={{ backgroundImage: "url('/assets/pic/g6.jpeg')" }}
                    >
                      <div className="overlay">
                        <em className="mdi mdi-magnify-plus"></em>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="xb-itemes--itemes col-lg-3 col-md-4 col-12">
                  <a
                    href="/assets/pic/g7.jpg"
                    data-fancybox="gallery"
                    className="xb-item--inner"
                  >
                    <div
                      className="image"
                      style={{ backgroundImage: "url('/assets/pic/g7.jpg')" }}
                    >
                      <div className="overlay">
                        <em className="mdi mdi-magnify-plus"></em>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="xb-itemes--itemes col-lg-3 col-md-4 col-12">
                  <a
                    href="/assets/pic/g8.jpeg"
                    data-fancybox="gallery"
                    className="xb-item--inner"
                  >
                    <div
                      className="image"
                      style={{ backgroundImage: "url('/assets/pic/g8.jpeg')" }}
                    >
                      <div className="overlay">
                        <em className="mdi mdi-magnify-plus"></em>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* working time  */}
  <div style={{background:'#edf3f5',padding:'30px 0px'}}>
  <div className="container">
        <div
          className="xb-newsletter1 pos-rel "
          style={{
            backgroundImage: `url(${background12})`,
            // minHeight: '400px',
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center",
            margin: "30px 0px",
          }}
        >
          <div className="row">
            <div className="col-12">
              <div>
                <div className="sec-title mb-40 text-center">
                  <h2 className="mb-20 wow skewIn">Our Working Time</h2>
                  <p style={{ textAlign: "center" }}>
                    We are available throughout the week to help you with your
                    visa and training needs.
                  </p>
                </div>

                <div className="row justify-content-center text-center">
                  <div
                    className="col-lg-3 mt-30 col-md-6"
                    style={{
                      boxShadow: " 0px 14px 19px rgb(221 229 236)",
                      padding: "20px",
                      margin: "5px",
                    }}
                  >
                    <div>
                      <h5 className="mb-2">Monday - Saturday :</h5>
                      <p style={{ textAlign: "center" }}>
                        10.00 a.m. to 6.30 p.m.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 mt-30 col-md-6"
                    style={{
                      boxShadow: "0px 14px 19px rgb(221 229 236)",
                      padding: "20px",
                      margin: "5px",
                    }}
                  >
                    <h5 className="mb-2">Sunday :</h5>
                    <p style={{ textAlign: "center" }}>
                      10.00 a.m. to 12.30 p.m.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* workingtime end  */}
      <Footer />
    </>
  );
};

export default Activities;
