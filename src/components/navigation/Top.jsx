import React from "react";
import Marquee from "react-fast-marquee";

function Top() {
  return (
    <div className="sticky bg-green-500 w-full text-white py-2 text-xl font-bold text-center ">
      <Marquee>
        Book Now | Let's Go | Contact Us: +91-6391557778 &nbsp;&nbsp;&nbsp; Book Now | Let's Go | Contact Us: +91-9956876045
      </Marquee>
    </div>
  );
}

export default Top;
