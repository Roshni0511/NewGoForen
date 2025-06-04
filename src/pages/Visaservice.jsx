import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { FaCalendarAlt, FaTags, FaFacebookF, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
const Visaservice = () => {
       const [background1, setBackground1] = useState("");
       const [visaType, setVisaType] = useState('');
       const [country, setCountry] = useState('');
       const [month, setMonth] = useState('');
       const [year, setYear] = useState('');
         const [background12, setBackground12] = useState("");
           
             useEffect(() => {
               const backgroundUrl12 = "assets/img/bg/blog_bg.png";
               setBackground12(backgroundUrl12);
             }, []);
       const handleSearch = () => {
         // Add your filter logic here
         console.log({ visaType, country, month, year });
       };
     
                        
                          useEffect(() => {
                            const backgroundUrl1 = "https://html.xpressbuddy.com/e.visa/assets/img/bg/b_bg.jpg";
                            setBackground1(backgroundUrl1);
                          }, []);


                          const blogs = [
                            {
                              id: 1,
                              title: "Canada’s CRS System: How It Works",
                              date: "20 Dec, 2024",
                              category: "Immigration - PR Visa",
                              country: "Canada",
                              description: "Canada’s Comprehensive Ranking System (CRS) scores Express Entry candidates...",
                              link: "/blog-detail/394",
                              tags: ["Immigration - PR Visa,Canada"],
                            },
                            {
                              id: 2,
                              title: "Canada to End LMIA Job Offer Points in Express Entry",
                              date: "20 Dec, 2024",
                              category: "Immigration - PR Visa",
                              country: "Canada",
                              description: "Canada to Stop Giving Extra Points for LMIA Job Offers in Express Entry",
                              link: "/blog-detail/395",
                              tags: ["Immigration - PR Visa,Canada"],
                            },
                          ];
  return (
    <>
    <Navbar />
       <div style={{padding:'80px 0px'}}>
        <div className="container" style={{background: "#f8f8f8"}}>
            <div className="col-12" >
                <div className="row" style={{justifyContent:'center'}}>
                  
                <div className="col-12 col-md-4 mt-4">
                    <div style={{
      background: '#fff',
      padding: '30px 20px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      maxWidth: '100%'
    }}>
      <h4 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Search StayInformed
        <div style={{
          width: '30px',
          height: '3px',
          background: '#00cc99',
          margin: '5px auto 0'
        }}></div>
      </h4>

      <div style={{ marginBottom: '15px' }}>
  <label style={{ fontWeight: 'bold' }}>Visa Type</label>
  <select
    value={visaType}
    onChange={(e) => setVisaType(e.target.value)}
    style={{
        height:'40px',
      width: '100%',
      padding: '8px',
      marginTop: '5px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      outline: 'none'
    }}
  >
    <option value="">Select</option>
    <option value="Immigration - PR Visa">Immigration - PR Visa</option>
    <option value="Visitor Visa">Visitor Visa</option>
    <option value="Visitor Visa">Student Visa</option>
    <option value="Visitor Visa">Investore Visa</option>
    <option value="Visitor Visa">Work Permit Visa</option>
    
  </select>
</div>

<div style={{ marginBottom: '15px' }}>
  <label style={{ fontWeight: 'bold' }}>Country</label>
  <select
    value={country}
    onChange={(e) => setCountry(e.target.value)}
    style={{
        height:'40px',
      width: '100%',
      padding: '8px',
      marginTop: '5px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      outline: 'none'
    }}
  >
    <option value="">Select</option>
    <option value="Canada">Canada</option>
    <option value="USA">Australia</option>
    <option value="USA">New Zealand</option>
    <option value="USA">UK</option>
    <option value="USA">Europe</option>
    <option value="USA">Any Other</option>
   

  </select>
</div>


<div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
  <div style={{ flex: 1 }}>
    <label style={{ fontWeight: 'bold' }}>Month</label>
    <select
      value={month}
      onChange={(e) => setMonth(e.target.value)}
      style={{
        height:'40px',
        width: '100%',
        padding: '8px',
        marginTop: '5px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        outline: 'none'
      }}
    >
      <option value="">All</option>
      <option value="01">January</option>
      <option value="02">February</option>
      <option value="02">March</option>
      <option value="02">April</option>
      <option value="02">May</option>
      <option value="02">Jun</option>
      <option value="02">July</option>
      <option value="02">August</option>
      <option value="02">September</option>
      <option value="02">October</option>
      <option value="02">November</option>
      <option value="02">December</option>
      
    </select>
  </div>
  <div style={{ flex: 1 }}>
  <label style={{ fontWeight: 'bold' }}>Year</label>
  <select
    value={year}
    onChange={(e) => setYear(e.target.value)}
    style={{
        height:'40px',
      width: '100%',
      padding: '8px',
      marginTop: '5px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      outline: 'none'
    }}
  >
    <option value="">All</option>
    <option value="2025">2025</option>
    <option value="2024">2024</option>
    <option value="2024">2023</option>
    <option value="2024">2022</option>
    <option value="2024">2021</option>
    <option value="2024">2020</option>
    <option value="2024">2019</option>
    <option value="2024">2018</option>
    <option value="2024">2017</option>
    <option value="2024">2016</option>
    <option value="2024">2015</option>


  </select>
</div>
</div>





      <button
        onClick={handleSearch}
        style={{
            height:'40px',
          width: '100%',
          padding: '10px',
          backgroundColor: '#00cc99',
          border: 'none',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>
                          
                    </div>
                    <div className="col-12 col-md-8 mt-4">
                    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-box" key={blog.id}>
          <h3 className="blog-title">{blog.title}</h3>
          <div className="blog-meta">
            <span><FaCalendarAlt className="icon" /> {blog.date}</span>
            <span className="separator">|</span>
            <span><FaTags className="icon" /> {blog.category}, {blog.country}</span>
          </div>
     <div
  className="d-flex mb-2"
  style={{
    flexWrap: 'wrap',
    gap: '8px',
    justifyContent: 'flex-start',
    justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start'
  }}
>
  <button
    className="btn btn-sm btn-primary"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      whiteSpace: 'nowrap'
    }}
  >
    <FaFacebookF /> Share
  </button>

  <button
    className="btn btn-sm btn-success"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      whiteSpace: 'nowrap'
    }}
  >
    <FaWhatsapp /> WhatsApp
  </button>

  <button
    className="btn btn-sm btn-info text-white"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      whiteSpace: 'nowrap'
    }}
  >
    <FaLinkedinIn /> Share
  </button>
</div>

          <p className="blog-desc">{blog.description}</p>
          <div className="read-more-tag-row">

  <div className="tags">
    {blog.tags.map((tag, i) => (
      <span className="tag" key={i}><FaTags className="icon" style={{marginRight:'6px' , color:'#00cc99'}}/>{tag}</span>
    ))}
  </div>
</div>
        </div>
      ))}
    </div>
                    </div>
                </div>
            </div>
        </div>
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
    </>
  )
}

export default Visaservice
