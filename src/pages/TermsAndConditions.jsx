import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import SuccessStories from "../component/SuccessStories";

export default function TermsAndConditions() {
   const [background, setBackground] = useState("");
         
           useEffect(() => {
             const backgroundUrl ="/assets/pic/breadcrumb-bg.jpg";
             setBackground(backgroundUrl);
           }, []);
               const [background12, setBackground12] = useState("");
                 
                   useEffect(() => {
                     const backgroundUrl12 = "assets/img/bg/blog_bg.png";
                     setBackground12(backgroundUrl12);
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
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>Terms & Conditions</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">Terms & Conditions</li>
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

      {/* What is a visa start  */}
      <section className="about pos-rel  pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center mt-none-30">
            <div className="col-12 mt-30">
              <div className="sec-title sec-title--big style-2 mb-20">
                
                <p>Goforen: Terms and Conditions of use</p>
                <p>About this Website:</p>
                <p>All over our website, there are disclaimers. Goforen (this website) is an independent entity.</p>
                <br />
                <span className="wow skewIn sec-title--sub">
           <h3 style={{letterSpacing:'4px'}}> Affiliation:</h3>
                 </span>
            
                <p>No government or organization responsible for granting permits is connected to Goforen. Immigration advice and personalized services are offered by Goforen, who also charges a service fee. It runs the privately published website www.goforen.com, which provides general knowledge on topics pertaining to immigration/permits. It is neither a law firm nor does it offer its users any type of legal advice or recommendations. The information on our website should only be used as a source of general knowledge and not as a replacement for expert counsel. Regarding our users' legal rights, legal remedies, legal defenses, legal options, or legal strategies, we do not offer legal advice, opinions, or recommendations. By using this website and/or making any purchases through it, you agree to be bound by the Goforen Terms of Use, which apply to any purchases or hire services or agreement you make.</p>

                <br />
                <span className="wow skewIn sec-title--sub" >
        <h3 style={{letterSpacing:'4px'}}>   Limitation of Liability:</h3>
               
              </span>
                <p>Even if Goforen has been informed of the possibility of such damages, Goforen shall not be liable for any special or consequential damages that result from the use, or the inability to use, the materials on this website, or the performance of the products. The above limitation or exclusion may not apply to you because applicable law may not permit the limitation or exclusion of liability, incidental damages, or compensatory loss.</p>

                <br />
                <span className="wow skewIn sec-title--sub">
           <h3 style={{letterSpacing:'4px'}}>      Limitation on Personal Use:</h3>
            </span>
               
                  <p>Goforen only provides information, news, articles, emails, products, and services for your personal, non-commercial use. Without our express written consent, you are not permitted to alter, duplicate, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, or other content, products, or services obtained from Goforen.</p>

                  <br />
                  <span className="wow skewIn sec-title--sub">
                 <h3 style={{letterSpacing:'4px'}}>   Links:</h3>
               
               
                </span>
                <p>This website contains clickable links that could lead you away from www.goforen.com. We provide links for your convenience. The presence of any link does not, however, imply endorsement or approval on the part of Goforen. Any links to or from Goforen.com are not under our control. Any level of representation of our website is prohibited.</p>

                <br />
                <span className="wow skewIn sec-title--sub">
                 <h3 style={{letterSpacing:'4px'}}>

                  Refund Policy:
                 </h3>
                
                </span>
                <p>There are no refunds.</p>
                <p>*Please keep in mind that your payment is non-refundable in the event of a natural disaster or the outbreak of a pandemic.</p>
                <p>According to our policies and in accordance with this agreement, Goforen Visa and Immigration reserves the right to refuse to issue a refund.</p>
                <p>
                 By agreeing to our terms and conditions, you agree you will not ask for a charge back under any circumstances.
                You hereby agree that you will not contact your Credit Card Company or bank to file a dispute as this will only delay the refund process</p>

                <br />
                <span className="wow skewIn sec-title--sub">
               <h3 style={{letterSpacing:'4px'}}>

                  Other Services:
               </h3>
               
                </span>
                <p>
        •	100% non-refundable if the hard copy of the agreement is not signed by you and duly returned to us.<br/>
        •	100% non-refundable if you purchase &amp; change your mind later and decide to withdraw.<br/>
        •	100% non-refundable if you do not wish to continue with our services.<br/>
        •	100% non-refundable if – Failure of the medical examination by the client or his/her family members included in the permit request.<br/>
    •	Failure to provide a genuine Police Clearance Certificate which is not less than 3 months old.<br/>
    •	Failure to prove sufficient funds for settlement or maintenance by the client or his/her family members included in the permit request. .<br/>
    •	Submission of fraudulent papers.<br/>
    •	A prior violation of any immigration law by the client or any of his or her family members included in the permit request.<br/>
    •	Late submission of any additional papers requested by the consulate at a later stage.
</p>

<br />
                <span className="wow skewIn sec-title--sub">
          <h3 style={{letterSpacing:'4px'}}>

                  Data protection principles:
          </h3>
             
                </span>
                <p>
    1.	We will comply with data protection law. This says that the personal information we hold about you must be:<br/>
    2.	Used lawfully, fairly, and in a transparent way.<br/>
    3.	Collected only for valid purposes that we have clearly explained to you and not used in any way that is incompatible with those purposes.<br/>
    4.	Relevant to the purposes we have told you about and limited only to those purposes.<br/>
    5.	Accurate and kept up to date.<br/>
    6.	Kept securely.<br/>
</p>

<br />
                <span className="wow skewIn sec-title--sub">
           <h3 style={{letterSpacing:'4px'}}>

                  The kind of information we hold about you:
           </h3>
          
                </span>
                <p>Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data). There are “special categories” of more sensitive personal data which require a higher level of protection. We may collect, store, and use the following categories of personal information about you: Personal contact details such as name, title, addresses, telephone numbers, and personal email addresses. Date of birth. Gender. Marital status. Next of kin and emergency contact information. National Insurance or TAX ID number/PAN card. Bank account details, payroll records and tax status information. Driving license. Grievance information. Information about your use of our information and communications systems.</p>

                <br />
                <span className="wow skewIn sec-title--sub">
              <h3 style={{letterSpacing:'4px'}}>

                  Changes and amendments:
              </h3>
          
                </span>
                <p>We reserve the right to modify this Agreement or its terms relating to the Website and Services at any time, effective upon posting of an updated version of this Agreement on the Website. When we do, we will revise the updated date at the bottom of this page. Continued use of the Website and Services after any such changes shall constitute your consent to such changes. Policy was created with Website Policies</p>

                <br />
                <span className="wow skewIn sec-title--sub">
                 <h3 style={{letterSpacing:'4px'}}>

                  Acceptance of these terms:
                 </h3>
                
                </span>
                <p>You acknowledge that you have read this Agreement and agree to all its terms and conditions. By accessing and using the Website and Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to access or use the Website and Services Contacting us</p>
                <p>If you would like to contact us to understand more about this Agreement or wish to contact us concerning any matter relating to it, you may send an email to <a href="mailto:goforen@gmail.com">goforen@gmail.com</a> or <a href="mailto:info@goforen.com">info@goforen.com</a></p>

              </div>
            </div>
            
          </div>
        
        </div>
        <div className="about-shape">
          <div className="shape shape--1">
            <div className="shape-inner" data-parallax='{"x":-50,"y":-80}'>
              <img src="assets/img/shape/a_shape1.png" alt="" />
            </div>
          </div>
          <div className="shape shape--2" style={{ top: "70%", right: "7%" }}>
            <div className="shape-inner" data-parallax='{"x":50,"y":-80}'>
              <img src="assets/img/shape/a_shape2.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* What is a visa end  */}

      <SuccessStories />
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
