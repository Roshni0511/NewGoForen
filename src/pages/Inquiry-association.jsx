import React, { useEffect, useState } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Button
} from "@mui/material";

export default function Inquiryassociation() {
  const [showModal, setShowModal] = useState(false);
  const [occupations, setOccupations] = useState([]);
  const [background, setBackground] = useState("");
  const [background12, setBackground12] = useState("");

  const [formData, setFormData] = useState({
    form_name: '',
    name: '',
    email: '',
    number: '',
    present_occupation: '',
    additional_query: ''
  });

  const associationData = [
    {
      title: "Prospects Feeder / Navigator",
      description:
        "Parsing contact details for IELTS Coaching / Visa Clients earning is based on supply of more & more contacts.",
    },
    {
      title: "Freelancer",
      description:
        "Lead generation / Primary explanation to clients. You have to work to bring business regularly. Earning is based on performance.",
    },
    {
      title: "Direct Sales Associate (DSA)",
      description:
        "Responsible for promotion, marketing and registration of client with initial payment collection. Fixed Pay + Variable Incentives.",
    },
    {
      title: "Business Associate (BA)",
      description:
        "Marketing, registration and correspondence will be done by BA. Client will not come in direct contact with Goforen. BA has to pay charges to Goforen for file preparation and information provided by Goforen.",
    },
    {
      title: "Licensee",
      description:
        "Access to webportal of Goforen will be provided. It is like ERP but more than ERP. It will provide all latest update on visa rules of various countries on hand.",
    },
  ];

  useEffect(() => {
    const bg1 = "/assets/pic/breadcrumb-bg.jpg";
    const bg2 = "assets/img/bg/blog_bg.png";
    setBackground(bg1);
    setBackground12(bg2);

    axios.get('https://goforen.com/go_foren/get_occupation_data/')
      .then((response) => setOccupations(response.data))
      .catch((error) => console.error("Error fetching occupation data:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleShow = (formType) => {
    setFormData(prev => ({ ...prev, form_name: formType }));
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({
      form_name: '',
      name: '',
      email: '',
      number: '',
      present_occupation: '',
      additional_query: ''
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://goforen.com/go_foren/submit_inquiry_association/", formData);
      alert(response.data.message);
      handleClose();
    } catch (error) {
      alert("Submission failed: " + (error.response?.data?.message || "Unknown error"));
    }
  };

  return (
    <div>
      <Navbar />

      {/* Breadcrumb */}
      <section
        className="breadcrumb pos-rel bg_img"
        style={{
          backgroundImage: `url(${background})`,
          minHeight: "400px",
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="breadcrumb__content">
            <h2 className="breadcrumb__title" style={{ color: '#fff' }}>
              Inquiry For Association with us
            </h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item"><a href="/Visa-services">Visa Services</a></li>
              <li className="breadcrumb-item">Inquiry For Association with us</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="association-section pt-120 pb-120">
        <div className="container">
          <div className="header text-white text-center fw-bold py-3 rounded-top" style={{ background: '#00cc99' }}>
            Inquiry For Association with us
          </div>
          <div className="d-flex flex-wrap justify-content-center border rounded-bottom overflow-auto">
            {associationData.map((item, index) => (
              <div className="card m-2 flex-fill" style={{ minWidth: "260px", maxWidth: "345px" }} key={index}>
                <div className="card-header fw-bold text-center text-dark" style={{ background: '#fff' }}>
                  {item.title}
                </div>
                <div className="card-body small" style={{ minHeight: "200px", background: '#f9f9f9', color: '#000' }}>
                  {item.description}
                </div>
                <div className="card-footer text-center" style={{ background: '#fff' }}>
                  <button
                    className="btn text-white px-4"
                    style={{ background: '#00cc99' }}
                    onClick={() => handleShow(item.title)}
                  >
                    Inquiry
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Dialog open={showModal} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Inquiry for {formData.form_name}</DialogTitle>
        <DialogContent dividers>
          <TextField
            fullWidth
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            margin="dense"
          />
          <TextField
            fullWidth
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            margin="dense"
          />
          <TextField
            fullWidth
            name="number"
            label="Contact No."
            value={formData.number}
            onChange={handleChange}
            margin="dense"
          />
          <TextField
            select
            fullWidth
            name="present_occupation"
            label="Present Occupation"
            value={formData.present_occupation}
            onChange={handleChange}
            margin="dense"
          >
            <MenuItem value="">--Please Select--</MenuItem>
            {occupations.map((item) => (
              <MenuItem key={item.id} value={item.occupation}>
                {item.occupation}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            multiline
            rows={3}
            name="additional_query"
            label="Additional Query"
            value={formData.additional_query}
            onChange={handleChange}
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button variant="contained" style={{ background: "#00cc99" }} onClick={handleSubmit}>
            Send
          </Button>
        </DialogActions>
      </Dialog>

      {/* Footer Section */}
      <div style={{ background: '#edf3f5', padding: '30px 0px' }}>
        <div className="container">
          <div
            className="xb-newsletter1 pos-rel"
            style={{
              backgroundImage: `url(${background12})`,
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
                    <p>We are available throughout the week to help you with your visa and training needs.</p>
                  </div>
                  <div className="row justify-content-center text-center">
                    <div className="col-lg-3 mt-30 col-md-6" style={{ boxShadow: " 0px 14px 19px rgb(221 229 236)", padding: "20px", margin: "5px" }}>
                      <h5 className="mb-2">Monday - Saturday :</h5>
                      <p>10.00 a.m. to 6.30 p.m.</p>
                    </div>
                    <div className="col-lg-3 mt-30 col-md-6" style={{ boxShadow: "0px 14px 19px rgb(221 229 236)", padding: "20px", margin: "5px" }}>
                      <h5 className="mb-2">Sunday :</h5>
                      <p>10.00 a.m. to 12.30 p.m.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
