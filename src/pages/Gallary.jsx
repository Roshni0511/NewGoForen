import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'

const Gallery = () => {
  const [background, setBackground] = useState("")
  const [background12, setBackground12] = useState("")
  
    useEffect(() => {
      setBackground("/assets/pic/breadcrumb-bg.jpg")
      setBackground12("assets/img/bg/blog_bg.png")
    }, [])

  const [galleryData, setGalleryData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/get_gallery_data/')
      .then((res) => {
        setGalleryData(res.data)
      })
      .catch((err) => {
        console.error('Failed to fetch gallery data:', err)
      })
  }, [])

  // Categorize the images
  const categorizedImages = {
    coaching: [],
    successfull: [],
    advertisment: [],
    offer: [],
  }

  galleryData.forEach(item => {
    if (categorizedImages[item.category]) {
      categorizedImages[item.category].push(item)
    }
  })

  // Get viewable image URL from Google Drive file ID
  const getImageSrc = (image_id) => `https://drive.google.com/thumbnail?id=${image_id}`

  const renderImages = (category) => (
    <div className="xb-countryes row">
      {categorizedImages[category]?.map((item, index) => (
        <div key={index} className="xb-itemes--itemes col-lg-3 col-md-4 col-12">
          <a href={getImageSrc(item.image_id)} data-fancybox={`gallery-${category}`} className="xb-item--inner">
            <div className="image" style={{ backgroundImage: `url(${getImageSrc(item.image_id)})` }}>
              <div className="overlay">
                <em className="mdi mdi-magnify-plus"></em>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  )

  return (
    <>
      <div>
        <Navbar />
        {/* Breadcrumb Section */}
        <section className="breadcrumb pos-rel bg_img"
          style={{
            backgroundImage: `url(${background})`,
            minHeight: '400px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1
          }}></div>

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="breadcrumb__content">
              <h2 className="breadcrumb__title" style={{ color: '#fff' }}>Gallery</h2>
              <ul className="breadcrumb__list clearfix">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item">Gallery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Gallery Tabs Section */}
        <section className="country pt-120 pb-130">
          <div className="container">
            <div className="sec-title text-center mb-30">
              <h2 className="mb-20 wow skewIn">Our Gallery</h2>
            </div>

            <ul className="xb-country-nav nav nav-tabs justify-content-between mb-65 w-100" id="myTab" role="tablist">
              <li className="nav-item"><button className="nav-link active" data-bs-toggle="tab" data-bs-target="#coaching">Coaching</button></li>
              <li className="nav-item"><button className="nav-link" data-bs-toggle="tab" data-bs-target="#successfull">Successful</button></li>
              <li className="nav-item"><button className="nav-link" data-bs-toggle="tab" data-bs-target="#advertisment">Advertisement</button></li>
              <li className="nav-item"><button className="nav-link" data-bs-toggle="tab" data-bs-target="#offer">Offer</button></li>
            </ul>

            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="coaching" role="tabpanel">
                {renderImages("coaching")}
              </div>
              <div className="tab-pane fade" id="successfull" role="tabpanel">
                {renderImages("successfull")}
              </div>
              <div className="tab-pane fade" id="advertisment" role="tabpanel">
                {renderImages("advertisment")}
              </div>
              <div className="tab-pane fade" id="offer" role="tabpanel">
                {renderImages("offer")}
              </div>
            </div>
          </div>
        </section>

        {/* Working Time */}
        <div style={{ background: '#edf3f5', padding: '30px 0px' }}>
          <div className="container">
            <div className="xb-newsletter1 pos-rel" style={{
              backgroundImage: `url(${background12})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              margin: "30px 0px"
            }}>
              <div className="row">
                <div className="col-12">
                  <div className="sec-title mb-40 text-center">
                    <h2 className="mb-20 wow skewIn">Our Working Time</h2>
                    <p>We are available throughout the week to help you with your visa and training needs.</p>
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

        <Footer />
      </div>
    </>
  )
}

export default Gallery
