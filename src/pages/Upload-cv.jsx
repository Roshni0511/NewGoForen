import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const custom_input = {
  border: '1px solid #ced4da',
  borderRadius: '4px',
  padding: '0.375rem 0.75rem',
  fontSize: '1rem',
};

export default function Uploadcv() {
  
    const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [desiredVisaService, setDesiredVisaService] = useState("");
  const [resume, setResume] = useState(null);
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const canvasRef = useRef(null);

  // Generate CAPTCHA
  const generateCaptcha = () => {
    const captchaText = Math.random().toString(36).substring(2, 8);
    setCaptcha(captchaText);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Arial";
    ctx.fillText(captchaText, 10, 35);
  };
    const [VisaTypes, setVisaTypes] = useState([]);
   // Fetch visa data
    useEffect(() => {
      axios.get("http://localhost:8000/get_visa_services/")
        .then((res) => setVisaTypes(res.data))
        .catch((err) => console.error("Error fetching countries:", err));
    }, []);
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (captchaInput !== captcha) {
      alert("Invalid captcha!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("number", number);
    formData.append("gender", gender);
    formData.append("desired_visa_service", desiredVisaService);
    formData.append("resume", resume);
    formData.append("captcha_entered", captchaInput);

    try {
      const res = await axios.post("http://localhost:8000/submit_cv/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(res.data.success);
      // Reset form
      setName("");
      setNumber("");
      setGender("");
      setDesiredVisaService("");
      setResume(null);
      setCaptchaInput("");
      generateCaptcha();
    } catch (error) {
      alert("Submission failed: " + error.response?.data?.error || error.message);
    }
  };

 
  const [background, setBackground] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");

  const visaServices = [
    { name: "Student Visa", info: false },
    { name: "PR Visa", info: false },
    { name: "Visitor Visa", info: true },
    { name: "Investor Visa", info: true },
    { name: "Work Permit Visa", info: false },
  ];
  useEffect(() => {
    generateCaptcha();
  }, []);


const handleSelect2 = (e) => {
  const { name, value } = e.target;
  setDesiredVisaService((prev) => ({ ...prev, [name]: value }));
};
 // data-background img start
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
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>Upload Your CV</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>

              <li className="breadcrumb-item">Upload Your CV</li>
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

      {/* <!-- contact start --> */}
      <section
        className="contact  gray-bg"
        style={{ paddingBottom: "60px", paddingTop: "160px" }}
      >
        <div className="container">
          <div className="xb-contact pos-rel">
            <div className="row">
              <div className="col-12">
                <div className="p-5">
                  <div className="xb-item--holder mb-25">
                    <span>
                      <img src="assets/img/icon/n_pad.svg" alt="" />
                      Upload Your CV
                    </span>
                   
                    <h5>If you do not wish to fill up the full inquiry form, upload your latest CV below. We will assess your profile and contact you.</h5>
                  </div>
    <form className="xb-item--form contact-from" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <label>Name :</label>
          <div className="xb-item--field">
            <input type="text" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
        </div>

<div className="col-md-6">
  <label className="form-label">Desired Visa Route</label>
            <select value={desiredVisaService} onChange={(e) => setDesiredVisaService(e.target.value)} className="form-control" required>

    <option value="">-- Select Visa Route --</option>
    {VisaTypes.map((visa) => (
      <option key={visa.id} value={visa.visa_type}>
        {visa.visa_type}
      </option>
    ))}
  </select>
</div>
        <div className="col-lg-6">
          <label>Number :</label>
          <div className="xb-item--field">
            <input type="text" placeholder="Enter Your Number" value={number} onChange={(e) => setNumber(e.target.value)} required />
          </div>
        </div>

        <div className="col-lg-6">
          <label>CV :</label>
          <div className="xb-item--field">
            <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files[0])} required />
          </div>
        </div>

        <div className="col-lg-6">
          <label>Gender :</label>
          <div className="xb-item--field">
            <select value={gender} onChange={(e) => setGender(e.target.value)} className="form-control" required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="col-lg-6">
          <label>Captcha :</label>
          <div className="row align-items-center g-2 mb-2">
            <div className="col-md-auto">
              <canvas ref={canvasRef} width={200} height={50} style={{ border: "1px solid #ccc", display: "block" }} />
            </div>
            <div className="col-md-auto">
              <button type="button" className="btn btn-secondary" onClick={generateCaptcha}>
                Refresh
              </button>
            </div>
          </div>
          <div className="xb-item--field">
            <input
              type="text"
              placeholder="Enter Captcha"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              required
              className="form-control"
            />
          </div>
        </div>

        <div className="col-12">
          <button className="thm-btn" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- contact end --> */}
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
