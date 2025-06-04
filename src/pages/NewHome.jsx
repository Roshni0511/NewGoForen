import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SchoolIcon from "@mui/icons-material/School";
import $ from "jquery";
import SuccessStories from "../component/SuccessStories";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DescriptionIcon from '@mui/icons-material/Description';
import ArticleIcon from '@mui/icons-material/Article';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FooterHome from "./FooterHome";
import {  Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from 'axios';
import PersonalGuidanceForm from "./PersonalGuidanceForm";


function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}
 const slides = [
  {
    image: "/assets/pic/banner14.png",
    title: "Get a free assessment / advice",
    description: "Fill up a quick inquiry form / Upload your CV and we will help you out with your queries!",
  },
  {
    image: "/assets/pic/banner13.png",
    title: "Begin with a Free Evaluation",
    description: "Take the first step toward your goals with a no-obligation assessment from our experts.",
  },
  {
    image: "/assets/pic/banner11.png",
    title: "Get Expert Advice – No Cost!",
    description: "Connect with our experienced consultants and receive personalized guidance absolutely free!",
  },
];

export default function NewHome() {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/get_faq_data/")
      .then((response) => setFaqData(response.data))
      .catch((error) => console.error("Error fetching FAQ data:", error));
  }, []);

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

  const [Courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/get_course_data/')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((err) => console.error("Failed to fetch Courses:", err));
  }, []);

  const [TeamData, setTeamData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/get_team_data/')
      .then((res) => res.json())
      .then((data) => {
        setTeamData(data);
      })
      .catch((err) => console.error("Failed to fetch Team Data:", err));
  }, []);

  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/submit_newsletter/", {
        email: email,
      });

      if (response.data.success) {
        alert("Subscribed successfully!");
        setEmail("");
      }
    } catch (error) {
      console.error("Subscription failed:", error);
      alert("Error: " + (error.response?.data?.error || "Something went wrong"));
    }
  };


  const [visaServices, setVisaServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/get_visa_services/')
      .then((res) => res.json())
      .then((data) => {
        setVisaServices(data);
      })
      .catch((err) => console.error("Failed to fetch visa services:", err));
  }, []);
    const [blogData, setBlogData] = useState([]);

  useEffect(() => {

    // Fetch blog data from API
    fetch("http://localhost:8000/get_blog_data/")
      .then((res) => res.json())
      .then((data) => setBlogData(data))
      .catch((error) => console.error("Error fetching blog data:", error));
  }, []);


  const [items, setItems] = useState([]);
    
  useEffect(() => {
    fetch("http://localhost:8000/get_news_data/")
      .then((res) => res.json())
      .then((data) => {
        const headings = data.map(item => item.heading);
        setItems(headings);
      })
      .catch((err) => console.error("Failed to fetch news data:", err));
  }, []);



