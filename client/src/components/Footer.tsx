import React, { useState, FormEvent } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import axios from "axios";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}

const Footer: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "https://backend.civionicengineering.com/api/auth/contact/", // Updated backend URL
        formData
      );
      console.log(response.data.message); // You can handle success response here
      setFormData({ first_name: "", last_name: "", email: "", message: "" });
      alert("Message sent successfully");
    } catch (error) {
      console.error("Error sending message: ", error);
      alert("There was an error sending the message. Please try again later.");
    }
  };
  
  return (
    <footer className="bg-blue-600 text-white" id="contact">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-4 w-full">
          <div className="flex flex-col-reverse text-md">
            <p className="pl-16"><span className="pl-6">Canada</span></p>
            <p className="pl-16"><span className="pl-6">V3H5H1</span></p>
            <p className="pl-16"><span className="pl-6">Port Moody, BC</span></p>
            <p className="pl-16"><span className="pl-6">342-255 Newport Drive</span></p>
            <p>Address: <span className="pl-6">Civionic Engineering and Consulting (2014) Inc.</span></p>
            <p>Email: <span className="pl-12">info@HealthAI.com</span></p>
            <p>Telephone: <span className="pl-2">+1 0794068800</span></p>
          </div>

          <form className="my-auto" onSubmit={handleSubmit}>
            <h3 className="font-bold mb-4 text-2xl text-center">Contact us</h3>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="First name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="py-2 px-3 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:ring-0"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="py-2 px-3 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:ring-0"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2 px-3 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:ring-0 mt-2"
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full py-2 px-3 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:ring-0 text-white mt-2 resize-none"
              required
            />
            <button
              className="bg-blue-500 text-white font-bold py-2 px-6 rounded-md mt-4 hover:bg-blue-300 transition-colors duration-300"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="bg-blue-600 text-white py-4 px-4 border-t-2">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-md text-center">© Copyright 2024. Powered and secured by HealthAI</p>
          <div className="flex space-x-6 text-xl">
            <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white hover:text-blue-300 transition-colors duration-300" />
            </a>
            <a href="https://#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white hover:text-blue-300 transition-colors duration-300" />
            </a>
            <a href="https://#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-blue-300 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;