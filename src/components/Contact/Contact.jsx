import  { useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { ThemeContext } from '../../providers/ThemeProvider'

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <Helmet>
        <title>Assignment Buddy | Contact</title>
      </Helmet>
      <section
        className={`w-11/12 mx-auto transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-blue-50 text-black"
        }`}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Feel free to reach out to me with any questions!
          </p>

          <div className="mt-8">
            <form
              onSubmit={handleSubmit}
              className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${
                theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="p-3 rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="p-3 rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold">Your Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="p-3 rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="p-3 rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-6">
                <label className="text-sm font-semibold">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="p-3 rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-green-500 h-40 resize-none"
                  required
                />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="px-6 py-3 w-full bg-lime-500 hover:bg-lime-600 text-white rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