const cards = [
  {
    title: "Canada",
    img: "/assets/pic/canada.png",
    bgColor: "#e38508",
 points: [
  { text: "Student Visa", link: "/Immigration-pr-visa" },
  { text: "Immigration - PR Visa", link: "/Immigration-pr-visa" },
  { text: "Visitor Visa", link: "/Immigration-pr-visa" },
    { text: "Investore Visa", link: "/Immigration-pr-visa" },
      { text: "Work Permit Visa", link: "/Immigration-pr-visa" }
]

  },
  {
    title: "Australia",
    img: "/assets/pic/aus.png",
    bgColor: "#07374d",
    points: [
  { text: "Student Visa", link: "/Immigration-pr-visa" },
  { text: "Immigration - PR Visa", link: "/Immigration-pr-visa" },
  { text: "Visitor Visa", link: "/Immigration-pr-visa" },
    { text: "Investore Visa", link: "/Immigration-pr-visa" },
      { text: "Work Permit Visa", link: "/Immigration-pr-visa" }
]
  },
  {
    title: "Germany",
    img: "/assets/pic/germany.png",
    bgColor: "#e38508",
 points: [
  { text: "Student Visa", link: "/Immigration-pr-visa" },
  { text: "Immigration - PR Visa", link: "/Immigration-pr-visa" },
  { text: "Visitor Visa", link: "/Immigration-pr-visa" },
    { text: "Investore Visa", link: "/Immigration-pr-visa" },
      { text: "Work Permit Visa", link: "/Immigration-pr-visa" }
]
  },
  {
    title: "USA",
    img: "/assets/pic/usa.png",
    bgColor: "#07374d",
  points: [
  { text: "Student Visa", link: "/Immigration-pr-visa" },
  { text: "Immigration - PR Visa", link: "/Immigration-pr-visa" },
  { text: "Visitor Visa", link: "/Immigration-pr-visa" },
    { text: "Investore Visa", link: "/Immigration-pr-visa" },
      { text: "Work Permit Visa", link: "/Immigration-pr-visa" }
]
  },
  {
    title: "UK",
    img: "/assets/pic/uk.png",
    bgColor: "#e38508",
   points: [
  { text: "Student Visa", link: "/Immigration-pr-visa" },
  { text: "Immigration - PR Visa", link: "/Immigration-pr-visa" },
  { text: "Visitor Visa", link: "/Immigration-pr-visa" },
    { text: "Investore Visa", link: "/Immigration-pr-visa" },
      { text: "Work Permit Visa", link: "/Immigration-pr-visa" }
]
  },
  {
    title: "UAE",
    img: "/assets/pic/Mask group.png",
    bgColor: "#07374d",
 points: [
  { text: "Student Visa", link: "/Immigration-pr-visa" },
  { text: "Immigration - PR Visa", link: "/Immigration-pr-visa" },
  { text: "Visitor Visa", link: "/Immigration-pr-visa" },
    { text: "Investore Visa", link: "/Immigration-pr-visa" },
      { text: "Work Permit Visa", link: "/Immigration-pr-visa" }
]
  },
];

  const brandImages = [
    "/assets/pic/svisa.jpeg",
    "/assets/pic/Investor-Visa-1200x675.jpg",
    "/assets/pic/VisitorVisaFI (1).jpg",
    "/assets/pic/visatypelogobg5 (1).png",
    "/assets/pic/svisa.jpeg",
    "/assets/pic/Investor-Visa-1200x675.jpg",
    "/assets/pic/VisitorVisaFI (1).jpg",
    "/assets/pic/visatypelogobg5 (1).png",
  ];
  // data-background img start
  const [background12, setBackground12] = useState("");

  useEffect(() => {
    const backgroundUrl12 = "assets/img/bg/blog_bg.png";
    setBackground12(backgroundUrl12);
  }, []);
  // data-background img end
  // data-background img start
  const [background8, setBackground8] = useState("");

  useEffect(() => {
    const backgroundUrl8 = "assets/img/shape/country_shape.png";
    setBackground8(backgroundUrl8);
  }, []);
  // data-background img end
  const scrollRef = useRef(null);
  const itemHeight = 40;
  const [index, setIndex] = useState(0);
  // const items = [
  //   "Poland Introduced e-Konsulat for Work Visa Applications in India.",
  //   "Australian Universities Impose Restrictions on Students from Six Indian Regions.",
  //   "Stay and Work in Canada: Apply for a TFWP Work Permit After PGWP Expiry.",
  //   "Latvia to Enforce Stricter Entry Rules for Third-Country Nationals Without Local Visa or Permit.",
  //   "CRS Scores Drop Sharply After Removal of Arranged Employment Points.",
  //   "UAE Expands Visa on Arrival for Indian Nationals.",
  //   "EU Urges Fast-Track of ETIAS &amp; EES to Secure Schengen Borders.",
  //   "Latvia to Tighten Border Rules for Third-Country Nationals Without Latvian Visa or Residence Permit.",
  // ];
  const visa = [
    "Temporary Residents Can Now Apply for the Canada Child Benefit (CCB).",
    "Canada&amp;rsquo;s CRS System: How It Works.",
    "Canada to End LMIA Job Offer Points in Express Entry.",
    "New Zealand Increases Visa Fees and Charges, Introduces New Immigration Requirements&amp;quot",
    "Canada Child Benefit: Eligibility and Payment Dates for Temporary Residents.",
  ];

  // Add a duplicate of the first item to the end for looping
  const extendedItems = [...items, items[0]];
  const [currentSlide, setCurrentSlide] = useState(0);
  const extendvisa = [...visa, visa[0]];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.transition = "top 0.5s ease-in-out";
      scrollRef.current.style.top = `-${index * itemHeight}px`;

      // Reset to start if at the cloned last item
      if (index === items.length) {
        setTimeout(() => {
          scrollRef.current.style.transition = "none"; // disable animation
          scrollRef.current.style.top = "0px"; // reset to start
          setIndex(1); // move to second item
        }, 600); // wait until transition finishes
      }
    }
  }, [index]);

  // data-background img start
  const [background, setBackground] = useState("");

  useEffect(() => {
    const backgroundUrl = "/assets/pic/mainpage.png";
    setBackground(backgroundUrl);
  }, []);
  // data-background img end
  // data-background img start
  const [background5, setBackground5] = useState("");

  useEffect(() => {
    const backgroundUrl5 = "assets/img/bg/package_bg.jpg";
    setBackground5(backgroundUrl5);
  }, []);
  // data-background img end
  // data-background img start
  const [background10, setBackground10] = useState("");

  useEffect(() => {
    const backgroundUrl10 = "assets/img/bg/cta_bg1.jpg";
    setBackground10(backgroundUrl10);
  }, []);
  // data-background img end
  //   category slider start
  const images = [
    "/assets/pic/media1.jpeg",
    "/assets/pic/media2.jpeg",
    "/assets/pic/media3.jpg",
    "/assets/pic/media4.jpg",
    "/assets/pic/media5.jpg",
    "/assets/pic/media6.jpg",
    "/assets/pic/media7.jpg",
    "/assets/pic/media8.png",
  ];
  //   category slider end
  // data-background img start
  const [background1, setBackground1] = useState("");

  useEffect(() => {
    const backgroundUrl1 = "assets/img/bg/service_bg.png";
    setBackground1(backgroundUrl1);
  }, []);
  // data-background img end
  // data-background img start
  const [background2, setBackground2] = useState("");

  useEffect(() => {
    const backgroundUrl2 = "assets/pic/img_01coure.jpg";
    setBackground2(backgroundUrl2);
  }, []);
  // data-background img end
  // data-background img start
  const [background3, setBackground3] = useState("");

  useEffect(() => {
    const backgroundUrl3 = "/assets/pic/cards.jpg";
    setBackground3(backgroundUrl3);
  }, []);
  // data-background img end

  //counter start
  const useCounter = (end, duration) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }, [end, duration]);

    return count;
  };

  const visaCategories = useCounter(20, 1000);
  const visaProcess = useCounter(30, 1200);
  const successfulProjects = useCounter(40, 1200);
  const proConsultants = useCounter(180, 1400);
  //counter end

  //   FAQ start
  useEffect(() => {
    // Accordion Box functionality (mimicking your jQuery code)
    if ($(".accordion_box").length) {
      $(".accordion_box").on("click", ".acc-btn", function () {
        const outerBox = $(this).parents(".accordion_box");
        const target = $(this).parents(".accordion");

        if ($(this).next(".acc_body").is(":visible")) {
          $(this).removeClass("active");
          $(this).next(".acc_body").slideUp(300);
          $(outerBox).children(".accordion").removeClass("active-block");
        } else {
          $(outerBox).find(".accordion .acc-btn").removeClass("active");
          $(this).addClass("active");
          $(outerBox).children(".accordion").removeClass("active-block");
          $(outerBox).find(".accordion").children(".acc_body").slideUp(300);
          target.addClass("active-block");
          $(this).next(".acc_body").slideDown(300);
        }
      });
    }

    // Cleanup the event listener on component unmount
    return () => {
      $(".accordion_box").off("click", ".acc-btn");
    };
  }, []);
  //FAQ end

  // data-background img start
  const [background4, setBackground4] = useState("");

  useEffect(() => {
    const backgroundUrl4 = "assets/img/bg/blog_bg.png";
    setBackground4(backgroundUrl4);
  }, []);
  // data-background img end
  return (
    <div>
      <Navbar />

      
      {/* <!-- hero start --> */}
   <Swiper
  modules={[Autoplay]}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop={true}
  className="hero-slider"
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <section
  className="hero hero__style-one bg_img"
  style={{
    backgroundImage: `url(${slide.image})`,
    position: "relative",
    // ❌ REMOVE this (CSS will control it):
    // backgroundSize: "cover",
    // backgroundPosition: "center",
  }}
>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7">
              <div className="hero__content">
                <h1 className="wow skewIn">{slide.title}</h1>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration=".6s"
                  style={{color:'#e38508'}}
                >
                  {slide.description}
                </p>
<div
  className="btns wow fadeInUp mt-5"
  data-wow-delay="600ms"
  data-wow-duration=".6s"
>

  <a
    className="colorcode"
    href="/Contact"
    style={{
      background: "#f09318",
      color: "#fff",
      padding: "15px 20px",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "bold",
      textAlign: "center",
      width: "200px" // optional: same width
    }}
  >
    Quick Inquiry
  </a>

  <a
    className="thm-btn thm-btn--white"
    href="/Upload-cv"
    style={{
    
      padding: "20px",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "bold",
      textAlign: "center",
      width: "200px"
    }}
  >
    Upload CV
  </a>
</div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </SwiperSlide>
  ))}
