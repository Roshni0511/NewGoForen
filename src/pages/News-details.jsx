import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaCalendarAlt, FaTags, FaFacebookF, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

// Helper to read query string
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Newsdetails() {
  const query = useQuery();
  const id = query.get('id');

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  const [background, setBackground] = useState("/assets/pic/breadcrumb-bg.jpg");
  const [background12, setBackground12] = useState("assets/img/bg/blog_bg.png");

  useEffect(() => {
    if (id) {
      fetch(`https://goforen.com/go_foren/get_news_detail/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setNews(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching news:", err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!news) return <div>News not found</div>;

  const blogContent = news.description.replace(/<[^>]+>/g, ''); // remove HTML tags for translate

  return (
    <div>
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
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="breadcrumb__content">
            <h2 className="breadcrumb__title" style={{ color: '#fff' }}>{news.heading}</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item">News Details</li>
              <li className="breadcrumb-item">{news.heading}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* News Content */}
      <div style={{ padding: '100px 0px' }}>
        <div className="container" style={{ background: "#f8f8f8" }}>
          <div className="col-12">
            <div className="row" style={{ justifyContent: 'center' }}>
              <div className="col-lg-7 col-md-12" style={{ padding: '50px 15px' }}>
                <div style={{
                  backgroundColor: '#fff',
                  padding: '25px',
                  borderRadius: '5px',
                  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                }}> 
                  <h4 style={{ color: '#e38508', marginBottom: '10px' }}>{news.heading}</h4>
                  <div style={{
                    display: 'flex', flexWrap: 'wrap', alignItems: 'center',
                    gap: '15px', marginBottom: '10px'
                  }}>
                    <span style={{ color: '#f90', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <FaCalendarAlt /> {new Date(news.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    </span>
                    <span style={{ color: '#666', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <FaTags /> Immigration - PR Visa, Europe
                    </span>
                  </div>

                  <div className="d-flex mb-2" style={{
                    flexWrap: 'wrap', gap: '8px',
                    justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start'
                  }}>
                    <button className="btn btn-sm btn-primary"><FaFacebookF /> Share</button>
                    <button className="btn btn-sm btn-info"><FaLinkedinIn /> Share</button>
                    <button className="btn btn-sm btn-dark">X Post</button>
                    <button className="btn btn-sm btn-success"><FaWhatsapp /> Whatsapp</button>
                  </div>

                  {/* News Image */}
                  {news.image_id && (
                    <div style={{ margin: '15px 0' }}>
                     <img style={{ width: '100%' }}
                src={`https://drive.google.com/thumbnail?id=${news.image_id}`}
                alt={news.heading}
              />
                    </div>
                  )}

                  {/* Description */}
                  <div
                    style={{ lineHeight: '1.7' }}
                    dangerouslySetInnerHTML={{ __html: news.description }}
                  />

                  <p style={{ fontWeight: 'bold' }}>
                    For better understanding, contact <span style={{ color: '#0056b3' }}>GOFOREN</span> at 7600909090.
                  </p>

                  <p style={{ marginTop: '20px' }}>
                    Click for the{" "}
                    <a
                      href={`https://translate.google.com/?sl=en&tl=gu&text=${encodeURIComponent(blogContent)}&op=translate`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'blue' }}
                    >
                      Gujarati translate
                    </a>
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4 col-md-12" style={{ padding: '50px 15px' }}>
                <div style={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '5px',
                  boxShadow: '0 0 10px rgba(0,0,0,0.1)'
                }}>
                  <h5 style={{
                    fontWeight: 'bold', borderBottom: '2px solid #e38508',
                    display: 'inline-block', marginBottom: '15px'
                  }}>
                    Latest News
                  </h5>
                  <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
                    <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>USCIS Delivers on National Security…</li>
                    <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>Schengen visa fees hiked</li>
                    <li style={{ padding: '8px 0' }}>Express Entry: IRCC aims to resume FS…</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Working Time */}
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
                <div className="sec-title mb-40 text-center">
                  <h2 className="mb-20 wow skewIn">Our Working Time</h2>
                  <p>We are available throughout the week to help you with your visa and training needs.</p>
                </div>
                <div className="row justify-content-center text-center">
                  <div className="col-lg-3 mt-30 col-md-6" style={{
                    boxShadow: "0px 14px 19px rgb(221 229 236)",
                    padding: "20px", margin: "5px"
                  }}>
                    <h5 className="mb-2">Monday - Saturday :</h5>
                    <p>10.00 a.m. to 6.30 p.m.</p>
                  </div>
                  <div className="col-lg-3 mt-30 col-md-6" style={{
                    boxShadow: "0px 14px 19px rgb(221 229 236)",
                    padding: "20px", margin: "5px"
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
    </div>
  );
}
