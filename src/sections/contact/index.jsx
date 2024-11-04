import { useState } from "react";

import Heading from "../../components/heading";
import Text from "../../components/text";
import "./index.css";
import Button from "../../components/button";
import FormInput from "../../components/formInput";

const defaultFormData = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  service: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const areAllFieldsFilled = Object.values(formData)?.every(
      (el) => el && el.trim()
    );

    if (!areAllFieldsFilled) return;

    const formatDataToDisplay = (data) =>
      Object.entries(data)?.reduce((acc, [key, value]) => {
        return (acc += `\n ${key} : ${value}`);
      }, "");

    alert(`Formularz wysłany z danymi: ${formatDataToDisplay(formData)}`);
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="content">
          <Heading level={2}>Contact</Heading>
          <Text>
            Questions or concerns? Just fill out the form below and our support
            team will get back to you within 24 hours
          </Text>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div className="formRow">
            <FormInput
              placeholder="First Name"
              name="firstName"
              onChange={handleFormChange}
              value={formData.firstName}
              style={{ marginTop: 0 }}
            />
            <FormInput
              placeholder="Last Name"
              name="lastName"
              onChange={handleFormChange}
              value={formData.lastName}
            />
          </div>
          <FormInput
            style="full"
            placeholder="Phone Number"
            name="phoneNumber"
            type="tel"
            onChange={handleFormChange}
            value={formData.phoneNumber}
          />
          <FormInput
            style="full"
            placeholder="What Service are you interested in?"
            name="service"
            onChange={handleFormChange}
            value={formData.service}
          />
          <Button
            type="submit"
            style={{ alignSelf: "flex-start", fontSize: "14px" }}
            color="white"
          >
            SUBMIT NOW
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
