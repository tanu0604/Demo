import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Terms() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  const termsData = [
    {
      title: "1. Booking & Payment",
      points: [
        "Bookings can be made through our website or customer support.",
        "Payment must be completed before the ride starts.",
        "Prices may vary based on distance, time, and vehicle type.",
      ],
    },
    {
      title: "2. Cancellation Policy",
      points: [
        "Cancellations made within 30 minutes of booking are free.",
        "A cancellation fee may apply if canceled after driver assignment.",
        "No refunds for last-minute cancellations.",
      ],
    },
    {
      title: "3. Passenger Responsibilities",
      points: [
        "Passengers must provide accurate pickup and drop locations.",
        "Seat belts must be worn at all times during the ride.",
        "Passengers are responsible for their belongings.",
      ],
    },
    {
      title: "4. Liability & Safety",
      points: [
        "One Cab Service is not liable for delays due to traffic or weather conditions.",
        "Inappropriate behavior may lead to ride termination.",
        "Our drivers follow all safety regulations.",
      ],
    },
  ];

  return (
    <section className="w-full min-h-screen bg-gray-100 py-12 px-6 md:px-16" id="contact">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg" data-aos="fade-up">
        <h1 className="text-3xl font-bold text-yellow-500 text-center mb-6">Terms & Conditions</h1>

        {/* Mapped Sections */}
        {termsData.map((section, index) => (
          <div key={index} className="mb-6" data-aos="fade-up">
            <h2 className="text-xl font-bold text-black mb-2">{section.title}</h2>
            <ul className="list-disc pl-5 text-gray-700">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Us Section */}
        <div className="text-center mt-6" data-aos="fade-up">
          <h2 className="text-xl font-bold text-black mb-2">Need Help?</h2>
          <p className="text-gray-700">
            If you have any questions, contact us at{" "}
            <span className="text-yellow-500 font-bold">support@onecabs.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}
