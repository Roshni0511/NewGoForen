import React, { useEffect, useState } from 'react';

const Vacancies = () => {
  const [countries, setCountries] = useState([]);
  const [studyLevels, setStudyLevels] = useState([]);
  const [studyCourses, setStudyCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [studyFaculties, setStudyFaculties] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [collegeNature, setCollegeNature] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/get_Study_Faculty_data/")
      .then(res => res.json())
      .then(data => setStudyFaculties(data))
      .catch(err => console.error("Failed to load study faculties", err));

    fetch("http://127.0.0.1:8000/get_country_data/")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Failed to load countries", err));

    fetch("http://127.0.0.1:8000/get_Study_Level_data/")
      .then((res) => res.json())
      .then((data) => setStudyLevels(data))
      .catch((err) => console.error("Failed to load study levels", err));

    fetch("http://127.0.0.1:8000/get_Study_Cource_data/")
      .then((res) => res.json())
      .then((data) => {
        setAllCourses(data);
        setStudyCourses(data.slice(-2));
      })
      .catch((err) => console.error("Failed to load study courses", err));
  }, []);

  const formatDate = (isoDateStr) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(isoDateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const handleFilter = () => {
    let filtered = [...allCourses];

    if (selectedCountry)
      filtered = filtered.filter(item => item.location.toLowerCase().includes(selectedCountry.toLowerCase()));

    if (selectedFaculty)
      filtered = filtered.filter(item => item.study_faculty === selectedFaculty);

    if (selectedLevel)
      filtered = filtered.filter(item => item.study_level === selectedLevel);

    if (collegeNature)
      filtered = filtered.filter(item =>
        item.college_nature && item.college_nature.toLowerCase().includes(collegeNature.toLowerCase())
      );

    setStudyCourses(filtered);
  };

  const handleReset = () => {
    setSelectedCountry("");
    setSelectedFaculty("");
    setSelectedLevel("");
    setCollegeNature("");
    setStudyCourses(allCourses.slice(-2));
  };

  return (
    <>
      <div>
        <section className='pt-60 pb-60' style={{ backgroundColor: '#edf3f57a' }}>
          <div className="container">
            <h2>Study Course</h2>

            <div className="vacancy-formv">
              {/* 1. Country */}
              <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                <option value="">Select Country</option>
                <option value="anywhere">Anywhere</option>
                {countries.map((c, i) => (
                  <option key={i} value={c.country}>{c.country}</option>
                ))}
              </select>

              {/* 2. Faculty of Study */}
              <select className="Job_Positionv" value={selectedFaculty} onChange={(e) => setSelectedFaculty(e.target.value)}>
                <option value="">Select Faculty of Study</option>
                {studyFaculties.map((item) => (
                  <option key={item.id} value={item.course_name}>{item.course_name}</option>
                ))}
              </select>

              {/* 3. Study Level */}
              <select className="Job_Positionv" value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
                <option value="">Select Study Level</option>
                {studyLevels.map((item) => (
                  <option key={item.id} value={item.level_name}>{item.level_name}</option>
                ))}
              </select>

              {/* 4. Nature of Colleges */}
              <input
                type="text"
                placeholder="Nature Of Colleges"
                className='Job_Positionv'
                value={collegeNature}
                onChange={(e) => setCollegeNature(e.target.value)}
              />

              <button className="submit-btnv" onClick={handleFilter}>Submit</button>
              <button className="reset-btnv" onClick={handleReset}>Reset</button>
            </div>

            <div className="row">
              <div className="col-md-12 ">
                <ul className="job-listv">
                  {studyCourses.map((course) => (
                    <li className="job-previewv" key={course.id}>
                      <div className="contentv float-leftv">
                        <h4 className="job-titlev">{course.course_name}</h4>
                        <ul className="companyv mt-2">
                          <li style={{ marginRight: '10px', color: '#e38508' }}>
                            <i className="fas fa-university"></i> {course.college}
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
            </div>

            <div style={{ justifyContent: 'center', display: 'flex', marginTop: '50px' }}>
              <button style={{ padding: "10px 20px", background: "#e38508", borderRadius: "10px" }}>
                <a style={{ color: "#fff" }} href="/StudyCourse">View More</a>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Vacancies;
