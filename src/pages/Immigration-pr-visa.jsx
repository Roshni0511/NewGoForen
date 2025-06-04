import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';

import {
  FaCalendarAlt,
  FaTags,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
} from 'react-icons/fa';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Immigrationprvisa() {

  
  
  // data-background img start
  const [background, setBackground] = useState("");
  
  useEffect(() => {
    const backgroundUrl = "/assets/pic/breadcrumb-bg.jpg";
    setBackground(backgroundUrl);
  }, []);
  
  const [background12, setBackground12] = useState("");
  
  useEffect(() => {
    const backgroundUrl12 = "assets/img/bg/blog_bg.png";
    setBackground12(backgroundUrl12);
  }, []);
  // data-background img end
  
  const query = useQuery();
  const id = query.get('id');

  const [visa, setVisa] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/get_visa_service_detail/${id}`)
      .then(res => res.json())
      .then(data => {
        setVisa(data);
        setLoading(false);
        })
        .catch(err => {
          console.error("Error fetching visa service:", err);
          setLoading(false);
        });
      } else {
        setLoading(false); // If no ID, stop loading
    }
  }, [id]);
  
  // // ✅ Conditional logic is inside render
  if (loading) return <div>Loading...</div>;
  if (!visa || visa.error) return <div>Visa service not found</div>;
  
  const blogContent = visa?.description ? visa.description.replace(/<[^>]+>/g, '') : '';
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section
        className="breadcrumb bg_img"
        style={{
          backgroundImage: `url(${background})`,
          minHeight: '400px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="breadcrumb__content text-white py-5">
            <h2>{visa.visa_type}</h2>
            <ul className="breadcrumb__list d-flex flex-wrap gap-2 mt-3">
              <li><a href="/" className="text-white text-decoration-underline">Home</a></li>
              <li>Visa Details</li>
              <li>{visa.visa_type}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-5" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="container">
          <div className="row justify-content-center">

            {/* Visa Content */}
            <div className="col-lg-8 col-md-12 mb-4">
              <div className="p-4 bg-white shadow rounded">
                <h3 className="text-success mb-3">{visa.visa_type}</h3>
                <div className="d-flex flex-wrap text-muted gap-3 mb-3">
                  <span className="d-flex align-items-center gap-1 text-warning">
                    <FaCalendarAlt />
                    {new Date(visa.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="d-flex align-items-center gap-1 text-secondary">
                    <FaTags /> Immigration - Visa Service
                  </span>
                </div>

                {/* Share Buttons */}
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <button className="btn btn-sm btn-primary"><FaFacebookF /> Facebook</button>
                  <button className="btn btn-sm btn-info"><FaLinkedinIn /> LinkedIn</button>
                  <button className="btn btn-sm btn-dark">X Post</button>
                  <button className="btn btn-sm btn-success"><FaWhatsapp /> WhatsApp</button>
                </div>

                {/* Visa Image */}
                {visa.image_id && (
                  <div className="mb-3">
                    <img
                      src={`https://drive.google.com/thumbnail?id=${visa.image_id}`}
                      alt={visa.visa_type}
                      className="img-fluid rounded"
                    />
                  </div>
                )}

                {/* Description */}
                <div
                  style={{ lineHeight: '1.7' }}
                  dangerouslySetInnerHTML={{ __html: visa.description }}
                />

                <p className="fw-bold mt-4">
                  For better understanding, contact <span className="text-primary">GOFOREN</span> at 7600909090.
                </p>

                <p>
                  Click for the{" "}
                  <a
                    href={`https://translate.google.com/?sl=en&tl=gu&text=${encodeURIComponent(blogContent)}&op=translate`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-underline text-info"
                  >
                    Gujarati translate
                  </a>
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="bg-white p-4 rounded shadow">
                <h5 className="border-bottom pb-2 mb-3 text-success">Latest News</h5>
                <ul className="list-unstyled">
                  <li className="mb-2 border-bottom pb-2">USCIS Delivers on National Security…</li>
                  <li className="mb-2 border-bottom pb-2">Schengen visa fees hiked</li>
                  <li className="mb-2">Express Entry: IRCC aims to resume FS…</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Working Time Section */}
      <div style={{ background: '#edf3f5', padding: '40px 0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-3">Our Working Time</h2>
            <p className="text-muted">We are available throughout the week to help you with your visa and training needs.</p>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-3 col-md-6 mb-3 px-3">
              <div className="bg-white shadow rounded p-4 h-100">
                <h5>Monday - Saturday</h5>
                <p className="text-muted">10.00 a.m. to 6.30 p.m.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3 px-3">
              <div className="bg-white shadow rounded p-4 h-100">
                <h5>Sunday</h5>
                <p className="text-muted">10.00 a.m. to 12.30 p.m.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
