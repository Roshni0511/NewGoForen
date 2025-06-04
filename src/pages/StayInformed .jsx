import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import FooterTop from "../component/FooterTop";

export default function StayInformed  () {
     // data-background img start
      const [background, setBackground] = useState("");
    
      useEffect(() => {
        const backgroundUrl = "/assets/pic/breadcrumb-bg.jpg";
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
          const [blogData, setBlogData] = useState([]);
  
  useEffect(() => {
    // Fetch blog data from API
    fetch("http://localhost:8000/get_blog_data/")
      .then((res) => res.json())
      .then((data) => setBlogData(data))
      .catch((error) => console.error("Error fetching blog data:", error));
  }, []);

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
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>Stay Informed</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              
              <li className="breadcrumb-item">Stay Informed</li>
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
      <section className="blog pt-120">
        <div className="container">
          <div className="row">
            {/* Blog Content */}
            <div className="col-lg-8">
              <div className="blog-post-wrapper">
                {blogData.map((blog) => (
                  <article className="single-post-item" key={blog.id} style={{border :"1px solid gray", borderRadius:'16px', padding:"1.5rem"}}> 
                    <div className="post-thumbnail-wrapper"  style={{width:"100%", height:"20rem", overflow:"hidden"}}>
                      <a href={`/StayInformedDetails/${blog.id}`}>
                        <img style={{width:"100%"}}
                          src={`https://drive.google.com/thumbnail?id=${blog.image_id}`}
                          alt={blog.heading}
                        />
                      </a>
                    </div>
                    <div className="post-content-wrapper">
                      <ul className="post-meta ul_li">
                        <li><span><i className="far fa-user"></i> <span className="author vcard">Admin</span></span></li>
                        <li><a href="#!"><i className="far fa-comments"></i> Comments (0)</a></li>
                        <li><span className="posted-on"><i className="far fa-calendar-check"></i> {new Date(blog.created_at).toLocaleDateString()}</span></li>
                      </ul>
                      <h3 className="post-title border_effect">
                        <a href={`/StayInformedDetails/${blog.id}`}>{blog.heading}</a>
                      </h3>
                      <div className="post-excerpt">
<div
  dangerouslySetInnerHTML={{
    __html: blog.description
      ? blog.description.slice(0, 150) + '...'
      : ''
  }}
/>                        {/* <p>{__HTML: blog.description?.slice(0, 150)}...</p> */}
                      </div>
                      <div className="post-read-more">
                        <a className="thm-btn" href={`/StayInformedDetails?id=${blog.id}`}>Read More</a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <div className="widget">
                  <h3 className="widget-title">Search</h3>
                  <form className="widget__search" action="#">
                    <input type="text" placeholder="Search your keyword" />
                    <button><img src="assets/img/icon/search.svg" alt="" /></button>
                  </form>
                </div>

                {/* Related Posts */} 
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

                {/* Static Sidebar Widgets */}
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
                  </div>
                </div>

                <div
                  className="widget widget-banner text-center bg_img"
                  style={{ backgroundImage: `url(${background1})` }}
                >
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

        <FooterTop />
          {/* working time  */}
  <div style={{background:'#edf3f5',padding:'30px 0px'}}>
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
