import React, { useEffect, useState } from "react";
import axios from "axios";

const custom_input = {
  border: "1px solid #ced4da",
  borderRadius: "4px",
  padding: "0.375rem 0.75rem",
  fontSize: "1rem",
};

export default function PersonalGuidanceForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    desired_country: "",
    desired_visa_service: "",
  });

  const [countries, setCountries] = useState([]);
  const [VisaTypes, setVisaTypes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/get_country_data/")
      .then((res) => setCountries(res.data))
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/get_visa_services/")
      .then((res) => setVisaTypes(res.data))
      .catch((err) => console.error("Error fetching visa types:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/submit_personalized_guidance/", formData);
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        desired_country: "",
        desired_visa_service: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
  };

  return (
    <div className="formBx">
      <form className="custom-signup-form" onSubmit={handleSubmit}>
        <h2>Get Personalized Guidance for Your Visa Process</h2>

        <div className="form-row">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <select
            name="desired_country"
            className="form-select"
            style={custom_input}
            value={formData.desired_country}
            onChange={handleChange}
            required
          >
            <option value="">Select a Country...</option>
            {countries.map((country) => (
              <option key={country.id} value={country.country}>
                {country.country}
              </option>
            ))}
          </select>

          <select
            name="desired_visa_service"
            className="form-control"
            style={custom_input}
            value={formData.desired_visa_service}
            onChange={handleChange}
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

        <button type="submit" style={{ background: "#e38508", color: "#fff" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
