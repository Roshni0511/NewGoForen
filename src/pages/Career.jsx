import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export const Career = () => {
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

  useEffect(() => {
    fetch("http://127.0.0.1:8000/get_Industry_Type_data/")
      .then(res => res.json())
      .then(data => setIndustryTypes(data))
      .catch(err => console.error("Failed to load industry types", err));

    fetch("http://127.0.0.1:8000/get_country_data/")
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.error("Failed to load countries", err));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/get_Vacancy_data/")
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
            <input
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
                    <div className="contentv float-leftv">
                      <h4 className="job-titlev">{job.position_name}</h4>
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
                      <p className="job-titlev">{formatDate(job.vacancy_date)}</p>
                      <p className="ej-list-subv">No of vacancies: {job.vacancy_count}</p>
                    </div>
                    <a href="#" className="btnv btn-applyv float-sm-rightv float-xs-leftv">Apply</a>
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
      <Footer />
    </>
  );
};
