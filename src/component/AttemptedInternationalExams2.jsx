import React, { useState } from "react";

const examOptions = ["IELTS", "TOEFL", "PTE", "TFI(French Test)"];
const examOptions1 = ["GRE", "GMAT", "SAT"];
const examOptions2 = ["IELTS", "TOEFL", "PTE", "TFI(French Test)","GRE", "GMAT", "SAT"];
export default function AttemptedInternationalExam2() {
  const [showForm1, setShowForm1] = useState(true); // default is true (Form 1)

  const handleToggle = (e) => {
    setShowForm1(e.target.checked); // true = Yes (Form 1), false = No (Form 2)
  };
  //
  const [rows, setRows] = useState([
    {
      exam: "IELTS",
      Listening: "",
      Reading: "",
      Writing: "",
      Speaking: "",
      Score: "",
    },
    {
      exam: "TOEFL",
      Listening: "",
      Reading: "",
      Writing: "",
      Speaking: "",
      Score: "",
    },
    {
      exam: "PTE",
      Listening: "",
      Reading: "",
      Writing: "",
      Speaking: "",
      Score: "",
    },
    {
      exam: "TFI(French Test)",
      Listening: "",
      Reading: "",
      Writing: "",
      Speaking: "",
      Score: "",
    },
  ]);
  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        exam: "",
        Listening: "",
        Reading: "",
        Writing: "",
        Speaking: "",
        Score: "",
      },
    ]);
  };

  const removeRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };
  //

  const [rows1, setRows1] = useState([
    { exam: "GRE", Verbal: "", Quantitative: "", Analytical: "", Score: "" },
    { exam: "GMAT", Verbal: "", Quantitative: "", Analytical: "", Score: "" },
    { exam: "SAT", Verbal: "", Quantitative: "", Analytical: "", Score: "" },
  ]);
  const handleChange1 = (index, field, value) => {
    const updatedRows1 = [...rows1];
    updatedRows1[index][field] = value;
    setRows1(updatedRows1);
  };

  const addRow1 = () => {
    setRows1([
      ...rows1,
      { exam: "", Verbal: "", Quantitative: "", Analytical: "", Score: "" },
    ]);
  };

  const removeRow1 = (index) => {
    const updatedRows1 = [...rows1];
    updatedRows1.splice(index, 1);
    setRows1(updatedRows1);
  };

