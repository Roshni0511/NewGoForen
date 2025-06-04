import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Investorvisa() {
  // data-background img start
  const [background, setBackground] = useState("");

  useEffect(() => {
    const backgroundUrl = "/assets/pic/breadcrumb-bg.jpg";
    setBackground(backgroundUrl);
  }, []);
  
          const [background12, setBackground12] = useState("");
        
          useEffect(() => {
            const backgroundUrl12 = "assets/img/bg/blog_bg.png";
            setBackground12(backgroundUrl12);
          }, []);
  // data-background img end
  return (
    <div>
      <Navbar />

      {/* <!-- breadcrumb start --> */}

      <section
  className="breadcrumb pos-rel bg_img"
  style={{ 
    backgroundImage: `url(${background})`, 
    minHeight: '400px',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  {/* Overlay */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // black overlay with 50% opacity
    zIndex: 1
  }}></div>

  <div className="container" style={{ position: 'relative', zIndex: 2 }}>
    <div className="breadcrumb__content">
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>Investor Visa</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/Visa-services">Visa Services</a>
              </li>
              <li className="breadcrumb-item">Investor Visa</li>
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

        {/* <!-- coaching single start --> */}
        <section class="coaching-single pt-120 pb-130">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="sidebar-widget">
                            <div class="widget">
                                <ul class="widget-category list-unstyled">
                                   
                                    <li><a class="active" href="/Immigration-pr-visa"> Immigration - PR Visa<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                                    <li><a href="/Student-visa">Student Visa<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                                    <li><a href="/Visitor-visa"> Visitor Visa<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                                    <li><a href="/Investor-visa">Investor Visa<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                                    <li><a href="/Work-permit-visa"> Work Permit Visa <span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                                </ul>
                            </div>
                            <div className="blog-sidebar" style={{paddingLeft:'0px'}}>

                            <div className="widget">
                  <h3 className="widget-title">
                  Countries for Student Visa
                  </h3>
                  <div className="widget__post">
                    <div className="widget__post-item ul_li">
                      <div className="post-thumb">
                        <a href="">
                          <img src="/assets/pic/canada.png" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href=""> Canada </a>
                        </h4>
                        <span className="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="widget__post-item ul_li">
                      <div className="post-thumb">
                        <a href="">
                          <img src="/assets/pic/australia.png" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href=""> Australia </a>
                        </h4>
                        <span className="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="widget__post-item ul_li">
                      <div className="post-thumb">
                        <a href="">
                          <img src="/assets/pic/new-zealand.jpg" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href=""> New Zealand </a>
                        </h4>
                        <span className="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="widget__post-item ul_li">
                      <div className="post-thumb">
                        <a href="">
                          <img src="/assets/pic/USA.jpg" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href=""> USA </a>
                        </h4>
                        <span className="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="widget__post-item ul_li">
                      <div className="post-thumb">
                        <a href="">
                          <img src="/assets/pic/uk.png" alt="" />
                        </a>
                      </div>
                      <div className="post-content">
                        <h4 className="post-title border-effect-2">
                          <a href="">UK</a>
                        </h4>
                        <span className="post-date">
                          Read More
                          <span>
                            <img src="assets/img/icon/right_arrow.svg" alt="" />
                          </span>
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
                            </div>
                          
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="single-content">
                            <h3>  Immigration - PR Visa</h3>
                        
                             <p>
                      As per the report of BBC-UK people migrate for many
                      different reasons. These reasons can be classified as
                      economic, social, political or environmental :
                    </p>
                    <ul style={{ paddingLeft: "10px" }}>
                      <li>
                        <b>economic migration</b> - moving to find work or
                        follow a particular career path
                      </li>
                      <li>
                        <b>social migration</b> - moving somewhere for a better
                        quality of life or to be closer to family or friends
                      </li>
                      <li>
                        <b>political migration</b> - moving to escape political
                        persecution or war
                      </li>
                      <li>
                        <b>environmental</b> causes of migration include natural
                        disasters such as flooding Some people choose to
                        migrate, eg someone who moves to another country to
                        enhance their career opportunities. Some people are
                        forced to migrate, eg someone who moves due to war or
                        famine.
                      </li>
                    </ul>
                            <div class="single-img mt-35 mb-70">
                            <img src="/assets/pic/visa1.png" />
                            </div>
                            <h3>How Go Foren work</h3>
                            <ul class="about-list ul_li list-unstyled">
                                <li>
                                    <div class="xb-item--inner">
                                        <div class="xb-item--number">1</div>
                                        <div class="xb-item--holder">
                                            <h3 class="xb-item--title mb-10">Choose your visa type</h3>
                                            <div class="xb-item--description">
                                                Determine the Visa type for your travel
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="xb-item--inner">
                                        <div class="xb-item--number color-2">2</div>
                                        <div class="xb-item--holder">
                                            <h3 class="xb-item--title mb-10">Contact our branches</h3>
                                            <div class="xb-item--description">
                                                Start your transaction by applying..
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="xb-item--inner">
                                        <div class="xb-item--number color-3">3</div>
                                        <div class="xb-item--holder">
                                            <h3 class="xb-item--title mb-10">Submit All Your Documents</h3>
                                            <div class="xb-item--description">
                                                Collect all the required documents  the..
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="xb-item--inner">
                                        <div class="xb-item--number color-4">4</div>
                                        <div class="xb-item--holder">
                                            <h3 class="xb-item--title mb-10">Passport delivery</h3>
                                            <div class="xb-item--description">
                                                Receive your visa, which is finalized..
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            
                          
                            <p style={{marginTop:'20px'}}>Migration usually happens as a result of a combination of these push and pull factors.

We, at GO FOREN, help people migrate from India to an overseas location where we are experts. We support you right from inspiring guidance to documentation and take care of all the associated legal procedures required for positive outcome of your application. Here is the sequence of steps through which you will pass on to make immigration incredibly simple.</p>
<h3>Conclusion</h3>
<p>
Immigrating to Canada can be a complex and time-consuming process, but with Go Foren by your side, you can rest assured that your application will be handled with the utmost care and expertise. Our team of best immigration consultants and registered immigration consultants is dedicated to helping you achieve your Canadian immigration goals. Whether you’re applying for a visa, permanent residency, or citizenship, we offer comprehensive support tailored to your specific needs. Contact Go Foren today to take the first step toward your new life in Canada.</p>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- coaching single end --> */}
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
    </div>
  );
}
