/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import submitFormData from "../../Api";

const FormPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.name && formData.number) {
      setIsSubmitting(true);
    }
    setError(null);
    setSuccessMessage("");
  };

  useEffect(() => {
    if (isSubmitting) {
      const submitData = async () => {
        try {
        await submitFormData(formData);
          setSuccessMessage("Form submitted successfully!");
          setError(null);
        } catch (error) {
          console.error(error, "errrorrr");
          setError(
            "There was an issue submitting the form. Please try again later."
          );
          setSuccessMessage("");
        } finally {
          setIsSubmitting(false);
        }
      };
      submitData();
    }
  }, [isSubmitting, formData]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="xl:w-2/5 mt-6 xl:mt-0 scale-90 shadow-md hover:shadow-lg transform transition duration-300 ease-in-out relative">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 py-8 md:p-8 md:py-10 rounded-3xl flex flex-col border items-center border-gray-300 shadow-md"
        >
          <button
            type="button"
            className="absolute top-2 right-4 text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            &times;
          </button>
          <p className="mb-4 text-[#0388A7] text-base font-Poppins md:text-xl text-center">
            Have a call with AI which talks just like we humans do.
          </p>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full mb-4 p-2 border bg-gray-100 rounded"
            value={formData.name}
            autoComplete="name"
            onChange={handleChange}
          />

          <input
            type="text"
            id="number"
            name="number"
            placeholder="Phone Number"
            className="w-full mb-4 p-2 border bg-gray-100 rounded"
            value={formData.number}
            autoComplete="tel"
            onChange={handleChange}
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full mb-4 p-2 border bg-gray-100 rounded"
            value={formData.email}
            autoComplete="email"
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#0388A7] font-semibold min-w-min text-white py-2 px-4 rounded mx-auto"
          >
            Call Me
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {successMessage && (
            <p className="text-green-500 mt-4">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormPopup;
