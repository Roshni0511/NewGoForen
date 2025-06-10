import React from 'react'

export default function Vacancies() {
  return (
    <div>
      

	<section className=' pt-60 pb-60' style={{backgroundColor:'#edf3f57a'}}>
		<div class="container">
      <h2>  Vacancies</h2>
  <div class="vacancy-formv">
    {/* <!-- 1. Country --> */}
    <select>
      <option disabled selected>Select Country</option>
      <option>India</option>
      <option>UAE</option>
      <option>USA</option>
    </select>

    {/* <!-- 2. Type of Industry --> */}
    <select>
      <option disabled selected>Select Industry Type</option>
      <option>IT</option>
      <option>Healthcare</option>
      <option>Construction</option>
    </select>

    {/* <!-- 3. Job Position with Details --> */}
    <input type="text" placeholder="Job Position & Details" className='Job_Positionv' />

    {/* <!-- 4. Master Agent Code --> */}
    <input type="number" placeholder="Master Agent - Code" />

    <button class="submit-btnv">Submit</button>
    <button class="reset-btnv">Reset</button>
  </div>
			<div class="row">
				<div class="col-md-12 ">
					<ul class="job-listv">
						<li class="job-previewv">
							<div class="contentv float-leftv">
								<h4 class="job-titlev">
									Senior Web Designer
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
									Front-End Engineer
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
		</div>
	</section>
    </div>
  )
}
