import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FooterTop from "../component/FooterTop";

function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}
export default function Visaservices() {

  const [visaServices, setVisaServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/get_visa_services/')
      .then((res) => res.json())
      .then((data) => {
        setVisaServices(data);
      })
      .catch((err) => console.error("Failed to fetch visa services:", err));
  }, []);

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
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>Visa Services</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">Visa Services</li>
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
      <section className="about pos-rel  pt-120">
        <div className="container">
        
  
              <div className="sec-title sec-title--big style-2 mb-20">
                <h3 style={{marginBottom:'20px'}}>    What is a visa?</h3>
                <p>
                  A visa is a paper document affixed to a page of the holder's
                  passport. It permits a person to travel to the State during
                  the dates stated on the visa. It does not guarantee entry to
                  the State. An Immigration Officer at the Port of Entry has the
                  authority to grant or deny admission, and to decide on the
                  duration a person may remain in the State.
                </p>
                <p>
                  Certificate issued or a stamp marked (on the applicant's
                  passport) by the immigration authorities of a country to
                  indicate that the applicant's credentials have been verified
                  and he or she has been granted permission to enter the country
                  for a temporary stay within a specified period.
                </p>
              </div>
         
        
          <div className="sec-title sec-title--big style-2 mb-20">
           <h3 style={{marginBottom:'20px'}}> What are the different types of visa?</h3>
          <p>
              Visas can vary from country to country, but generally speaking
              these are some of the most popular types of visas:
            </p>

            <p style={{ paddingBottom: "10px" }}>
              A. <b>Permanent Residency Card (PR visa)</b> Permanent residency
              refers to a person’s resident status in a country of which they
              are not a citizen. This is usually for an indefinite period; a
              person with such status is known as a permanent resident.
              Permanent residency itself is distinct from right of abode. This
              status gives permission to work in most cases.
            </p>
            <ul style={{ paddingBottom: "10px", paddingLeft: "15px" }}>
              <li style={{ textAlign: "justify" }}>
                <b>Work visa</b> – a work visa allows you to take on employment
                while in the country. These visas are usually valid for the
                duration of the employment contract or a period not exceeding
                five years. There are several types of visas, including working
                holiday visas and professional specialty. Many times PR visa is
                considered as work visa as it gives permission to live and work
                in particular country.
              </li>
            </ul>
            <p style={{ paddingBottom: "10px" }}>
              B. <b>Student visa (STV)</b> – a student visa allows you to pursue
              academic studies in another country. These visas allow you to
              enrol at a college, university, or academic programme and stay in
              that country for the duration of your course. You are also usually
              allowed to stay for a short period (anything from 60 days to four
              months) after completing your studies.
            </p>
            <p>
              C. <b>Temporary Resident Visa (TRV)</b>
            </p>
            <ul style={{ paddingBottom: "10px", paddingLeft: "15px" }}>
              <li style={{ textAlign: "justify" }}>
                {" "}
                <b>Tourist visa</b> – a tourist visa (also known as a travel
                visa) allows you to travel to a foreign country for a set amount
                of time. These visas do not entitle you to work or participate
                in any business activities while you are in the country.
              </li>
              <li style={{ textAlign: "justify" }}>
                {" "}
                <b>Transit visa</b> – a transit visa allows you to pass through
                another country on route to your destination country. You will
                usually need one if you will be in the transit country for more
                than a few hours. In some countries, you may need one if you
                will be going through immigration control to collect your
                luggage or catch a connecting flight.
              </li>
              <li style={{ textAlign: "justify" }}>
                {" "}
                <b>Spousal visa</b> – a spousal visa allows you to visit your
                spouse if you are both from different countries. These visas
                entitle you to visit for two years and apply for residency after
                five years (although the rules and requirements vary from
                country to country).
              </li>
            </ul>
            <p>
              D. <b>Business visa (BV)</b> – a business visa allows you to
              conduct business and engage in business activities in another
              country. These visas are granted to individuals who are attending
              a business conference or travelling to another country to do
              business with another company. You will need to show that you are
              not receiving any income from the country.{" "}
              <b>Investor visa, Entrepreneur visa, Exceptional talent visa</b>{" "}
              generally falls in this category.
            </p>
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

        
              {/* <!-- visa type start --> */}
              <section className="visa-type pt-120 pb-135">
            {/* <div className="container"> */}
                <div className="sec-title text-center mb-60">
                    <h2 className="wow skewIn">Visa Services </h2> <br />
                  <p style={{justifyContent:'center',display:'flex',marginTop:'15px'}}>"Comprehensive visa services to simplify your journey abroad, from application to approval."</p>
                </div>
{/* <div className="row justify-content-md-center mt-none-30">
  {visaServices.map((item) => (
    <div key={item.id} className="col-lg-4 col-md-6 mt-30">
      <a href={`/visa-services-detail?id=${item.id}`}>
        <div className="xb-service">
          <div className="xb-item--inner">
            <div className="xb-item--icon mb-50">
              <img
                src={`https://drive.google.com/thumbnail?id=${item.image_id}`}
                alt={item.visa_type}
                className="img-fluid"
              />
            </div>
            <div className="xb-item--holder">
              <h3 className="xb-item--title mb-20">
                {item.visa_type}
              </h3>
              <div className="xb-item--description">
                {item.description
                  ? item.description.replace(/<[^>]+>/g, '').slice(0, 50) + '...'
                  : ''}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  ))}
</div> */}
<div className="px-5">
          <div className="row align-items-center">
            <div className="col-lg-10">
              <div className="about__content">
       <ul className="about-list ul_li list-unstyled">
  {visaServices.map((service, index) => (
    <li key={service.id}>
      <a href={`/visa-services-detail?id=${service.id}`}>
        <div className="xb-item--inner">
          <div className={`xb-item--number color-${(index % 5) + 1}`}>
            {index + 1}
          </div>
          <div className="xb-item--holder">
            <h3 className="xb-item--title mb-10">{service.visa_type}</h3>
            <p style={{ color: '#787B84' }}>
              {/* Optional: Show a trimmed version of the description */}
              {stripHtml(service.description).slice(0, 80)}...
            </p>
          </div>
        </div>
      </a>
    </li>
  ))}
</ul>

              </div>
            </div>
          </div>
</div>
        </section>
        {/* <!-- visa type end --> */}
      </section>

      {/* What is a visa end  */}
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
