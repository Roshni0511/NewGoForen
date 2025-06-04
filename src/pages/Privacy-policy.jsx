import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import SuccessStories from "../component/SuccessStories";

export default function Privacypolicy() {
      const [background, setBackground] = useState("");
        
          useEffect(() => {
            const backgroundUrl ="/assets/pic/breadcrumb-bg.jpg";
            setBackground(backgroundUrl);
          }, []);
            const [background12, setBackground12] = useState("");
                
                  useEffect(() => {
                    const backgroundUrl12 = "assets/img/bg/blog_bg.png";
                    setBackground12(backgroundUrl12);
                  }, []);
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
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>Privacy policy</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">Privacy policy</li>
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

      {/* What is a visa start  */}
      <section className="about pos-rel  pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center mt-none-30">
            <div className="col-12 mt-30">
              <div className="sec-title sec-title--big style-2 mb-20">
                <span className="wow skewIn sec-title--sub">
   <h3 style={{letterSpacing:'4px'}}>

                  Privacy Policy of Goforen
   </h3>
                 
                </span>

                <p>
                This privacy policy sets out how Goforen (visa and immigration division) uses and protects any information that you give Goforen when you use this website. To retain the Privacy of our customers & website visitors is our highest priority. Our relationship with you is very precious & we realize the value of the information that you share with us.
                </p>
                <p>
                Goforen is committed to ensuring that your privacy is thoroughly protected. Under no circumstances will we try to sell, disclose or rent to third parties, your personal information collected at our website. We will merely use it to provide our services as outlined in this privacy policy.
                </p>
                <p>Goforen is committed to ensuring that your privacy is thoroughly protected. Under no circumstances will we try to sell, disclose or rent to third parties, your personal information collected at our website. We will merely use it to provide our services as outlined in this privacy policy.</p>
              </div>
            </div>
            
          </div>
          <div className="sec-title sec-title--big style-2 mb-20">
            <span className="wow skewIn sec-title--sub">
            <h3 style={{letterSpacing:'4px'}}>

              Links to other websites
            </h3>
           
            </span>

            <p>
            Goforen website may contain links to other sites occasionally, which you will be using at your sole discretion. We will not be responsible for the protection and privacy of any information which you provide while visiting such sites and as they are not governed by our privacy statement.
            </p>

            <p>Goforen reserves the right to make changes to any information contained on the website at any time whatsoever, and without notice or limitation of any kind, including, but not limited to, information relating to countries, courses, and other related information.</p>
            <p>The information contained or displayed on the website of Goforen is for general information purposes only. While we make an effort to keep the information up to date and correct, we give no guarantee of any kind, about the accuracy, reliability, suitability, availability or completeness, of the data.</p>
            <p>Through this website, you may link to other websites which are not under the control of Goforen. We do not have control over those sites, and the inclusion of any links does not necessarily entail a recommendation or endorsement for those sites in any way.</p>
            <p>Our Privacy Policy and the Terms and Conditions may change from time to time. Clients should check our website frequently to see any recent changes. Our current Privacy Policy applies to all information that we have about you and your account, unless stated otherwise.</p>
          </div>
        </div>
        <div className="about-shape">
          <div className="shape shape--1">
            <div className="shape-inner" data-parallax='{"x":-50,"y":-80}'>
              <img src="assets/img/shape/a_shape1.png" alt="" />
            </div>
          </div>
          <div className="shape shape--2" style={{ top: "70%", right: "7%" }}>
            <div className="shape-inner" data-parallax='{"x":50,"y":-80}'>
              <img src="assets/img/shape/a_shape2.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* What is a visa end  */}

      <SuccessStories />
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
  )
}
