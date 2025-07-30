import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2';
import Swal from 'sweetalert2';

const StudyCourse = () => {

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
  const [studyCourses, setStudyCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [visibleCourses, setVisibleCourses] = useState(8);

  const [countries, setCountries] = useState([]);
  const [studyFaculties, setStudyFaculties] = useState([]);
  const [studyLevels, setStudyLevels] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [collegeNature, setCollegeNature] = useState("");

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [applyData, setApplyData] = useState({
    name: "",
    number: "",
    email: "",
    study_course_id: null, // ✅ Add this
  });

  const handleApplyClick = (courseId) => {
    setApplyData((prev) => ({ ...prev, study_course_id: courseId }));
    setShowModal(true);
  };
  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [applyData, setApplyData] = useState({
    name: "",
    number: "",
    email: "",
    study_course_id: null, // ✅ Add this
  });

  const handleApplyClick = (courseId) => {
    setApplyData((prev) => ({ ...prev, study_course_id: courseId }));
    setShowModal(true);
  };

  // Fetch data
  // Fetch data
  useEffect(() => {
    fetch("https://goforen.com/go_foren/get_country_data/").then(res => res.json()).then(data => setCountries(data));
    fetch("https://goforen.com/go_foren/get_Study_Faculty_data/")
      .then((res) => res.json())
      .then((data) => {
        const uniqueFaculties = Array.from(
          new Set(data.map((item) => item.course_name))
        ).map((courseName) =>
          data.find((item) => item.course_name === courseName)
        );
        setStudyFaculties(uniqueFaculties);
      });
    fetch("https://goforen.com/go_foren/get_Study_Level_data/").then(res => res.json()).then(data => setStudyLevels(data));
    fetch("https://goforen.com/go_foren/get_Study_Cource_data/")
    fetch("https://goforen.com/go_foren/get_country_data/").then(res => res.json()).then(data => setCountries(data));
    fetch("https://goforen.com/go_foren/get_Study_Faculty_data/")
      .then((res) => res.json())
      .then((data) => {
        const uniqueFaculties = Array.from(
          new Set(data.map((item) => item.course_name))
        ).map((courseName) =>
          data.find((item) => item.course_name === courseName)
        );
        setStudyFaculties(uniqueFaculties);
      });
    fetch("https://goforen.com/go_foren/get_Study_Level_data/").then(res => res.json()).then(data => setStudyLevels(data));
    fetch("https://goforen.com/go_foren/get_Study_Cource_data/")
      .then(res => res.json())
      .then(data => {
        setStudyCourses(data);
        setFilteredCourses(data);
      });
    setBackground6("/assets/pic/breadcrumb-bg.jpg");
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options).replace(/ /g, ' ').replace(',', ',');
  };

  const handleFilter = () => {
    const filtered = studyCourses.filter(course =>
      (selectedCountry ? course.location.toLowerCase().includes(selectedCountry.toLowerCase()) : true) &&
      (selectedFaculty ? course.study_faculty === selectedFaculty : true) &&
      (selectedLevel ? course.study_level === selectedLevel : true) &&
      (collegeNature ? course.college_nature.toLowerCase().includes(collegeNature.toLowerCase()) : true)
    );
    setFilteredCourses(filtered);
    setVisibleCourses(8);
    setVisibleCourses(8);
  };

  const handleReset = () => {
    setSelectedCountry("");
    setSelectedFaculty("");
    setSelectedLevel("");
    setCollegeNature("");
    setFilteredCourses(studyCourses);
    setVisibleCourses(8);
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setApplyData({ ...applyData, [name]: value });
  // };
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

    try {
      const response = await fetch("https://goforen.com/go_foren/submit_study_course_inquiry/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          study_course_id: applyData.study_course_id, // ✅ send this
          name: applyData.name,
          mobile: applyData.number,
          email: applyData.email,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Application Submitted!",
          text: result.success || "Thank you for applying.",
          confirmButtonColor: "#e38508"
        });
        setShowModal(false);
        setApplyData({ name: "", number: "", email: "", study_course_id: null });
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: result.error || "Something went wrong.",
          confirmButtonColor: "#e38508"
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Could not submit. Try again later.",
        confirmButtonColor: "#e38508"
      });
    }
  };

  return (
    <>
      <Navbar />
      <section className="breadcrumb pos-rel bg_img" style={{ backgroundImage: `url(${background6})`, minHeight: '400px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <section className="breadcrumb pos-rel bg_img" style={{ backgroundImage: `url(${background6})`, minHeight: '400px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
              <option value="">Select Country</option>
              <option value="anywhere">Anywhere</option>
              <option value="">Select Country</option>
              <option value="anywhere">Anywhere</option>
              {countries.map((c, i) => (
                <option key={i} value={c.country}>{c.country}</option>
              ))}
            </select>

            <select className="Job_Positionv" value={selectedFaculty} onChange={(e) => setSelectedFaculty(e.target.value)}>
              <option value="">Select Faculty of Study</option>
              <option value="">Select Faculty of Study</option>
              {studyFaculties.map((item) => (
                <option key={item.id} value={item.course_name}>{item.course_name}</option>
              ))}
            </select>

            <select className="Job_Positionv" value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
              <option value="">Select Study Level</option>
              <option value="">Select Study Level</option>
              {studyLevels.map((item) => (
                <option key={item.id} value={item.level_name}>{item.level_name}</option>
              ))}
            </select>

            <input hidden
              type="text"
              placeholder="Name Of Collages"
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

                    <div className="col-md-3 col-12 d-flex flex-column justify-content-center align-items-center">
                      <h4 className="job-titlev text-center">{course.course_name}</h4>
                      <ul className="companyv mt-2 text-center list-unstyled">

                    <div className="col-md-3 col-12 d-flex flex-column justify-content-center align-items-center">
                      <h4 className="job-titlev text-center">{course.course_name}</h4>
                      <ul className="companyv mt-2 text-center list-unstyled">
                        <li style={{ marginRight: '10px', color: '#e38508' }}>
                          <i className="fas fa-building"></i> {course.college}
                        </li>
                        <li style={{ color: '#07374d' }}>
                          <i className="fas fa-map-marker-alt"></i> {course.location}
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-3 col-12 d-flex flex-column justify-content-center align-items-center">
                      <p className="job-titlev text-center">{formatDate(course.add_date)}</p>
                      <p className="ej-list-subv text-center">No of seats: {course.seat_count}</p>
                    </div>

                    <div className="col-md-3 col-12 d-flex justify-content-center align-items-center">
                    <p className="ej-list-subv">
                      <a 
                        href={course.collage_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ color: '#007bff', textDecoration: 'underline' }}
                      >
                        Visit College Site
                      </a>
                    </p>

                    <div className="col-md-3 col-12 d-flex flex-column justify-content-center align-items-center">
                      <p className="job-titlev text-center">{formatDate(course.add_date)}</p>
                      <p className="ej-list-subv text-center">No of seats: {course.seat_count}</p>
                    </div>

                    <div className="col-md-3 col-12 d-flex justify-content-center align-items-center">
                    <p className="ej-list-subv">
                      <a 
                        href={course.collage_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ color: '#007bff', textDecoration: 'underline' }}
                      >
                        Visit College Site
                      </a>
                    </p>
                    </div>
                    <div className="col-md-3 col-12 d-flex justify-content-center align-items-center">
                    <button
                      onClick={() => handleApplyClick(course.id)} // ✅ Pass course ID
                      className="btnv btn-applyv float-sm-rightv float-xs-leftv"
                    >
                      Apply
                    </button>
                  </div>
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

// Inline input styles
const inputStyle = {
  width: '100%',
  marginBottom: '15px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px'
};

// Inline input styles
const inputStyle = {
  width: '100%',
  marginBottom: '15px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px'
};

export default StudyCourse;