import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const SuccessStory = () => {
  const [stories, setStories] = useState([]);

  // Background image states
  const [background12, setBackground12] = useState("");
  const [background, setBackground] = useState("");
  const [background1, setBackground1] = useState("");

  useEffect(() => {
    setBackground12("assets/img/bg/blog_bg.png");
    setBackground("/assets/pic/breadcrumb-bg.jpg");
    setBackground1("https://html.xpressbuddy.com/e.visa/assets/img/bg/b_bg.jpg");
  }, []);

  // Fetch stories on load
  useEffect(() => {
    fetch("http://localhost:8000/get_success_stories/")
      .then(res => res.json())
      .then(data => setStories(data))
      .catch(err => console.error("Error fetching success stories:", err));
  }, []);

  return (
    <>
      <Navbar />
      {/* Breadcrumb */}
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
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="breadcrumb__content">
            <h2 className="breadcrumb__title" style={{ color: '#fff' }}>Success Stories</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Success Stories</li>
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

      {/* Testimonial Section */}
      <section className="testimonial pt-180 pb-130">
        <div className="container">
          <div className="xb-testimonial__masonry">
            <div className="row grid mt-none-100">
              {stories.map((story) => (
                <div className="col-lg-6 grid-item mt-100" key={story.id}>
                  <div className="xb-testimonial3" style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)', borderRadius: '12px' }}>
                    <div className="xb-item--inner">
                      <div className="xb-item--author-info ul_li">
                        <div className="xb-item--avatar">
                          <img
                            src={`https://drive.google.com/thumbnail?id=${story.image_id}`}
                            alt={story.heading}
                          />
                        </div>
                        <div className="xb-item--author">
                          <h3 className="xb-item--name">{story.heading}</h3>
                          <span className="xb-item--desig">{story.post}</span>
                        </div>
                      </div>
                      <div className="xb-item--content">
                        <div dangerouslySetInnerHTML={{ __html: story.description }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {stories.length === 0 && (
                <div className="col-12 text-center mt-5">
                  <p>Loading success stories...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Working time */}
      <div style={{ background: '#edf3f5', padding: '30px 0px' }}>
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
                      We are available throughout the week to help you with your
                      visa and training needs.
                    </p>
                  </div>

                  <div className="row justify-content-center text-center">
                    <div
                      className="col-lg-3 mt-30 col-md-6"
                      style={{
                        boxShadow: "0px 14px 19px rgb(221 229 236)",
                        padding: "20px",
                        margin: "5px",
                      }}
                    >
                      <h5 className="mb-2">Monday - Saturday :</h5>
                      <p style={{ textAlign: "center" }}>
                        10.00 a.m. to 6.30 p.m.
                      </p>
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

      <Footer />
    </>
  );
};

export default SuccessStory;