//   
const [rows2, setRows2] = useState([
    { exam: "Select", Date: "" },
   
  ]);
  const handleChange2 = (index, field, value) => {
    const updatedRows2 = [...rows2];
    updatedRows2[index][field] = value;
    setRows2(updatedRows2);
  };

  const addRow2 = () => {
    setRows2([
      ...rows2,
      { exam: "", Verbal: "", Quantitative: "", Analytical: "", Score: "" },
    ]);
  };

  const removeRow2 = (index) => {
    const updatedRows2 = [...rows2];
    updatedRows2.splice(index, 1);
    setRows2(updatedRows2);
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="xb-contact pos-rel bg-white shadow rounded p-4" style={{ overflow: "visible" }}>
          <div className="row">
            <div className="col-12">
              <div className="p-5">
                <div className="xb-item--holder mb-25 experience-toggle-wrapper">
                  <h3 className="wow skewIn  fw-bold border-bottom pb-2">
                    Attempted Any International Exams ?
                  </h3>
                  <span
                    style={{
                      marginRight: "8px",
                      marginLeft: "10px",
                      marginBottom: "0px",
                    }}
                  >
                    {" "}
                    No
                  </span>
                  <label className="experience-toggle-switch">
                    <input
                      type="checkbox"
                      checked={showForm1}
                      onChange={handleToggle}
                    />
                    <span
                      className="experience-slider"
                      style={{ marginBottom: "0px" }}
                    ></span>
                  </label>
                  <span style={{ marginLeft: "8px", marginBottom: "0px" }}>
                    Yes
                  </span>
                </div>
                {showForm1 ? (
                  <form className="xb-item--form contact-from" action="">
                    <div className="row">
                      <div style={{ overflowX: "auto" }}>
                        <label>
                          <strong>Language Tests :</strong>
                        </label>
                        <table
                        className="table table-bordered text-center align-middle"
                          border="1"
                          cellPadding="10"
                          style={{ width: "100%", borderCollapse: "collapse" }}
                        >
                          <thead style={{ backgroundColor: "#edf3f5" }}>
                            <tr>
                              <th>Exam</th>
                              <th>Listening</th>
                              <th>Reading</th>
                              <th>Writing</th>
                              <th>Speaking</th>
                              <th>Final Score</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {rows.map((row, index) => (
                              <tr key={index}>
                                <td>
                                  <select
                                    value={row.exam}
                                    onChange={(e) =>
                                      handleChange(
                                        index,
                                        "exam",
                                        e.target.value
                                      )
                                    }
                                    style={{
                                      padding: "10px",
                                      border: "1px solid #EDF3F5",
                                      borderRadius: "10px",
                                      width: "200px",
                                    }}
                                    //   style={{  }}
                                  >
                                    <option value="" className="nice-select">
                                      Select Exam
                                    </option>
                                    {examOptions.map((exam) => (
                                      <option key={exam} value={exam}>
                                        {exam}
                                      </option>
                                    ))}
                                  </select>
                                </td>
                                <td>
                                  <input
                                    
                                    type="text"
                                    value={row.Listening}
                                    onChange={(e) =>
                                      handleChange(
                                        index,
                                        "Listening",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                <td>
                                  <input
                                   
                                    type="text"
                                    value={row.Reading}
                                    onChange={(e) =>
                                      handleChange(
                                        index,
                                        "Reading",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                <td>
                                  <input
                                   
                                    type="text"
                                    value={row.Writing}
                                    onChange={(e) =>
                                      handleChange(
                                        index,
                                        "Writing",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>

                                <td>
                                  <input
                                    
                                    type="text"
                                    value={row.Speaking}
                                    onChange={(e) =>
                                      handleChange(
                                        index,
                                        "Speaking",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>

                                <td>
                                  <input
                                   
                                    type="text"
                                    value={row.Score}
                                    onChange={(e) =>
                                      handleChange(
                                        index,
                                        "Score",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>

                                <td style={{ textAlign: "center" }}>
                                  <div className="row">
                                    <div className="col-4">
                                      <button
                                        onClick={addRow}
                                         className="btn btn-sm btn-success"
                                      >
                                        +
                                      </button>
                                    </div>
                                    <div className="col-4">
                                      {rows.length > 1 && (
                                        <button
                                          onClick={() => removeRow(index)}
                                          className="btn btn-sm btn-danger"
                                        >
                                          -
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/*  */}
                      <div className="mt-5" style={{ overflowX: "auto" }}>
                        <label>
                          <strong>College Admission Tests :</strong>
                        </label>
                        <table
                         className="table table-bordered text-center align-middle"
                          border="1"
                          cellPadding="10"
                          style={{ width: "100%", borderCollapse: "collapse" }}
                        >
                          <thead  style={{ backgroundColor: "#edf3f5" }}>
                            <tr>
                              <th>Exam</th>
                              <th>Verbal Reasoning</th>
                              <th>Quantitative Reasoning</th>
                              <th>Analytical Writing</th>

                              <th>Final Score</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {rows1.map((row, index) => (
                              <tr key={index}>
                                <td>
                                  <select
                                    value={row.exam}
                                    onChange={(e) =>
                                      handleChange1(
                                        index,
                                        "exam",
                                        e.target.value
                                      )
                                    }
                                    style={{
                                      padding: "10px",
                                      border: "1px solid #EDF3F5",
                                      borderRadius: "10px",
                                      width: "200px",
                                    }}
                                    //   style={{  }}
                                  >
                                    <option value="" className="nice-select">
                                      Select Exam
                                    </option>
                                    {examOptions1.map((exam) => (
                                      <option key={exam} value={exam}>
                                        {exam}
                                      </option>
                                    ))}
                                  </select>
                                </td>
                                <td>
                                  <input
                                   
                                    type="text"
                                    value={row.Verbal}
                                    onChange={(e) =>
                                      handleChange1(
                                        index,
                                        "Verbal",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                <td>
                                  <input
                                   
                                    type="text"
                                    value={row.Quantitative}
                                    onChange={(e) =>
                                      handleChange1(
                                        index,
                                        "Quantitative ",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                <td>
                                  <input
                                    
                                    type="text"
                                    value={row.Analytical}
                                    onChange={(e) =>
                                      handleChange1(
                                        index,
                                        "Analytical ",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>

                                <td>
                                  <input
                                  
                                    type="text"
                                    value={row.Score}
                                    onChange={(e) =>
                                      handleChange1(
                                        index,
                                        "Score",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>

                                <td style={{ textAlign: "center" }}>
                                  <div className="row">
                                    <div className="col-4">
                                      <button
                                        onClick={addRow1}
                                       className="btn btn-sm btn-success"
                                      >
                                        +
                                      </button>
                                    </div>
                                    <div className="col-4">
                                      {rows1.length > 1 && (
                                        <button
                                          onClick={() => removeRow1(index)}
                                          className="btn btn-sm btn-danger"
                                        >
                                          -
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </form>
                ) : (
                  <form>
                    <div className="row">
                    <div style={{ overflowX: "auto" }}>
                        <label>
                          <strong>Probable Joining Dates For Courses :</strong>
                        </label>
                        <table
                          className="table table-bordered text-center align-middle"
                          border="1"
                          cellPadding="10"
                          style={{ width: "100%", borderCollapse: "collapse" }}
                        >
                          <thead style={{ backgroundColor: "#edf3f5" }}>
                            <tr>
                              <th>Exam</th>
                              <th>Date Of Joining</th>
                              
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {rows2.map((row, index) => (
                              <tr key={index}>
                                <td>
                                  <select
                                    value={row.exam}
                                    onChange={(e) =>
                                      handleChange2(
                                        index,
                                        "exam",
                                        e.target.value
                                      )
                                    }
                                    style={{
                                      padding: "10px",
                                      border: "1px solid #EDF3F5",
                                      borderRadius: "10px",
                                    //   width: "200px",
                                    }}
                                    //   style={{  }}
                                  >
                                    <option value="" className="nice-select">
                                      Select Exam
                                    </option>
                                    {examOptions2.map((exam) => (
                                      <option key={exam} value={exam}>
                                        {exam}
                                      </option>
                                    ))}
                                  </select>
                                </td>
                                <td>
                                  <input
                                    style={{
                                      padding: "15px",
                                      border: "1px solid #EDF3F5",
                                      borderRadius: "10px",
                                      width:'100%'
                                    }}
                                    type="Date"
                                    value={row.Date}
                                    onChange={(e) =>
                                      handleChange2(
                                        index,
                                        "Date",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                

                                <td style={{ textAlign: "center" }}>
                                  
                                      <button
                                        onClick={addRow2}
                                         className="btn btn-sm btn-success"
                                        style={{
                                          
                                          marginRight: "5px",
                                        }}
                                      >
                                        +
                                      </button>
                                 
                                      {rows.length > 1 && (
                                        <button
                                          onClick={() => removeRow2(index)}
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
                      <div className="col-12 mt-4">
                        <label htmlFor="" className="mb-1">Marks In English Language At 10th / 12th Exam :</label>
                        <div className="d-flex align-items-center border rounded px-3 py-2">
                        <input type="text" className="form-control border-0 p-0" />
                        </div>
                      </div>
                    </div>

                  </form>
                )}
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
