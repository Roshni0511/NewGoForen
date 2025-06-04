import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const PTE = () => {
      const [background, setBackground] = useState("");
                    
                      useEffect(() => {
                        const backgroundUrl = "/assets/pic/breadcrumb-bg.jpg";
                        setBackground(backgroundUrl);
                      }, []);
                      const [background1, setBackground1] = useState("");
                    
                      useEffect(() => {
                        const backgroundUrl1 = "https://html.xpressbuddy.com/e.visa/assets/img/bg/b_bg.jpg";
                        setBackground1(backgroundUrl1);
                      }, []);
                        const [background12, setBackground12] = useState("");
                            
                              useEffect(() => {
                                const backgroundUrl12 = "assets/img/bg/blog_bg.png";
                                setBackground12(backgroundUrl12);
                              }, []);
  return (
    <>
      <div>
        <Navbar />
        <div>
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
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>PTE</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">PTE</li>
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
      {/* new content start */}
   {/* new content start */}
{/* <div className="pt-40">
  <div className="container">
    <div className="row">
    
      <div className="col-lg-8 col-md-12 mb-4">
        <blockquote>
          <p>
            "PTE test is based on real-life academic and general content. You
            will come across graphs, summaries, excerpts, and many more items
            that belong to things around you. The test also contains accents from
            both native and non-native speakers exactly that you hear on the
            television, movies, and real conversation encountered in day-to-day
            life."
          </p>
          <div className="quote">
            <img src="assets/img/icon/quote.png" alt=" " />
          </div>
        </blockquote>

        <div className="post-thumb mb-4">
          <img src="/assets/pic/pte.jpg" alt="" className="img-fluid" />
        </div>

        <div>
          <p style={{ margin: "20px 0px 10px" }}>
            Aussizz Group brings you the best way to digitally access your
            reading, speaking, listening, and writing skills...
          </p>

          <p style={{ margin: "2px" }}>
            To take the PTE test, you need to go to a secure Pearson test center
            where you'll be given with a computer and a headset...
          </p>

          <p style={{ marginBottom: "30px" }}>
            Upon release, it was recognized by nearly 6,000 organizations...
          </p>

          <div style={{ marginBottom: "40px" }}>
            <button
              style={{
                padding: "10px 20px",
                background: "#00cc99",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              Read More
            </button>
          </div>
        </div>
      </div>


      <div className="col-lg-4 col-md-12 mt-40">
        <div
          className="widget widget-banner text-center mb-4"
          style={{
            backgroundImage: `url(${background1})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
        >
          <img className="mb-4" src="assets/img/icon/b_icon.png" alt="" />
          <h4>Detailed Information</h4>
          <a className="thm-btn" href="#!">
            Contact Us
          </a>
        </div>

        <div className="pt-3">
          <div className="blog-sidebar">
            <div className="widget">
              <h3 className="widget-title">Courses</h3>
              <ul className="widget__category list-unstyled">
                <li>
                  <a href="/IELTS">
                    <i className="far fa-arrow-up"></i> IELTS
                  </a>
                </li>
                <li>
                  <a href="/TOEFLIBT">
                    <i className="far fa-arrow-up"></i> TOEFL IBT
                  </a>
                </li>
                <li>
                  <a href="/GRE">
                    <i className="far fa-arrow-up"></i> GRE
                  </a>
                </li>
                <li>
                  <a href="/SAT">
                    <i className="far fa-arrow-up"></i> SAT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}

   {/* new content end */}
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
                          
                            <div class="widget widget-banner text-center bg_img" data-background="assets/img/bg/b_bg.jpg">
                                <img class="mb-40" src="assets/img/icon/b_icon.png" />
                                <h4>Assured Approval – <br /> Guaranteed</h4>
                                <a class="thm-btn" href="">Get in Touch</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="single-content">
                            <h3>IELTS</h3>
                          
                            <p>IELTS, the international English Language Testing system, provides an assessment of language ability of candidates who need to study or train in the medium of English.</p>
                          <p>IELTS is regarded as an entrance requirement by most universities in the United Kingdom, Australia, New Zealand and Canada. It is also gaining recognition among universities and other educational institutes in the United States of America.</p>
                            <div class="single-img mt-35 mb-70">
                                <img src="/assets/pic/mainielts.jpg" />
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
                            
                          
                            <p style={{marginTop:'20px'}}>The Academic Reading and Writing Modules assess whether a candidate is ready to study or train in the medium of English at an undergraduate or postgraduate level.

General Training is suitable for candidates who are going to English speaking countries to complete their secondary education, to undertake work experience or for immigration purposes to Australia, New Zealand & Canada.</p>
<p>The University of Cambridge Local Examinations Syndicate (UCLES), the British council and IDP Education Australia jointly manage the IELTS.Candidates must select either the Academic or the general Training Modules depending on the stated requirement of their sponsor or receiving institution.</p>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- coaching single end --> */}
       </div>
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
    </>
  )
}

export default PTE
