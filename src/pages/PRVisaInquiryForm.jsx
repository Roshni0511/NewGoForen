import React, { useEffect, useState } from 'react';
import axios from 'axios';

const custom_input = {
  border: '1px solid #ced4da',
  borderRadius: '4px',
  padding: '0.375rem 0.75rem',
  fontSize: '1rem',
};

const PRVisaInquiryForm = () => {
  const [formData, setFormData] = useState({
    desired_country: '',
    desired_visa_route: '',
    relation: '',
    name: '',
    number: '',
    landline: '',
    alt_number: '',
    email: '',
    dob: '',
    marital_status: '',
    no_of_child: '',
    flat_no: '',
    building_name: '',
    road_street: '',
    pincode: '',
    area: '',
    city: '',
  });

  const [resume, setResume] = useState(null);

  const [education, setEducation] = useState([
    { qualification: '', stream_of_degree: '', major_degree: '', year_of_completion: '', percentage: '', total_backlog: '' }
  ]);
    const [countries, setCountries] = useState([]);
    const [VisaTypes, setVisaTypes] = useState([]);
  
    // Fetch country data
    useEffect(() => {
      axios.get("http://localhost:8000/get_country_data/")
        .then((res) => setCountries(res.data))
        .catch((err) => console.error("Error fetching countries:", err));
    }, []);
  
    // Fetch visa data
    useEffect(() => {
      axios.get("http://localhost:8000/get_visa_services/")
        .then((res) => setVisaTypes(res.data))
        .catch((err) => console.error("Error fetching countries:", err));
    }, []);
   
const handleSelect2 = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

  const [employment, setEmployment] = useState([
    { company: '', designation: '', from_date: '', to_date: '', no_of_years: '' }
  ]);

  const [exams, setExams] = useState([
    { exam: '', listening: '', reading: '', writing: '', speaking: '', final_score: '' }
  ]);

  const [tests, setTests] = useState([
    { exam: '', verbal_reasoning: '', quantitative_reasoning: '', analytical_writing: '', final_score: '' }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNestedChange = (index, key, value, state, setter) => {
    const updated = [...state];
    updated[index][key] = value;
    setter(updated);
  };

  const handleAddRow = (state, setter, emptyTemplate) => {
    setter([...state, emptyTemplate]);
  };

  const handleRemoveRow = (index, state, setter) => {
    const updated = [...state];
    updated.splice(index, 1);
    setter(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submission = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        submission.append(key, value);
      });

      submission.append('resume', resume);
      submission.append('education_qualifications', JSON.stringify(education));
      submission.append('employeement_details', JSON.stringify(employment));
      submission.append('exam_details', JSON.stringify(exams));
      submission.append('test_details', JSON.stringify(tests));

      const response = await axios.post('http://localhost:8000/submit-pr-visa-inquiry/', submission, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      alert(response.data.success + "\nInquiry ID: " + response.data.inquiry_id);
    } catch (error) {
      console.error(error);
      alert('Error submitting form: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="container mt-4">
<div className="row g-3">
    <div className="col-md-6">
      <label className="form-label">Desired Country</label>
    <select onChange={handleSelect2} name="desired_country" className="form-select" style={custom_input}>
        <option value="">Select a Country...</option>
        {countries.map((country) => (
          <option key={country.id} value={country.country}>
            {country.country}
          </option>
        ))}
      </select>
    </div>

 <div className="col-md-6">
  <label className="form-label">Desired Visa Route</label>
  <select
    name="desired_visa_route"
    className="form-control"
    style={custom_input}
    onChange={handleSelect2}
    required
  >
    <option value="">-- Select Visa Route --</option>
    {VisaTypes.map((visa) => (
      <option key={visa.id} value={visa.visa_type}>
        {visa.visa_type}
      </option>
    ))}
  </select>
</div>


  <div className="col-md-6">
    <label className="form-label">Relation</label>
    <input
      type="text"
      name="relation"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
      required
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Full Name</label>
    <input
      type="text"
      name="name"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
      required
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Mobile Number</label>
    <input
      type="text"
      name="number"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
      required
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Landline</label>
    <input
      type="text"
      name="landline"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Alternate Number</label>
    <input
      type="text"
      name="alt_number"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Email</label>
    <input
      type="email"
      name="email"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
      required
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Date of Birth</label>
    <input
      type="date"
      name="dob"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
      required
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Marital Status</label>
    <select
      name="marital_status"
      className="form-select"
      style={custom_input}
      onChange={handleChange}
    >
      <option value="">Select</option>
      <option value="Single">Single</option>
      <option value="Married">Married</option>
      <option value="Divorced">Divorced</option>
      <option value="Widowed">Widowed</option>
    </select>
  </div>

  <div className="col-md-6">
    <label className="form-label">Number of Children</label>
    <input
      type="number"
      name="no_of_child"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Flat No.</label>
    <input
      type="text"
      name="flat_no"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Building Name</label>
    <input
      type="text"
      name="building_name"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Road/Street</label>
    <input
      type="text"
      name="road_street"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Pincode</label>
    <input
      type="text"
      name="pincode"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">Area</label>
    <input
      type="text"
      name="area"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
    />
  </div>

  <div className="col-md-6">
    <label className="form-label">City</label>
    <input
      type="text"
      name="city"
      className="form-control"
      style={custom_input}
      onChange={handleChange}
    />
  </div>

        <div className="col-md-6">
          <label className="form-label">Upload Resume</label>
          <input type="file" className="form-control" onChange={(e) => setResume(e.target.files[0])} required />
        </div>
      </div>

      <hr />
      <h3>Education Details</h3>
      {education.map((edu, index) => (
        <div className="row g-3 align-items-end" key={index}>
          {[
            { label: 'Qualification', name: 'qualification' },
            { label: 'Stream', name: 'stream_of_degree' },
            { label: 'Major', name: 'major_degree' },
            { label: 'Completion Year', name: 'year_of_completion' },
            { label: 'Percentage', name: 'percentage' },
            { label: 'Total Backlogs', name: 'total_backlog' }
          ].map(({ label, name }) => (
            <div className="col-md-4" key={name}>
              <label className="form-label">{label}</label>
              <input
                value={edu[name] || ''}
                onChange={(e) => handleNestedChange(index, name, e.target.value, education, setEducation)}
                className="form-control"
              />
            </div>
          ))}
          <div className="col-md-2">
            <button type="button" className="btn btn-danger" onClick={() => handleRemoveRow(index, education, setEducation)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <button type="button" className="btn btn-primary my-2" onClick={() => handleAddRow(education, setEducation, {
        qualification: '', stream_of_degree: '', major_degree: '', year_of_completion: '', percentage: '', total_backlog: ''
      })}>
        + Add Education
      </button>

      <hr />
      <h3>Employment Details</h3>
      {employment.map((emp, index) => (
        <div className="row g-3 align-items-end" key={index}>
          {[
            { label: 'Company', name: 'company', type: 'text' },
            { label: 'Designation', name: 'designation', type: 'text' },
            { label: 'From Date', name: 'from_date', type: 'date' },
            { label: 'To Date', name: 'to_date', type: 'date' },
            { label: 'Years', name: 'no_of_years', type: 'text' }
          ].map(({ label, name, type }) => (
            <div className="col-md-4" key={name}>
              <label className="form-label">{label}</label>
              <input
                type={type}
                value={emp[name] || ''}
                onChange={(e) => handleNestedChange(index, name, e.target.value, employment, setEmployment)}
                className="form-control"
                style={custom_input}
              />
            </div>
          ))}
          <div className="col-md-2">
            <button type="button" className="btn btn-danger" onClick={() => handleRemoveRow(index, employment, setEmployment)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <button type="button" className="btn btn-primary my-2" onClick={() => handleAddRow(employment, setEmployment, {
        company: '', designation: '', from_date: '', to_date: '', no_of_years: ''
      })}>
        + Add Employment
      </button>

      <hr />
      <h3>Exam Details</h3>
      {exams.map((exam, index) => (
        <div className="row g-3 align-items-end" key={index}>
          {[
            { label: 'Exam', name: 'exam' },
            { label: 'Listening', name: 'listening' },
            { label: 'Reading', name: 'reading' },
            { label: 'Writing', name: 'writing' },
            { label: 'Speaking', name: 'speaking' },
            { label: 'Final Score', name: 'final_score' }
          ].map(({ label, name }) => (
            <div className="col-md-4" key={name}>
              <label className="form-label">{label}</label>
              <input
                value={exam[name] || ''}
                onChange={(e) => handleNestedChange(index, name, e.target.value, exams, setExams)}
                className="form-control"
              />
            </div>
          ))}
          <div className="col-md-2">
            <button type="button" className="btn btn-danger" onClick={() => handleRemoveRow(index, exams, setExams)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <button type="button" className="btn btn-primary my-2" onClick={() => handleAddRow(exams, setExams, {
        exam: '', listening: '', reading: '', writing: '', speaking: '', final_score: ''
      })}>
        + Add Exam
      </button>

      <hr />
      <h3>Test Details</h3>
      {tests.map((test, index) => (
        <div className="row g-3 align-items-end" key={index}>
          {[
            { label: 'Test Name', name: 'exam' },
            { label: 'Verbal Reasoning', name: 'verbal_reasoning' },
            { label: 'Quantitative Reasoning', name: 'quantitative_reasoning' },
            { label: 'Analytical Writing', name: 'analytical_writing' },
            { label: 'Final Score', name: 'final_score' }
          ].map(({ label, name }) => (
            <div className="col-md-4" key={name}>
              <label className="form-label">{label}</label>
              <input
                value={test[name] || ''}
                onChange={(e) => handleNestedChange(index, name, e.target.value, tests, setTests)}
                className="form-control"
              />
            </div>
          ))}
          <div className="col-md-2">
            <button type="button" className="btn btn-danger" onClick={() => handleRemoveRow(index, tests, setTests)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <button type="button" className="btn btn-primary my-2" onClick={() => handleAddRow(tests, setTests, {
        exam: '', verbal_reasoning: '', quantitative_reasoning: '', analytical_writing: '', final_score: ''
      })}>
        + Add Test
      </button>

      <hr />
      <button type="submit" className="btn btn-primary mt-4">Submit Inquiry</button>
    </form>
  );
};

export default PRVisaInquiryForm;


// old form 

//               {step === 1 && (
//               <div className="container">
//                 <div className="xb-contact pos-rel bg-white shadow rounded p-4" style={{ overflow: "visible" }}>
//                   <div className="row">
//                     <div className="col-12">
//                       <div className="p-5">
//                         <div className="xb-item--holder mb-25">
//                           <h3 className="wow skewIn fw-bold border-bottom pb-2">Primary Details</h3>
//                         </div>
//                         <form className="xb-item--form contact-from" action="#!">
//                           <div className="row g-4">
//                           <div className="col-lg-6">
//                 <label className="mb-1">Desired Country:</label>
//                 <div className="d-flex align-items-center border rounded px-3 py-2">
//                 <span>
//                             <PublicIcon />
//                           </span>
//                           <div className="nice-select" tabindex="0">
//                             <span className="current" >Select Country</span>
//                             <ul className="list">
//                               <li
//                                 data-value="1"
//                                 className="option multiple focus"
//                               >
//                                 Canada
//                               </li>
//                             </ul>
//                           </div>
//                 </div>
//               </div>
//                             <div className="col-lg-6">
//                               <label className="mb-1">Desired Visa Route :</label>
//                               <div  className="d-flex align-items-center border rounded px-3 py-2">
//                                 <span>
//                                   <PublicIcon />
//                                 </span>
//                                 <div className="nice-select" tabindex="0">
//                                   <span className="current">Select </span>
//                                   <ul className="list">
//                                     <li
//                                       data-value="1"
//                                       className="option multiple focus"
//                                     >
//                                       Permanent Residency
//                                     </li>
//                                     <li data-value="2" className="option">
//                                     Work Permit
//                                     </li>
//                                     <li data-value="3" className="option">
//                                     State Nomination
//                                     </li>
//                                     <li data-value="4" className="option">
//                                     Investment
//                                     </li>
//                                     <li data-value="5" className="option">
//                                     Business
//                                     </li>
//                                     <li data-value="6" className="option">
//                                     Visitor Visa
//                                     </li>
//                                     <li data-value="7" className="option">
//                                     PR - RNIP
//                                     </li>
//                                     <li data-value="8" className="option">
//                                     PR - AIPP
//                                     </li>
//                                     <li data-value="9" className="option">
//                                     Blood Relation
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="col-12">
//                 <FormControl>
//                   <label className="mb-2 fw-medium">Select Relation:</label>
//                   <RadioGroup row defaultValue="Father" name="radio-buttons-group">
//                     <FormControlLabel value="Father" control={<Radio />} label="Father" />
//                     <FormControlLabel value="Spouse" control={<Radio />} label="Spouse" />
//                   </RadioGroup>
//                 </FormControl>
//               </div>

//               <div className="col-lg-6">
//                 <label className="mb-1">Your Full Name:</label>
//                 <div className="d-flex align-items-center border rounded px-3 py-2">
//                   <PermIdentityIcon className="me-2 text-muted" />
//                   <input type="text" placeholder="Enter your Name" className="form-control border-0 p-0" />
//                 </div>
//               </div>

//               <div className="col-lg-6">
//                 <label className="mb-1">Contact No. (Mobile):</label>
//                 <div className="d-flex align-items-center border rounded px-3 py-2">
//                   <CallIcon className="me-2 text-muted" />
//                   <input type="text" placeholder="Enter Your Contact Number" className="form-control border-0 p-0" />
//                 </div>
//               </div>

//               {/** Landline **/}
//               <div className="col-lg-6">
//                 <label className="mb-1">Landline Number (If Any):</label>
//                 <div className="d-flex align-items-center border rounded px-3 py-2">
//                   <RingVolumeIcon className="me-2 text-muted" />
//                   <input type="text" placeholder="Enter Your Landline Number" className="form-control border-0 p-0" />
//                 </div>
//               </div>

//               {/** Alternate Contact **/}
//               <div className="col-lg-6">
//                 <label className="mb-1">Alternate Contact No.:</label>
//                 <div className="d-flex align-items-center border rounded px-3 py-2">
//                   <CallIcon className="me-2 text-muted" />
//                   <input type="text" placeholder="Enter Alternate Number" className="form-control border-0 p-0" />
//                 </div>
//               </div>

//               {/** Email **/}
//               <div className="col-lg-6">
//                 <label className="mb-1">Email:</label>
//                 <div className="d-flex align-items-center border rounded px-3 py-2">
//                   <EmailIcon className="me-2 text-muted" />
//                   <input type="email" placeholder="Enter Your Email" className="form-control border-0 p-0" />
//                 </div>
//               </div>

//               {/** DOB **/}
//               <div className="col-lg-6">
//                 <label className="mb-1">Date Of Birth:</label>
//                 <div className="d-flex align-items-center border rounded px-3 py-2">
//                   <CalendarMonthIcon className="me-2 text-muted" />
//                   <input type="date" className="form-control border-0 p-0" />
//                 </div>
//               </div>
                           
      
//                             <div className="col-lg-6">
//                               <label className="mb-1">Marital Status :</label>
//                               <div className="d-flex align-items-center border rounded px-3 py-2">
//                                 <span>
//                                   <PublicIcon className="me-2 text-muted"/>
//                                 </span>
//                                 <div className="nice-select" tabindex="0">
//                                   <span className="current">Please Select </span>
//                                   <ul className="list">
//                                     <li
//                                       data-value="1"
//                                       className="option multiple focus"
//                                     >
//                                       Single
//                                     </li>
//                                     <li data-value="2" className="option">
//                                       Married
//                                     </li>
//                                     <li data-value="3" className="option">
//                                       Widowed
//                                     </li>
//                                     <li data-value="4" className="option">
//                                       Divorced
//                                     </li>
//                                     <li data-value="4" className="option">
//                                       Likely to get married in newx 6 months
//                                     </li>
                                    
//                                   </ul>
//                                 </div>
//                               </div>
//                             </div>
      
//                             <div className="col-lg-6">
//                               <label className="mb-1">No. Of Children :</label>
//                               <div className="d-flex align-items-center border rounded px-3 py-2">
//                                 <span>
//                                   <PermIdentityIcon className="me-2 text-muted"/>
//                                 </span>
//                                 <input type="text" className="form-control border-0 p-0"/>
//                               </div>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                       <div className="col-12 mt-4 text-end">
//                     <button className="btn btn-primary" onClick={handleNext}>
//                       Next
//                     </button>
//                   </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               )}
//               {/* Primary Details end  */}
      
           
      
//              {/* Residential Details start  */}
//              {step === 2 && (
//         <div className="container mt-5">
//   <div className="xb-contact pos-rel bg-white shadow rounded p-4" style={{ overflow: "visible" }}>
//     <div className="row">
//       <div className="col-12">
//         <div className="p-3">
//           <div className="xb-item--holder mb-4">
//             <h3 className="wow skewIn fw-bold border-bottom pb-2">Residential Details</h3>
//           </div>
//           <form className="xb-item--form contact-from" action="#!">
//             <div className="row g-4">

//               <div className="col-lg-6">
//                 <label className="mb-1">Flat / Block No. :</label>
//                 <div className="d-flex align-items-center border rounded px-3 py-2">
//                   <HouseIcon className="me-2 text-muted" />
//                   <input
//                     type="text"
//                     placeholder="Enter your Flat / Block No."
//                     className="form-control border-0 p-0"
//                   />
//                 </div>
//               </div>

//               <div className="col-lg-6">
//                 <label className="mb-1">Name Of The Building :</label>
//                 <div className="d-flex align-items-center border rounded px-3 py-2">
//                   <HouseIcon className="me-2 text-muted" />
//                   <input
//                     type="text"
//                     placeholder="Enter your Building Name"
//                     className="form-control border-0 p-0"
//                   />
//                 </div>
//               </div>

//               <div className="col-lg-6">
//                 <label className="mb-1">Road / Street / Locality :</label>
//                 <div className="d-flex align-items-center border rounded px-3 py-2">
//                   <AddRoadIcon className="me-2 text-muted" />
//                   <input
//                     type="text"
//                     placeholder="Enter your Road / Street / Locality"
//                     className="form-control border-0 p-0"
//                   />
//                 </div>
//               </div>

//               <div className="col-lg-6">
//                 <label className="mb-1">Pincode :</label>
//                 <div className="d-flex align-items-center border rounded px-3 py-2">
//                   <PinDropIcon className="me-2 text-muted" />
//                   <input
//                     type="text"
//                     placeholder="Enter Your Pincode"
//                     className="form-control border-0 p-0"
//                   />
//                 </div>
//               </div>

//               <div className="col-lg-6">
//                 <label className="mb-1">Area (Only For City Surat) :</label>
//                 <div className="d-flex align-items-center border rounded px-3 py-2">
//                   <span>
//                   <AddLocationIcon className="me-2 text-muted" />
                           
//                           </span>
//                           <div className="nice-select" tabindex="0">
//                             <span className="current">Select Area</span>
//                             <ul
//                               className="list"
//                               style={{ height: "300px", overflowY: "auto" }}
//                             >
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Palanpur Jakatnaka{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Sarthana{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Laskana{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Hazira{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Dindoli{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Navagam{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Limbayat{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Parvat Patiya{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Sachin{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Bhestan{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Pandesara{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Udhna{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Vesu{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Dumas{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Piplod{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Citylight road{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Ghod dod road{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Athwalines{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Nanpura{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 L.H.Road{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Puna Gam{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Varachha{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Kosad{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Amroli{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Ved Road{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Katargam{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Navapura{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Begampura{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Gopipura{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Bhagal{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Ring Road{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Jahangirpura{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Rander{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Adajan{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Rughnathpura{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Umarwada{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Majuragate{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Bhesan{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Bhatha{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Dabholi{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Godadara{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Abrama{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Pal{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Lalgate{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Chowk{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Sahara Darwaja{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Vareli{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Sayan{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Olpad{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Hirabazar{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Ichchapor{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Palsana{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Kadodara{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Kamrej{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Pandesara GIDC{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Sachin GIDC{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Unn{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 A K Road{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Sagrampura{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Textile Market{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 U.M Road{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Bhatar{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Delhi gate{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Singanpore{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Lal Darwaja{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Rampura{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Salabatpura{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Bamroli Road{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Any Where In Surat{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Parle Point{" "}
//                               </li>
//                             </ul>
//                           </div>
//                 </div>
//               </div>

//               <div className="col-lg-6">
//                 <label className="mb-1">City :</label>
//                 <div className="d-flex align-items-center border rounded px-3 py-2">
//                   <span>
//                   <AddLocationIcon className="me-2 text-muted" />
                           
//                           </span>
//                           <div className="nice-select" tabindex="0">
//                             <span className="current">Select City</span>
//                             <ul
//                               className="list"
//                               style={{ height: "300px", overflowY: "auto" }}
//                             >
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Vyara{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Vapi{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Valsad{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Umargm{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Surat{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Songadh{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Silvassa{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Rajpipada{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Navsari{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Mandvi{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Kosamba{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Jambusar{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Hasot{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Dang{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Daman{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Dahej{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Chikhali{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Bilimora{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Auckland{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Bharuch{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Bardoli{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Ankleshwar{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Ahwa{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Mosali{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Vadodra{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Modasa{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Amritsar{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Bengaluru{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Mumbai{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Other{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Surendranagar{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Jalaun{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Ahmedabad{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 Dakor{" "}
//                               </li>
//                               <li
//                                 data-value="1"
//                                 className="option selected focus"
//                               >
//                                 {" "}
//                                 FINLAND{" "}
//                               </li>
//                             </ul>
//                           </div>
//                 </div>
//               </div>

//             </div>
//           </form>
//         </div>
//       </div>
//       <div className="d-flex justify-content-between mt-3">
//             <button className="btn btn-secondary" onClick={handlePrevious}>
//               Previous
//             </button>
//             <button className="btn btn-primary" onClick={handleNext}>
//               Next
//             </button>
//           </div>
//     </div>
//   </div>
// </div>
//              )}
//         {/* Residential Details end  */}
      
//              {/* Educational Qualification start  */}
//              {step === 3 && (
//         <div className="container mt-5">
//   <div className="xb-contact pos-rel bg-white shadow rounded p-4" style={{ overflow: "visible" }}>
//     <div className="p-3">
//       <div className="xb-item--holder mb-4">
//         <h3 className="wow skewIn fw-bold border-bottom pb-2">Educational Qualification</h3>
//       </div>

//       <div style={{ overflowX: "auto" }}>
//         <table
//           className="table table-bordered text-center align-middle"
//           style={{
//             width: "100%",
//             borderCollapse: "collapse",
//             minWidth: "900px",
//           }}
//         >
//           <thead style={{ backgroundColor: "#edf3f5" }}>
//             <tr>
//               <th>Qualification</th>
//               <th>Stream Of Degree</th>
//               <th>Major Subjects</th>
//               <th>Year Of Completion</th>
//               <th>Percentage</th>
//               <th>Total ATKT or Backlog</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((row, index) => (
//               <tr key={index}>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control rounded"
//                     defaultValue={row.qualification}
//                     onBlur={(e) =>
//                       handleChange(index, "qualification", e.target.value)
//                     }
//                   />
//                 </td>
//                 <td>
//                   <select
//                     className="form-select rounded"
//                     value={row.stream}
//                     onChange={(e) =>
//                       handleChange(index, "stream", e.target.value)
//                     }
//                   >
//                     {streamOptions.map((opt, idx) => (
//                       <option key={idx} value={opt}>
//                         {opt}
//                       </option>
//                     ))}
//                   </select>
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control rounded"
//                     value={row.major}
//                     onChange={(e) =>
//                       handleChange(index, "major", e.target.value)
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control rounded"
//                     value={row.year}
//                     onChange={(e) =>
//                       handleChange(index, "year", e.target.value)
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control rounded"
//                     value={row.percentage}
//                     onChange={(e) =>
//                       handleChange(index, "percentage", e.target.value)
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control rounded"
//                     value={row.backlog}
//                     onChange={(e) =>
//                       handleChange(index, "backlog", e.target.value)
//                     }
//                   />
//                 </td>
//                 <td>
//                   <div className="d-flex justify-content-center gap-2">
//                     <button
//                       type="button"
//                       className="btn btn-sm btn-success"
//                       onClick={addRow}
//                     >
//                       +
//                     </button>
//                     <button
//                       type="button"
//                       className="btn btn-sm btn-danger"
//                       onClick={() => removeRow(index)}
//                       disabled={rows.length <= 1}
//                     >
//                       -
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="d-flex justify-content-between mt-3">
//             <button className="btn btn-secondary" onClick={handlePrevious}>
//               Previous
//             </button>
//             <button className="btn btn-primary" onClick={handleNext}>
//               Next
//             </button>
//           </div>
//     </div>
//   </div>
//       </div>
//              )}
//         {/* Educational Qualification end */}

      
//               {/* any working experience start  */}
//               {step === 4 && (
//               <div className="container mt-5">
//                 <div className="xb-contact pos-rel bg-white shadow rounded p-4" style={{ overflow: "visible" }}>
//                   <div className="p-5">
//                     <div className="custom-experience-wrapper">
//                       <div className="custom-experience-header mb-4 align-items-center flex-wrap gap-2">
//                         {/* <div className="experience-toggle-wrapper"> */}
//                           <h3 className="wow skewIn fw-bold border-bottom pb-2">
//                           Employeement Details
//                           </h3>
                          
//                         {/* </div> */}
//                       </div>
      
//                       <div style={{ overflowX: "auto" }}>
//             <table
//               className="table table-bordered align-middle text-center"
//               style={{
//                 width: "100%",
//                 borderCollapse: "collapse",
//                 minWidth: "900px",
//               }}
//             >
//               <thead style={{ backgroundColor: "#edf3f5" }}>
//                 <tr>
//                   <th>Company</th>
//                   <th>Designation</th>
//                   <th>From</th>
//                   <th>To</th>
//                   <th>Number Of Years</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {experienceData.map((row, index) => (
//                   <tr key={index}>
//                     <td>
//                       <input
//                         type="text"
//                         className="form-control rounded"
//                         value={row.company}
//                         onChange={(e) =>
//                           updateField(index, "company", e.target.value)
//                         }
//                       />
//                     </td>
//                     <td>
//                     <select
//                               style={{
//                                 padding: "15px",
//                                 border: "1px solid #EDF3F5",
//                                 borderRadius: "10px",
//                                 width: "200px",
//                               }}
//                               className="custom-select-designation"
//                               value={row.designation}
//                               onChange={(e) =>
//                                 updateField(
//                                   index,
//                                   "designation",
//                                   e.target.value
//                                 )
//                               }
//                             >
//                               <option value="" selected="selected">
//                                 Select
//                               </option>
//                               <option value="Mechanical Technician">
//                                 Mechanical Technician
//                               </option>
//                               <option value="Nurse Practitioner">
//                                 Nurse Practitioner
//                               </option>
//                               <option value="Nursing Assistant">
//                                 Nursing Assistant
//                               </option>
//                               <option value="Nutritionist">Nutritionist</option>
//                               <option value="Office Assistant">
//                                 Office Assistant
//                               </option>
//                               <option value="Office Manager">
//                                 Office Manager
//                               </option>
//                               <option value="Office Supervisor">
//                                 Office Supervisor
//                               </option>
//                               <option value="Officer">Officer</option>
//                               <option value="Officer / Assistant Manager / Executive">
//                                 Officer / Assistant Manager / Executive
//                               </option>
//                               <option value="Officer Technician">
//                                 Officer Technician
//                               </option>
//                               <option value="Operations Manager">
//                                 Operations Manager
//                               </option>
//                               <option value="Operator">Operator</option>
//                               <option value="Nurse Clinical Educator">
//                                 Nurse Clinical Educator
//                               </option>
//                               <option value="Nurse Anesthetist">
//                                 Nurse Anesthetist
//                               </option>
//                               <option value="Nurse">Nurse</option>
//                               <option value="Mechienichal Engineer">
//                                 Mechienichal Engineer
//                               </option>
//                               <option value="Medical Laboratory/Pathology Technician">
//                                 Medical Laboratory/Pathology Technician
//                               </option>
//                               <option value="Medical Officer">
//                                 Medical Officer
//                               </option>
//                               <option value="Medical or Health Services Manager">
//                                 Medical or Health Services Manager
//                               </option>
//                               <option value="Medical Representative">
//                                 Medical Representative
//                               </option>
//                               <option value="Medical Services Assistant">
//                                 Medical Services Assistant
//                               </option>
//                               <option value="Medical Superintendent">
//                                 Medical Superintendent
//                               </option>
//                               <option value="Model Maker-Jewellery">
//                                 Model Maker-Jewellery
//                               </option>
//                               <option value="Music Teacher">
//                                 Music Teacher
//                               </option>
//                               <option value="Network Administrator">
//                                 Network Administrator
//                               </option>
//                               <option value="Network Engineer">
//                                 Network Engineer
//                               </option>
//                               <option value="Other">Other</option>
//                               <option value="Owner">Owner</option>
//                               <option value="Pipe Fitter">Pipe Fitter</option>
//                               <option value="Plant Operator (chemical)">
//                                 Plant Operator (chemical)
//                               </option>
//                               <option value="Plasterer/ Mason">
//                                 Plasterer/ Mason
//                               </option>
//                               <option value="Plastics Engineer">
//                                 Plastics Engineer
//                               </option>
//                               <option value="Plater-Jewellery manufacturing">
//                                 Plater-Jewellery manufacturing
//                               </option>
//                               <option value="Plumber">Plumber</option>
//                               <option value="Power Engineer">
//                                 Power Engineer
//                               </option>
//                               <option value="Preschool Teacher">
//                                 Preschool Teacher
//                               </option>
//                               <option value="Principal">Principal</option>
//                               <option value="Probesionery officer">
//                                 Probesionery officer
//                               </option>
//                               <option value="Process Engineer">
//                                 Process Engineer
//                               </option>
//                               <option value="Physotherapist">
//                                 Physotherapist
//                               </option>
//                               <option value="PHP Developer">
//                                 PHP Developer
//                               </option>
//                               <option value="photoshop Operator">
//                                 photoshop Operator
//                               </option>
//                               <option value="Packaging Engineer">
//                                 Packaging Engineer
//                               </option>
//                               <option value="Painter">Painter</option>
//                               <option value="Painting and Coating Worker">
//                                 Painting and Coating Worker
//                               </option>
//                               <option value="Partner">Partner</option>
//                               <option value="Patient Care Associate">
//                                 Patient Care Associate
//                               </option>
//                               <option value="Pearl Cutter">Pearl Cutter</option>
//                               <option value="Pearl Setter">Pearl Setter</option>
//                               <option value="Peon/ cleaning assistant/ executive assistant/Office boy">
//                                 Peon/ cleaning assistant/ executive
//                                 assistant/Office boy
//                               </option>
//                               <option value="Personal Assistant">
//                                 Personal Assistant
//                               </option>
//                               <option value="Personal Trainer">
//                                 Personal Trainer
//                               </option>
//                               <option value="Pharmacist">Pharmacist</option>
//                               <option value="Professor">Professor</option>
//                               <option value="Mechanical Maintenance Engineer">
//                                 Mechanical Maintenance Engineer
//                               </option>
//                               <option value="Framing Carpenter">
//                                 Framing Carpenter
//                               </option>
//                               <option value="House Salesman">
//                                 House Salesman
//                               </option>
//                               <option value="HR Assistant">HR Assistant</option>
//                               <option value="HR Head/Manager/Executive">
//                                 HR Head/Manager/Executive
//                               </option>
//                               <option value="Inhouse Sales">
//                                 Inhouse Sales
//                               </option>
//                               <option value="Inspector">Inspector</option>
//                               <option value="Installation &amp; Maintenance Executive">
//                                 Installation &amp; Maintenance Executive
//                               </option>
//                               <option value="Instrument Enggineer">
//                                 Instrument Enggineer
//                               </option>
//                               <option value="Instrumental Manager">
//                                 Instrumental Manager
//                               </option>
//                               <option value="Instrumentation Engineer">
//                                 Instrumentation Engineer
//                               </option>
//                               <option value="Insurance agent">
//                                 Insurance agent
//                               </option>
//                               <option value="Intensive Care Nurse">
//                                 Intensive Care Nurse
//                               </option>
//                               <option value="House Sales for Retail Sector">
//                                 House Sales for Retail Sector
//                               </option>
//                               <option value="House keeping">
//                                 House keeping
//                               </option>
//                               <option value="Hostess">Hostess</option>
//                               <option value="Fresher">Fresher</option>
//                               <option value="Front End Developer">
//                                 Front End Developer
//                               </option>
//                               <option value="Gem Expert">Gem Expert</option>
//                               <option value="Gemologist">Gemologist</option>
//                               <option value="General Manager">
//                                 General Manager
//                               </option>
//                               <option value="Graphic designer">
//                                 Graphic designer
//                               </option>
//                               <option value="Graphics Designer/Animator">
//                                 Graphics Designer/Animator
//                               </option>
//                               <option value="Gym Manager">Gym Manager</option>
//                               <option value="Hair Artist">Hair Artist</option>
//                               <option value="Head of the Department">
//                                 Head of the Department
//                               </option>
//                               <option value="Home Appliances Technician">
//                                 Home Appliances Technician
//                               </option>
//                               <option value="Internal Auditor">
//                                 Internal Auditor
//                               </option>
//                               <option value="Inventory Control Manager">
//                                 Inventory Control Manager
//                               </option>
//                               <option value="Law Firm Administrator">
//                                 Law Firm Administrator
//                               </option>
//                               <option value="Lawyer">Lawyer</option>
//                               <option value="Lecturer">Lecturer</option>
//                               <option value="Legal Consultant">
//                                 Legal Consultant
//                               </option>
//                               <option value="Loader">Loader</option>
//                               <option value="Loan Processor">
//                                 Loan Processor
//                               </option>
//                               <option value="Maintenance Executive">
//                                 Maintenance Executive
//                               </option>
//                               <option value="Management Trainee">
//                                 Management Trainee
//                               </option>
//                               <option value="Manager">Manager</option>
//                               <option value="Managing Director">
//                                 Managing Director
//                               </option>
//                               <option value="Marketing executive">
//                                 Marketing executive
//                               </option>
//                               <option value="Lab Technicion">
//                                 Lab Technicion
//                               </option>
//                               <option value="Junior engineer">
//                                 Junior engineer
//                               </option>
//                               <option value="Junior Editor">
//                                 Junior Editor
//                               </option>
//                               <option value="Investment Planner">
//                                 Investment Planner
//                               </option>
//                               <option value="IT/Internet Support">
//                                 IT/Internet Support
//                               </option>
//                               <option value="ITI FITTER">ITI FITTER</option>
//                               <option value="Java Developer">
//                                 Java Developer
//                               </option>
//                               <option value="Jewel Setter">Jewel Setter</option>
//                               <option value="Jeweller">Jeweller</option>
//                               <option value="Jewellery Manufacturing">
//                                 Jewellery Manufacturing
//                               </option>
//                               <option value="Jewellery Sample Maker">
//                                 Jewellery Sample Maker
//                               </option>
//                               <option value="Junior Accountant">
//                                 Junior Accountant
//                               </option>
//                               <option value="Junior Assistant">
//                                 Junior Assistant
//                               </option>
//                               <option value="Junior Developer">
//                                 Junior Developer
//                               </option>
//                               <option value="Marketing Manager">
//                                 Marketing Manager
//                               </option>
//                               <option value="Software Engineer">
//                                 Software Engineer
//                               </option>
//                               <option value="Systems Designer">
//                                 Systems Designer
//                               </option>
//                               <option value="Systems Engineer">
//                                 Systems Engineer
//                               </option>
//                               <option value="Systems Support/Manager">
//                                 Systems Support/Manager
//                               </option>
//                               <option value="Tailor">Tailor</option>
//                               <option value="Tax Advisor">Tax Advisor</option>
//                               <option value="Taxation - Manager">
//                                 Taxation - Manager
//                               </option>
//                               <option value="Teacher/ lecturer/ professor">
//                                 Teacher/ lecturer/ professor
//                               </option>
//                               <option value="Team Leader">Team Leader</option>
//                               <option value="Technician">Technician</option>
//                               <option value="Tele-Caller">Tele-Caller</option>
//                               <option value="Telecommunications Engineer">
//                                 Telecommunications Engineer
//                               </option>
//                               <option value="Systems Assistant">
//                                 Systems Assistant
//                               </option>
//                               <option value="Systems Analyst">
//                                 Systems Analyst
//                               </option>
//                               <option value="Systems Administrator">
//                                 Systems Administrator
//                               </option>
//                               <option value="Software Engineering Assistant">
//                                 Software Engineering Assistant
//                               </option>
//                               <option value="Speech Writer">
//                                 Speech Writer
//                               </option>
//                               <option value="Sports Teacher">
//                                 Sports Teacher
//                               </option>
//                               <option value="Stone Setter">Stone Setter</option>
//                               <option value="Stonecutter - Jewellery">
//                                 Stonecutter - Jewellery
//                               </option>
//                               <option value="Store keeper">Store keeper</option>
//                               <option value="Store Manager">
//                                 Store Manager
//                               </option>
//                               <option value="Supervisor">Supervisor</option>
//                               <option value="Supply Chain Office">
//                                 Supply Chain Office
//                               </option>
//                               <option value="Support Coordinator">
//                                 Support Coordinator
//                               </option>
//                               <option value="Surveillance Associate">
//                                 Surveillance Associate
//                               </option>
//                               <option value="Terrotory Manager/Officer">
//                                 Terrotory Manager/Officer
//                               </option>
//                               <option value="Test Manager">Test Manager</option>
//                               <option value="Wedding Coordinator">
//                                 Wedding Coordinator
//                               </option>
//                               <option value="Wedding Sales Manager">
//                                 Wedding Sales Manager
//                               </option>
//                               <option value="Welder">Welder</option>
//                               <option value="Welding Engineer">
//                                 Welding Engineer
//                               </option>
//                               <option value="Wiremen">Wiremen</option>
//                               <option value="Woodworker">Woodworker</option>
//                               <option value="Word Boy">Word Boy</option>
//                               <option value="Worker">Worker</option>
//                               <option value="WorkshopÂ&nbsp;Manager / Service Advisor">
//                                 WorkshopÂ&nbsp;Manager / Service Advisor
//                               </option>
//                               <option value="Zonal Manager">
//                                 Zonal Manager
//                               </option>
//                               <option value="Research Analyst">
//                                 Research Analyst
//                               </option>
//                               <option value="Wedding Consultant">
//                                 Wedding Consultant
//                               </option>
//                               <option value="Website Content Administrator">
//                                 Website Content Administrator
//                               </option>
//                               <option value="Webmaster">Webmaster</option>
//                               <option value="Trainee Engineer">
//                                 Trainee Engineer
//                               </option>
//                               <option value="Trainer">Trainer</option>
//                               <option value="Trainer/Coach/Tutor">
//                                 Trainer/Coach/Tutor
//                               </option>
//                               <option value="Training Manager">
//                                 Training Manager
//                               </option>
//                               <option value="Transportation Manager">
//                                 Transportation Manager
//                               </option>
//                               <option value="Tupist">Tupist</option>
//                               <option value="Typist">Typist</option>
//                               <option value="Warehouse Worker">
//                                 Warehouse Worker
//                               </option>
//                               <option value="Watch maker - Jewellery Manufacturing">
//                                 Watch maker - Jewellery Manufacturing
//                               </option>
//                               <option value="Watch Repairer">
//                                 Watch Repairer
//                               </option>
//                               <option value="Web Developer">
//                                 Web Developer
//                               </option>
//                               <option value="Process Executive">
//                                 Process Executive
//                               </option>
//                               <option value="Software Developer">
//                                 Software Developer
//                               </option>
//                               <option value="Programmer">Programmer</option>
//                               <option value="Roofer">Roofer</option>
//                               <option value="Room Attendant">
//                                 Room Attendant
//                               </option>
//                               <option value="Room Service Worker">
//                                 Room Service Worker
//                               </option>
//                               <option value="Safety Manager">
//                                 Safety Manager
//                               </option>
//                               <option value="Sales consultant">
//                                 Sales consultant
//                               </option>
//                               <option value="Sales Executive">
//                                 Sales Executive
//                               </option>
//                               <option value="Sales Head">Sales Head</option>
//                               <option value="Sales manager">
//                                 Sales manager
//                               </option>
//                               <option value="Sales Representative">
//                                 Sales Representative
//                               </option>
//                               <option value="Salesman/Person/Girl">
//                                 Salesman/Person/Girl
//                               </option>
//                               <option value="Sample Maker">Sample Maker</option>
//                               <option value="Resteel Ironworker">
//                                 Resteel Ironworker
//                               </option>
//                               <option value="Restaurant Manager">
//                                 Restaurant Manager
//                               </option>
//                               <option value="Reservations Agent">
//                                 Reservations Agent
//                               </option>
//                               <option value="Public Relation Officer">
//                                 Public Relation Officer
//                               </option>
//                               <option value="Publicity Manager">
//                                 Publicity Manager
//                               </option>
//                               <option value="Quality control supervisor">
//                                 Quality control supervisor
//                               </option>
//                               <option value="Quantity Surveyor">
//                                 Quantity Surveyor
//                               </option>
//                               <option value="Receptionist">Receptionist</option>
//                               <option value="Recruitement Officer">
//                                 Recruitement Officer
//                               </option>
//                               <option value="Regional Manager">
//                                 Regional Manager
//                               </option>
//                               <option value="Registrar">Registrar</option>
//                               <option value="Relay Engineer">
//                                 Relay Engineer
//                               </option>
//                               <option value="Reporter">Reporter</option>
//                               <option value="Representative">
//                                 Representative
//                               </option>
//                               <option value="Security guard">
//                                 Security guard
//                               </option>
//                               <option value="Senior clerk">Senior clerk</option>
//                               <option value="Senior Technician">
//                                 Senior Technician
//                               </option>
//                               <option value="Senior Technology Officer">
//                                 Senior Technology Officer
//                               </option>
//                               <option value="Senior Zonal Manager">
//                                 Senior Zonal Manager
//                               </option>
//                               <option value="SEO Executive">
//                                 SEO Executive
//                               </option>
//                               <option value="SEO Manager">SEO Manager</option>
//                               <option value="Setter - Jewellery Manufacturing">
//                                 Setter - Jewellery Manufacturing
//                               </option>
//                               <option value="Showroom Manager">
//                                 Showroom Manager
//                               </option>
//                               <option value="Signal Worker">
//                                 Signal Worker
//                               </option>
//                               <option value="Silver Chaser">
//                                 Silver Chaser
//                               </option>
//                               <option value="Site Engineer">
//                                 Site Engineer
//                               </option>
//                               <option value="Site Manager">Site Manager</option>
//                               <option value="Senior Team Leader">
//                                 Senior Team Leader
//                               </option>
//                               <option value="Senior Security Officer">
//                                 Senior Security Officer
//                               </option>
//                               <option value="Senior Professor">
//                                 Senior Professor
//                               </option>
//                               <option value="Senior Content Writer">
//                                 Senior Content Writer
//                               </option>
//                               <option value="Senior Developer">
//                                 Senior Developer
//                               </option>
//                               <option value="Senior Editor">
//                                 Senior Editor
//                               </option>
//                               <option value="Senior Electrical Engineer">
//                                 Senior Electrical Engineer
//                               </option>
//                               <option value="senior Engineer">
//                                 senior Engineer
//                               </option>
//                               <option value="Senior Executive">
//                                 Senior Executive
//                               </option>
//                               <option value="Senior HR">Senior HR</option>
//                               <option value="Senior HR executive">
//                                 Senior HR executive
//                               </option>
//                               <option value="Senior Lecturer">
//                                 Senior Lecturer
//                               </option>
//                               <option value="Senior Manager">
//                                 Senior Manager
//                               </option>
//                               <option value="Senior Officer">
//                                 Senior Officer
//                               </option>
//                               <option value="Social Studies Teacher">
//                                 Social Studies Teacher
//                               </option>
//                               <option value="Foreman">Foreman</option>
//                               <option value="Bakery-Cafe Associate">
//                                 Bakery-Cafe Associate
//                               </option>
//                               <option value="Business Analyst">
//                                 Business Analyst
//                               </option>
//                               <option value="Business Development Associate">
//                                 Business Development Associate
//                               </option>
//                               <option value="Business Development Executive">
//                                 Business Development Executive
//                               </option>
//                               <option value="Business Development Executive/Customer Relation">
//                                 Business Development Executive/Customer Relation
//                               </option>
//                               <option value="Business Development Manager">
//                                 Business Development Manager
//                               </option>
//                               <option value="Business Development Officer">
//                                 Business Development Officer
//                               </option>
//                               <option value="Business Development Representative">
//                                 Business Development Representative
//                               </option>
//                               <option value="Cafe Manager">Cafe Manager</option>
//                               <option value="Career Counselor">
//                                 Career Counselor
//                               </option>
//                               <option value="Carpenter">Carpenter</option>
//                               <option value="Case Manager">Case Manager</option>
//                               <option value="Bus Driver">Bus Driver</option>
//                               <option value="Bus Conductor">
//                                 Bus Conductor
//                               </option>
//                               <option value="Building and Grounds Supervisor">
//                                 Building and Grounds Supervisor
//                               </option>
//                               <option value="Beamer">Beamer</option>
//                               <option value="Beautician">Beautician</option>
//                               <option value="Bench Moulder-Jewellery">
//                                 Bench Moulder-Jewellery
//                               </option>
//                               <option value="Biologist">Biologist</option>
//                               <option value="Biomedical Technician">
//                                 Biomedical Technician
//                               </option>
//                               <option value="Boiler Engineer">
//                                 Boiler Engineer
//                               </option>
//                               <option value="Bookbinders and bindery workers">
//                                 Bookbinders and bindery workers
//                               </option>
//                               <option value="Bookkeeper">Bookkeeper</option>
//                               <option value="Branch Manager">
//                                 Branch Manager
//                               </option>
//                               <option value="Brand Manager">
//                                 Brand Manager
//                               </option>
//                               <option value="Broker">Broker</option>
//                               <option value="Cashier">Cashier</option>
//                               <option value="Center Head">Center Head</option>
//                               <option value="Clothing Manufacturing (tailor)">
//                                 Clothing Manufacturing (tailor)
//                               </option>
//                               <option value="Clothing Packer">
//                                 Clothing Packer
//                               </option>
//                               <option value="Clothing Presser">
//                                 Clothing Presser
//                               </option>
//                               <option value="CNC Operator">CNC Operator</option>
//                               <option value="Collar Linker">
//                                 Collar Linker
//                               </option>
//                               <option value="Collection Boy/Person/Assistant">
//                                 Collection Boy/Person/Assistant
//                               </option>
//                               <option value="Company secretary">
//                                 Company secretary
//                               </option>
//                               <option value="compliance officer">
//                                 compliance officer
//                               </option>
//                               <option value="Computer Network Engineer">
//                                 Computer Network Engineer
//                               </option>
//                               <option value="Computer Science Teacher">
//                                 Computer Science Teacher
//                               </option>
//                               <option value="Computer Teacher">
//                                 Computer Teacher
//                               </option>
//                               <option value="Clothing Alteration Hand">
//                                 Clothing Alteration Hand
//                               </option>
//                               <option value="Clinical Pharmacy Assistant">
//                                 Clinical Pharmacy Assistant
//                               </option>
//                               <option value="Client Services Executive">
//                                 Client Services Executive
//                               </option>
//                               <option value="CEO">CEO</option>
//                               <option value="Channel Manager - Distribution Sales">
//                                 Channel Manager - Distribution Sales
//                               </option>
//                               <option value="Channel Partner Sales Executive">
//                                 Channel Partner Sales Executive
//                               </option>
//                               <option value="Chartered Accountant">
//                                 Chartered Accountant
//                               </option>
//                               <option value="Chef/Cook">Chef/Cook</option>
//                               <option value="Chemist/ druggist">
//                                 Chemist/ druggist
//                               </option>
//                               <option value="Civil Engineer">
//                                 Civil Engineer
//                               </option>
//                               <option value="Civil Supervisor">
//                                 Civil Supervisor
//                               </option>
//                               <option value="Claims Manager">
//                                 Claims Manager
//                               </option>
//                               <option value="Cleaner">Cleaner</option>
//                               <option value="Clerk/ Assistant/ Supporter">
//                                 Clerk/ Assistant/ Supporter
//                               </option>
//                               <option value="Computer Technician">
//                                 Computer Technician
//                               </option>
//                               <option value="Baker">Baker</option>
//                               <option value="Self Employeed (Business)">
//                                 Self Employeed (Business)
//                               </option>
//                               <option value="Application Developer">
//                                 Application Developer
//                               </option>
//                               <option value="Appraiser">Appraiser</option>
//                               <option value="Area Sales Manager">
//                                 Area Sales Manager
//                               </option>
//                               <option value="Art Teacher">Art Teacher</option>
//                               <option value="Assembler">Assembler</option>
//                               <option value="Assembly Supervisor">
//                                 Assembly Supervisor
//                               </option>
//                               <option value="Assistant">Assistant</option>
//                               <option value="Assistant Accountant">
//                                 Assistant Accountant
//                               </option>
//                               <option value="Assistant Administrator">
//                                 Assistant Administrator
//                               </option>
//                               <option value="Assistant Banking &amp; Accounts">
//                                 Assistant Banking &amp; Accounts
//                               </option>
//                               <option value="Assistant Branch Manager">
//                                 Assistant Branch Manager
//                               </option>
//                               <option value="Android Developer">
//                                 Android Developer
//                               </option>
//                               <option value="Analytical Textile technologist">
//                                 Analytical Textile technologist
//                               </option>
//                               <option value="Ambulatory Nurse">
//                                 Ambulatory Nurse
//                               </option>
//                               <option value="Accountant">Accountant</option>
//                               <option value="Administrator">
//                                 Administrator
//                               </option>
//                               <option value="Advisor/counselor">
//                                 Advisor/counselor
//                               </option>
//                               <option value="AGM / DGM HR">AGM / DGM HR</option>
//                               <option value="Agricultural Engineer">
//                                 Agricultural Engineer
//                               </option>
//                               <option value="Air Traffic Controllers">
//                                 Air Traffic Controllers
//                               </option>
//                               <option value="Aircraft Mechanic">
//                                 Aircraft Mechanic
//                               </option>
//                               <option value="Airport Manager">
//                                 Airport Manager
//                               </option>
//                               <option value="Airport Operations Crew Member">
//                                 Airport Operations Crew Member
//                               </option>
//                               <option value="Alarm Technician">
//                                 Alarm Technician
//                               </option>
//                               <option value="Allopathic Nurse">
//                                 Allopathic Nurse
//                               </option>
//                               <option value="Assistant compliance officer">
//                                 Assistant compliance officer
//                               </option>
//                               <option value="Assistant Director Human Resources">
//                                 Assistant Director Human Resources
//                               </option>
//                               <option value="Associate Software Engineer">
//                                 Associate Software Engineer
//                               </option>
//                               <option value="Attendant">Attendant</option>
//                               <option value="Audit Manager">
//                                 Audit Manager
//                               </option>
//                               <option value="Auditor">Auditor</option>
//                               <option value="Auto Body Technician">
//                                 Auto Body Technician
//                               </option>
//                               <option value="Autocad Operator">
//                                 Autocad Operator
//                               </option>
//                               <option value="Automotive Engineer">
//                                 Automotive Engineer
//                               </option>
//                               <option value="Automotive Manager">
//                                 Automotive Manager
//                               </option>
//                               <option value="Automotive mechanic">
//                                 Automotive mechanic
//                               </option>
//                               <option value="Automotive Sales Representative">
//                                 Automotive Sales Representative
//                               </option>
//                               <option value="Automotive Technician">
//                                 Automotive Technician
//                               </option>
//                               <option value="Associate Professor">
//                                 Associate Professor
//                               </option>
//                               <option value="Associate Manager">
//                                 Associate Manager
//                               </option>
//                               <option value="Associate Director/Portfolio Management and Operations">
//                                 Associate Director/Portfolio Management and
//                                 Operations
//                               </option>
//                               <option value="Assistant Engineer">
//                                 Assistant Engineer
//                               </option>
//                               <option value="Assistant General Manager">
//                                 Assistant General Manager
//                               </option>
//                               <option value="Assistant Manager">
//                                 Assistant Manager
//                               </option>
//                               <option value="Assistant Physotherapist">
//                                 Assistant Physotherapist
//                               </option>
//                               <option value="Assistant Professor">
//                                 Assistant Professor
//                               </option>
//                               <option value="Assistant Project Manager">
//                                 Assistant Project Manager
//                               </option>
//                               <option value="Assistant Sales Executive">
//                                 Assistant Sales Executive
//                               </option>
//                               <option value="Assistant Sales Manager">
//                                 Assistant Sales Manager
//                               </option>
//                               <option value="Assistant Technician">
//                                 Assistant Technician
//                               </option>
//                               <option value="Assitant Teacher/Lecturer/Professor">
//                                 Assitant Teacher/Lecturer/Professor
//                               </option>
//                               <option value="Associate Developer">
//                                 Associate Developer
//                               </option>
//                               <option value="Back Office Executive">
//                                 Back Office Executive
//                               </option>
//                               <option value="Document Coder">
//                                 Document Coder
//                               </option>
//                               <option value="Electrical Field Engineer">
//                                 Electrical Field Engineer
//                               </option>
//                               <option value="Electrical Maintenance Engineer">
//                                 Electrical Maintenance Engineer
//                               </option>
//                               <option value="Electrician">Electrician</option>
//                               <option value="Electro-Mechanical Engineer">
//                                 Electro-Mechanical Engineer
//                               </option>
//                               <option value="Electronics Engineer">
//                                 Electronics Engineer
//                               </option>
//                               <option value="Embroidery Machine Operator">
//                                 Embroidery Machine Operator
//                               </option>
//                               <option value="Employee Relations Manager">
//                                 Employee Relations Manager
//                               </option>
//                               <option value="Endoscopy Technician">
//                                 Endoscopy Technician
//                               </option>
//                               <option value="Engineer">Engineer</option>
//                               <option value="Engineer Instrumentation">
//                                 Engineer Instrumentation
//                               </option>
//                               <option value="Engineering Manager">
//                                 Engineering Manager
//                               </option>
//                               <option value="Electrical Engineer">
//                                 Electrical Engineer
//                               </option>
//                               <option value="Electrical Design Engineer">
//                                 Electrical Design Engineer
//                               </option>
//                               <option value="Educational Consultant">
//                                 Educational Consultant
//                               </option>
//                               <option value="Dot NET Developer">
//                                 Dot NET Developer
//                               </option>
//                               <option value="Dozer Operator">
//                                 Dozer Operator
//                               </option>
//                               <option value="Dram Operator">
//                                 Dram Operator
//                               </option>
//                               <option value="Drilling Engineer">
//                                 Drilling Engineer
//                               </option>
//                               <option value="Driver">Driver</option>
//                               <option value="Dry cleaning worker">
//                                 Dry cleaning worker
//                               </option>
//                               <option value="DTP Operator">DTP Operator</option>
//                               <option value="Dy Manager">Dy Manager</option>
//                               <option value="E Commerce Executive">
//                                 E Commerce Executive
//                               </option>
//                               <option value="E- Commerce Executive">
//                                 E- Commerce Executive
//                               </option>
//                               <option value="Editor">Editor</option>
//                               <option value="English Teacher">
//                                 English Teacher
//                               </option>
//                               <option value="Equipment Engineer">
//                                 Equipment Engineer
//                               </option>
//                               <option value="Fashion Designer ">
//                                 Fashion Designer{" "}
//                               </option>
//                               <option value="Field Engineer">
//                                 Field Engineer
//                               </option>
//                               <option value="Field Executive">
//                                 Field Executive
//                               </option>
//                               <option value="Field Service Engineer">
//                                 Field Service Engineer
//                               </option>
//                               <option value="Field Technician">
//                                 Field Technician
//                               </option>
//                               <option value="Finance Executive">
//                                 Finance Executive
//                               </option>
//                               <option value="Fitness Trainer/Physical Trainer">
//                                 Fitness Trainer/Physical Trainer
//                               </option>
//                               <option value="Floor Manager">
//                                 Floor Manager
//                               </option>
//                               <option value="Floor Technician">
//                                 Floor Technician
//                               </option>
//                               <option value="Folding Machine Operator">
//                                 Folding Machine Operator
//                               </option>
//                               <option value="Food Runner">Food Runner</option>
//                               <option value="Faculty">Faculty</option>
//                               <option value="Facility Manager">
//                                 Facility Manager
//                               </option>
//                               <option value="Facilities Assistant">
//                                 Facilities Assistant
//                               </option>
//                               <option value="Equipment Operator">
//                                 Equipment Operator
//                               </option>
//                               <option value="Event Manager">
//                                 Event Manager
//                               </option>
//                               <option value="Event Planner">
//                                 Event Planner
//                               </option>
//                               <option value="Executive">Executive</option>
//                               <option value="Executive Assistant">
//                                 Executive Assistant
//                               </option>
//                               <option value="Executive Assistant to Director">
//                                 Executive Assistant to Director
//                               </option>
//                               <option value="Fabric Checker/Grey Checker">
//                                 Fabric Checker/Grey Checker
//                               </option>
//                               <option value="Fabric Cutter">
//                                 Fabric Cutter
//                               </option>
//                               <option value="Fabric Folder">
//                                 Fabric Folder
//                               </option>
//                               <option value="Fabric Manager">
//                                 Fabric Manager
//                               </option>
//                               <option value="Fabric Sample Maker">
//                                 Fabric Sample Maker
//                               </option>
//                               <option value="Food Server">Food Server</option>
//                               <option value="Doctor">Doctor</option>
//                               <option value="Concrete Finisher">
//                                 Concrete Finisher
//                               </option>
//                               <option value="Costume Maker">
//                                 Costume Maker
//                               </option>
//                               <option value="Counselor">Counselor</option>
//                               <option value="Court Advocate">
//                                 Court Advocate
//                               </option>
//                               <option value="Crane Operator">
//                                 Crane Operator
//                               </option>
//                               <option value="Credit Clerk">Credit Clerk</option>
//                               <option value="Credit Manager">
//                                 Credit Manager
//                               </option>
//                               <option value="Customer Care Representative">
//                                 Customer Care Representative
//                               </option>
//                               <option value="Customer Relationship Manager">
//                                 Customer Relationship Manager
//                               </option>
//                               <option value="Customer Sales Representative">
//                                 Customer Sales Representative
//                               </option>
//                               <option value="Customer Service Associate">
//                                 Customer Service Associate
//                               </option>
//                               <option value="Costume Designer">
//                                 Costume Designer
//                               </option>
//                               <option value="Cost Engineer">
//                                 Cost Engineer
//                               </option>
//                               <option value="Cost Accountant/ICWA">
//                                 Cost Accountant/ICWA
//                               </option>
//                               <option value="Concrete Laborers">
//                                 Concrete Laborers
//                               </option>
//                               <option value="Construction Assistant">
//                                 Construction Assistant
//                               </option>
//                               <option value="Construction Engineer">
//                                 Construction Engineer
//                               </option>
//                               <option value="Construction Worker">
//                                 Construction Worker
//                               </option>
//                               <option value="Content Writer (social media)">
//                                 Content Writer (social media)
//                               </option>
//                               <option value="Contract Recruiter">
//                                 Contract Recruiter
//                               </option>
//                               <option value="Controls Engineer">
//                                 Controls Engineer
//                               </option>
//                               <option value="Coordinator">Coordinator</option>
//                               <option value="Corporate Communications Manager">
//                                 Corporate Communications Manager
//                               </option>
//                               <option value="Corporate Sales Manager">
//                                 Corporate Sales Manager
//                               </option>
//                               <option value="Corporate Trainer">
//                                 Corporate Trainer
//                               </option>
//                               <option value="Customer Service Manager">
//                                 Customer Service Manager
//                               </option>
//                               <option value="Customer Service Representative">
//                                 Customer Service Representative
//                               </option>
//                               <option value="Diamond Grader - Jewellery Manufacturing">
//                                 Diamond Grader - Jewellery Manufacturing
//                               </option>
//                               <option value="Diamond marker">
//                                 Diamond marker
//                               </option>
//                               <option value="Diamond Polisher">
//                                 Diamond Polisher
//                               </option>
//                               <option value="Diamond Sawyer">
//                                 Diamond Sawyer
//                               </option>
//                               <option value="Diamond Selector - Jewellery Manufacturing">
//                                 Diamond Selector - Jewellery Manufacturing
//                               </option>
//                               <option value="Diamond Setter">
//                                 Diamond Setter
//                               </option>
//                               <option value="Director">Director</option>
//                               <option value="Dispatch Executive/Stock Controller/Stock Keeper">
//                                 Dispatch Executive/Stock Controller/Stock Keeper
//                               </option>
//                               <option value="Distribution Sales Representative">
//                                 Distribution Sales Representative
//                               </option>
//                               <option value="Distribution/Shipping/Transportation Manager">
//                                 Distribution/Shipping/Transportation Manager
//                               </option>
//                               <option value="District Sales Manager">
//                                 District Sales Manager
//                               </option>
//                               <option value="Diamond Expert">
//                                 Diamond Expert
//                               </option>
//                               <option value="Diamond Cutter">
//                                 Diamond Cutter
//                               </option>
//                               <option value="Diamond Bruter">
//                                 Diamond Bruter
//                               </option>
//                               <option value="Customised Jewellery Maker">
//                                 Customised Jewellery Maker
//                               </option>
//                               <option value="Data entry operator/ computer operator">
//                                 Data entry operator/ computer operator
//                               </option>
//                               <option value="Data Processing Executive">
//                                 Data Processing Executive
//                               </option>
//                               <option value="Data Processing Supervisor">
//                                 Data Processing Supervisor
//                               </option>
//                               <option value="Database Administrator">
//                                 Database Administrator
//                               </option>
//                               <option value="Delivery Executive/Boy/Assistant">
//                                 Delivery Executive/Boy/Assistant
//                               </option>
//                               <option value="Delivery Head">
//                                 Delivery Head
//                               </option>
//                               <option value="Deputy Manager">
//                                 Deputy Manager
//                               </option>
//                               <option value="Designer">Designer</option>
//                               <option value="Developer">Developer</option>
//                               <option value="Diamond Assoter">
//                                 Diamond Assoter
//                               </option>
//                               <option value="Division Manager">
//                                 Division Manager
//                               </option>
//                             </select>
//                     </td>
//                     <td>
//                       <input
//                         type="date"
//                         className="form-control rounded"
//                         value={row.from}
//                         onChange={(e) =>
//                           updateField(index, "from", e.target.value)
//                         }
//                       />
//                     </td>
//                     <td>
//                       <input
//                         type="date"
//                         className="form-control rounded"
//                         value={row.to}
//                         onChange={(e) =>
//                           updateField(index, "to", e.target.value)
//                         }
//                       />
//                     </td>
//                     <td>
//                       <input
//                         type="text"
//                         className="form-control rounded"
//                         value={row.years}
//                         onChange={(e) =>
//                           updateField(index, "years", e.target.value)
//                         }
//                       />
//                     </td>
//                     <td>
//                       <div className="d-flex justify-content-center gap-2">
//                         <button
//                           type="button"
//                           className="btn btn-sm btn-success"
//                           onClick={addExperienceRow}
//                         >
//                           +
//                         </button>
//                         {experienceData.length > 1 && (
//                           <button
//                             type="button"
//                             className="btn btn-sm btn-danger"
//                             onClick={() => removeExperienceRow(index)}
//                           >
//                             -
//                           </button>
//                         )}
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="d-flex justify-content-between mt-3">
//             <button className="btn btn-secondary" onClick={handlePrevious}>
//               Previous
//             </button>
//             <button className="btn btn-primary" onClick={handleNext}>
//               Next
//             </button>
//           </div>

//                     </div>
//                   </div>
//                 </div>
//               </div>
//               )}
//               {/* any working experience end  */}
      
          
      
//               {/* Attempted Any International Exams start  */}
//               {step === 5 && (
//               <AttemptedInternationalExam3   onNext={handleNext} 
//               onPrevious={handlePrevious} />
//               )}
//               {/* Attempted Any International Exams end */}
      
//               {/* Upload Your Resume start  */}
//               {step === 6 && (
//               <UploadYourResume1 onNext={handleNext} 
//               onPrevious={handlePrevious}/>
//               )}
//               {/* Upload Your Resume end  */}
      
             
      
//               {/* Additional Details start  */}
//               {step === 7 && ( 
//               <div className="container mt-5">
//         <div className="xb-contact pos-rel bg-white shadow rounded p-4" style={{ overflow: "visible" }}>
//           <div className="row">
//             <div className="col-12">
//               <div className="p-5">
//                 <div className="xb-item--holder mb-25">
//                   <h3 className="wow skewIn fw-bold border-bottom pb-2">Additional Details</h3>
//                 </div>
//                 <form className="xb-item--form contact-from" action="#!">
//                   <div className="row g-4">
//                     <div className="col-12 mb-3">
//                       <label className="mb-1">Do You Have A Valid Passport?</label>
//                       <br />
//                       <div  style={{ marginTop: "10px" }}>
//                         <span
//                           style={{ marginRight: "8px", marginBottom: "0px" }}
//                         >
//                           No
//                         </span>
//                         <label className="experience-toggle-switch">
//                           <input
//                             type="checkbox"
//                             checked={hasPassport}
//                             onChange={handlePassportToggle}
//                           />
//                           <span
//                             className="experience-slider"
//                             style={{ marginBottom: "0px" }}
//                           ></span>
//                         </label>
//                         <span
//                           style={{ marginLeft: "8px", marginBottom: "0px" }}
//                         >
//                           Yes
//                         </span>
//                       </div>
//                     </div>

//                     {hasPassport && (
//                       <>
//                         <div className="col-lg-4 ">
//                           <label className="mb-1">Date Of Birth :</label>
//                           <div className="d-flex align-items-center border rounded px-3 py-2">
//                           <span>  
//                               <CalendarMonthIcon className="me-2 text-muted"/>
//                             </span>
//                             <input
//                             className="form-control border-0 p-0"
//                               type="date"
//                               placeholder="Enter Your DOB"
//                               style={{ width: "100%" }}
//                             />
//                           </div>
//                         </div>

//                         <div className="col-lg-4">
//                           <label className="mb-1">Citizenship :</label>
//                           <div className="d-flex align-items-center border rounded px-3 py-2">
//                             <span>
//                               <PermIdentityIcon  className="me-2 text-muted" />
//                             </span>
//                             <input type="text" className="form-control border-0 p-0"/>
//                           </div>
//                         </div>

//                         <div className="col-lg-4">
//                           <label className="mb-1">Passport No. :</label>
//                           <div  className="d-flex align-items-center border rounded px-3 py-2">
//                             <span>
//                               <PermIdentityIcon className="me-2 text-muted" />
//                             </span>
//                             <input type="text" className="form-control border-0 p-0"/>
//                           </div>
//                         </div>
//                       </>
//                     )}

                   
//                     <div className="col-lg-6 ">
//                       <label htmlFor="">
//                         Do You Have Any Relatives (In Blood Relation) / Siblings
//                         Living Permanently In A Country Where You Intend To Get
//                         Student Visa ?
//                       </label>
//                       <div style={{ marginTop: "10px" }}>
//                         <span
//                           style={{ marginRight: "8px", marginBottom: "0px" }}
//                         >
//                           No
//                         </span>
//                         <label className="experience-toggle-switch">
//                           <input
//                             type="checkbox"
//                             checked={hasPassport1}
//                             onChange={handlePassportToggle1}
//                           />
//                           <span
//                             className="experience-slider"
//                             style={{ marginBottom: "0px" }}
//                           ></span>
//                         </label>
//                         <span
//                           style={{ marginLeft: "8px", marginBottom: "0px" }}
//                         >
//                           Yes
//                         </span>
//                       </div>
//                     </div>
//                     {hasPassport1 && (
//                       <>
//                         <div className="col-lg-6">
//                           <label className="mb-1">Name Of The Countries :</label>
//                           <div className="d-flex align-items-center border rounded px-3 py-2">
//                             <span>
//                               <PublicIcon className="me-2 text-muted"/>
//                             </span>
//                             <div
//                               className="nice-select"
//                               tabIndex="0"
//                               onClick={() => setDropdownOpen1(!dropdownOpen1)}
//                               onBlur={() => setDropdownOpen1(false)}
//                             >
//                               <span
//                                 className="current"
//                                 style={{
//                                   display: "inline-block",
//                                   maxWidth: "100%", // control how much text to show
//                                   whiteSpace: "nowrap",
//                                   overflow: "hidden",
//                                   textOverflow: "ellipsis",
//                                 }}
//                               >
//                                 {getLabel1()}
//                               </span>
//                               {dropdownOpen1 && (
//                                 <ul className="list">
//                                   {options1.map((option) => (
//                                     <li
//                                       key={option.value}
//                                       data-value={option.value}
//                                       className={`option ${
//                                         selectedOptions1.includes(option.value)
//                                           ? "selected"
//                                           : ""
//                                       }`}
//                                       onClick={(e) => {
//                                         e.stopPropagation(); // prevent closing dropdown
//                                         toggleOption1(option.value);
//                                       }}
//                                     >
//                                       {option.label}
//                                     </li>
//                                   ))}
//                                 </ul>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       </>
//                     )}

//                    <div className="row mt-3">
//                    <div className="col-lg-6">  
//                         <label className="mb-1">How did you come to know about us? :</label>
//                         <div className="d-flex align-items-center border rounded px-3 py-2">
//                           <span>
//                             <PublicIcon className="me-2 text-muted"/>
//                           </span>
//                           <div className="nice-select" tabindex="0">
//                             <span className="current">Please Select </span>
//                             <ul className="list">
//                               <li
//                                 data-value="1"
//                                 className="option multiple focus"
//                               >
//                                Relatives
//                               </li>
//                               <li data-value="2" className="option">
//                               Friends
//                               </li>
//                               <li data-value="3" className="option">
//                               Website
//                               </li>
//                               <li data-value="4" className="option">
//                               Social Media
//                               </li>
//                               <li data-value="5" className="option">
//                               News Paper
//                               </li>
//                               <li data-value="6" className="option">
//                               TV Advertisement
//                               </li>
//                               <li data-value="7" className="option">
//                               Pamphlet
//                               </li>
//                               <li data-value="8" className="option">
//                               Fair
//                               </li>
//                               <li data-value="9" className="option">
//                               Cold Calling
//                               </li>
//                               <li data-value="10" className="option">
//                               Seminar
//                               </li>

//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-6">
//                         <label className="mb-1">Any Additional Information, you would like to write here :</label>
//                         <div className="d-flex align-items-center border rounded px-3 py-2">
//                           <span>
//                             <img src="assets/img/icon/c_message.svg" alt=""  className="me-2 text-muted"/>
//                           </span>
//                           <textarea
//                             name="message"
//                             id="message"
//                             cols="20"
//                             rows="5"
//                             className="form-control border-0 p-0"
//                             placeholder="Write Your Message..."
//                           ></textarea>
//                         </div>
//                       </div>
                     
//                    </div>
//                   </div>
//                 </form>
//               </div>
//                 <div className="d-flex justify-content-between mt-3">
//             <button className="btn btn-secondary" onClick={handlePrevious}>
//               Previous
//             </button>
//             <button className="btn btn-primary" onClick={handleSubmit}>
//               Submit
//             </button>
//           </div>
//             </div>
//           </div>
//         </div>
//               </div>
//               )}
