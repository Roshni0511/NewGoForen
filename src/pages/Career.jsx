import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2';
import Swal from 'sweetalert2';

export const Career = () => {

  const getTimeAgo = (createdAt) => {
  const createdDate = new Date(createdAt);
  const now = new Date();
  const diffInSeconds = Math.floor((now - createdDate) / 1000);

  if (diffInSeconds < 60) {
    return `Added: ${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < 3600) {
    const mins = Math.floor(diffInSeconds / 60);
    return `Added: ${mins} min${mins > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < 86400) {
    const hrs = Math.floor(diffInSeconds / 3600);
    return `Added: ${hrs} hour${hrs > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400);
    return `Added: ${days} day${days > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < 31536000) {
    const months = Math.floor(diffInSeconds / 2592000);
    return `Added: ${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffInSeconds / 31536000);
    return `Added: ${years} year${years > 1 ? 's' : ''} ago`;
  }
};

  const [background6, setBackground6] = useState("");
  const [vacancies, setVacancies] = useState([]);
  const [filteredVacancies, setFilteredVacancies] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState(5);

  const [countries, setCountries] = useState([]);
  const [industryTypes, setIndustryTypes] = useState([]);

  // Filter values
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [positionDetail, setPositionDetail] = useState("");
  const [masterAgentCode, setMasterAgentCode] = useState("");
  const [selectedVacancyId, setSelectedVacancyId] = useState(null);

   // Modal state
    const [showModal, setShowModal] = useState(false);
    const [applyData, setApplyData] = useState({
      name: "",
      number: "",
      email: "",
    });
  
  const [selectedVacancyId, setSelectedVacancyId] = useState(null);

   // Modal state
    const [showModal, setShowModal] = useState(false);
    const [applyData, setApplyData] = useState({
      name: "",
      number: "",
      email: "",
    });
  
  useEffect(() => {
    fetch("https://goforen.com/go_foren/get_Industry_Type_data/")
    fetch("https://goforen.com/go_foren/get_Industry_Type_data/")
      .then(res => res.json())
      .then(data => setIndustryTypes(data))
      .catch(err => console.error("Failed to load industry types", err));

    fetch("https://goforen.com/go_foren/get_career_country_data/")
    fetch("https://goforen.com/go_foren/get_career_country_data/")
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.error("Failed to load countries", err));
  }, []);

  useEffect(() => {
    fetch("https://goforen.com/go_foren/get_Vacancy_data/")
    fetch("https://goforen.com/go_foren/get_Vacancy_data/")
      .then((response) => response.json())
      .then((data) => {
        setVacancies(data);
        setFilteredVacancies(data);
      })
      .catch((error) => console.error("Error fetching vacancies:", error));
  }, []);

  useEffect(() => {
    setBackground6("/assets/pic/breadcrumb-bg.jpg");
  }, []);

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options).replace(/ /g, ' ').replace(',', ',');
  };

  const handleToggle = () => {
    setVisibleJobs(prev => (visibleJobs >= filteredVacancies.length ? 5 : prev + 4));
  };

  const isAllVisible = visibleJobs >= filteredVacancies.length;

  const handleFilter = () => {
    const filtered = vacancies.filter(job =>
      (selectedCountry ? job.location.toLowerCase().includes(selectedCountry.toLowerCase()) : true) &&
      (selectedIndustry ? job.industry_type === selectedIndustry : true) &&
      (positionDetail ? job.position_name.toLowerCase().includes(positionDetail.toLowerCase()) : true) &&
      (masterAgentCode ? job.master_agent_code?.toString().includes(masterAgentCode) : true)
    );
    setFilteredVacancies(filtered);
    setVisibleJobs(5); // reset pagination
  };

  const handleReset = () => {
    setSelectedCountry("");
    setSelectedIndustry("");
    setPositionDetail("");
    setMasterAgentCode("");
    setFilteredVacancies(vacancies);
    setVisibleJobs(5);
  };
// const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setApplyData({ ...applyData, [name]: value });
//   };

const handleInputChange = (e) => {
  const { name, value } = e.target;

  // For the "number" field: only digits and max 10 characters
  if (name === "number") {
    const onlyDigits = value.replace(/\D/g, ""); // remove non-digits
    if (onlyDigits.length <= 10) {
      setApplyData({ ...applyData, [name]: onlyDigits });
    }
  } else {
    // For all other fields
    setApplyData({ ...applyData, [name]: value });
  }
};
  const handleFormSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    vacancy_id: selectedVacancyId,
    name: applyData.name,
    mobile: applyData.number,
    email: applyData.email,
  };

  try {
    const response = await fetch("https://goforen.com/go_foren/submit_vacancy_inquiry/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (response.ok) {
      Swal.fire({
        icon: "success",
        title: "Application Submitted!",
        text: "Thank you for applying. We will contact you shortly.",
        confirmButtonColor: "#e38508"
      });
      setShowModal(false);
      setApplyData({ name: "", number: "", email: "" });
      setSelectedVacancyId(null);
    } else {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: data.error || "Please try again later.",
        confirmButtonColor: "#e38508"
      });
    }
  } catch (error) {
    console.error("Submission error:", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Network error. Please try again later.",
      confirmButtonColor: "#e38508"
    });
  }
};

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
          backgroundPosition: 'center',
        }}
      >
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%',
          height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1,
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="breadcrumb__content">
            <h2 className="breadcrumb__title" style={{ color: '#fff' }}>Career</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Career</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='pt-60 pb-60' style={{ backgroundColor: '#edf3f57a' }}>
        <div className="container">
          <h2>Vacancies</h2>
          <div className="vacancy-formv">
            <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
              <option  value="">Select Country</option>
                <option value="anywhere">Anywhere</option>
              {countries.map((c, i) => (
                <option key={i} value={c.country}>{c.country}</option>
              ))}
            </select>

            <select value={selectedIndustry} onChange={(e) => setSelectedIndustry(e.target.value)}>
              <option  value="">Select Industry Type</option>
              {industryTypes.map((item) => (
                <option key={item.id} value={item.industry_name}>
                  {item.industry_name}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Job Position & Details"
              className='Job_Positionv'
              value={positionDetail}
              onChange={(e) => setPositionDetail(e.target.value)}
            />
            <input hidden
              type="number"
              placeholder="Master Agent - Code"
              value={masterAgentCode}
              onChange={(e) => setMasterAgentCode(e.target.value)}
            />
            <button className="submit-btnv" onClick={handleFilter}>Submit</button>
            <button className="reset-btnv" onClick={handleReset}>Reset</button>
          </div>

          <div className="row">
            <div className="col-md-12">
              <ul className="job-listv">
                {filteredVacancies.slice(0, visibleJobs).map((job, index) => (
                  <li className="job-previewv" key={index}>

                    <div className="col-md-3 col-12 d-flex flex-column justify-content-center align-items-center">
                      <h4 className="job-titlev text-center">{job.position_name}</h4>
                      <ul className="companyv mt-2 text-center list-unstyled">

                    <div className="col-md-3 col-12 d-flex flex-column justify-content-center align-items-center">
                      <h4 className="job-titlev text-center">{job.position_name}</h4>
                      <ul className="companyv mt-2 text-center list-unstyled">
                        <li style={{ marginRight: "10px", color: "#e38508" }}>
                          <i className="fas fa-building"></i> {job.company}
                        </li>
                        <li style={{ color: "#07374d" }}>
                          <i className="fas fa-map-marker-alt"></i> {job.location}
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-3 col-12 d-flex flex-column justify-content-center align-items-center">
                      <p className="job-titlev text-center">{formatDate(job.vacancy_date)}</p>
                      <p className="ej-list-subv text-center">No of vacancies: {job.vacancy_count}</p>
                    </div>
                     <div className="col-md-3 col-12 d-flex justify-content-center align-items-center">
                    <p className="ej-list-subv">
                      <a 
                        href={job.company_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ color: '#007bff', textDecoration: 'underline' }}
                      >
                        Visit Company Site
                      </a>
                    </p>
</div>
 <div className="col-md-3 col-12 d-flex justify-content-center align-items-center">
                     <button
                      onClick={() => {
                        setSelectedVacancyId(job.id); // <-- Set ID here
                        setShowModal(true);
                      }}
                      className="btnv btn-applyv float-sm-rightv float-xs-leftv"
                    >
                      Apply
                    </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {filteredVacancies.length > 5 && (
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
            )}
          </div>
        </div>
      </section>
       {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '10px',
            width: '90%',
            maxWidth: '500px',
            position: 'relative'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <h3>Apply Now</h3>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#999'
                }}
              >&times;</button>
            </div>
            <form onSubmit={handleFormSubmit}>
              <input type="text" name="name" placeholder="Name" value={applyData.name} onChange={handleInputChange} required style={inputStyle} />
              <input type="text" name="number" placeholder="Number" value={applyData.number} onChange={handleInputChange} required style={inputStyle} />
              <input type="email" name="email" placeholder="Email" value={applyData.email} onChange={handleInputChange} required style={inputStyle} />
             
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#e38508",
                    color: "#fff",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  Submit
                </button>
              </div>
              
            </form>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
const inputStyle = {
  width: '100%',
  marginBottom: '15px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px'
};
const inputStyle = {
  width: '100%',
  marginBottom: '15px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px'
};