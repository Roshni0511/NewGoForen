import React, { useEffect, useState } from "react";
import PublicIcon from "@mui/icons-material/Public";
const options = [
  { value: 1, label: "History of Art, Archaeology, and Visual Studies" },
  { value: 2, label: "Mechanical Engineering" },
  { value: 3, label: "Medieval Studies" },
  { value: 4, label: "Microbiology" },
  { value: 5, label: "Molecular and Integrative Physiology" },
  { value: 6, label: "Music" },
  { value: 7, label: " Natural Resources" },
  { value: 8, label: " Other" },
  { value: 9, label: " Neurobiology and Behavior" },
  { value: 10, label: " Nutrition" },
  { value: 11, label: " Operations Research and Information Engineering" },
  { value: 12, label: " Mathematics" },
  { value: 13, label: " Materials Science and Engineering" },
  { value: 14, label: " Horticulture" },
  { value: 15, label: " Hotel Administration" },
  { value: 16, label: " Human Development" },
  { value: 17, label: " Immunology and Infectious Disease" },
  { value: 18, label: " Industrial and Labor Relations" },
  { value: 19, label: " Information Science" },
  { value: 20, label: " Landscape Architecture" },
  { value: 21, label: " Law" },
  { value: 22, label: " Linguistics" },
  { value: 23, label: " Management" },
  { value: 24, label: " Peace Studies and Peace Science" },
  { value: 25, label: " Pharmacology" },
  { value: 26, label: " Philosophy" },
  { value: 27, label: " Science and Technology Studies" },
  { value: 28, label: " Sociology" },
  { value: 29, label: " Soil and Crop Sciences" },
  { value: 30, label: " Statistics" },
  { value: 31, label: " Sustainable Energy" },
  { value: 32, label: " Systems Engineering" },
  { value: 33, label: " Theatre Arts" },
  { value: 34, label: " Theoretical and Applied Mechanics" },
  { value: 35, label: " Urban Studies" },
  { value: 36, label: " Water Resources" },
  { value: 37, label: " Romance Studies" },
  { value: 38, label: " Risk Analysis, Communication and Policy" },
  { value: 39, label: " Physics" },
  { value: 40, label: " Plant Biology" },
  { value: 41, label: " Plant Breeding" },
  { value: 42, label: " Plant Pathology and Plant-Microbe Biology" },
  { value: 43, label: " Plant Protection" },
  { value: 44, label: " Policy Analysis and Management" },
  { value: 45, label: " Psychology" },
  { value: 46, label: " Public Affairs" },
  { value: 47, label: " Real Estate" },
  { value: 48, label: " Regional Science" },
  { value: 49, label: " Zoology and Wildlife Conservation" },
  { value: 50, label: " History" },
  { value: 51, label: " Aerospace Engineering" },
  { value: 52, label: " Biomedical Engineering" },
  { value: 53, label: " Biophysics" },
  { value: 54, label: " Chemical Engineering" },
  { value: 55, label: " Chemistry and Chemical Biology" },
  { value: 56, label: " City and Regional Planning" },
  { value: 57, label: " Civil and Environmental Engineering" },
  { value: 58, label: " Classics" },
  { value: 59, label: " Cognitive Science" },
  { value: 60, label: " Communication" },
  { value: 61, label: " Comparative Biomedical Sciences" },
  { value: 62, label: " Biological and Environmental Engineering" },
  { value: 63, label: " Biochemistry, Molecular and Cell Biology" },
  { value: 64, label: "  Animal Science" },
  { value: 65, label: " Anthropology" },
  { value: 66, label: " Applied Economics and Management" },
  { value: 67, label: " Applied Mathematics" },
  { value: 68, label: " Applied Physics" },
  { value: 69, label: " Archaeology" },
  { value: 70, label: " Architecture" },
  { value: 71, label: " Art" },
  { value: 72, label: " Astronomy and Space Sciences" },
  { value: 73, label: " Atmospheric Science" },
  { value: 74, label: " Comparative Literature" },
  { value: 75, label: " Computational Biology" },
  { value: 76, label: " Computational Science and Engineering" },
  { value: 77, label: " Environmental Toxicology" },
  { value: 78, label: " Epidemiology" },
  { value: 79, label: " Fiber Science and Apparel Design" },
  { value: 80, label: " Film and Video Studies" },
  { value: 81, label: " Food Science and Technology" },
  { value: 82, label: " Genetics, Genomics and Development" },
  { value: 83, label: " Genomics" },
  { value: 84, label: " Geological Sciences" },
  { value: 85, label: " Germanic Studies" },
  { value: 86, label: " Global Development" },
  { value: 87, label: " Environmental Quality" },
  { value: 88, label: " Entomology" },
  { value: 89, label: " Computer Science" },
  { value: 90, label: " Conservation and Sustainable Development" },
  { value: 91, label: " Demography" },
  { value: 92, label: " OthDesign and Environmental Analysiser" },
  { value: 93, label: " Development Sociology" },
  { value: 94, label: " Ecology and Evolutionary Biology" },
  { value: 95, label: " Economics" },
  { value: 96, label: " Education" },
  { value: 97, label: " English Language and Literature" },
  { value: 98, label: " Government" },
];

const options1 = [
  { value: 1, label: "Diploma" },
  { value: 2, label: "Degree" },
  { value: 3, label: "Masters" },
  { value: 4, label: "Post Graduation" },
  { value: 5, label: "Advanced Diploma" },
  { value: 6, label: "PHD" },
  { value: 7, label: " Others" },
];

