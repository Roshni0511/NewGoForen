import React from "react";

export default function UploadYourResume({ onNext, onPrevious }) {
  return (
    <div>
      <div className="container mt-5">
        <div className="xb-contact pos-rel bg-white shadow rounded p-4" style={{ overflow: "visible" }}>
          <div className="row">
            <div className="col-12">
              <div className="p-5">
                <div className="xb-item--holder mb-25">
                  <h3 className="wow skewIn  fw-bold border-bottom pb-2">Upload Your Resume</h3>
                </div>
                <form className="xb-item--form contact-from" action="#!">
                  <div className="row">
                    <div className="col-12">
                      <label htmlFor="" className="mb-1">
                        Resume (.doc, .docx, .pdf, .png, .jpeg) :{" "}
                      </label>
                      <div className="d-flex align-items-center border rounded px-3 py-2">
                        <span>
                          <img src="assets/img/icon/c_upload.svg" alt="" />
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          id="resumeUpload"
                          className="form-control  border-0 p-0"
                          placeholder="Upload Your Resume"
                        />
                      </div>
                      <span> File size must be less than or equal to 2 MB</span>
                    </div>
                  </div>
                </form>
              </div>
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
  );
}
