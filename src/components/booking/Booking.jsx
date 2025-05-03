import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgImage from "../../assets/headingImgs/road.jpeg";

function Booking() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    emailId: "",
    phoneNumber: "",
    vehicleName: "",
    dateOfPickup: "",
    timeOfPickup: "",
    pickupLoc: "",
    dropLoc: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = new FormData();
    payload.append("username", formData.username);
    payload.append("emailId", formData.emailId);
    payload.append("phoneNumber", formData.phoneNumber);
    payload.append("vehicleName", formData.vehicleName);
    payload.append("dateOfPickup", formData.dateOfPickup);
    payload.append("timeOfPickup", formData.timeOfPickup);
    payload.append("pickupLoc", formData.pickupLoc);
    payload.append("dropLoc", formData.dropLoc);
    payload.append("access_key", "8cc66ce8-880c-430e-a69a-abd912583f99");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        setFormData({
          username: "",
          emailId: "",
          phoneNumber: "",
          vehicleName: "",
          dateOfPickup: "",
          timeOfPickup: "",
          pickupLoc: "",
          dropLoc: "",
        });
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Failed to submit the form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <section
        className="relative w-full h-fit p-6 flex justify-center bg-gray-100"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="book"
      >
        <div
          className="bg-black bg-opacity-80 text-white p-6 rounded-2xl shadow-lg w-full max-w-md"
          data-aos="fade-up"
        >
          <h1 className="text-2xl font-bold text-center mb-4 text-yellow-500">
            Book Your Ride, Anytime! 🚖
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-2 rounded-md text-black border border-gray-300"
              required
            />

            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              placeholder="Enter your Email Id"
              className="w-full p-2 rounded-md text-black border border-gray-300"
              required
            />

            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="w-full p-2 rounded-md text-black border border-gray-300"
              required
            />

            <select
              name="vehicleName"
              value={formData.vehicleName}
              onChange={handleChange}
              className="w-full p-2 rounded-md text-black border border-gray-300"
              required
            >
              <option value="" disabled>
                Select Vehicle
              </option>
              <option value="Hatchback">Hatchback</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Luxury">Luxury</option>
            </select>

            <input
              name="dateOfPickup"
              value={formData.dateOfPickup}
              onChange={handleChange}
              type="date"
              className="w-full p-2 rounded-md text-black border border-gray-300"
              required
            />

            <input
              name="timeOfPickup"
              value={formData.timeOfPickup}
              onChange={handleChange}
              type="time"
              className="w-full p-2 rounded-md text-black border border-gray-300"
              required
            />

            <input
              name="pickupLoc"
              value={formData.pickupLoc}
              onChange={handleChange}
              type="text"
              placeholder="From Location"
              className="w-full p-2 rounded-md text-black border border-gray-300"
              required
            />

            <input
              name="dropLoc"
              value={formData.dropLoc}
              onChange={handleChange}
              type="text"
              placeholder="To Location"
              className="w-full p-2 rounded-md text-black border border-gray-300"
              required
            />

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black font-bold p-2 rounded-md transition duration-300 hover:bg-yellow-600 hover:scale-105 flex justify-center items-center"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : (
                "Book Now"
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Booking;