const monthOptions = ["September", "January", "Summer"];
export default function IntendedStudyDetails({ onNext, onPrevious }) {
  // Intended Study Details
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleOption = (value) => {
    setSelectedOptions((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const getLabel = () => {
    if (selectedOptions.length === 0) return "None Selected";
    return options
      .filter((opt) => selectedOptions.includes(opt.value))
      .map((opt) => opt.label)
      .join(", ");
  };
  // Intended Study Details1
  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);

  const toggleOption1 = (value) => {
    setSelectedOptions1((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const getLabel1 = () => {
    if (selectedOptions1.length === 0) return "None Selected";
    return options1
      .filter((opt) => selectedOptions1.includes(opt.value))
      .map((opt) => opt.label)
      .join(", ");
  };

  //
  const [rows, setRows] = useState([
    { month: "September", year: "" },
    { month: "January", year: "" },
    { month: "Summer", year: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([...rows, { month: "", year: "" }]);
  };

  const removeRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="xb-contact pos-rel bg-white shadow rounded p-4" style={{ overflow: "visible" }}>
          <div className="row">
            <div className="col-12">
              <div className="p-5">
                <div className="xb-item--holder mb-25">
                  <h3 className="wow skewIn  fw-bold border-bottom pb-2">Intended Study Details</h3>
                </div>
                <form className="xb-item--form contact-from" action="#!">
                  <div className="row">
                    <div className="col-lg-6">
                      <label htmlFor="" className="mb-1">
                        Intended Major Field Of Study(You Can Select More Than
                        One) :
                      </label>
                      <div className="d-flex align-items-center border rounded px-3 py-2">
                        <span>
                          <PublicIcon className="me-2 text-muted"/>
                        </span>
                        <div
                          className="nice-select"
                          tabIndex="0"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          onBlur={() => setDropdownOpen(false)}
                        >
                          <span
                            className="current"
                            style={{
                              display: "inline-block",
                              maxWidth: "100%", // control how much text to show
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {getLabel()}
                          </span>
                          {dropdownOpen && (
                            <ul
                              className="list"
                              style={{ height: "500px", overflow: "auto" }}
                            >
                              {options.map((option) => (
                                <li
                                  key={option.value}
                                  data-value={option.value}
                                  className={`option ${
                                    selectedOptions.includes(option.value)
                                      ? "selected"
                                      : ""
                                  }`}
                                  onClick={(e) => {
                                    e.stopPropagation(); // prevent closing dropdown
                                    toggleOption(option.value);
                                  }}
                                >
                                  {option.label}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <label htmlFor="" className="mb-1">
                        Which Level Of Study Do You Want To Persue ?(You Can
                        Select More Than One)
                      </label>
                      <div className="d-flex align-items-center border rounded px-3 py-2">
                        <span>
                          <PublicIcon  className="me-2 text-muted"/>
                        </span>
                        <div
                          className="nice-select"
                          tabIndex="0"
                          onClick={() => setDropdownOpen1(!dropdownOpen1)}
                          onBlur={() => setDropdownOpen1(false)}
                        >
                          <span
                            className="current"
                            style={{
                              display: "inline-block",
                              maxWidth: "100%", // control how much text to show
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {getLabel1()}
                          </span>
                          {dropdownOpen1 && (
                            <ul className="list">
                              {options1.map((option) => (
                                <li
                                  key={option.value}
                                  data-value={option.value}
                                  className={`option ${
                                    selectedOptions1.includes(option.value)
                                      ? "selected"
                                      : ""
                                  }`}
                                  onClick={(e) => {
                                    e.stopPropagation(); // prevent closing dropdown
                                    toggleOption1(option.value);
                                  }}
                                >
                                  {option.label}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                    <div style={{ overflowX: "auto" }}>
                      <label>
                        <strong>Intake :</strong>
                      </label>
                      <table
                       className="table table-bordered text-center align-middle"
                        border="1"
                        cellPadding="10"
                        style={{ width: "100%", borderCollapse: "collapse", minWidth: "500px",}}
                      >
                        <thead style={{ backgroundColor: "#edf3f5" }}>
                          <tr>
                            <th>Month</th>
                            <th>Year</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((row, index) => (
                            <tr key={index} >
                              <td >
                                <select
                                  value={row.month}
                                  onChange={(e) =>
                                    handleChange(index, "month", e.target.value)
                                  }
                                  style={{
                                    padding: "10px",
                                    border: "1px solid #EDF3F5",
                                    borderRadius: "10px",
                                  }}
                                //   style={{ width: "100%" }}
                                >
                                  <option value="" className="nice-select" >Select Month</option>
                                  {monthOptions.map((month) => (
                                    <option key={month} value={month}>
                                      {month}
                                    </option>
                                  ))}
                                </select>
                              </td>
                              <td>
                                <input
                                className="form-control rounded"
                                 style={{
                                    padding: "15px",
                                    border: "1px solid #EDF3F5",
                                    borderRadius: "10px",
                                  }}
                                  type="text"
                                  value={row.year}
                                  onChange={(e) =>
                                    handleChange(index, "year", e.target.value)
                                  }
                                  placeholder="Enter Year"
                                //   style={{ width: "100%" }}
                                />
                              </td>
                              <td style={{ textAlign: "center" }}>
                                <button
                                  onClick={addRow}
                                   className="btn btn-sm btn-success"
                                  style={{
                                    
                                    marginRight: "5px",
                                  }}
                                >
                                  +
                                </button>
                                {rows.length > 1 && (
                                  <button
                                    onClick={() => removeRow(index)}
                                    className="btn btn-sm btn-danger"
                                  >
                                    -
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </form>
                <div className="d-flex justify-content-between mt-3">
        <button className="btn btn-secondary" onClick={onPrevious}>
          Previous
        </button>
        <button className="btn btn-primary" onClick={onNext}  style={{background:'#e38508',border:'1px solid #e38508'}}>
          Next
        </button>
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
