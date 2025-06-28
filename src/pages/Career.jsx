import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export const Career = () => {
    const [background6, setBackground6] = useState("");
    
      useEffect(() => {
        const backgroundUrl6 = "/assets/pic/breadcrumb-bg.jpg";
        setBackground6(backgroundUrl6);
      }, []);
      
       const [visibleJobs, setVisibleJobs] = useState(5); // Start with 2

  const jobs = [
    {
      title: "Business & Management",
      location: "Anywhere",
      company: "Company",
      date: "01 Jan, 2030",
      vacancies: 2,
    },
    {
      title: "Tourism & Hospitality",
      location: "Anywhere",
      company: "Company",
      date: "01 Jan, 2030",
      vacancies: 2,
    },
    {
      title: "Nursing",
      location: "Remote",
      company: "Tech Corp",
      date: "15 Feb, 2030",
      vacancies: 3,
    },
    {
      title: "Pharmacy  ",
      location: "Remote",
      company: "DevWorks",
      date: "20 Feb, 2030",
      vacancies: 1,
    },
     {
      title: "Education & Teaching",
      location: "Remote",
      company: "Tech Corp",
      date: "15 Feb, 2030",
      vacancies: 3,
    },
    {
      title: "Sciences",
      location: "Remote",
      company: "DevWorks",
      date: "20 Feb, 2030",
      vacancies: 1,
    }, {
      title: "Media & Communication",
      location: "Remote",
      company: "Tech Corp",
      date: "15 Feb, 2030",
      vacancies: 3,
    },
    {
      title: "Environmental Studies",
      location: "Remote",
      company: "DevWorks",
      date: "20 Feb, 2030",
      vacancies: 1,
    },
  ];

  const handleToggle = () => {
    if (visibleJobs >= jobs.length) {
      setVisibleJobs(2); // Reset to 2 on "View Less"
    } else {
      setVisibleJobs((prev) => prev + 4); // Show 2 more
    }
  };

  const isAllVisible = visibleJobs >= jobs.length;
    
  return (
    <>
       <Navbar />
          <section
  className="breadcrumb pos-rel bg_img"
  style={{ 
    backgroundImage: `url(${background6})`, 
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
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>Career</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>

              <li className="breadcrumb-item">Career</li>
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
        <div>
      

	<section className=' pt-60 pb-60' style={{backgroundColor:'#edf3f57a'}}>
		<div class="container">
      <h2>  Vacancies</h2>
  <div class="vacancy-formv">
    {/* <!-- 1. Country --> */}
    <select>
      <option disabled selected>Select Country</option>
      <option>India</option>
      <option>UAE</option>
      <option>USA</option>
    </select>

    {/* <!-- 2. Type of Industry --> */}
    <select>
      <option disabled selected>Select Industry Type</option>
      <option>IT</option>
      <option>Healthcare</option>
      <option>Construction</option>
    </select>

    {/* <!-- 3. Job Position with Details --> */}
    <input type="text" placeholder="Job Position & Details" className='Job_Positionv' />

    {/* <!-- 4. Master Agent Code --> */}
    <input type="number" placeholder="Master Agent - Code" />

    <button class="submit-btnv">Submit</button>
    <button class="reset-btnv">Reset</button>
  </div>
			   <div className="row">
      <div className="col-md-12">
        <ul className="job-listv">
          {jobs.slice(0, visibleJobs).map((job, index) => (
            <li className="job-previewv" key={index}>
              <div className="contentv float-leftv">
                <h4 className="job-titlev">{job.title}</h4>
                <ul className="companyv mt-2">
                  <li style={{ marginRight: "10px", color: "#e38508" }}>
                    <i className="fas fa-building"></i> {job.company}
                  </li>
                  <li style={{ color: "#07374d" }}>
                    <i className="fas fa-map-marker-alt"></i> {job.location}
                  </li>
                </ul>
              </div>
              <div className="ej-job-list-item-col ej-job-time-col">
                <p className="job-titlev">{job.date}</p>
                <p className="ej-list-subv">No of vacancies: {job.vacancies}</p>
              </div>
              <a href="#" className="btnv btn-applyv float-sm-rightv float-xs-leftv">
                Apply
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ justifyContent: "center", display: "flex", marginTop: "50px" }}>
        <button
          onClick={handleToggle}
          style={{
            padding: "10px 20px",
            background: "#e38508",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span style={{ color: "#fff" }}>
            {isAllVisible ? "View Less" : "View More"}
          </span>
        </button>
      </div>
    </div>
		</div>
	</section>
    </div>
       <Footer />
    </>
  )
}
