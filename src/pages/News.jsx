import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function News() {
  
          const [background12, setBackground12] = useState("");
        
          useEffect(() => {
            const backgroundUrl12 = "assets/img/bg/blog_bg.png";
            setBackground12(backgroundUrl12);
          }, []);

          
            const [items, setItems] = useState([]);

          useEffect(() => {
            fetch("http://localhost:8000/get_news_data/")
              .then((res) => res.json())
              .then((data) => setItems(data))
              .catch((err) => console.error("Failed to fetch news:", err));
          }, []);

              
  return (
    <div>
      <Navbar />
      <section className="blog pt-120 pb-120">
        <div className="container">
          <div className="row">
 <div className="col-lg-8">
        <div  className="blog-post-wrapper">
      {items.map((item) => (
          <article key={item.id} className="post-details"  style={{ marginBottom:"5rem", border:"1px solid gray", padding: "30px" , borderRadius:"10px" }}>
            <div className="post-thumb">
              <img style={{ width: '100%' }}
                src={`https://drive.google.com/thumbnail?id=${item.image_id}`}
                alt={item.heading}
              />
            </div>
            <ul className="post-meta ul_li">
              <li>
                <span className="posted-on">
                  <i className="far fa-calendar-check"></i>{" "}
                  <a href="#!">
                    {new Date(item.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </a>
                </span>
              </li>
            </ul>
            <h2>{item.heading}</h2>
            <div dangerouslySetInnerHTML={{ __html: item.description }} />
            <button style={{ background: "none", marginTop:"2rem" }}>
              <a
                href={`/Newsdetails?id=${item.id}`}
                style={{
                  color: "#fff",
                  padding: "20px ",
                  background: "#00cc99",
                  borderRadius: "10px",
                }}
              >
                Read More
              </a>
            </button>
          </article>
      ))}
        </div>
    </div>    
           <div className="col-lg-4">
              <div className="blog-sidebar">
                <div className="widget text-center">
                  <h3 className="widget-title">Detailed Information</h3>
                  <div className="widget__post">
                  <button style={{ background: "none" }}>
                    <a
                      href="/Contact"
                      style={{
                        color: "#fff",
                        padding: "15px ",
                        background: "#00cc99",
                        borderRadius: "10px",
                      }}
                    >
                     Contact Us
                    </a>
                  </button>
                  </div>
                </div>
                <div className="widget">
                  <h3 className="widget-title">Other Services</h3>
                  <ul className="widget__category list-unstyled">
                    <li>
                      <a href="/Immigration-pr-visa">
                        <i className="far fa-arrow-up"></i> Immigration - PR Visa
                      </a>
                    </li>
                    <li>
                      <a href="/Student-visa">
                        <i className="far fa-arrow-up"></i>Student Visa
                      </a>
                    </li>
                    <li>
                      <a href="/Visitor-visa">
                        <i className="far fa-arrow-up"></i> Visitor Visa
                      </a>
                    </li>
                    <li>
                      <a href="/Investor-visa">
                        <i className="far fa-arrow-up"></i> Investor Visa
                      </a>
                    </li>
                    <li>
                      <a href="/Work-permit-visa">
                        <i className="far fa-arrow-up"></i>Work Permit Visa
                      </a>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





       {/* <section class="coaching-single pt-120 pb-130">
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
                            <h3> Netherlands Sees Rise in Undocumented Workers, Raising Exploitation Concerns</h3>
                        
                             <p>
                             The Netherlands is witnessing a surge in unauthorised employment of third-country nationals, with tens of thousands, including 35,000 Brazilians in Amsterdam alone, working without proper permits. These undocumented workers are mostly found in construction, agriculture, hospitality, and domestic services, raising concerns about exploitation and lack of access to health care. The misuse of the Registration of Non-Residents (RNI) system, which allows short-term visitors to obtain a citizen service number without scrutiny, is contributing to this growing issue. Authorities remain inactive despite long-standing awareness. For better understanding, contact GOFOREN at 7600909090.Click for the Gujarati translate
                    </p>
                 
                            <div class="single-img mt-35 mb-70">
                            <img src="/assets/pic/1-image.jpg" alt="" />
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
                          
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
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
