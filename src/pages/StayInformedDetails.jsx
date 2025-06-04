import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import axios from "axios";
import { useLocation } from "react-router-dom";
import moment from "moment"; // npm install moment

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
 
export default function StayInformedDetails() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // You need to provide the blog_id here (hardcoded or from props)
    const payload = {
      blog_id: id,  // Example blog id, replace accordingly
      name: formData.name,
      email: formData.email,
      description: formData.description,
    };

    try {
      const res = await fetch("http://127.0.0.1:8000/submit_blog_comment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("Error: " + JSON.stringify(errorData));
        return;
      }

      const data = await res.json();
      alert(data.success);

      // Reset form
      setFormData({ name: "", email: "", description: "" });

    } catch (err) {
      alert("An error occurred: " + err.message);
    }
  };

  const [blogData, setBlogData] = useState([]); // ✅ Declare at top level

  useEffect(() => {
    fetch("http://localhost:8000/get_blog_data/")
      .then((res) => res.json())
      .then((data) => setBlogData(data))
      .catch((error) => console.error("Error fetching blog data:", error));
  }, []);

  // Fetch blog data from API
  const query = useQuery();
  const id = query.get("id");

  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/get_blog_detail/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setCourse(data);
        })
        .catch((err) => {
          console.error("Error fetching course:", err);
        });
    }
  }, [id]);

  const getDriveImageUrl = (id) =>
    `https://drive.google.com/thumbnail?id=${id}`;

  
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8000/get_blog_comments/${id}/`)
        .then((response) => {
          setComments(response.data);
        })
        .catch((error) => {
          console.error("Error fetching blog comments:", error);
        });
    }
  }, [id]);

       // data-background img start
          const [background, setBackground] = useState("");
        
          useEffect(() => {
            const backgroundUrl ="/assets/pic/breadcrumb-bg.jpg";
            setBackground(backgroundUrl);
          }, []);
          // data-background img end
           // data-background img start
           const [background1, setBackground1] = useState("");
        
           useEffect(() => {
             const backgroundUrl1 = "assets/img/bg/b_bg.jpg";
             setBackground1(backgroundUrl1);
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
            <h2 className="breadcrumb__title" style={{ color: '#fff' }}>Blog Details</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>

              <li className="breadcrumb-item">Blog Details</li>
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

      {/* <!-- blog start --> */}


      <section className="blog pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-post-wrapper">

                <article className="post-details">
                  <div className="post-thumb">
                    {/* heading 1 */}
                    {course?.heading && <h2>{course.heading}</h2>}

                    {/* image_id first */}
                    {course?.image_id && (
                      <img width={"100%"}
                        src={getDriveImageUrl(course.image_id)}
                        alt="blog"
                        className="img-fluid"
                      />
                    )}
                  </div>

                  <ul className="post-meta ul_li">
                    <li>
                      <span>
                        <i className="far fa-user"></i>
                        <span className="author vcard">Admin</span>
                      </span>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="far fa-comments"></i> Comments (3)
                      </a>
                    </li>
                    <li>
                      <span className="posted-on">
                        <i className="far fa-calendar-check"></i>{" "}
                        <a href="#!">
                          {course?.created_at &&
                            moment(course.created_at).format("MMMM D, YYYY")}
                        </a>
                      </span>
                    </li>
                  </ul>


                  {/* title 1 */}
                  {course?.title && <h3>{course.title}</h3>}

                  {/* description 1 */}
                  {course?.description && (
                    <div
                      dangerouslySetInnerHTML={{ __html: course.description }}
                    />
                  )}

                  {/* do not change start */}
                  <blockquote>
                    <p>
                      "Creativity is allowing yourself to make mistakes. You only
                      have to do a few things right in your life so long as you
                      don’t do too many things."
                    </p>
                    <span>Cameron Williamson</span>
                    <div className="quote">
                      <img src="assets/img/icon/quote.png" alt="" />
                    </div>
                  </blockquote>
                  {/* do not change end */}

                  {/* image_id_2 if any */}
                  {course?.image_id_2 && (
                    <img width={"100%"}
                      src={getDriveImageUrl(course.image_id_2)}
                      alt="blog section"
                      className="img-fluid my-4"
                    />
                  )}

                  {/* title2 if any */}
                  {course?.title2 && <h3>{course.title2}</h3>}

                  {/* description2 if any */}
                  {course?.description2 && (
                    <div
                      dangerouslySetInnerHTML={{ __html: course.description2 }}
                    />
                  )}

                  {/* do not change start */}
                  <div className="row align-items-center mt-none-20 mb-30">
                    <div className="col-lg-6 col-md-6 mt-30">
                      <img src="/assets/pic/bd2.png" alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 mt-30">
                      <ul className="post-info-list list-unstyled">
                        <li>
                          <img
                            src="assets/img/icon/arrow_right2.svg"
                            alt=""
                          />
                          Elevating Your Visa Application
                        </li>
                        <li>
                          <img
                            src="assets/img/icon/arrow_right2.svg"
                            alt=""
                          />
                          Navigating Complexity
                        </li>
                        <li>
                          <img
                            src="assets/img/icon/arrow_right2.svg"
                            alt=""
                          />
                          With Confidence
                        </li>
                        <li>
                          <img
                            src="assets/img/icon/arrow_right2.svg"
                            alt=""
                          />
                          The Power of Assistance
                        </li>
                        <li>
                          <img
                            src="assets/img/icon/arrow_right2.svg"
                            alt=""
                          />
                          A Multifaceted Approach
                        </li>
                        <li>
                          <img
                            src="assets/img/icon/arrow_right2.svg"
                            alt=""
                          />
                          Achieving Success
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* do not change end */}

                  {/* image_id_3 if any */}
                  {course?.image_id_3 && (
                    <img width={"100%"}
                      src={getDriveImageUrl(course.image_id_3)}
                      alt="blog section"
                      className="img-fluid my-4"
                    />
                  )}

                  {/* title3 if any */}
                  {course?.title3 && <h3>{course.title3}</h3>}

                  {/* description3 if any */}
                  {course?.description3 && (
                    <div
                      dangerouslySetInnerHTML={{ __html: course.description3 }}
                    />
                  )}
                </article>



                <div className="post-footer mt-10 mb-40 ul_li_between">
                  <div className="post-tags ul_li mt-20">
                    <h5 className="tag-title">Tags:</h5>
                    <span className="tags-links">
                      <a href="#!" rel="tag">Family</a>
                      <a href="#!" rel="tag">Citizenship</a>
                      <a href="#!" rel="tag">Immigration</a>
                    </span>
                  </div>
                  <div className="social-share ul_li mt-20">
                    <h5 className="title">Share:</h5>
                    <ul className="post-share ul_li">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#!">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#!">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#!">
                          <i className="fab fa-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="row">
                  <div className="col-xl-12">
    <div className="post-comments">
      <h2 className="title mb-25">{comments.length} Comment{comments.length !== 1 ? "s" : ""}</h2>
      <div className="latest__comments">
        <ul className="list-unstyled mb-0">
          {comments.map((comment, index) => (
            <li key={comment.id} className={index === 1 ? "children" : ""}>
              <div className="comments-box">
                <div className="comments-avatar">
                  <img src="/assets/pic/bd3.png" alt="" />
                </div>
                <div className="comments-text">
                  <div className="avatar-name">
                    <h5>{comment.name}</h5>
                    <span>{new Date(comment.created_at).toLocaleDateString()}</span>
                    <a className="reply" href="#0">Reply</a>
                  </div>
                  <p>{comment.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>


                    <div className="comments-form">
                      <div className="comment-heading">
                        <h2 className="title">Post Comments</h2>
                        <p>Your email address will not be published. Required fields are marked * </p>
                      </div>
    <form className="xb-item--form contact-from" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <div className="xb-item--field">
            <input
            hidden
              type="text"
              name="blog_id"
              placeholder="Shivangini Patel"
              value={id}
              onChange={handleChange}
              required
            />
            <span><img src="assets/img/icon/c_user.svg" alt="" /></span>
            <input
              type="text"
              name="name"
              placeholder="Shivangini Patel"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="xb-item--field">
            <span><img src="assets/img/icon/c_mail.svg" alt="" /></span>
            <input
              type="email"
              name="email"
              placeholder="goforen@services.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="xb-item--field">
            <span><img src="assets/img/icon/c_message.svg" alt="" /></span>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              placeholder="Write Your Message..."
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <div className="col-12">
          <button className="thm-btn" type="submit">Post comment</button>
        </div>
      </div>
    </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <div className="widget">
                  <h3 className="widget-title">Search</h3>
                  <form className="widget__search" action="#">
                    <input type="text" placeholder="Search your keyword" />
                    <button><img src="assets/img/icon/search.svg" alt="" /></button>
                  </form>
                </div>
                <div className="widget">
                  <h3 className="widget-title">Related Posts</h3>
                  <div className="widget__post">
                    {blogData.slice(0, 3).map((post) => (
                      <div className="widget__post-item ul_li" key={post.id}>
                        <div className="post-thumb">
                          <a href={`/StayInformedDetails?id=${post.id}`}>
                            <img src={`https://drive.google.com/thumbnail?id=${post.image_id}`} alt="" />
                          </a>
                        </div>
                        <div className="post-content">
                          <span className="post-date">{new Date(post.created_at).toLocaleDateString()}</span>
                          <h4 className="post-title border-effect-2">
                            <a href={`/StayInformedDetails?id=${post.id}`}>{post.heading.slice(0, 40)}...</a>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="widget">
                  <h3 className="widget-title">Categories</h3>
                  <ul className="widget__category list-unstyled">
                    <li><a href="#!"><i className="far fa-arrow-up"></i> Business visa</a></li>
                    <li><a href="#!"><i className="far fa-arrow-up"></i> Tourist visa</a></li>
                    <li><a href="#!"><i className="far fa-arrow-up"></i> Permanent Residency</a></li>
                    <li><a href="#!"><i className="far fa-arrow-up"></i> Visa documents</a></li>
                    <li><a href="#!"><i className="far fa-arrow-up"></i> Visa quotas</a></li>
                    <li><a href="#!"><i className="far fa-arrow-up"></i> Work visas</a></li>
                  </ul>
                </div>
                <div className="widget">
                  <h3 className="widget-title">Tags</h3>
                  <div className="tagcloud">
                    <a href="#!">Citizenship</a>
                    <a href="#!">Family</a>
                    <a href="#!">Immigration</a>
                    <a href="#!">Traveling</a>
                    <a href="#!">Government</a>
                    <a href="#!">Visa</a>
                    <a href="#!">Visa Process</a>
                    <a href="#!">Abroad</a>
                    <a href="#!">Visa</a>
                  </div>
                </div>
                <div className="widget widget-banner text-center bg_img" style={{ backgroundImage: `url(${background1})` }}>
                  <img className="mb-40" src="assets/img/icon/b_icon.png" alt="" />
                  <h4>Assured Approval – <br /> Guaranteed</h4>
                  <a className="thm-btn" href="#!">Get in Touch</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* <!-- blog end --> */}
      {/* working time  */}
      <div style={{ background: '#edf3f5', padding: '30px 0px' }}>
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
  )
}
