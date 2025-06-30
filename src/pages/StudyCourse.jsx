import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const StudyCourse = () => {
  const [background6, setBackground6] = useState("");
  const [studyCourses, setStudyCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [visibleCourses, setVisibleCourses] = useState(8);

  const [countries, setCountries] = useState([]);
  const [studyFaculties, setStudyFaculties] = useState([]);
  const [studyLevels, setStudyLevels] = useState([]);
  const [industryTypes, setIndustryTypes] = useState([]); // if needed

  // Filter state
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [collegeNature, setCollegeNature] = useState("");

  // Fetch filters
  useEffect(() => {
    fetch("http://127.0.0.1:8000/get_country_data/")
      .then(res => res.json())
      .then(data => setCountries(data));
    fetch("http://127.0.0.1:8000/get_Study_Faculty_data/")
      .then(res => res.json())
      .then(data => setStudyFaculties(data));
    fetch("http://127.0.0.1:8000/get_Study_Level_data/")
      .then(res => res.json())
      .then(data => setStudyLevels(data));
    fetch("http://127.0.0.1:8000/get_Industry_Type_data/")
      .then(res => res.json())
      .then(data => setIndustryTypes(data));
  }, []);

  // Fetch study course list
  useEffect(() => {
    fetch("http://127.0.0.1:8000/get_Study_Cource_data/")
      .then(res => res.json())
      .then(data => {
        setStudyCourses(data);
        setFilteredCourses(data);
      });
  }, []);

  useEffect(() => {
    setBackground6("/assets/pic/breadcrumb-bg.jpg");
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options).replace(/ /g, ' ').replace(',', ',');
  };

  // Handle filtering
  const handleFilter = () => {
    const filtered = studyCourses.filter(course =>
      (selectedCountry ? course.location.toLowerCase().includes(selectedCountry.toLowerCase()) : true) &&
      (selectedFaculty ? course.study_faculty === selectedFaculty : true) &&
      (selectedLevel ? course.study_level === selectedLevel : true) &&
      (collegeNature ? course.college_nature.toLowerCase().includes(collegeNature.toLowerCase()) : true)
    );
    setFilteredCourses(filtered);
    setVisibleCourses(8); // reset view count
  };

  const handleReset = () => {
    setSelectedCountry("");
    setSelectedFaculty("");
    setSelectedLevel("");
    setCollegeNature("");
    setFilteredCourses(studyCourses);
    setVisibleCourses(8);
  };

  return (
    <>
      <Navbar />
      <section
        className="breadcrumb pos-rel bg_img"
        style={{
          backgroundImage: `url(${background6})`,
          minHeight: '400px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="breadcrumb__content">
            <h2 className="breadcrumb__title" style={{ color: '#fff' }}>Study Course</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Study Course</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='pt-60 pb-60' style={{ backgroundColor: '#edf3f57a' }}>
        <div className="container">
          <h2>Study Course</h2>
          <div className="vacancy-formv">
            <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
              <option  value="">Select Country</option>
                <option value="anywhere">Anywhere</option>
              {countries.map((c, i) => (
                <option key={i} value={c.country}>{c.country}</option>
              ))}
            </select>

            <select className="Job_Positionv" value={selectedFaculty} onChange={(e) => setSelectedFaculty(e.target.value)}>
              <option value="" >Select Faculty of Study</option>
              {studyFaculties.map((item) => (
                <option key={item.id} value={item.course_name}>{item.course_name}</option>
              ))}
            </select>

            <select className="Job_Positionv" value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
              <option value="" >Select Study Level</option>
              {studyLevels.map((item) => (
                <option key={item.id} value={item.level_name}>{item.level_name}</option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Nature Of Collages"
              className='Job_Positionv'
              value={collegeNature}
              onChange={(e) => setCollegeNature(e.target.value)}
            />

            <button className="submit-btnv" onClick={handleFilter}>Submit</button>
            <button className="reset-btnv" onClick={handleReset}>Reset</button>
          </div>

          <div className="row">
            <div className="col-md-12">
              <ul className="job-listv">
                {filteredCourses.slice(0, visibleCourses).map((course, index) => (
                  <li className="job-previewv" key={index}>
                    <div className="contentv float-leftv">
                      <h4 className="job-titlev">{course.course_name}</h4>
                      <ul className="companyv mt-2">
                        <li style={{ marginRight: '10px', color: '#e38508' }}>
                          <i className="fas fa-building"></i> {course.college}
                        </li>
                        <li style={{ color: '#07374d' }}>
                          <i className="fas fa-map-marker-alt"></i> {course.location}
                        </li>
                      </ul>
                    </div>
                    <div className="ej-job-list-item-col ej-job-time-col">
                      <p className="job-titlev">{formatDate(course.add_date)}</p>
                      <p className="ej-list-subv">No of seats: {course.seat_count}</p>
                    </div>
                    <a href="#" className="btnv btn-applyv float-sm-rightv float-xs-leftv">Apply</a>
                  </li>
                ))}
              </ul>
            </div>

            {filteredCourses.length > visibleCourses && (
              <div style={{ justifyContent: "center", display: "flex", marginTop: "50px" }}>
                <button
                  onClick={() => setVisibleCourses(prev => prev + 4)}
                  style={{
                    padding: "10px 20px",
                    background: "#e38508",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ color: "#fff" }}>View More</span>
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

export default StudyCourse;
