import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Vacancies = () => {
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

  const [countries, setCountries] = useState([]);
  const [studyLevels, setStudyLevels] = useState([]);
  const [studyCourses, setStudyCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [studyFaculties, setStudyFaculties] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [collegeNature, setCollegeNature] = useState("");

  // Popup modal state
  const [showModal, setShowModal] = useState(false);
  const [applyData, setApplyData] = useState({
    name: "",
    number: "",
    email: "",
    country: "",
  });

  // Popup modal state
  const [showModal, setShowModal] = useState(false);
  const [applyData, setApplyData] = useState({
    name: "",
    number: "",
    email: "",
    country: "",
  });

  useEffect(() => {
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

    fetch("https://goforen.com/go_foren/get_country_data/")
    fetch("https://goforen.com/go_foren/get_country_data/")
      .then((res) => res.json())
      .then((data) => setCountries(data));
      .then((data) => setCountries(data));

    fetch("https://goforen.com/go_foren/get_Study_Level_data/")
    fetch("https://goforen.com/go_foren/get_Study_Level_data/")
      .then((res) => res.json())
      .then((data) => setStudyLevels(data));
      .then((data) => setStudyLevels(data));

    fetch("https://goforen.com/go_foren/get_Study_Cource_data/")
    fetch("https://goforen.com/go_foren/get_Study_Cource_data/")
      .then((res) => res.json())
      .then((data) => {
        setAllCourses(data);
        setStudyCourses(data.slice(-2));
      });
      });
  }, []);

  const formatDate = (isoDateStr) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date(isoDateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const handleFilter = () => {
    let filtered = [...allCourses];
    if (selectedCountry)
      filtered = filtered.filter((item) =>
        item.location.toLowerCase().includes(selectedCountry.toLowerCase())
      );
      filtered = filtered.filter((item) =>
        item.location.toLowerCase().includes(selectedCountry.toLowerCase())
      );
    if (selectedFaculty)
      filtered = filtered.filter(
        (item) => item.study_faculty === selectedFaculty
      );
      filtered = filtered.filter(
        (item) => item.study_faculty === selectedFaculty
      );
    if (selectedLevel)
      filtered = filtered.filter((item) => item.study_level === selectedLevel);
      filtered = filtered.filter((item) => item.study_level === selectedLevel);
    if (collegeNature)
      filtered = filtered.filter(
        (item) =>
          item.college_nature &&
          item.college_nature
            .toLowerCase()
            .includes(collegeNature.toLowerCase())
      filtered = filtered.filter(
        (item) =>
          item.college_nature &&
          item.college_nature
            .toLowerCase()
            .includes(collegeNature.toLowerCase())
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

  const handleApplyClick = (courseId) => {
    setApplyData((prev) => ({ ...prev, study_course_id: courseId }));
    setShowModal(true);
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setApplyData((prev) => ({ ...prev, [name]: value }));
  // };
const handleInputChange = (e) => {
  const { name, value } = e.target;

  if (name === "number") {
    // Allow only digits and maximum 10 characters
    const onlyDigits = value.replace(/\D/g, ""); // remove non-digits
    if (onlyDigits.length <= 10) {
      setApplyData((prev) => ({ ...prev, [name]: onlyDigits }));
    }
  } else {
    setApplyData((prev) => ({ ...prev, [name]: value }));
  }
};
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://goforen.com/go_foren/submit_study_course_inquiry/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            study_course_id: applyData.study_course_id, // Set actual ID if available
            name: applyData.name,
            mobile: applyData.number,
            email: applyData.email,
          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Application Submitted!",
          text: result.success || "Thank you for applying.",
          confirmButtonColor: "#e38508",
        });
        setShowModal(false);
        setApplyData({ name: "", number: "", email: "", country: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: result.error || "Something went wrong. Please try again.",
          confirmButtonColor: "#e38508",
        });
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Could not submit the form. Please try again later.",
        confirmButtonColor: "#e38508",
      });
    }
  };

  return (
    <>
      <div>
        <section
          className="pt-60 pb-60"
          style={{ backgroundColor: "#edf3f57a" }}
        >
        <section
          className="pt-60 pb-60"
          style={{ backgroundColor: "#edf3f57a" }}
        >
          <div className="container">
            <h2>Study Course</h2>

            <div className="vacancy-formv">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="">Select Country</option>
                <option value="anywhere">Anywhere</option>
                {countries.map((c, i) => (
                  <option key={i} value={c.country}>
                    {c.country}
                  </option>
                  <option key={i} value={c.country}>
                    {c.country}
                  </option>
                ))}
              </select>

              <select
                className="Job_Positionv"
                value={selectedFaculty}
                onChange={(e) => setSelectedFaculty(e.target.value)}
              >
              <select
                className="Job_Positionv"
                value={selectedFaculty}
                onChange={(e) => setSelectedFaculty(e.target.value)}
              >
                <option value="">Select Faculty of Study</option>
                {studyFaculties.map((item) => (
                  <option key={item.id} value={item.course_name}>
                    {item.course_name}
                  </option>
                  <option key={item.id} value={item.course_name}>
                    {item.course_name}
                  </option>
                ))}
              </select>

              <select
                className="Job_Positionv"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
              <select
                className="Job_Positionv"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <option value="">Select Study Level</option>
                {studyLevels.map((item) => (
                  <option key={item.id} value={item.level_name}>
                    {item.level_name}
                  </option>
                  <option key={item.id} value={item.level_name}>
                    {item.level_name}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Nature Of Colleges"
                className="Job_Positionv"
                value={collegeNature}
                onChange={(e) => setCollegeNature(e.target.value)}
              />

              <button className="submit-btnv" onClick={handleFilter}>
                Submit
              </button>
              <button className="reset-btnv" onClick={handleReset}>
                Reset
              </button>
              <button className="submit-btnv" onClick={handleFilter}>
                Submit
              </button>
              <button className="reset-btnv" onClick={handleReset}>
                Reset
              </button>
            </div>

            <div className="row">
              <div className="col-md-12 ">
                <ul className="job-listv">
                  {studyCourses.map((course) => (
                    <li className="job-previewv" key={course.id}>
                      <div className="col-md-3 col-12 d-flex flex-column justify-content-center align-items-center">
                        <h4 className="job-titlev text-center">
                          {course.course_name}
                        </h4>
                        <ul className="companyv mt-2 text-center list-unstyled">
                          <li style={{ marginRight: "10px", color: "#e38508" }}>
                            <i className="fas fa-university"></i>{" "}
                            {course.college}
                      <div className="col-md-3 col-12 d-flex flex-column justify-content-center align-items-center">
                        <h4 className="job-titlev text-center">
                          {course.course_name}
                        </h4>
                        <ul className="companyv mt-2 text-center list-unstyled">
                          <li style={{ marginRight: "10px", color: "#e38508" }}>
                            <i className="fas fa-university"></i>{" "}
                            {course.college}
                          </li>
                          <li style={{ color: "#07374d" }}>
                            <i className="fas fa-map-marker-alt"></i>{" "}
                            {course.location}
                          <li style={{ color: "#07374d" }}>
                            <i className="fas fa-map-marker-alt"></i>{" "}
                            {course.location}
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-3 col-12 d-flex flex-column justify-content-center align-items-center">
                        <p className="job-titlev text-center">
                          {formatDate(course.add_date)}
                        </p>
                        <p className="ej-list-subv text-center">
                          No of seats: {course.seat_count}
                        </p>
                      </div>

                      <div className="col-md-3 col-12 d-flex justify-content-center align-items-center">
                        <a
                          href={course.collage_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#007bff",
                            textDecoration: "underline",
                          }}
                        >
                          Visit College Site
                        </a>
                      </div>

                      <div className="col-md-3 col-12 d-flex justify-content-center align-items-center">
                        <button
                          onClick={() => handleApplyClick(course.id)}
                          className="btnv btn-applyv"
                        >
                          Apply
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              style={{
                justifyContent: "center",
                display: "flex",
                marginTop: "50px",
              }}
            >
              <button
                style={{
                  padding: "10px 20px",
                  background: "#e38508",
                  borderRadius: "10px",
                }}
              >
                <a style={{ color: "#fff" }} href="/StudyCourse">
                  View More
                </a>
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                marginTop: "50px",
              }}
            >
              <button
                style={{
                  padding: "10px 20px",
                  background: "#e38508",
                  borderRadius: "10px",
                }}
              >
                <a style={{ color: "#fff" }} href="/StudyCourse">
                  View More
                </a>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* ---------- Popup Form Modal ---------- */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "10px",
              width: "100%",
              maxWidth: "500px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h3 style={{ margin: 0 }}>Apply Now</h3>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "#999",
                }}
                title="Close"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={applyData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  marginBottom: "15px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />

              <input
                type="text"
                name="number"
                placeholder="Number"
                value={applyData.number}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  marginBottom: "15px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={applyData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  marginBottom: "15px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />

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
    </>
  );
};

export default Vacancies;
