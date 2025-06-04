import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import SuccessStories from "../component/SuccessStories";
import FooterTop from "../component/FooterTop";
import Counter from "../component/Counter";
import axios from 'axios';

export default function Aboutusrace() {

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
        const filtered = res.data.filter(item => item.category === 'About Race Groups');
        setAboutData(filtered);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);


      // data-background img start
        const [background12, setBackground12] = useState("");
      
        useEffect(() => {
          const backgroundUrl12 = "assets/img/bg/blog_bg.png";
          setBackground12(backgroundUrl12);
        }, []);
        // data-background img end
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
        <li className="breadcrumb-item" >About Us - RACE</li>
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
</div>                            </div>
        </section>
        {/* <!-- team end --> */}
      {/* <!-- mission,vission,value start --> */}
      <section className="mission pt-100 pb-130">
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
                  To nurture YOUTH as career-mentors, RACE group strives to be the beacon of encouragement, inspiration, and knowledge.
                  </p>
                  <p>To capacitate talent, providing top-tier infrastructure enabling them to reach their utmost potential and conquer new heights in their chosen paths.</p>

                  <p>A brand that provides unparalleled support for success and fosters growth of youth.</p>
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
                  Empowering YOUTH by guiding and skilling them towards diverse career opportunities, ensuring successful and fulfilling pathways to a prosperous future.
                  </p>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </section>
      {/* <!-- mission,vission,value end --> */}






















         {/* <!-- about text start --> */}
      <section className="team-signle pb-120">
        <div className="container">
          <div className="team-single__inner">
            <div className="team-single__content" style={{ paddingTop: "0px" }}>
              <h3>INFRASTRUCTURE:</h3>
              <p>
              Race is redefining the future for Indian youth through cutting-edge latest infrastructure and soft facilities that cater to your every need. Step into our world, where spacious, climate-controlled training spaces inspire growth and excellence encircling more than 12000.00 square feet of area at 701-702, 7th floor, Joyos Hubtown, Adajan bus port, Adajan, Surat, Gujarat, India, PIN-395009. Our top priority is your comfort and satisfaction, which is why our dedicated and friendly staff members ensure your experience is always soothing and disciplined.
              </p>
              <p>
              Imagine indulging in a learning environment like no other – airy classrooms, a well-stocked library, state-of-the-art computer labs, and versatile meeting rooms, class rooms, and seminar halls await you. Do you need a copy of books & material? Xeroxing facility is given. Craving a quick bite or a place to relax? Our cafeteria and waiting area are designed with your well-being in mind. Unleash the power of our exquisite recording facility to broadcast your profound perspectives to the farthest corners of the globe.
              </p>
             
              <p>
              Embark on your journey of growth and excellence with us. Welcome to the future!
              </p>
              
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about text end --> */}

      {/* <!-- img start responsive pandding--> */}
        <section className="blog pb-130">
            <div className="container">
                <div className="blog-wrap " style={{
    margin: '0px',
    padding: window.innerWidth <= 768 ? '0px 30px' : '0px 100px',
  }}>
                    
                    <div className="row justify-content-md-center mt-none-30">
                        <div className="col-lg-6 col-md-12 mt-30">
                            <div className="xb-blog">
                                <div className="xb-item--inner">
                                    <div className="xb-item--img" style={{border:'1px solid #000'}}> 
                                        <img src="/assets/pic/race-community.jpg" alt="" />
                                    </div>
                                    <div className="xb-item--holder" style={{padding:'0px'}}>
                                        <span className="xb-item--category">RACE Community</span>
                                       
                                        <h3 className="xb-item--title border-effect" style={{marginTop:'20px',marginBottom:'0px'}}><a href="">CHART – RACE COMMUNITY</a></h3>
                                       
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mt-30">
                            <div className="xb-blog">
                                <div className="xb-item--inner">
                                    <div className="xb-item--img" style={{border:'1px solid #000'}}>
                                        <a href=""><img src="/assets/pic/corporate-structure.jpg" alt="" /></a>
                                    </div>
                                    <div className="xb-item--holder" style={{padding:'0px'}}>
                                        <a className="xb-item--category color-2" href="#!">corporate structure</a>
                                       
                                        <h3 className="xb-item--title border-effect"  style={{marginTop:'20px',marginBottom:'0px'}}><a href="">CHART – RACE COMMUNITY</a></h3>
                                   
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="xb-blog-bg" style={{backgroundImage: `url(${background1})`,background:'#EDF3F5'}} ></div>
                </div>
            </div>
        </section>
        {/* <!-- img end --> */}

         {/* <!-- about text start --> */}
      <section className="team-signle pb-120">
        <div className="container">
          <div className="team-single__inner">
            <div className="team-single__content" style={{ paddingTop: "0px" }}>
              <h3>Brief Description on Business of Race Community:</h3>
              <p>
              <b>1. RACHNA ACADEMY – Coaching Division:</b> Established in 2006 provides online, off line training in the areas of (a) exams for government jobs of state and central governments like GPSC, GSSSB, UPSC, SSC, Banks exam, etc. (b) English language exams like IELTS, PTE, TOEFL, CAEL, CELPIP, etc. for foreign goers (c) Computer knowledge like CCC, Tally, Graphic designing, etc. (d) Skill development on Sales executive, tele caller, e commerce training.
              <br/>
              <b>Contact number:</b> +91 76 00 90 90 90
              <br />
              <b>URL:</b> <a href="https://www.racevarsity.com" target="_blank">www.racevarsity.com</a>
              </p>
             
             <p><b>2. IROJGAR – Placement division:</b> Provides comprehensive workforce solutions catering to both professionals and non-professionals alike. Leveraging technology-driven job portal (online), we streamline the process of connecting job seekers with suitable employment opportunities while enabling job providers to effortlessly discover the talented individuals they require for sustainable success. All this is offered at a competitive and reasonable cost, ensuring a win-win scenario for all stakeholders involved since 2015.
             <br />
             <b>Contact number:</b> +91 77 79 01 01 01
             <br />
             <b>URL:</b> <a href="https://www.irojgar.com" target="_blank">www.irojgar.com</a>
             </p>
             
             <p>
             <b>3. GO FOREN – Visa and Immigration division:</b> GO FOREN is your go-to place for immigration and visa services. We can help you with various visas like PR, student, visitor, business, and work permits since 2018. Our specialty is immigration, and we provide all-round support to people who want to work and live in a new country like Canada, USA, UK, Australia, New Zealand. We offer help from the beginning till the end, including counselling, evaluations, applications, reapplications, and immigration processes. And that's not all! We also offer extra services like air ticketing, foreign exchange, accommodation arrangements, travel insurance, and airport transfers once you successfully move to your new country. Trust us for a smooth and hassle-free journey!
             <br />
             <b>Contact number:</b> +91 96 24 819 819
             <br />
             <b>URL:</b> <a href="https://www.goforen.com" target="_blank">www.goforen.com</a>
             </p>

             <p>
             <b>4. CAREERIAA – Co working space:</b> This is an outstanding co-working space established in 2022, dedicated to serving distinguished coworkers, freelancers, and aspiring entrepreneurs in need of a launchpad for their startups or businesses. For various reasons, like office maintenance and additional expenses, they may not be able to afford their own office initially. Our comprehensive range of amenities and services is designed to support and empower these passionate individuals like good ambience, waiting area, meeting place, parking, library, internet, xeroxing, CCTV surveillance, cafeteria, wash rooms, change rooms, recording facility, and air-conditioned.
             <br />
             <b>Contact number:</b> +91 85 11 11 02 21
             <br />
             <b>URL:</b><a href="https://www.careeriaa.com" target="_blank">www.careeriaa.com</a>
             </p>
             
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about text end --> */}

  

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
  )
}
