// OurPartners.jsx
import React from "react";

function OurPartners() {
  const partners = [
    {
      name: "Mercedes AMG",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Mercedes-AMG_Petronas_F1_Team_logo.svg/1280px-Mercedes-AMG_Petronas_F1_Team_logo.svg.png",
    },
    {
      name: "Red Bull Racing",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Oracle_Red_Bull_Racing_logo.svg/1280px-Oracle_Red_Bull_Racing_logo.svg.png",
    },
    {
      name: "Ferrari",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Scuderia_Ferrari_Logo.svg/1280px-Scuderia_Ferrari_Logo.svg.png",
    },
    {
      name: "McLaren",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/McLaren_Racing_logo.svg/1280px-McLaren_Racing_logo.svg.png",
    },
    {
      name: "AlphaTauri",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Scuderia_AlphaTauri_logo.svg/1280px-Scuderia_AlphaTauri_logo.svg.png",
    },
    {
      name: "Aston Martin",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aston_Martin_F1_Team_logo.svg/1280px-Aston_Martin_F1_Team_logo.svg.png",
    },
  ];

  // Duplicate partners for a smoother, seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="w-full bg-black py-24 overflow-hidden">
      {/* Heading */}
      <h2
        className="text-white text-5xl md:text-6xl font-extrabold mb-16 text-center"
        style={{ fontFamily: "'Orbitron', sans-serif", lineHeight: "1.6", fontWeight: 900 }}
      >
        Our Partners
      </h2>

      {/* Partner Scroll */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll space-x-12 px-6">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0 w-[300px] transition-transform duration-500 hover:scale-105"
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="w-[300px] h-[180px] object-contain rounded-xl shadow-2xl"
              />
              <p
                className="text-gray-200 text-xl md:text-2xl font-semibold mt-3 text-center tracking-wide"
                style={{ fontFamily: "'Roboto', sans-serif", lineHeight: "1.6", fontWeight: 500 }}
              >
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 40s linear infinite;
            width: calc(348px * ${partners.length * 2}); /* (width + space) * total items */
          }
        `}
      </style>
    </div>
  );
}

export default OurPartners;