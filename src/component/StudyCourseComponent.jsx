// import React from 'react'

// export default function Vacancies() {
//   return (
//     <div>
      

// 	<section className=' pt-60 pb-60' style={{backgroundColor:'#edf3f57a'}}>
// 		<div class="container">
//       <h2>  Vacancies</h2>
//   <div class="vacancy-formv">
//     {/* <!-- 1. Country --> */}
//     <select>
//       <option disabled selected>Select Country</option>
//       <option>India</option>
//       <option>UAE</option>
//       <option>USA</option>
//     </select>

//     {/* <!-- 2. Type of Industry --> */}
//     <select>
//       <option disabled selected>Select Industry Type</option>
//       <option>IT</option>
//       <option>Healthcare</option>
//       <option>Construction</option>
//     </select>

//     {/* <!-- 3. Job Position with Details --> */}
//     <input type="text" placeholder="Job Position & Details" className='Job_Positionv' />

//     {/* <!-- 4. Master Agent Code --> */}
//     <input type="number" placeholder="Master Agent - Code" />

//     <button class="submit-btnv">Submit</button>
//     <button class="reset-btnv">Reset</button>
//   </div>
// 			<div class="row">
// 				<div class="col-md-12 ">
// 					<ul class="job-listv">
// 						<li class="job-previewv">
// 							<div class="contentv float-leftv">
// 								<h4 class="job-titlev">
// 									Senior Web Designer
// 								</h4>
// 								{/* <h5 class="companyv">
// 									Seattle, WA
// 								</h5> */}
//                 <ul class="companyv mt-2">
//                    <li style={{marginRight:'10px',color:'#e38508'}}><i class="fas fa-building"></i> Company</li>
//                     <li style={{color:'#07374d'}}><i class="fas fa-map-marker-alt"></i> Anywhere</li>
//                 </ul>
// 							</div>
//               <div class="ej-job-list-item-col ej-job-time-col">
//                   <p class="job-titlev">01 Jan, 2030</p>
//                   <p class="ej-list-subv">No of vacancies:  2 </p>
//               </div>
// 							<a href="#" class="btnv btn-applyv float-sm-rightv float-xs-leftv">
// 								Apply
// 							</a>
// 						</li>
            
// 						<li class="job-previewv">
// 							<div class="contentv float-leftv">
// 								<h4 class="job-titlev">
// 									Front-End Engineer
// 								</h4>
// 								{/* <h5 class="companyv">
// 									New York, NY
// 								</h5> */}
//                 <ul class="companyv mt-2">
//                    <li style={{marginRight:'10px',color:'#e38508'}}><i class="fas fa-building"></i> Company</li>
//                     <li style={{color:'#07374d'}}><i class="fas fa-map-marker-alt"></i> Anywhere</li>
//                 </ul>
// 							</div>
//                <div class="ej-job-list-item-col ej-job-time-col">
//                   <p class="job-titlev">01 Jan, 2030</p>
//                   <p class="ej-list-subv">No of vacancies:  2 </p>
//               </div>
// 							<a href="#" class="btnv btn-applyv float-sm-rightv float-xs-leftv">
// 								Apply
// 							</a>
// 						</li>
					
// 					</ul>
// 				</div>
// 			</div>
// 		</div>
// 	</section>
//     </div>
//   )
// }
import React from 'react'

