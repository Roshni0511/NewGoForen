import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Counter from "../component/Counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import SuccessStories from "../component/SuccessStories";
import FooterTop from "../component/FooterTop";
import axios from 'axios';



export default function About() {

  const [TeamData, setTeamData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/get_team_data/')
      .then((res) => res.json())
      .then((data) => {
        setTeamData(data);
      })
      .catch((err) => console.error("Failed to fetch Team Data:", err));
  }, []);

 const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/get_about_us_data/')
      .then((res) => {
        const filtered = res.data.filter(item => item.category === 'About Us');
        setAboutData(filtered);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  // data-background img start
  const [background, setBackground] = useState("");

  useEffect(() => {
    const backgroundUrl = "/assets/pic/breadcrumb-bg.jpg";
    setBackground(backgroundUrl);
  }, []);


  const [background1, setBackground1] = useState("");

  useEffect(() => {
    const backgroundUrl1 = "http://127.0.0.1:5500/assets/img/bg/team_bg.jpg";
    setBackground1(backgroundUrl1);
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
      <h2 className="breadcrumb__title" style={{color:'#fff'}}>About Us</h2>
      <ul className="breadcrumb__list clearfix">
        <li className="breadcrumb-item">
          <a href="/">Home</a>
        </li>
        <li className="breadcrumb-item" >About us</li>
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

      {/* <!-- about start --> */}
      <section className="about pt-130">
        <div className="container">
          <div className="row mb-40 align-items-center">
            <div className="col-lg-6">
              <div className="sec-title mb-20">
                <h2 className="wow skewIn">
                  Committed to Your Visa <br /> <span  style={{fontSize:'35px'}}>Success - About us</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="sec-title mb-20">
                <p>
                  We deliver budget-friendly visa solutions, removing financial
                  barriers from your journey. Our goal is to provide quality
                  services at reasonable rates.
                </p>
              </div>
            </div>
          </div>
          <div className="xb-about__img">
            <img src="/assets/pic/about (1).jpg" alt="" />
          </div>
        </div>
      </section>
      <Counter />
      {/* <!-- about end --> */}

  <section className="mission pt-130 pb-130">
      <div className="container">
        {aboutData.map((item, index) => (
          <div className="row align-items-center flex-row-reverse mt-none-30" key={item.id}>
            <div className="col-lg-6 mt-30">
              <div className="mission__img text-lg-end">
                <div className="inner-img d-inline-block wow skewIn" data-wow-delay="200ms">
                  <img
                    src={`https://drive.google.com/thumbnail?id=${item.image_id}`}
                    alt={item.heading}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-30">
              <div className="mission__content">
                <div className="sec-title">
                  <h2 className="mb-20 wow skewIn">
                    {item.heading}<br />
                    <span style={{ fontSize: '35px' }} dangerouslySetInnerHTML={{ __html: item.description.match(/<h2[^>]*>(.*?)<\/h2>/)?.[1] || '' }} />
                  </h2>
                  <div dangerouslySetInnerHTML={{ __html: item.description.replace(/<h2[^>]*>.*?<\/h2>/, '') }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

        {/* <!-- team start --> */}
        <section class="team pt-120 pb-130 bg_img" style={{  backgroundImage: `url(${background1})`, }}>
            <div class="container">
                <div class="sec-title text-center mb-65">
                    <h2 class="mb-40 wow skewIn">Our trusted immigration <br /> <span  style={{fontSize:'35px'}}> support team</span></h2>
                    <p style={{textAlign:'center',justifyContent:'center',display:'flex'}}>At the heart of our commitment to providing exceptional <br /> immigration solutions stands</p>
                </div>


<div className="row mt-none-30">

  {TeamData.map((member) => (
    <div key={member.id} className="col-xl-3 col-lg-4 col-md-6 mt-30">
      <div className="xb-team text-center">
        <div className="xb-item--inner">
          <div className="xb-item--img">
            {/* Show a fallback image if needed */}
            <img
              src={`https://drive.google.com/thumbnail?id=${member.image_id}`}
              alt={member.name}
            />
          </div>
          <div className="xb-item--holder">
            <h3 className="xb-item--name">
              <a href="#!">{member.name}</a>
            </h3>
            <span className="xb-item--designation">
              {member.designation}
            </span>
          </div>
          <ul className="xb-item--social list-unstyled">
            <li>
              <a href={member.tweeter || "#!"} target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href={member.linkedin || "#!"} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href={member.facebook || "#!"} target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ))}
</div>                
            </div>
        </section>
        {/* <!-- team end --> */}

      {/* <!-- mission,vission,value start --> */}
      <section className="mission  pt-100 pb-130">
        <div className="container">
          <div className="row align-items-center flex-row-reverse mt-none-30">
            <div className="col-lg-6 mt-30">
              <div className="mission__img text-lg-end">
                <div
                  className="inner-img d-inline-block wow skewIn"
                  data-wow-delay="200ms"
                >
                  <img src="/assets/pic/myvision.jpeg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-30">
              <div className="mission__content">
                <div className="sec-title">
                <h2 class="mb-20 wow skewIn">OUR VISION<br /> <span style={{fontSize:'35px'}}>  Visa Vision</span></h2>
                  <p>
                    Empowering Indian aspirants abroad, we strive as a
                    trustworthy, cost-effective, and ethical immigration/visa
                    consultancy, committed to aiding them in realizing their
                    ambitions and dreams in foreign lands.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-100">
            <div className="col-lg-6 mt-30">
              <div className="mission__img">
                <div className="inner-img d-inline-block wow skewIn">
                  <img src="/assets/pic/mission (1).webp" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-30">
              <div className="mission__content">
                <div className="sec-title">
                <h2 class="mb-20 wow skewIn"> Our Mission<br /> <span style={{fontSize:'35px'}}>   Foreign Guidance</span></h2>
                 
                  <p>
                    <ul style={{listStyle:'none'}}>
                      <li style={{ alignItems: "baseline" }}>
                      <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: 8, fontSize: "8px" }}
                    />
                        To become regionally recognised immigration consultant
                        to distinguished countries.
                      </li>
                      <li style={{ alignItems: "baseline" }}>
                      <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: 8, fontSize: "8px" }}
                    />
                        To provide innovative settlement options to global
                        destination.
                      </li>
                      <li style={{ alignItems: "baseline" }}>
                      <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: 8, fontSize: "8px" }}
                    />
                        To widen the horizon of immigrants academic, work
                        perspectives and quality of life.
                      </li>
                      <li style={{ alignItems: "baseline" }}>
                      <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: 8, fontSize: "8px" }}
                    />
                        To promote global presence of Indians by spreading
                        awareness of world scenario.
                      </li>
                      <li style={{ alignItems: "baseline" }}>
                        To promote economic growth of Indians and encouraging
                        them to help their motherland.
                      </li>
                      <li>
                      <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: 8, fontSize: "8px" }}
                    />
                        By 31 st March 2025, 25 positive outcome of visas per
                        month with revenue worth 1 million INR.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center flex-row-reverse mt-none-30">
            <div className="col-lg-6 mt-30">
              <div className="mission__img text-lg-end">
                <div
                  className="inner-img d-inline-block wow skewIn"
                  data-wow-delay="200ms"
                >
                  <img src="/assets/pic/values (1).png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-100">
              <div className="mission__content">
                <div className="sec-title">
                <h2 class="mb-20 wow skewIn"> Our Values<br /> <span style={{fontSize:'35px'}}> Trusted Service</span></h2>
                 
          
                  <p>
                    KNOWLEDGE GENERATION for ourselves and for clients. Only
                    information on knowledge can help you become winner.
                  </p>
                  <p>
                    GOING BEYOND THE ROUTINE PROMISES to get repetition and
                    recommendation from client.
                  </p>
                  <p>
                    HONESTY, INTEGRITY and TRANSPARENCY in operations to its
                    best possible level.
                  </p>
                  <p>
                    COMMITMENT AND ACCOUNTABILITY towards our clients. We try to
                    remain consistent in delivery of service in cooperation and
                    coordination with client. We listen and respond with
                    solution-oriented ideas and actions.
                  </p>
                  <p>
                    ENTREPRENEURSHIP: Each of team members takes ownership of
                    his part and role in organization. We explore new horizons
                    by asking why, wha, which, etc. questions. We overcome
                    difficulties and challenges by making new things happen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- mission,vission,value end --> */}



      <FooterTop />
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
