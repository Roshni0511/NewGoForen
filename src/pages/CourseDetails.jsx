import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

// // Custom hook to get query params
// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


const CourseDetails = () => {


  const [Courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/get_course_data/')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((err) => console.error("Failed to fetch Courses:", err));
  }, []);

  const query = useQuery();
  const id = query.get("id");

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/get_course_detail/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setCourse(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching course:", err);
          setLoading(false);
        });
    }
  }, [id]);

  const background = "/assets/pic/breadcrumb-bg.jpg";
  const background1 = "https://html.xpressbuddy.com/e.visa/assets/img/bg/b_bg.jpg";
  const background12 = "assets/img/bg/blog_bg.png";

  if (loading) return <div>Loading...</div>;
  if (!course || course.error) return <div>Course not found</div>;

  const { course_name, description, image_id } = course;

  const googleDrivePreviewUrl = image_id
    ? `https://drive.google.com/thumbnail?id=${image_id}`
    : "/assets/pic/mainielts.jpg"; // fallback

  return (
    <>
      <Navbar />
      <section
        className="breadcrumb pos-rel bg_img"
        style={{
          backgroundImage: `url(${background})`,
          minHeight: "400px",
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="breadcrumb__content">
            <h2 className="breadcrumb__title" style={{ color: "#fff" }}>
              {course_name}
            </h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">{course_name}</li>
            </ul>
          </div>
        </div>
        <div className="breadcrumb__circle">
          <span className="big" data-parallax='{"y" : 100, "scale" : 0.1}'></span>
          <span className="small" data-parallax='{"y" : 100, "scale" : 0.1}'></span>
        </div>
        <div className="breadcrumb__shape">
          <div className="shape shape--1">
            <div className="shape-inner" data-parallax='{"x":-50,"y":80}'>
              <img src="assets/img/shape/br_shape1.png" />
            </div>
          </div>
          <div className="shape shape--2">
            <div className="shape-inner" data-parallax='{"x":50,"y":-90}'>
              <img src="assets/img/shape/br_shape2.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="coaching-single pt-120 pb-130">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sidebar-widget">
                <div className="widget">
                  <ul className="widget-category list-unstyled">
                    {Courses.map((item) => (
<li key={item.id}><a href={`/Course-details?id=${item.id}`}>{item.course_name}<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>

                            ))}
{/* 
                    <li><a className="active" href="/IELTS">IELTS<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                    <li><a href="/TOEFLIBT">TOEFL IBT<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                    <li><a href="/GRE">GRE<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                    <li><a href="/PTE">PTE<span><img src="assets/img/icon/arrow_up.svg" /></span></a></li>
                    <li><a href="/SAT">SAT <span><img src="assets/img/icon/arrow_up.svg" /></span></a></li> */}
                  </ul>
                </div>

                <div className="widget widget-banner text-center bg_img" style={{ backgroundImage: `url(${background1})` }}>
                  <img className="mb-40" src="assets/img/icon/b_icon.png" />
                  <h4>Assured Approval – <br /> Guaranteed</h4>
                  <a className="thm-btn" href="">Get in Touch</a>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="col-lg-8">
              <div className="single-content">
                <h3>{course_name}</h3>
                <div dangerouslySetInnerHTML={{ __html: description }} />
                <div className="single-img mt-35 mb-70">
                  <img src={googleDrivePreviewUrl} alt={course_name} />
                </div>

                <h3>Why choose us?</h3>
                <div className="single-content__feature ul_li">
                  {[
                    { icon: "profile-2user.svg", title: "Certified Tutors" },
                    { icon: "book.svg", title: "Doubt Solving Sessions", color: "color-2" },
                    { icon: "teacher.svg", title: "Flexible & Regular Batches", color: "color-3" },
                    { icon: "briefcase.svg", title: "Free study materials", color: "color-4" },
                  ].map((item, idx) => (
                    <div className="single-content-feature" key={idx}>
                      <div className={`xb-item--inner ${item.color || ""} ul_li`}>
                        <div className="xb-item--icon">
                          <img src={`assets/img/icon/${item.icon}`} alt="" />
                        </div>
                        <h3 className="xb-item--title">{item.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>

                <h3>Our benefits</h3>
                <p>
                  Choosing the right visa agency can make a world of difference in your journey toward
                  international exploration, growth, and success. At goforen we take Here are the distinctive
                  benefits of partnering with us:
                </p>

                <div className="row align-items-center mt-10">
                  <div className="col-lg-6 mt-30">
                    <img src="/assets/pic/benefit (1).jpeg" alt="" />
                  </div>
                  <div className="col-lg-6 mt-30">
                    <ul className="single-content-list list-unstyled pl-25">
                      <li><img src="assets/img/icon/star.svg" alt="" />Top-tier Interactive Online Readiness</li>
                      <li><img src="assets/img/icon/star.svg" alt="" />Customized Study Plans</li>
                      <li><img src="assets/img/icon/star.svg" alt="" />Skill Building Sessions</li>
                      <li><img src="assets/img/icon/star.svg" alt="" />Full Length Mock Test</li>
                      <li><img src="assets/img/icon/star.svg" alt="" />Test Evaluations By Experts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Time */}
      <div style={{ background: "#edf3f5", padding: "30px 0px" }}>
        <div className="container">
          <div
            className="xb-newsletter1 pos-rel"
            style={{
              backgroundImage: `url(${background12})`,
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
                      We are available throughout the week to help you with your visa and training needs.
                    </p>
                  </div>

                  <div className="row justify-content-center text-center">
                    <div className="col-lg-3 mt-30 col-md-6" style={{ boxShadow: "0px 14px 19px rgb(221 229 236)", padding: "20px", margin: "5px" }}>
                      <h5 className="mb-2">Monday - Saturday :</h5>
                      <p>10.00 a.m. to 6.30 p.m.</p>
                    </div>
                    <div className="col-lg-3 mt-30 col-md-6" style={{ boxShadow: "0px 14px 19px rgb(221 229 236)", padding: "20px", margin: "5px" }}>
                      <h5 className="mb-2">Sunday :</h5>
                      <p>10.00 a.m. to 12.30 p.m.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CourseDetails;
