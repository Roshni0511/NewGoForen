import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

export default function SuccessStories() {
  const [background1, setBackground1] = useState("");
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setBackground1("assets/img/bg/tm_bg.png");

    fetch("http://localhost:8000/get_success_stories/")
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.error("Error fetching stories:", err));
  }, []);

  const getDriveImageUrl = (id) =>
    `https://lh3.googleusercontent.com/d/${id}`;

  return (
    <div>
      <section
        className="testimonial bg_img pt-130 pb-130"
        style={{
          backgroundImage: `url(${background1})`,
          backgroundColor: '#edf3f57a',
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="sec-title margin-none-md mb-30-xs mb-125">
                <h2 className="mb-70 wow skewIn">
                  Success Stories
                </h2>
                <p>
                  Embark on a Global Exploration: <br /> Experience Joy in 190+ Countries <br /> and Across the World
                </p>
              </div>
              <div className="xb-testimonial__nav ul_li">
                <div className="tm-nav-item tm-button-prev"></div>
                <div className="tm-nav-item tm-button-next"></div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="xb-swiper-sliders" style={{ overflow: 'hidden' }}>
                <Swiper
                  spaceBetween={34}
                  slidesPerView={2}
                  loop={true}
                  loopAdditionalSlides={30}
                  navigation={{
                    nextEl: '.tm-button-next',
                    prevEl: '.tm-button-prev',
                  }}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                  speed={400}
                  breakpoints={{
                    1600: { slidesPerView: 2 },
                    1200: { slidesPerView: 2 },
                    992: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    576: { slidesPerView: 2 },
                    0: { slidesPerView: 1 },
                  }}
                  modules={[Navigation, Autoplay]}
                  className="xb-testimonial-slider"
                >
                  {stories.map((story) => (
                    <SwiperSlide key={story.id}>
                      <div className="xb-testimonial">
                        <div className="xb-item--inner text-center">
                          <div className="xb-item--img">
                            <img alt="" src="/assets/pic/logogo.png" style={{height:" 85px;"}}></img>
                            {/* <img src={getDriveImageUrl(story.image_id)} alt={story.heading} /> */}
                          </div>
<div
  className="xb-item--content"
  style={{ color: 'rgb(255, 255, 255)', textAlign:' center !important' }}
  dangerouslySetInnerHTML={{ __html: story.description }}
/>

                          <div className="xb-item--bottom">
                            <div className="xb-item--ratting">
                              {/* <img src="assets/img/icon/tr_rattig.png" alt="rating" /> */}
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#e38508"><path d="M12 .587l3.668 7.568L24 9.75l-6 5.852L19.336 24 12 19.896 4.664 24 6 15.602 0 9.75l8.332-1.595z"></path></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#e38508"><path d="M12 .587l3.668 7.568L24 9.75l-6 5.852L19.336 24 12 19.896 4.664 24 6 15.602 0 9.75l8.332-1.595z"></path></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#e38508"><path d="M12 .587l3.668 7.568L24 9.75l-6 5.852L19.336 24 12 19.896 4.664 24 6 15.602 0 9.75l8.332-1.595z"></path></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#e38508"><path d="M12 .587l3.668 7.568L24 9.75l-6 5.852L19.336 24 12 19.896 4.664 24 6 15.602 0 9.75l8.332-1.595z"></path></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#e38508"><path d="M12 .587l3.668 7.568L24 9.75l-6 5.852L19.336 24 12 19.896 4.664 24 6 15.602 0 9.75l8.332-1.595z"></path></svg>
                            </div>
                            <h3 className="xb-item--title"  style={{ color: 'rgb(255, 255, 255)' }}>
                              {story.heading}, <br /> {story.post}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
