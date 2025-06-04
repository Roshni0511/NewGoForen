import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Videos = () => {
  const [background, setBackground] = useState('');
  const [background1, setBackground1] = useState('');
  const [background12, setBackground12] = useState('');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setBackground('/assets/pic/breadcrumb-bg.jpg');
    setBackground1('https://html.xpressbuddy.com/e.visa/assets/img/bg/b_bg.jpg');
    setBackground12('assets/img/bg/blog_bg.png');
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/get_video_data/')
      .then(res => res.json())
      .then(data => setVideos(data))
      .catch(err => console.error("Error fetching video data:", err));
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
          backgroundPosition: 'center',
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="breadcrumb__content">
            <h2 className="breadcrumb__title" style={{ color: '#fff' }}>Videos Gallery</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">Videos Gallery</li>
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

      {/* Videos */}
      <div>
        <div className="container">
          <div style={{ margin: '50px 0px 10px 0px', justifyContent: 'center', display: 'flex', fontSize: '50px' }}>
            <h1>Our Videos</h1>
          </div>

          <ul id="youtube-videogallery" className="youtube-videogallery-container youtube-videogallery-allowtitle">
            {videos.length > 0 ? (
              videos.map(video => (
                <li className="youtube-videogallery-item" key={video.id}>
                  <a
                    title={video.video_name}
                    data-youtube-id={video.video_embed_url.split('/embed/')[1]}
                    href={video.row_video_url}
                    className="youtube-videogallery-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="youtube-videogallery-img"
                      src={`https://img.youtube.com/vi/${video.video_embed_url.split('/embed/')[1]}/0.jpg`}
                      alt={video.video_name}
                    />
                    <span className="youtube-videogallery-title">{video.video_name}</span>
                  </a>
                </li>
              ))
            ) : (
              <p style={{ textAlign: 'center', width: '100%' }}>No videos available.</p>
            )}
          </ul>
        </div>
      </div>

      {/* Working time */}
      <div style={{ background: '#edf3f5', padding: '30px 0px' }}>
        <div className="container">
          <div
            className="xb-newsletter1 pos-rel "
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
                <div className="sec-title mb-40 text-center">
                  <h2 className="mb-20 wow skewIn">Our Working Time</h2>
                  <p style={{ textAlign: "center" }}>
                    We are available throughout the week to help you with your visa and training needs.
                  </p>
                </div>

                <div className="row justify-content-center text-center">
                  <div className="col-lg-3 mt-30 col-md-6" style={{
                    boxShadow: "0px 14px 19px rgb(221 229 236)",
                    padding: "20px",
                    margin: "5px"
                  }}>
                    <h5 className="mb-2">Monday - Saturday :</h5>
                    <p>10.00 a.m. to 6.30 p.m.</p>
                  </div>
                  <div className="col-lg-3 mt-30 col-md-6" style={{
                    boxShadow: "0px 14px 19px rgb(221 229 236)",
                    padding: "20px",
                    margin: "5px"
                  }}>
                    <h5 className="mb-2">Sunday :</h5>
                    <p>10.00 a.m. to 12.30 p.m.</p>
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

export default Videos;