</Swiper>

      {/* <!-- hero end --> */}

        {/* CARD SECTION STRT */}
  {/* <div className="container our-services">
  <div className="sec-title mb-55">
              <div className="sec-title mb-10" style={{justifyContent:'center',display:'flex'}}>
                <h2 className="mb-10 wow skewIn" style={{fontSize:'40px'}}>
              Popular Visa </h2>
              </div>
                <div className="sec-title mb-45"  style={{justifyContent:'center',display:'flex'}}>
                <p>
                  "Get expert guidance for the most popular visas to Canada, Australia, USA, and more."
                </p>
              </div>
            </div>
    <div className="row">
      {cards.map((card, index) => (
        <div className="col-md-6 col-sm-6 col-lg-4" key={index}>
          <div className="flip-container">
            <div className="flipper">
              <div className="front" style={{ background: card.bgColor }}>
                <img
                  className="lazyload"
                  src={card.img}
                  alt={card.title}
                  style={{ width: "200px", height: "150px" }}
                />
                <h3 >{card.title}</h3>
              </div>
              <div className="back" style={{ background: card.bgColor }}>
                <h5 style={{color:'#fff',marginBottom:'10px'}}>{card.title}</h5>
              <ul style={{ paddingLeft: "20px", textAlign: "left",listStyle:'none' ,lineHeight:'28px'}}>
    {card.points.map((point, i) => (
      <li key={i} style={{textDecoration:'none'}}>
        <Link to={point.link} style={{ color: "#fff" }}>
        <ArrowForwardIcon /> {point.text}
        </Link>
      </li>
    ))}
  </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div> */}

        {/* CARD SECTION END */}

      {/* <!-- about start --> */}
      <section className="about pos-rel pt-120 pb-130">
        <div className="container">
          <div className="sec-title mb-55">
            <div className="sec-title mb-45">
              <h2 className="mb-40 wow skewIn">
                Why Us <br />
                <span> Trusted Guidance for Your Future</span>
              </h2>
              <p>
                GO FOREN offers services for immigration/PR visas, student
                visas, visitor visas, <br /> and business/entrepreneur visas. We
                provide complete support — from counseling <br /> and
                application to visa processing. Our assistance also includes air
                ticketing, foreign <br /> exchange, travel insurance,
                accommodation, and airport transfers, ensuring a smooth <br />{" "}
                transition to your new country
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-10">
              <div className="about__content">
                <ul className="about-list ul_li list-unstyled">
                    {visaServices.map((service, index) => (
    <li key={service.id}>
      <a href={`/visa-services-detail?id=${service.id}`}>
        <div className="xb-item--inner" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(214, 131, 48, 0.4), rgba(158, 63, 63, 0))',
        padding: '35px 20px',
        borderRadius: '10px'
      }}>
          <div className={`xb-item--number color-${(index % 5) + 1}`}>
            {index + 1}
          </div>
          <div className="xb-item--holder">
            <h3 className="xb-item--title mb-10">{service.visa_type}</h3>
            <p style={{ color: '#787B84' }}>
              {/* Optional: Show a trimmed version of the description */}
              {stripHtml(service.description).slice(0, 80)}...
            </p>
          </div>
        </div>
      </a>
    </li>
  ))}

                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="about__img">
          <img src="/assets/pic/why.png" alt="" />
        </div>
      </section> 
      {/* <!-- about end --> */}
   

      {/* <!-- visa type start --> */}
      <section className="visa type pb-135">
        <div className="container">
          <div className="service-wrap pos-rel">
            <div className="service-img-wrap">
              <div
                className="service-bg"
                style={{
                  backgroundImage: `url(${background1})`,
                  // minHeight: '475px',
                  position: "absolute",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="service-img wow skewIn"
                data-wow-delay="100ms"
                style={{
                  backgroundImage: `url(${background2})`,
                  // minHeight: '400px',
                  position: "absolute",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="sec-title wow skewIn pt-120">
              <div className="sec-title mb-45">
                <h2 className="mb-40 wow skewIn">
                  Courses <br />
                  <span> Build Skills for Global Success</span>
                </h2>
                <p>
                  Explore a wide range of career-focused courses tailored <br />{" "}
                  to help you qualify for your desired visa destination.
                </p>
              </div>
            </div>
            <div className="row justify-content-md-center mt-none-30">

  {Courses.map((course, index) => (
    <React.Fragment key={course.id}>
      <div className="col-lg-4 col-md-6 mt-30">
        <div className="xb-service">
          <div className="xb-item--inner"  style={{
        backgroundImage: 'linear-gradient(135deg, rgba(214, 131, 48, 0.4), rgba(158, 63, 63, 0))',
        padding: '20px',
        borderRadius: '10px'
      }}>
                        <a href={`/Course-details?id=${course.id}`}>
            <div className={`xb-item--icon color${(index % 5) + 1} mb-50`}>
              <img src={`assets/img/icon/sv_0${(index % 5) + 1}.svg`} alt={course.course_name} />
            </div>
            <div className="xb-item--holder">
              <h3 className="xb-item--title mb-20">
                <a href={`/Course-details?id=${course.id}`}>{course.course_name}</a>
              </h3>
              <p style={{ color: '#787B84' }}
                dangerouslySetInnerHTML={{
                  __html: course.description.replace(/<[^>]+>/g, '').slice(0, 140) + '...',
                }}
              />
            </div>
            </a>

          </div>
        </div>
      </div>

      {/* Insert a blank column after the second item (index 1) */}
      {index === 1 && (
        <div className="col-lg-4 mt-30"></div>
      )}
    </React.Fragment>
  ))}

            </div>
          </div>
        </div>
      </section>
      {/* <!-- visa type end --> */}

      {/* <!-- country start --> */}
      {/* <div
        style={{
          background: "#edf3f578",
          paddingTop: "120px",
          paddingBottom: "40px",
        }}
      >
        <section className="country pt-md-100 pos-rel  pb-120">
          <div className="xb-country3__wrap ul_li_between">
            <div className="xb-country3">
              <div className="xb-item--inner">
                <div className="xb-item--flag">
                  <img src="assets/img/country/trv_flag_01.png" alt="" />
                </div>
                <h3 className="xb-item--title">Germany</h3>
              </div>
            </div>
            <div className="xb-country3">
              <div className="xb-item--inner">
                <div className="xb-item--flag">
                  <img src="assets/img/country/trv_flag_02.png" alt="" />
                </div>
                <h3 className="xb-item--title">Belgium</h3>
              </div>
            </div>
            <div className="xb-country3">
              <div className="xb-item--inner">
                <div className="xb-item--flag">
                  <img src="assets/img/country/trv_flag_03.png" alt="" />
                </div>
                <h3 className="xb-item--title">Switzerland</h3>
              </div>
            </div>
            <div className="xb-country3">
              <div className="xb-item--inner">
                <div className="xb-item--flag">
                  <img src="assets/img/country/trv_flag_04.png" alt="" />
                </div>
                <h3 className="xb-item--title">Vietnam</h3>
              </div>
            </div>
          </div>
          <div
            className="country-shape"
            style={{
              backgroundImage: `url(${background8})`,
              
              position: "absolute",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
       
          <div className="country-icon-shape">
            <div className="shape shape--1">
              <img src="assets/img/icon/cs_01.png" alt="" />
            </div>
            <div className="shape shape--2">
              <img src="assets/img/icon/cs_02.png" alt="" />
            </div>
            <div className="shape shape--3">
              <img src="assets/img/icon/cs_03.png" alt="" />
            </div>
            <div className="shape shape--4">
              <img src="assets/img/icon/cs_04.png" alt="" />
            </div>
          </div>
        </section>
      </div> */}

   <div
  style={{
    background: "#edf3f578",
    paddingTop: "120px",
    paddingBottom: "80px",
    position: "relative",
  }}
>
  <section className="country pt-md-100 pos-rel pb-120">
    <div className="xb-country3__wrap country-layout">
      {[
          { frontImg: "trv_flag_01.png", frontName: "Germany", backImg: "franceflag.jpeg", backName: "France" },
          { frontImg: "trv_flag_02.png", frontName: "Belgium", backImg: "italydflah.jpg", backName: "Italy" },
          { frontImg: "trv_flag_03.png", frontName: "Switzerland", backImg: "flagimage7.jpeg", backName: "Spain" },
          { frontImg: "trv_flag_04.png", frontName: "Vietnam", backImg: "flagimage8.jpeg", backName: "Thailand" },
      ].map((item, index) => (
        <div className={`flip-card-wrapper card-${index + 1}`} key={index}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={`assets/img/country/${item.frontImg}`} alt={item.frontName} />
                <h3>{item.frontName}</h3>
              </div>
              <div className="flip-card-back">
                <img src={`assets/img/country/${item.backImg}`} alt={item.backName} />
                <h3>{item.backName}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Background shape image and icon shapes remain unchanged */}
    <div
      className="country-shape"
       style={{
              backgroundImage: `url(${background8})`,
              height:'380px',
              position: "absolute",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
    ></div>

    <div className="country-icon-shape">
      <div className="shape shape--1">
        <img src="assets/img/icon/cs_01.png" alt="" />
      </div>
      <div className="shape shape--2">
        <img src="assets/img/icon/cs_02.png" alt="" />
      </div>
      <div className="shape shape--3">
        <img src="assets/img/icon/cs_03.png" alt="" />
      </div>
      <div className="shape shape--4">
        <img src="assets/img/icon/cs_04.png" alt="" />
      </div>
    </div>
  </section>
</div>




      {/* <!-- country end --> */}





      {/* banner start */}
      <div style={{paddingTop:'80px'}}>
        <img src="/assets/pic/newbanner.png" alt="" />
      </div>
 {/* banner end */}

      {/* <!-- feature start --> */}
      <section className="feature pos-rel gray-bg-2 pt-120 pb-120">
        <div className="container">
          <div className="sec-title style-2 text-center mb-60 z-index-2">
            <span className="sec-title--sub">How we Help Client</span>
            <h3 className="sec-title--heading mb-30">
              Expertise from Seasoned <br /> Professionals
            </h3>
          </div>
        </div>
        <div className="xb-feature2__wrap">
          <div className="container">
            <div className="row justify-content-md-center g-0">
              <div className="col-lg-4 col-md-6">
                <div className="xb-feature xb-feature2 text-center">
                  <div className="xb-item--line"></div>
                  <div className="xb-item--inner">
                    <div className="xb-item--icon">
                      <span className="default">
                        <SchoolIcon
                          style={{ color: "#e38508", fontSize: "70px" }}
                        />
                      </span>
                      <span className="hover">
                        <SchoolIcon
                          style={{ color: "#fff", fontSize: "70px" }}
                        />
                      </span>
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title">University Information</h3>
                      <div className="xb-item--content">
                        University information is a crucial <br /> component of
                        your..
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="xb-feature xb-feature2 text-center">
                  <div className="xb-item--line"></div>
                  <div className="xb-item--inner">
                    <div className="xb-item--icon">
                      <span className="default">
                        {/* <img src="assets/img/icon/fr_02.svg" alt="" /> */}
                        <CreditCardIcon
                          style={{ color: "#e38508", fontSize: "70px" }}
                        />
                      </span>
                      <span className="hover">
                        <CreditCardIcon
                          style={{ color: "#fff", fontSize: "70px" }}
                        />
                      </span>
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title">Student Visa</h3>
                      <div className="xb-item--content">
                        A student visa is a legal authorization <br /> that
                        allows international..
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="xb-feature xb-feature2 text-center">
                  <div className="xb-item--line"></div>
                  <div className="xb-item--inner">
                    <div className="xb-item--icon">
                      <span className="default">
                        <MenuBookIcon
                          style={{ color: "#e38508", fontSize: "70px" }}
                        />
                      </span>
                      <span className="hover">
                        <MenuBookIcon
                          style={{ color: "#fff", fontSize: "70px" }}
                        />
                      </span>
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title">Our Coaching</h3>
                      <div className="xb-item--content">
                        Our Coaching offers life coaching that <br /> helps
                        clients navigate..
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xb-feature-right-line"></div>
          </div>

        </div>
        <div style={{justifyContent:'center',display:'flex',marginTop:'50px'}}>

        <button
                      style={{
                        padding: "10px 20px",
                        background: "#e38508",
                        borderRadius: "10px",
                      }}
                    >
                      <a style={{ color: "#fff" }} href="/Inquiry-association">
                      Inquiry For Association
                      </a>
                    </button>
        </div>
        <div className="feature-shape">
          <div className="shape shape--1">
            <div className="shape-inner" data-parallax='{"x":-50,"y":-80}'>
              <img src="assets/img/shape/f_shape1.png" alt="" />
            </div>
          </div>
          <div className="shape shape--2">
            <div className="shape-inner" data-parallax='{"x":50,"y":-80}'>
              <img src="assets/img/shape/f_shape2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- feature end --> */}
      {/* <!-- services start --> */}
      <section className="service  pos-rel  pt-120 pb-100"  style={{background:'#edf3f57a'}}>
        <div className="container">
          <div className="xb-service__top ul_li_between mb-20">
            <div className="sec-title sec-title--white style-2 mb-20">
              <span className="sec-title--sub" style={{color:'#110F10'}}>
                 services
              </span>
              <h3 className="sec-title--heading"  style={{color:'#110F10'}}>Easy Study Abroad</h3>
            </div>
            <div className="xb-service__btn mb-20">
              <a className="xb-tran-btn" href=""  style={{color:'#110F10'}}>
                more services
                <span>
                  <ArrowCircleRightIcon />
                </span>
              </a>
            </div>
          </div>
          <div className="xb-service2__wrap ul_li">
            <div className="xb-service2">
              <div className="xb-item--inner" style={{borderRadius:'0px'}}>
                <div className="xb-item--icon">
                  <BusinessCenterIcon style={{color:'#e38508' ,fontSize:'60px'}}/>
                  
                </div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <a href="">
                      Career <br /> Counseling
                    </a>
                  </h3>
                  <p className="xb-item--content">
                    Assessment of eligibility for  different student
                    visa..
                  </p>
                  <a className="xb-item--link" href="">
                    Read more
                  </a>
                </div>
                <a
                  className="xb-item--link-full"
                  href=""
                ></a>
              </div>
            </div>
            <div className="xb-service2">
              <div className="xb-item--inner" style={{borderRadius:'0px'}}>
                <div className="xb-item--icon">
                  <FlightTakeoffIcon  style={{color:'#e38508' ,fontSize:'60px'}}/>
                </div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <a href="">
                      Visa <br /> Guidance
                    </a>
                  </h3>
                  <p className="xb-item--content">
                    Offering information about visa requirements,
                  ..
                  </p>
                  <a className="xb-item--link" href="">
                    Read more
                  </a>
                </div>
                <a
                  className="xb-item--link-full"
                  href=""
                ></a>
              </div>
            </div>
            <div className="xb-service2">
              <div className="xb-item--inner" style={{borderRadius:'0px'}}>
                <div className="xb-item--icon">
                <AccountBalanceWalletIcon   style={{color:'#e38508' ,fontSize:'60px'}}/>
                </div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <a href="">
                      Financial <br /> Planning
                    </a>
                  </h3>
                  <p className="xb-item--content">
                    Advising on demonstrating sufficient financial..
                  </p>
                  <a className="xb-item--link" href="">
                    Read more
                  </a>
                </div>
                <a
                  className="xb-item--link-full"
                  href=""
                ></a>
              </div>
            </div>
            <div className="xb-service2">
              <div className="xb-item--inner" style={{borderRadius:'0px'}}>
                <div className="xb-item--icon">
                <DescriptionIcon style={{color:'#e38508' ,fontSize:'60px'}}/>
                </div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <a href="">
                      Application <br /> Assistance
                    </a>
                  </h3>
                  <p className="xb-item--content">
                    Assisting with compiling required documents..
                  </p>
                  <a className="xb-item--link" href="">
                    Read more
                  </a>
                </div>
                <a
                  className="xb-item--link-full"
                  href=""
                ></a>
              </div>
            </div>
            <div className="xb-service2">
              <div className="xb-item--inner" style={{borderRadius:'0px'}}>
                <div className="xb-item--icon">
                <ArticleIcon  style={{color:'#e38508' ,fontSize:'60px'}}/>
                </div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <a href="">
                      Document <br /> Preparation
                    </a>
                  </h3>
                  <p className="xb-item--content">
                    Assisting in gathering such as organizing necessary..
                  </p>
                  <a className="xb-item--link" href="">
                    Read more
                  </a>
                </div>
                <a
                  className="xb-item--link-full"
                  href=""
                ></a>
              </div>
            </div>
            <div className="xb-service2">
              <div className="xb-item--inner" style={{borderRadius:'0px'}}>
                <div className="xb-item--icon">
                <LocalHospitalIcon  style={{color:'#e38508' ,fontSize:'60px'}}/>
                </div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <a href="">
                      Health Insurance <br /> Guidance
                    </a>
                  </h3>
                  <p className="xb-item--content">
                    Offering information about housing orientation, and..
                  </p>
                  <a className="xb-item--link" href="">
                    Read more
                  </a>
                </div>
                <a
                  className="xb-item--link-full"
                  href=""
                ></a>
              </div>
            </div>
            <div className="xb-service2">
              <div className="xb-item--inner" style={{borderRadius:'0px'}}>
                <div className="xb-item--icon">
                <GTranslateIcon  style={{color:'#e38508' ,fontSize:'60px'}}/>
                </div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <a href="">
                      Language <br /> Proficiency Tests
                    </a>
                  </h3>
                  <p className="xb-item--content">
                    Providing guidance on language proficiency..
                  </p>
                  <a className="xb-item--link" href="">
                    Read more
                  </a>
                </div>
                <a
                  className="xb-item--link-full"
                  href=""
                ></a>
              </div>
            </div>
            <div className="xb-service2">
              <div className="xb-item--inner" style={{borderRadius:'0px'}}>
                <div className="xb-item--icon">
                <TravelExploreIcon   style={{color:'#e38508' ,fontSize:'60px'}}/>
                </div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <a href="">
                      Visa Submission <br /> and Tracking
                    </a>
                  </h3>
                  <p className="xb-item--content">
                    Assisting in submitting the visa application to the..
                  </p>
                  <a className="xb-item--link" href="">
                    Read more
                  </a>
                </div>
                <a
                  className="xb-item--link-full"
                  href=""
                ></a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="service-shape">
          <div className="shape shape--1">
            <div className="shape-inner" data-parallax='{"x":-50,"y":-70}'>
              <img src="assets/img/shape/s_shape1.png" alt="" />
            </div>
          </div>
          <div className="shape shape--2">
            <div className="shape-inner" data-parallax='{"x":50,"y":-80}'>
              <img src="assets/img/shape/s_shape2.png" alt="" />
            </div>
          </div>
          <div className="shape shape--3">
            <div className="shape-inner" data-parallax='{"x":-50,"y":80}'>
              <img src="assets/img/shape/s_shape3.png" alt="" />
            </div>
          </div>
          <div className="shape shape--4">
            <div className="shape-inner" data-parallax='{"x":50,"y":80}'>
              <img src="assets/img/shape/s_shape4.png" alt="" />
            </div>
          </div>
        </div> */}
      </section>
  
      {/* <!-- services end --> */}

      {/* <!-- counter start --> */}
      <section
        className="counter pt-120 pb-120 bg_img"
        style={{
          backgroundImage: `url(${background3})`,
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="sec-title mb-45">
            <h2 className="mb-40 wow skewIn">
              Discovering Our Biggest Successes: The Stories <br />
              <span> Behind Our Great Achievements</span>
            </h2>
            <p>
              Embarking on a journey to reunite families, we recently had the
              privilege of assisting a <br />
              couple in securing their spouse's visa.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="xb-counter ul_li">
                <div className="xb-item--item ul_li">
                  <div className="xb-item--icon">
                    <img src="assets/img/icon/c_01.svg" alt="" />
                  </div>
                  <div className="xb-item--holder">
                    <h2 className="xb-item--number">
                      <span className="xbo">{visaCategories}</span>
                      <span className="suffix">+</span>
                    </h2>
                    <h5 className="xb-item--title">Visa Categories</h5>
                  </div>
                </div>
                <div className="xb-item--item style-2 ul_li">
                  <div className="xb-item--icon">
                    <img src="assets/img/icon/c_02.svg" alt="" />
                  </div>
                  <div className="xb-item--holder">
                    <h2 className="xb-item--number">
                      <span className="xbo">
                        {visaProcess.toLocaleString()}
                      </span>
                      <span className="suffix">K+</span>
                    </h2>
                    <h5 className="xb-item--title">Visa Process</h5>
                  </div>
                </div>
                <div className="xb-item--item style-3 ul_li">
                  <div className="xb-item--icon">
                    <img src="assets/img/icon/c_03.svg" alt="" />
                  </div>
                  <div className="xb-item--holder">
                    <h2 className="xb-item--number">
                      <span className="xbo">
                        {successfulProjects.toLocaleString()}
                      </span>
                      <span className="suffix">K+</span>
                    </h2>
                    <h5 className="xb-item--title">Successful Project</h5>
                  </div>
                </div>
                <div className="xb-item--item style-4 ul_li">
                  <div className="xb-item--icon">
                    <img src="assets/img/icon/c_04.svg" alt="" />
                  </div>
                  <div className="xb-item--holder">
                    <h2 className="xb-item--number">
                      <span className="xbo">
                        {proConsultants.toLocaleString()}
                      </span>
                      <span className="suffix">K+</span>
                    </h2>
                    <h5 className="xb-item--title">Pro Consultants</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- counter end --> */}

      {/* <!-- country start --> */}
      <section className="country pt-120 pb-130">
        <div className="container">
          <div className="row mb-30 align-items-center">
            <div className="col-lg-6">
              <div className="sec-title">
                <h2 className="mb-20 wow skewIn">
                  Make Your Choice for the <br /> <span>Preferred Nation</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="sec-title mb-20">
                <p>
                  Choosing the ideal destination for immigration is a pivotal
                  decision that can shape the trajectory of your{" "}
                </p>
              </div>
            </div>
          </div>
          <ul
            className="xb-country-nav nav nav-tabs ul_li_between mb-65"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="xbc-tab1"
                data-bs-toggle="tab"
                data-bs-target="#xbc-tab-pane1"
                type="button"
                role="tab"
                aria-controls="xbc-tab-pane1"
                aria-selected="true"
              >
                Europe
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="xbc-tab2"
                data-bs-toggle="tab"
                data-bs-target="#xbc-tab-pane2"
                type="button"
                role="tab"
                aria-controls="xbc-tab-pane2"
                aria-selected="false"
              >
                North America
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="xbc-tab3"
                data-bs-toggle="tab"
                data-bs-target="#xbc-tab-pane3"
                type="button"
                role="tab"
                aria-controls="xbc-tab-pane3"
                aria-selected="false"
              >
                Asia
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="xbc-tab4"
                data-bs-toggle="tab"
                data-bs-target="#xbc-tab-pane4"
                type="button"
                role="tab"
                aria-controls="xbc-tab-pane4"
                aria-selected="false"
              >
                Latin America
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="xbc-tab5"
                data-bs-toggle="tab"
                data-bs-target="#xbc-tab-pane5"
                type="button"
                role="tab"
                aria-controls="xbc-tab-pane5"
                aria-selected="false"
              >
                Oceania
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="xbc-tab6"
                data-bs-toggle="tab"
                data-bs-target="#xbc-tab-pane6"
                type="button"
                role="tab"
                aria-controls="xbc-tab-pane6"
                aria-selected="false"
              >
                Africa
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="xbc-tab7"
                data-bs-toggle="tab"
                data-bs-target="#xbc-tab-pane7"
                type="button"
                role="tab"
                aria-controls="xbc-tab-pane7"
                aria-selected="false"
              >
                Antarctica
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane animated fadeInUp show active"
              id="xbc-tab-pane1"
              role="tabpanel"
              aria-labelledby="xbc-tab1"
              tabindex="0"
            >
              <div className="xb-country ul_li">
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Australia</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">France</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Germany</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Iceland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Italy</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane animated fadeInUp"
              id="xbc-tab-pane2"
              role="tabpanel"
              aria-labelledby="xbc-tab2"
              tabindex="0"
            >
              <div className="xb-country ul_li">
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Iceland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Australia</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">France</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Germany</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Italy</h3>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane animated fadeInUp"
              id="xbc-tab-pane3"
              role="tabpanel"
              aria-labelledby="xbc-tab3"
              tabindex="0"
            >
              <div className="xb-country ul_li">
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Germany</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">France</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Italy</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Australia</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Iceland</h3>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane animated fadeInUp"
              id="xbc-tab-pane4"
              role="tabpanel"
              aria-labelledby="xbc-tab4"
              tabindex="0"
            >
              <div className="xb-country ul_li">
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Germany</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Australia</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">France</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Iceland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Italy</h3>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane animated fadeInUp"
              id="xbc-tab-pane5"
              role="tabpanel"
              aria-labelledby="xbc-tab5"
              tabindex="0"
            >
              <div className="xb-country ul_li">
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Germany</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Italy</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Iceland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Australia</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">France</h3>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane animated fadeInUp"
              id="xbc-tab-pane6"
              role="tabpanel"
              aria-labelledby="xbc-tab6"
              tabindex="0"
            >
              <div className="xb-country ul_li">
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Italy</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Iceland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Australia</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">France</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Germany</h3>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane animated fadeInUp"
              id="xbc-tab-pane7"
              role="tabpanel"
              aria-labelledby="xbc-tab7"
              tabindex="0"
            >
              <div className="xb-country ul_li">
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_06.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Germany</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_07.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Greece</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_08.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Hungary</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_09.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Iceland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_01.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Canada</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_11.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Italy</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_12.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Luxembourg</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_02.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Belgium</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_10.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Ireland</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_03.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Denmark</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_05.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">France</h3>
                  </a>
                </div>
                <div className="xb-item--item">
                  <a href="" className="xb-item--inner ul_li">
                    <div className="xb-item--flag">
                      <img src="assets/img/country/img_04.png" alt="" />
                    </div>
                    <h3 className="xb-item--title">Australia</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- country end --> */}


         {/* <!-- package start --> */}
      <section
        className="package package-bg pos-rel pt-70 pb-120"
        style={{
          backgroundImage: `url(${background4})`,
          // minHeight: '400px',
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="sec-title mb-55">
            <div className="sec-title mb-10" style={{justifyContent:'center',display:'flex'}}>
              <h2 className="mb-10 wow skewIn" style={{fontSize:'40px'}}>
           Updates, Stories & Happenings </h2>
             </div>
              <div className="sec-title mb-45"  style={{justifyContent:'center',display:'flex'}}>
              <p>
                 "Stay informed and inspired with the latest news, engaging stories, and upcoming events."
              </p>
            </div>
          </div>
     
          <div className="col-12">
          <div className="row mt-none-30 d-flex justify-content-center">
              <div className="col-lg-4 co-12">
  {/* <div className="xb-package mt-30" style={{ height: '100%' }}>
    <div className="xb-item--inner" style={{
      height: '512px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <h1>News</h1>
      </div>
      <div>
        <img src="/assets/pic/news.png" alt="" style={{width:'100%',height:'170px',borderRadius:'15px 15px 0px 0px'}}/>
      </div>
      <div className="scroll-container mt-3" id="scrollBox"   style={{
    height: `${itemHeight * 3}px`, // 3 items visible
    overflow: 'hidden',
    position: 'relative'
  }}>
        <div className="scroll-inner" ref={scrollRef}>
          {extendedItems.map((text, i) => (
            <div className="scroll-item" key={i}>
              <div
                className="xb-item--description"
                style={{ fontSize: "18px", textAlign: "center" }}
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        
      }}>
        <a
          href="/News"
          style={{
            padding: "10px 20px",
            background: '#f09318',
            color: '#fff',
            borderRadius: "10px",
            textDecoration: "none"
          }}
        >
          View All
        </a>
      </div>
    </div>
  </div> */}
    <div className="xb-package mt-30" style={{ height: '100%' }}>
      <div className="xb-item--inner" style={{
        height: '512px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <h1>News</h1>
        </div>
        <div>
          <img src="/assets/pic/news.png" alt="" style={{ width: '100%', height: '170px', borderRadius: '15px 15px 0px 0px' }} />
        </div>

        <div className="scroll-container mt-3" id="scrollBox" style={{
          height: `${itemHeight * 3}px`, // 3 items visible
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div className="scroll-inner" ref={scrollRef}>
            {extendedItems.map((text, i) => (
              <div className="scroll-item" key={i}>
                <div
                  className="xb-item--description"
                  style={{ fontSize: "18px", textAlign: "center", padding: '10px 0' }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "center",
        }}>
          <a
            href="/News"
            style={{
              padding: "10px 20px",
              background: '#f09318',
              color: '#fff',
              borderRadius: "10px",
              textDecoration: "none"
            }}
          >
            View All
          </a>
        </div>
      </div>
    </div>

</div>

            <div className="col-lg-4 co-12">
              <div className="xb-package mt-30">
                <div className="xb-item--inner" style={{
      height:'512px'

    }}>
                  <div className="xb-item--img">
                    <h1 style={{justifyContent:'center',display:'flex'}}>StayInformed</h1>
                  </div>
                
                   <div className="xb-blog">
                  <div className="xb-item--inner">
                    <div className="xb-item--img">
                      <a href="/StayInformed">
                             <img src="/assets/pic/download.jpeg" alt="" style={{width:'100%',height:'215px'}}/>
                      </a>
                    </div>
                    <div className="xb-item--holder">
                      <a className="xb-item--category color-2" href="#!">
                        STUDENT VISA
                      </a>

                      <h3 className="xb-item--title border-effect">
                        <a href="/StayInformed">
                          A Student Visa allows you to study full-time in ..
                        </a>
                      </h3>
                      <div style={{justifyContent:'center',display:'flex'}}>
                 <a
      href="/events"
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#e38508',
        color: '#fff',
        fontWeight: '500',
        fontSize: '14px',
        borderRadius: '6px',
        textDecoration: 'none',
 
      }}
    >
      Read More →
    </a>
                      </div>
  
                    </div>
                    <a className="xb-overlay xb-overlay-link" href="/StayInformed"></a>
                  </div>
                </div>
                </div>
              </div>
            </div>
             
              <div className="col-lg-4 co-12">
              <div className="xb-package mt-30">
                <div className="xb-item--inner" style={{height:'512px'}}>
                  <div style={{justifyContent:'center',display:'flex'}}>
                    <h1>Event</h1>
                  </div>
                  {/* <div className="scroll-container mt-3" id="scrollBox">
                    <div className="scroll-inner" ref={scrollRef}>
                      {extendedItems.map((text, i) => (
                        <div className="scroll-item" key={i}>
                          <div
                            className="xb-item--description"
                            style={{ fontSize: "18px", textAlign: "center" }}
                          >
                            {text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div> */}
           <div
  style={{
    width: '100%',
  
    borderRadius: '10px',
    overflow: 'hidden',

    fontFamily: 'sans-serif',
  }}
>
  {/* Image */}
  <img
    src="/assets/pic/events.jpg"
    alt="Study in Hungary Event"
    style={{ width: '100%', display: 'block',height:'270px' }}
  />

  {/* Title */}
  <div style={{ padding: '16px' }}>
    <h3
      style={{
        fontSize: '17px',
        fontWeight: '600',
        color: '#0c2340',
        lineHeight: '1.6',
        marginBottom: '13px',
      }}
    >
     Study in Hungary and Greece, France -Goforean Institute's Private Universities Info Session
    </h3>

    {/* Button */}
   <div style={{justifyContent:'center',display:'flex'}}>
     <a
      href="/Activities"
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#e38508',
        color: '#fff',
        fontWeight: '500',
        fontSize: '14px',
        borderRadius: '6px',
   
        textDecoration: 'none',
      }}
    >
      Events →
    </a>
   </div>
  </div>
</div>

                </div>
              </div>
            </div>
          
            {/* <div className="col-lg-4 col-12">
              <div className="xb-package mt-30">
                <div className="xb-item--inner">
                  <div className="xb-item--img">
                    <a href="#!">
                      <img src="/assets/pic/Plane-on-takeoff.webp" alt="" />
                    </a>
                  </div>
                  <div className="xb-item--holder">
                    <h2 className="xb-item--title ul_li_center mb-2">
                      <a href="#!">ACTIVITIES</a>
                    </h2>
                    <p style={{ textAlign: "center" }}>Comming Soon!</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          </div>
        </div>
      </section>
      {/* <!-- package end --> */}

      {/* <!-- team start --> */}
      {/* <section className="team pb-120">
        <div className="container">
          <div className="team-wrap pos-rel">
            <div className="row mt-none-30">
              <div className="col-xl-6 mt-30">
                <div className="sec-title mb-45">
                  <h2 className="mb-40 wow skewIn">
                    Our trusted immigration <br /> <span> support team</span>
                  </h2>
                  <p>
                    At the heart of our commitment to providing exceptional
                    immigration solutions stands
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mt-30">
                <div className="xb-team text-center">
                  <div className="xb-item--inner" data-parallax='{"scale" : 1}'>
                    <div className="xb-item--img">
                      <img src="/assets/pic/team.jpg" alt="" />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--name">
                        <a href="">Janvi Patel</a>
                      </h3>
                      <span className="xb-item--designation">
                        Legal Advisor
                      </span>
                    </div>
                    <ul className="xb-item--social list-unstyled">
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
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mt-30">
                <div className="xb-team text-center">
                  <div className="xb-item--inner">
                    <div className="xb-item--img">
                      <img src="/assets/pic/profile4.jpg" alt="" />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--name">
                        <a href="">Vivek Sharma</a>
                      </h3>
                      <span className="xb-item--designation">
                        Education Counsellor
                      </span>
                    </div>
                    <ul className="xb-item--social list-unstyled">
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
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mt-30">
                <div className="xb-team text-center">
                  <div className="xb-item--inner">
                    <div className="xb-item--img">
                      <img src="/assets/pic/profile5 (3).jpg" alt="" />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--name">
                        <a href="">Kunal Mehta</a>
                      </h3>
                      <span className="xb-item--designation">
                        Visa Specialist
                      </span>
                    </div>
                    <ul className="xb-item--social list-unstyled">
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
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mt-30">
                <div className="xb-team text-center">
                  <div className="xb-item--inner">
                    <div className="xb-item--img">
                      <img src="/assets/pic/profile1 (2).jpg" alt="" />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--name">
                        <a href="">Krishna Varma</a>
                      </h3>
                      <span className="xb-item--designation">
                        Visa Coordinator
                      </span>
                    </div>
                    <ul className="xb-item--social list-unstyled">
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
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mt-30">
                <div className="xb-team text-center">
                  <div className="xb-item--inner">
                    <div className="xb-item--img">
                      <img src="/assets/pic/profile6.jpg" alt="" />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--name">
                        <a href="">Jay Patel</a>
                      </h3>
                      <span className="xb-item--designation">
                        General Manager
                      </span>
                    </div>
                    <ul className="xb-item--social list-unstyled">
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
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mt-30">
                <div className="xb-team text-center">
                  <div className="xb-item--inner">
                    <div className="xb-item--img">
                      <img src="/assets/pic/profile7 (1).jpg" alt="" />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--name">
                        <a href="">Drashti Vora</a>
                      </h3>
                      <span className="xb-item--designation">Case Manager</span>
                    </div>
                    <ul className="xb-item--social list-unstyled">
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
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="xb-team-bg">
              <div className="xb-bg xb-bg--1"></div>
              <div className="xb-bg xb-bg--2"></div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- team end --> */}
      <SuccessStories />
      {/* <!-- faq start --> */}
    <section className="faq pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="xb-faq-content">
              <div className="sec-title mb-125">
                <h2 className="mb-30 wow skewIn">
                  Common questions <br /> <span>answered</span>
                </h2>
                <p>
                  At the heart of our commitment to providing <br />
                  exceptional immigration solutions stands our trusted
                </p>
              </div>
              <div className="faq-img">
                <img src="/assets/pic/faq_img.png" alt="FAQ Visual" />
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="xb-faq">
              <ul className="accordion_box clearfix">
                {faqData.map((item, index) => (
                  <li
                    key={item.id}
                    className={`accordion block ${
                      index === 0 ? "active-block" : ""
                    }`}
                  >
                    <div className="acc-btn">
                      {item.question}
                      <span className="arrow"></span>
                    </div>
                    <div className={`acc_body ${index === 0 ? "current" : ""}`}>
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* <!-- faq end --> */}

      {/* <!-- category start --> */}
    <div style={{ margin: "60px 0px " }}>
      <div className="d-flex justify-content-center">
        <div className="sec-title mb-60 text-center">
          <h2 className="mb-30 wow skewIn">
            Every photo tells our story
            <br /> <span> Media</span>
          </h2>
        </div>
      </div>

      <Swiper
        className="xb-category-slider"
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={7}
        loop={true}
        loopAdditionalSlides={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        allowTouchMove={true}
        grabCursor={true}
        speed={150}
        breakpoints={{
          1600: { slidesPerView: 7 },
          1200: { slidesPerView: 6 },
          992: { slidesPerView: 5 },
          768: { slidesPerView: 4 },
          576: { slidesPerView: 3 },
          0: { slidesPerView: 2 },
        }}
      >
        {galleryData.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={`https://drive.google.com/thumbnail?id=${item.image_id}`}
              alt={item.image_name || `Slide ${index + 1}`}
              style={{
                width: "300px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      {/* <!-- category end --> */}

      {/* <!-- blog start --> */}

      <section className="blog pb-130">
  <div className="container">
    <div className="blog-wrap">
      <div className="sec-title mb-60 text-center">
        <h2 className="mb-30 wow skewIn">
          Cast Your Eyes Upon Our <br /> <span> Newest Article</span>
        </h2>
        <p style={{ textAlign: "center" }}>
          Explore the most recent addition to our informative articles
        </p>
      </div>
      <div className="row justify-content-md-center mt-none-30">
        {blogData.map((blog, index) => {
          // Convert Google Drive shareable link to direct image link if needed
          let imageUrl = blog.image_id
            ? `https://drive.google.com/thumbnail?id=${blog.image_id}`
            : "/assets/pic/img_01blog.jpg"; // fallback image

          return (
            <div className="col-lg-4 col-md-6 mt-30" key={blog.id}>
              <div className="xb-blog">
                <div className="xb-item--inner">
                  <div className="xb-item--img">
                    <a href={`/StayInformedDetails?id=${blog.id}`}>
                      <img src={imageUrl} alt={blog.heading} style={{width:"100%"}}/>
                    </a>
                  </div>
                  <div className="xb-item--holder">
                    <span className={`xb-item--category color-${(index % 3) + 1}`}>
                      {blog.heading.length > 20 ? blog.heading.slice(0, 20) + "..." : blog.heading}
                    </span>
                    <h3 className="xb-item--title border-effect">
                      <a href={`/StayInformedDetails?id=${blog.id}`}>
                        {blog.title.length > 60 ? blog.title.slice(0, 60) + "..." : blog.title}
                      </a>
                    </h3>
                    <a className="xb-item--link" href={`/StayInformedDetails?id=${blog.id}`}>
                      Read More
                      <span>
                        <img src="assets/img/icon/right_arrow.svg" alt="" />
                      </span>
                    </a>
                  </div>
                  <a className="xb-overlay xb-overlay-link" href={`/StayInformedDetails?id=${blog.id}`}></a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="xb-blog-bg"
        style={{
          backgroundImage: `url(${background4})`,
          background: "#EDF3F5",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  </div>
</section>

      {/* <!-- blog end --> */}


{/* form start */}

  <section id="reg_login">
  <div class="container">
    <div class="user signinBx">
   <div class="hero-section">
  <div class="bg-image"></div>
  <div class="text-content">
    <h1 style={{color:'#e38508'}}>Study Abroad Made Simple with Trusted Visa Experts</h1>
    <ul>
      <li>Planning to study abroad? Let our trusted visa experts simplify every step.</li>
      <li>Say goodbye to confusion — we handle all your study visa documentation and formalities.</li>
      <li>With us, your dream of international education becomes a smooth and stress-free reality.</li>
      <li>Trusted by thousands of students for reliable and timely visa approvals.</li>
      <li>Let our visa consultants turn your study abroad dream into a successful journey.</li>
    </ul>
      <a  href="https://wa.me/YourPhoneNumber" 
      target="_blank" > <button class="cta-button" style={{color:'#e38508'}}>
   Talk to Experts</button></a>
  </div>
</div>
      <PersonalGuidanceForm></PersonalGuidanceForm>
    </div>

  </div>
</section>

{/* form end */}

      {/* <!-- brand start --> */}
      {/* <section
        className="brand brand-pb z-1 pos-rel"
        style={{ background: "#F0F2F6" }}
      >
        <div className="sec-title sec-title--travel text-center mb-20">
          <span className="subtitle mt-5">Our Brand Alliances</span>
          <h2>Elevating Travel Experiences</h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="xb-category-slider"
        >
          {brandImages.map((img, index) => (
            <SwiperSlide key={index} className="xb-brand xb-brand2">
              <a className="xb-item--inner" href="#!">
                <img
                  src={img}
                  alt={`brand-${index}`}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <h2
          className="xb-strock-text-brand xb-strock-text text-center mt-5"
          style={{ opacity: 0.1 }}
        >
          Our Brand
        </h2>
      </section> */}
      {/* <!-- brand end --> */}
      {/* <!-- cta start --> */}
      <section className="cta bg-white" style={{paddingTop:'230px'}}>
        <div className="container">
          <div className="xb-brand2__mt">
            <div
              className="xb-cta2 ul_li_between"
              style={{
                backgroundImage: `url(${background10})`,
                // minHeight: '400px',
                position: "relative",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="sec-title sec-title--white sec-title--travel mt-20">
                <span className="subtitle">Wanna travel with Goforen?</span>
                <h2>
                  Create Unforgettable <br /> Moments with Us
                </h2>
              </div>
              <a
                className="thm-btn thm-btn--white thm-btn--trv mt-20"
                href="/Contact"
              >
            
                Book Your Appointment
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                  >
                    <path
                      d="M6.68164 13.28L11.5716 8.9333C12.1491 8.41997 12.1491 7.57997 11.5716 7.06664L6.68164 2.71997"
                      stroke="#0F172A"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- cta end --> */}
      {/* working time  */}
      
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
            background:'#edf3f5'
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
                  <div className="col-lg-3 mt-30 col-md-6" style={{
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
      {/* workingtime end  */}
      {/* <!-- newsletter start --> */}
      <section className="newsletter mt-5">
        <div className="container">
          <div className="xb-newsletter pos-rel ">
            <div className="row">
              <div className="col-lg-7">
                <div className="">
                  <div className="xb-item--holder mb-30">
                    <span>newsletter</span>
                    <h3>
                      Subscribe to the free newsletter to receive the latest{" "}
                      <br /> news & case studies!
                    </h3>
                  </div>
    <form className="xb-item--form" onSubmit={handleSubscribe}>
      <input
        type="text"
        placeholder="Your e-mail address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="colorcode" type="submit">
        Subscribe
      </button>
    </form>
                </div>
              </div>
            </div>
            <div className="xb-newsletter__img">
              <img src="/assets/pic/BannerMob.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- newsletter end --> */}

      <FooterHome />
    </div>
  );
}