const Vacancies = () => {
  return (
    <>
    
       <div>
      

	<section className=' pt-60 pb-60' style={{backgroundColor:'#edf3f57a'}}>
		<div class="container">
      <h2>  Study Course</h2>
  <div class="vacancy-formv">
    {/* <!-- 1. Country --> */}
    <select>
      <option disabled selected>Select Country</option>
      <option>India</option>
      <option>UAE</option>
      <option>USA</option>
    </select>

    {/* <!-- 2. Type of Industry --> */}
    <select className="Job_Positionv">
  <option value="">Select Faculty of Study</option>
  <option value="engineering">Engineering & Technology</option>
  <option value="business">Business & Management</option>
  <option value="cs">Computer Science & IT</option>
  <option value="health">Health & Medical Sciences</option>
  <option value="arts">Arts & Humanities</option>
  <option value="law">Law</option>
  <option value="social">Social Sciences</option>
  <option value="education">Education & Teaching</option>
  <option value="sciences">Sciences</option>
  <option value="pharmacy">Pharmacy</option>
  <option value="nursing">Nursing</option>
  <option value="architecture">Architecture & Design</option>
  <option value="agriculture">Agriculture & Veterinary Sciences</option>
  <option value="hospitality">Tourism & Hospitality</option>
  <option value="media">Media & Communication</option>
  <option value="environment">Environmental Studies</option>
  <option value="performing">Performing Arts</option>
  <option value="fashion">Fashion & Interior Design</option>
</select>


    {/* <!-- 3. Job Position with Details --> */}
   <select className="Job_Positionv">
  <option value="">Select Study Level</option>
  <option value="certificate">Certificate Course</option>
  <option value="diploma">Diploma</option>
  <option value="adv_diploma">Advanced Diploma</option>
  <option value="bachelors">Bachelor’s Degree</option>
  <option value="postgrad_diploma">Postgraduate Diploma</option>
  <option value="masters">Master’s Degree</option>
  <option value="phd">Doctorate / PhD</option>
  <option value="foundation">Foundation Program</option>
  <option value="language">Language Course</option>
  <option value="short">Short-Term Course</option>
  <option value="exchange">Exchange Program</option>
  <option value="online">Online / Distance Learning</option>
</select>


    {/* <!-- 4. Master Agent Code --> */}
     <input type="text" placeholder="Nature Of Collages" className='Job_Positionv' />

    <button class="submit-btnv">Submit</button>
    <button class="reset-btnv">Reset</button>
  </div>
			<div class="row">
				<div class="col-md-12 ">
					<ul class="job-listv">
						<li class="job-previewv">
							<div class="contentv float-leftv">
								<h4 class="job-titlev">
									Business & Management
								</h4>
								{/* <h5 class="companyv">
									Seattle, WA
								</h5> */}
                <ul class="companyv mt-2">
                   <li style={{marginRight:'10px',color:'#e38508'}}><i class="fas fa-building"></i> Company</li>
                    <li style={{color:'#07374d'}}><i class="fas fa-map-marker-alt"></i> Anywhere</li>
                </ul>
							</div>
              <div class="ej-job-list-item-col ej-job-time-col">
                  <p class="job-titlev">01 Jan, 2030</p>
                  <p class="ej-list-subv">No of vacancies:  2 </p>
              </div>
							<a href="#" class="btnv btn-applyv float-sm-rightv float-xs-leftv">
								Apply
							</a>
						</li>
            
						<li class="job-previewv">
							<div class="contentv float-leftv">
								<h4 class="job-titlev">
							Tourism & Hospitality
								</h4>
								{/* <h5 class="companyv">
									New York, NY
								</h5> */}
                <ul class="companyv mt-2">
                   <li style={{marginRight:'10px',color:'#e38508'}}><i class="fas fa-building"></i> Company</li>
                    <li style={{color:'#07374d'}}><i class="fas fa-map-marker-alt"></i> Anywhere</li>
                </ul>
							</div>
               <div class="ej-job-list-item-col ej-job-time-col">
                  <p class="job-titlev">01 Jan, 2030</p>
                  <p class="ej-list-subv">No of vacancies:  2 </p>
              </div>
							<a href="#" class="btnv btn-applyv float-sm-rightv float-xs-leftv">
								Apply
							</a>
						</li>
					
					</ul>
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
                      <a style={{ color: "#fff" }} href="/StudyCourse">
                      View More
                      </a>
                    </button>
        </div>
		</div>
	</section>
    </div>
    </>
  )
}

export default Vacancies
