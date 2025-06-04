import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const IELTS = () => {
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
      <div>
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

          <div
            className="container"
            style={{ position: "relative", zIndex: 2 }}
          >
            <div className="breadcrumb__content">
              <h2 className="breadcrumb__title" style={{ color: "#fff" }}>
                IELTS
              </h2>
              <ul className="breadcrumb__list clearfix">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">IELTS</li>
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
                <img src="assets/img/shape/br_shape1.png" />
              </div>
            </div>
            <div className="shape shape--2">
              <div className="shape-inner" data-parallax='{"x":50,"y":-90}'>
                <img src="assets/img/shape/br_shape2.png" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- breadcrumb end --> */}

        {/* <!-- coaching single start --> */}
        <section class="coaching-single pt-120 pb-130">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="sidebar-widget">
                  <div class="widget">
                    <ul class="widget-category list-unstyled">

                      <li><a class="active" href="/IELTS">IELTS<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                      <li><a href="/TOEFLIBT">TOEFL IBT<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                      <li><a href="/GRE">GRE<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                      <li><a href="/PTE">PTE<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                      <li><a href="/SAT">SAT <span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                    </ul>
                  </div>

                  <div class="widget widget-banner text-center bg_img" style={{ backgroundImage: `url(${background1})`, }}>
                    <img class="mb-40" src="assets/img/icon/b_icon.png" />
                    <h4>Assured Approval – <br /> Guaranteed</h4>
                    <a class="colorcode" href="">Get in Touch</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="single-content">
                  <h3>IELTS </h3>
                  <h4>Preparing You for Success in Every Module</h4>
                  <p>IELTS, the international English Language Testing system, provides an assessment of language ability of candidates who need to study or train in the medium of English.</p>
                  <p>IELTS is regarded as an entrance requirement by most universities in the United Kingdom, Australia, New Zealand and Canada. It is also gaining recognition among universities and other educational institutes in the United States of America.</p>
                  <div class="single-img mt-35 mb-70">
                    <img src="/assets/pic/mainielts.jpg" />
                  </div>
                  <h3>Why choose us?</h3>
                  <div class="single-content__feature ul_li">
                    <div class="single-content-feature">
                      <div class="xb-item--inner ul_li">
                        <div class="xb-item--icon">
                          <img src="assets/img/icon/profile-2user.svg" alt="" />
                        </div>
                        <h3 class="xb-item--title">Certified Tutors</h3>
                      </div>
                    </div>
                    <div class="single-content-feature">
                      <div class="xb-item--inner color-2 ul_li">
                        <div class="xb-item--icon">
                          <img src="assets/img/icon/book.svg" alt="" />
                        </div>
                        <h3 class="xb-item--title">Doubt Solving Sessions</h3>
                      </div>
                    </div>
                    <div class="single-content-feature">
                      <div class="xb-item--inner color-3 ul_li">
                        <div class="xb-item--icon">
                          <img src="assets/img/icon/teacher.svg" alt="" />
                        </div>
                        <h3 class="xb-item--title">Flexible & Regular Batches</h3>
                      </div>
                    </div>
                    <div class="single-content-feature">
                      <div class="xb-item--inner color-4 ul_li">
                        <div class="xb-item--icon">
                          <img src="assets/img/icon/briefcase.svg" alt="" />
                        </div>
                        <h3 class="xb-item--title">Free study materials</h3>
                      </div>
                    </div>
                  </div>

                  <h3>Our benefits</h3>
                  <p>Choosing the right visa agency can make a world of difference in your journey toward international exploration, growth, and success. At goforen we take   Here are the distinctive benefits of partnering with us:</p>
                  <div class="row align-items-center mt-10">
                    <div class="col-lg-6 mt-30">
                      <img src="/assets/pic/benefit (1).jpeg" alt="" />
                    </div>
                    <div class="col-lg-6 mt-30">
                      <ul class="single-content-list list-unstyled pl-25">
                        <li><div className="xb-item--ratting" style={{ marginRight: '10px' }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#e38508"
                          >
                            <path d="M12 .587l3.668 7.568L24 9.75l-6 5.852L19.336 24 12 19.896 4.664 24 6 15.602 0 9.75l8.332-1.595z" />
                          </svg>
                        </div>Top-tier Interactive Online Readiness</li>
                        <li><div className="xb-item--ratting" style={{ marginRight: '10px' }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#e38508"
                          >
                            <path d="M12 .587l3.668 7.568L24 9.75l-6 5.852L19.336 24 12 19.896 4.664 24 6 15.602 0 9.75l8.332-1.595z" />
                          </svg>
                        </div>Customized Study Plans</li>
                        <li><div className="xb-item--ratting" style={{ marginRight: '10px' }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#e38508"
                          >
                            <path d="M12 .587l3.668 7.568L24 9.75l-6 5.852L19.336 24 12 19.896 4.664 24 6 15.602 0 9.75l8.332-1.595z" />
                          </svg>
                        </div>Skill Building Sessions</li>
                        <li><div className="xb-item--ratting" style={{ marginRight: '10px' }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#e38508"
                          >
                            <path d="M12 .587l3.668 7.568L24 9.75l-6 5.852L19.336 24 12 19.896 4.664 24 6 15.602 0 9.75l8.332-1.595z" />
                          </svg>
                        </div>Full Length Mock Test</li>
                        <li><div className="xb-item--ratting" style={{ marginRight: '10px' }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#e38508"
                          >
                            <path d="M12 .587l3.668 7.568L24 9.75l-6 5.852L19.336 24 12 19.896 4.664 24 6 15.602 0 9.75l8.332-1.595z" />
                          </svg>
                        </div>Test Evaluations By Experts</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- coaching single end --> */}


      </div>
      {/* working time  */}
      <div style={{ background: '#edf3f5', padding: '30px 0px' }}>
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

export default IELTS;
