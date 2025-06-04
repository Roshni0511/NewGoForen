import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Visacard from '../component/Visacard';
import SuccessStories from '../component/SuccessStories';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Carousel } from 'react-bootstrap';

export default function Home() {
  
  // data-background img start
  const [background, setBackground] = useState("");

  useEffect(() => {
    const backgroundUrl = "https://www.goforen.com/images/slider-4.jpg";
    setBackground(backgroundUrl);
  }, []);
  // data-background img end
  const scrollRef = useRef(null);
  const itemHeight = 70;
  const [index, setIndex] = useState(0);
  const items = [
    "Poland Introduced e-Konsulat for Work Visa Applications in India.",
    "Australian Universities Impose Restrictions on Students from Six Indian Regions.",
    "Stay and Work in Canada: Apply for a TFWP Work Permit After PGWP Expiry.",
    "Latvia to Enforce Stricter Entry Rules for Third-Country Nationals Without Local Visa or Permit.",
    "CRS Scores Drop Sharply After Removal of Arranged Employment Points.",
    "UAE Expands Visa on Arrival for Indian Nationals.",
    "EU Urges Fast-Track of ETIAS &amp; EES to Secure Schengen Borders.",
    "Latvia to Tighten Border Rules for Third-Country Nationals Without Latvian Visa or Residence Permit.",
  ];
  const visa = [
    "Temporary Residents Can Now Apply for the Canada Child Benefit (CCB).",
    "Canada&amp;rsquo;s CRS System: How It Works.",
    "Canada to End LMIA Job Offer Points in Express Entry.",
    "New Zealand Increases Visa Fees and Charges, Introduces New Immigration Requirements&amp;quot",
    "Canada Child Benefit: Eligibility and Payment Dates for Temporary Residents.",
   
  ]

  // Add a duplicate of the first item to the end for looping
  const extendedItems = [...items, items[0]];
  const [currentSlide, setCurrentSlide] = useState(0);
  const extendvisa = [...visa,visa[0]];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.transition = 'top 0.5s ease-in-out';
      scrollRef.current.style.top = `-${index * itemHeight}px`;

      // Reset to start if at the cloned last item
      if (index === items.length) {
        setTimeout(() => {
          scrollRef.current.style.transition = 'none'; // disable animation
          scrollRef.current.style.top = '0px'; // reset to start
          setIndex(1); // move to second item
        }, 600); // wait until transition finishes
      }
    }
  }, [index]);
  const brandImages = [
    'https://www.goforen.com//uploads/gallery/43-image.jpeg',
    'https://www.goforen.com//uploads/gallery/58-image.jpeg',
    'https://www.goforen.com//uploads/gallery/81-image.jpg',
    'https://www.goforen.com//uploads/gallery/60-image.jpg',
    'https://www.goforen.com//uploads/gallery/48-image.jpg',
    'https://www.goforen.com//uploads/gallery/94-image.jpg',
    'https://www.goforen.com//uploads/gallery/29-image.jpg',
    'https://www.goforen.com//uploads/gallery/96-image.png'
  ]
  const slides = [
    "/assets/pic/slide1.jpg",
    "/assets/pic/slider-2.jpg",
    "/assets/pic/slider-3.jpg",
    "/assets/pic/slider-4.jpg",
    "/assets/pic/slider-5.jpg",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div>
      <Navbar />






      <div className="body_wrap">

        {/* <!-- hero start --> */}
        <section className="hero hero__style-one bg_img" style={{minHeight:'0px' }}>

            <div className="sliderr">
          {slides.map((image, index) => (
            <div
              key={index}
              className={`slides ${index === currentSlide ? "active" : ""}`}
            >
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
    
        </section>
        {/* <!-- hero end --> */}

        {/* <!-- visa type start --> */}
        <section className="visa type pb-135 pt-80">
          <div className="container">
            <div className="service-wrap pos-rel" style={{ paddingTop: '40px' }}>
              <div className="service-img-wrap">
                <div className="service-bg" data-background="assets/img/bg/service_bg.png"></div>
                <div className="service-img wow skewIn" data-wow-delay="100ms"
                  data-background="assets/img/service/img_01.jpg"></div>
              </div>
              <div className="sec-title wow skewIn ">
                <h2 className="mb-60">Latest News</h2>
              </div>
              <div className="row justify-content-md-center mt-none-30">
                <div className="col-lg-6 col-md-6 mt-30">
                  <div className="xb-service">
                    <div className="xb-item--inner" style={{ padding: '20px 42px' }}>

                      <div
                        className="xb-item--holder"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          height: '100%', // Ensure full height usage
                        }}
                      >
                        {/* Icon */}
                        <div className="xb-item--icon" style={{ marginBottom: '20px' }}>
                          <img src="assets/img/icon/sv_01.svg" alt="" />
                        </div>

                        {/* Title */}
                        <h3 className="xb-item--title mb-20">
                          <a href="">NEWS</a>
                        </h3>

                        {/* Scrollable content */}
                        <div className="scroll-container" id="scrollBox">
                          <div className="scroll-inner" ref={scrollRef}>
                            {extendedItems.map((text, i) => (
                              <div className="scroll-item" key={i}>
                                <div className="xb-item--description" style={{fontSize:'14px'}}>{text}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Button */}
                        <div className="text-center mt-20">
                          <a href="/News" className="btn" style={{ background: '#00cc99', color: '#fff' }}>
                            View All
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-30">
                  <div className="xb-service">
                    <div className="xb-item--inner">

                      <div
                        className="xb-item--holder"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          height: '100%', // Ensure full height usage
                        }}
                      >
                        <div className="xb-item--icon color2 " style={{ marginBottom: '20px' }}>
                          <img src="assets/img/icon/sv_02.svg" alt="" />
                        </div>

                        <h3 className="xb-item--title mb-20"><a href="">
                          ACTIVITIES</a></h3>
                        <div className="xb-item--description">
                          Coming Soon !
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>
        {/* <!-- visa type end --> */}
       
         {/* <!-- brand start --> */}
         <section className="brand" style={{paddingBottom:'100px'}}>
      <div className="container mx-auto">
      <h2 className="brand-title text-center mb-50">
      <span>   <span>Media</span></span>
                </h2>
                <Swiper
  style={{ overflow: "hidden" }}
  modules={[Autoplay]}
  slidesPerView={7}
  spaceBetween={30} // 👈 spacing between slides (in pixels)
  loop={true}
  centeredSlides={true}
  autoplay={{
    delay: 6000,
    disableOnInteraction: false,
  }}
  speed={400}
  breakpoints={{
    1600: { slidesPerView: 7, spaceBetween: 30 },
    1200: { slidesPerView: 6, spaceBetween: 25 },
    992: { slidesPerView: 5, centeredSlides: false, spaceBetween: 20 },
    768: { slidesPerView: 4, centeredSlides: false, spaceBetween: 15 },
    576: { slidesPerView: 3, centeredSlides: false, spaceBetween: 10 },
    0: { slidesPerView: 2, spaceBetween: 8 },
  }}
>
  {/* {brandImages.map((img, idx) => ( */}
      {brandImages.map((img, idx) => (
        <SwiperSlide key={idx}>
      <a href="#!">
        <img key={index} src={img} alt={`Brand-${idx + 1}`} />
        {/* <img src={img} alt={`Brand ${idx + 1}`} style={{ width: '100%', }} /> */}
      </a>
    </SwiperSlide>
      ))}
  {/* ))} */}
</Swiper>

      </div>
    </section>
      {/* <!-- brand end --> */}
        {/* <!-- brand end --> */}
        
        
      <Visacard />

      {/* <!-- blog start --> */}
        <section className="blog pb-130">
            <div className="container">
                <div className="blog-wrap">
                    <div className="sec-title mb-60 text-center">
                        <h2 className="mb-30 wow skewIn">Why Us</h2>
                        <p>GO FOREN provides service in the area of immigration/ PR visa, Student visa, visitor visa and entrepreneur / business visa. The immigration segment (a core specialisation) provides end to end support to clients/aspirants who aspire to work and settle in a new prospective country. The support by us is provided not just at the initial stages of counselling, evaluation, application and subsequent immigration, but also extends to air ticketing services, foreign exchange services, and even go far as to provide accommodation in new destination, travel insurance, arrange for a transfer from the airport of the new country within a short period of successful launching of its overseas segment.</p>
                   
                    </div>
                    <div className="row justify-content-md-center mt-none-30">
                    <div className="col-lg-4 col-md-6 mt-30 d-flex">

                    <div className="xb-blog w-100 d-flex flex-column">

                                <div className="xb-item--inner">
                                    <div className="xb-item--img">
                                        <img src="/assets/pic/why1.jpg" alt="" />
                                    </div>
                                    <div className="xb-item--holder">
                                        
                                        <h3 className="xb-item--title border-effect" style={{display:'flex',textAlign:'center'}}><a href="/Immigration-pr-visa" >Immigration - PR Visa</a></h3>
                                        <p style={{marginBottom:'20px'}}>Any foreign national who wishes to relocate to any other country, on a permanent basis need an immigration visa or in general terms called a PR (permanent residency) of a particular country.</p>
                                        <a className="xb-item--link " href="/Immigration-pr-visa" style={{color:'#000',fontSize:'20px',}}>Read the article<span><img
                                                src="assets/img/icon/right_arrow.svg" alt="" /></span></a>
                                    </div>
                                    <a className="xb-overlay xb-overlay-link" href="/Immigration-pr-visa"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-30 d-flex">

                        <div className="xb-blog w-100 d-flex flex-column">

                                <div className="xb-item--inner">
                                    <div className="xb-item--img">
                                        <a href=""><img src="/assets/pic/why2.jpg" alt="" /></a>
                                    </div>
                                    <div className="xb-item--holder">
                                       
                                        <h3 className="xb-item--title border-effect"  style={{display:'flex',textAlign:'center'}}><a href="/Student-visa" >Student Visa.</a></h3>
                                        <p style={{marginBottom:'20px'}}>
                                        Most countries will issue student visas in order to allow foreign students to attend school within their borders. However, in most cases the student must be enrolled at a postsecondary institution of higher learning. Foreign exchange students must..
                                        </p>
                                        <a className="xb-item--link" href="/Student-visa" style={{color:'#000',fontSize:'20px',}}>Read the article<span><img
                                                src="assets/img/icon/right_arrow.svg" alt="" /></span></a>
                                    </div>
                                    <a className="xb-overlay xb-overlay-link" href="/Student-visa"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-30 d-flex">

                        <div className="xb-blog w-100 d-flex flex-column">

                                <div className="xb-item--inner">
                                    <div className="xb-item--img">
                                        <a href="/visitor"><img src="/assets/pic/why3.jpg" alt="" /></a>
                                    </div>
                                    <div className="xb-item--holder">
                                       
                                        <h3 className="xb-item--title border-effect"  style={{display:'flex',textAlign:'center'}}><a href="/visitor" >Visitor Visa</a></h3>
                                        <p style={{marginBottom:'20px'}} >
                                        Tourist/Visitors visas are conditional authorization granted by a country to foreigners to enter and temporarily remain within that country. Visas typically include limits on the duration of the foreigner's stay, territory within the country they...
                                        </p>
                                        <a className="xb-item--link" href="/visitor" style={{color:'#000',fontSize:'20px',}}>Read the article<span><img
                                                src="assets/img/icon/right_arrow.svg" alt="" /></span></a>
                                    </div>
                                    <a className="xb-overlay xb-overlay-link" href="/visitor"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xb-blog-bg" data-bg-color="#EDF3F5" data-background="assets/img/bg/blog_bg.png"></div>
                </div>
            </div>
        </section>
        {/* <!-- blog end --> */}

        <SuccessStories />

        {/* <!-- coaching start --> */}
        <section className="coaching pt-130 pb-120">
            <div className="container">
               <div className="row d-flex flex-nowrap overflow-auto">
               <div className="col"  style={{
    flex: `0 0 ${
      window.innerWidth <= 480
        ? '60%'
        : window.innerWidth <= 768
        ? '40%'
        : '20%'
    }`,
  }}>
               <div className="xb-coaching hover-shadow">
                            <div className="xb-item--inner">
                                <div className="xb-item--img">
                                    <a href=""><img src="/assets/pic/exam1.jpg" alt="" style={{minHeight:'100px'}}/></a>
                                </div>
                                <div className="xb-item--holder pos-rel">
                                    <h3 className="xb-item--title" style={{display:'flex',justifyContent:'center'}}><a href="/IELTS"> IELTS</a></h3>
                                    <p className="xb-item--content" style={{textAlign:'justify'}}>IELTS, the international English Language Testing system, provides an assessment of language ability of...</p>
                                    <a className="xb-item--link" href="/IELTS" title='Read More'><img src="assets/img/icon/long_arrow_right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col"  style={{
    flex: `0 0 ${
      window.innerWidth <= 480
        ? '60%'
        : window.innerWidth <= 768
        ? '40%'
        : '20%'
    }`,
  }}>
                    <div className="xb-coaching hover-shadow">
                            <div className="xb-item--inner">
                                <div className="xb-item--img">
                                    <a href=""><img src="/assets/pic/exam2.jpg" alt="" style={{minHeight:'100px'}}/></a>
                                </div>
                                <div className="xb-item--holder pos-rel">
                                    <h3 className="xb-item--title" style={{display:'flex',justifyContent:'center'}}><a href="/TOEFLIBT">TOEFL   IBT</a></h3>
                                    <p className="xb-item--content" style={{textAlign:'justify'}}>TOEFL IBT is version of the test that is the most widely used today. IBT stands for Internet Based Test. The entire TOEFL..</p>
                                    <a className="xb-item--link" href="/TOEFLIBT" title='Read More'><img src="assets/img/icon/long_arrow_right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col"  style={{
    flex: `0 0 ${
      window.innerWidth <= 480
        ? '60%'
        : window.innerWidth <= 768
        ? '40%'
        : '20%'
    }`,
  }}>
                    <div className="xb-coaching hover-shadow">
                            <div className="xb-item--inner">
                                <div className="xb-item--img">
                                    <a href=""><img src="/assets/pic/exam3.jpg" alt="" style={{minHeight:'100px'}}/></a>
                                </div>
                                <div className="xb-item--holder pos-rel">
                                    <h3 className="xb-item--title" style={{display:'flex',justifyContent:'center'}}><a href="/GRE"> GRE</a></h3>
                                    <p className="xb-item--content" style={{textAlign:'justify'}}>If you're planning on going to graduate school, you'll probably need to take the GRE test (or the Graduate Record Exam)....</p>
                                    <a className="xb-item--link" href="/GRE" title='Read More'><img src="assets/img/icon/long_arrow_right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col"  style={{
    flex: `0 0 ${
      window.innerWidth <= 480
        ? '60%'
        : window.innerWidth <= 768
        ? '40%'
        : '20%'
    }`,
  }}>
                    <div className="xb-coaching hover-shadow">
                            <div className="xb-item--inner">
                                <div className="xb-item--img">
                                    <a href=""><img src="/assets/pic/exam4.jpg" alt="" style={{minHeight:'100px'}}/></a>
                                </div>
                                <div className="xb-item--holder pos-rel">
                                    <h3 className="xb-item--title" style={{display:'flex',justifyContent:'center'}}><a href="/PTE">PTE </a></h3>
                                    <p className="xb-item--content" style={{textAlign:'justify'}}>PTE test is based on real-life academic and general content. You will come across graphs, summaries, excerpts,..</p>
                                    <a className="xb-item--link" href="/PTE" title='Read More'><img src="assets/img/icon/long_arrow_right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col"  style={{
    flex: `0 0 ${
      window.innerWidth <= 480
        ? '60%'
        : window.innerWidth <= 768
        ? '40%'
        : '20%'
    }`,
  }}>
                    <div className="xb-coaching hover-shadow">
                            <div className="xb-item--inner">
                                <div className="xb-item--img">
                                    <a href=""><img src="/assets/pic/exam5.jpg" alt=""  style={{minHeight:'100px'}}/></a>
                                </div>
                                <div className="xb-item--holder pos-rel">
                                    <h3 className="xb-item--title" style={{display:'flex',justifyContent:'center'}}><a href="/SAT">SAT </a></h3>
                                    <p className="xb-item--content" style={{textAlign:'justify'}}>The SAT is a standardized test widely used for college admissions in the United States. Introduced in ..</p>
                                    <a className="xb-item--link" href="/SAT" title='Read More'><img src="assets/img/icon/long_arrow_right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
        </section>
        {/* <!-- coaching end --> */}

      </div>
      <Footer />
    </div>
  )
}
