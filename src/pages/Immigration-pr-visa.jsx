import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';

import {
  FaCalendarAlt,
  FaTags,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
} from 'react-icons/fa';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Immigrationprvisa() {

  
    const [visaServices, setVisaServices] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:8000/get_visa_services/')
        .then((res) => res.json())
        .then((data) => {
          setVisaServices(data);
        })
        .catch((err) => console.error("Failed to fetch visa services:", err));
    }, []);
  
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
  
  const query = useQuery();
  const id = query.get('id');
  const [currentId, setCurrentId] = useState(id);

  const [visa, setVisa] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/get_visa_service_detail/${id}`)
      .then(res => res.json())
      .then(data => {
        setVisa(data);
        setLoading(false);
        })
        .catch(err => {
          console.error("Error fetching visa service:", err);
          setLoading(false);
        });
      } else {
        setLoading(false); // If no ID, stop loading
    }
  }, [id]);
  
  // // ✅ Conditional logic is inside render
  if (loading) return <div>Loading...</div>;
  if (!visa || visa.error) return <div>Visa service not found</div>;
  
  const blogContent = visa?.description ? visa.description.replace(/<[^>]+>/g, '') : '';
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
          <div className="breadcrumb__content text-white py-5">
            {/* <h2>{visa.visa_type}</h2> */}
            <h2 className="breadcrumb__title" style={{ color: '#fff' }}>{visa.visa_type}</h2>

            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/Visa-services">Visa Services</a>
              </li>
              <li className="breadcrumb-item">{visa.visa_type}</li>
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
<ul className="widget-category list-unstyled">
  {visaServices.map((visa, index) => (
    <li key={visa.id}>
      <a
        href={`/visa-services-detail?id=${visa.id}`} // or `/visa-details/${visa.id}` depending on your route
        className={currentId == visa.id ? 'active' : ''}
      >
        {visa.visa_type}
        <span>
          <img src="/assets/img/icon/arrow_up.svg" alt="arrow" />
        </span>
      </a>
    </li>
  ))}
</ul>
                </div>
                <div className="blog-sidebar" style={{ paddingLeft: '0px' }}>

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
                            <a href="/Countries" style={{ color: '#787B84' }}>Read More</a>
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
                            <a href="/Countries" style={{ color: '#787B84' }}>Read More</a>
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
                            <a href="/Countries" style={{ color: '#787B84' }}>Read More</a>
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
                            <a href="/Countries" style={{ color: '#787B84' }}>Read More</a>
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
                            <a href="/Countries" style={{ color: '#787B84' }}>Read More</a>
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
                <h3> </h3>
                {/* <h3>{visa.visa_type}</h3> */}

              <div
                  style={{ lineHeight: '1.7' , padding : "20px"}}
                  dangerouslySetInnerHTML={{ __html: visa.description }}
                />
                {visa.image_id && (
                  <div className="single-img mt-35 mb-70">
                    <img
                      src={`https://drive.google.com/thumbnail?id=${visa.image_id}`}
                      alt={visa.visa_type}
                      className="img-fluid rounded"
                    />
                  </div>
                )}

                <div class="single-img mt-35 mb-70">
                  <img src="/assets/pic/visa1.png" />
                </div>
                <h3>How Go Foren work</h3>
                <ul class="about-list ul_li list-unstyled">
                  <li>
                    <div class="xb-item--inner"   style={{
        backgroundImage: 'linear-gradient(135deg, rgba(214, 131, 48, 0.4), rgba(158, 63, 63, 0))',
      
      }}>
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
                    <div class="xb-item--inner"   style={{
        backgroundImage: 'linear-gradient(135deg, rgba(214, 131, 48, 0.4), rgba(158, 63, 63, 0))',
      
      }}>
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
                    <div class="xb-item--inner"   style={{
        backgroundImage: 'linear-gradient(135deg, rgba(214, 131, 48, 0.4), rgba(158, 63, 63, 0))',
      
      }}>
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
                    <div class="xb-item--inner"   style={{
        backgroundImage: 'linear-gradient(135deg, rgba(214, 131, 48, 0.4), rgba(158, 63, 63, 0))',
      
      }}>
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

                <h3 class="mt-70">Conclusion</h3>
                <p>Immigrating to Canada can be a complex and time-consuming process, but with Go Foren by your side, you can rest assured that your application will be handled with the utmost care and expertise. Our team of best immigration consultants and registered immigration consultants is dedicated to helping you achieve your Canadian immigration goals. . </p>
                <div class="row align-items-center mt-10">
                  <div class="col-lg-6 mt-30">
                    <img src="/assets/pic/course.jpg" alt="" />
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
                      </div>Cultural Enrichmen</li>
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
                      </div>Language Proficiency</li>
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
                      </div>Quality of Life</li>
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
                      </div>Career Opportunities</li>
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
                      </div>Business Setup</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- coaching single end --> */}
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







            
{/* page end */}




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
