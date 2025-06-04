import React, { useEffect, useState } from 'react';
import Newscroller from './Newscroller';

const Visacard = () => {
  const [background1, setBackground1] = useState('');
  const [background2, setBackground2] = useState('');

  useEffect(() => {
    setBackground1('assets/img/bg/service_bg.png');
    setBackground2('https://www.thedreamvisa.com/images/online-img.jpg');
  }, []);

  // Different news for each card
  const newsTourist = [
    "Temporary Residents Can Now Apply for the Canada Child Benefit (CCB)",
    "Canada&amp;rsquo;s CRS System: How It Works",
    "Canada to End LMIA Job Offer Points in Express Entry",
       "New Zealand Increases Visa Fees and Charges, Introduces New Immigration Requirements&amp;quot;",
          "Canada Child Benefit: Eligibility and Payment Dates for Temporary Residents",
  ];
  const newsCommercial = [
    "Canada Expands PGWP Eligibility with New Education Programs",
    "Canada Updates Rules for International Students in 2025",
    "Canada Shifts to Standard Process for Study Permits, Closes SDS and NSE Programs",
       "Top 25 High-Paying Diploma Programs in Canada for 2025: Quick Careers in 1-2 Years",
          "Eligibility Criteria for Canada’s Study Permit Pilot Project",
  ];
  const newsStudent = [
    "Tips for a Successful Canada Visitor Visa Application",
    "New Canada Visitor Visa Rules Now in Effect",
    "Canada Ends Work Permit Applications for Visitor Visa Holders",
       "EU Confirms Start Date for Entry/Exit System",
  "UK Introduces Electronic Travel Authorization for Visitors Starting 2025: news on 27 November 2024",
  ];
  const newsResidence = [
    "US Offers Green Card Pathway for Indian Entrepreneurs News on 6th Aug",
    "Enhancements and Adjustments to Canada’s Federal Business Programs Unveiled by Minister Miller",
    "New Improvements To Startup Visa Program",
       "Start-Up Visa Program",
          "IT professionals who do not need a Canadian work permit  "
  ];
  const newsWorking = [
    "Benefits of Working in Croatia &amp;amp; Pathway to PR",
    "Work in Croatia: Your Gateway to a Better Career and Life",
    "How to Get a Work Visa for Bulgaria &amp;amp; Relocation Process",
       " A Promising Destination for Indian Job Seekers",
          "Work in Belgium: A Gateway to a Better Future for Indian Job Seekers"
  ];

  return (
    <section className="visa type ">
      <div className="container">
        <div className="service-wrap pos-rel">
          <div className="service-img-wrap">
            <div className="service-bg" style={{ backgroundImage: `url(${background1})` }}></div>
            <div className="service-img wow skewIn" data-wow-delay="100ms" style={{ backgroundImage: `url(${background2})`,backgroundSize:'cover' }}></div>
          </div>

          <div className="sec-title wow skewIn pt-120">
            <h2 className="mb-60">Visa types and eligibility <br /> <span>assessment</span></h2>
          </div>

          <div className="row justify-content-md-center mt-none-30">
  {/* First row: 2 cards */}
  <div className="row w-100 justify-content-start">
    <VisaCard title="Tourist Visa" icon="sv_01.svg" news={newsTourist}  />
    <VisaCard title="Commercial Visa" icon="sv_02.svg"  news={newsCommercial} />
  </div>

  {/* Second row: 3 cards */}
  <div className="row w-100 justify-content-start">
    <VisaCard title="Student Visa" icon="sv_03.svg"  news={newsStudent} />
    <VisaCard title="Residence Visa" icon="sv_04.svg" news={newsResidence} />
    <VisaCard title="Working Visa" icon="sv_05.svg" news={newsWorking} />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

const VisaCard = ({ title, icon, news }) => (
  <div className="col-lg-4 col-md-6 mt-30">
    <div className="xb-service">
      <div className="xb-item--inner" style={{ padding: '35px 10px',marginBottom:'25px' }}>
        <div className="xb-item--icon mb-20">
          <img src={`assets/img/icon/${icon}`} alt="" />
        </div>
        <h3 className="xb-item--title mb-20"><a href="">{title}</a></h3>
        <Newscroller news={news} />
        <div className="text-center mt-20">
          <a href="/Visaservice" className="btn" style={{ background: '#00cc99', color: '#fff' }}>View All</a>
        </div>
      </div>
    </div>
  </div>
);

export default Visacard;
