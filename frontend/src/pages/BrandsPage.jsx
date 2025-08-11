import React from "react";

import rolexLogo from "../assets/brands/Rolex.png";
import AlpinaLogo from "../assets/brands/Alpina.png";
import AngelusLogo from "../assets/brands/Angelus.png";
import ArminStromLogo from "../assets/brands/Armin Strom.png";
import ArnoldsonLogo from "../assets/brands/Arnold & son.png";
import BaumeMercierLogo from "../assets/brands/Baume & mercier.png";
import BellRossLogo from "../assets/brands/Bell &Ross.png";
import BianchetLogo from "../assets/brands/Bianchet.png";
import bovet822Logo from "../assets/brands/bovet-1822.png";
import breitlingLogo from "../assets/brands/breitling.png";
import BremontLogo from "../assets/brands/Bremont.jpg";
import CarlfBucherrerLogo from "../assets/brands/Carl f. Bucherrer.png";
import CarlSuchySohneLogo from "../assets/brands/Carl Suchy & Sohne.png";
import ChristiaanVanDerKlaauwLogo from "../assets/brands/ChristiaanVanDerKlaauw.png";
import chronoswissLogo from "../assets/brands/chronoswiss.png";

// Import other logos...

const brands = [
  { name: "Rolex", logo: rolexLogo },
  { name: "Alpina", logo: AlpinaLogo },
  { name: "Angelus", logo: AngelusLogo },
  { name: "Armin Strom ", logo: ArminStromLogo },
  { name: "Arnold & son", logo: ArnoldsonLogo },
  { name: "Baume & Mercier", logo: BaumeMercierLogo },
  { name: "Bell & Ross", logo: BellRossLogo },
  { name: "Bianchet", logo: BianchetLogo },
  { name: "bovet-1822", logo: bovet822Logo },
  { name: "breitling", logo: breitlingLogo },
  { name: "Bremont", logo: BremontLogo },
  { name: "Carl f. Bucherrer", logo: CarlfBucherrerLogo },
  { name: "Carl Suchy & Sohne", logo: CarlSuchySohneLogo },
  { name: "ChristiaanVanDerKlaauw", logo: ChristiaanVanDerKlaauwLogo },
  { name: "chronoswiss", logo: chronoswissLogo },
];

const BrandsPage = () => {
  return (
    <div className="min-h-screen bg-white text-black p-10 pt-24">
      <h1 className="text-2xl font-semibold text-black mb-10 text-center">
        Our Premium Brands
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="bg-white border border-gray-200 w-15 h-15 p-2 flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-12 max-w-[120px] object-contain"
              title={brand.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;

// // src/pages/BrandsPage.jsx
// import React from 'react';

// const brands = ['Rolex', 'Omega', 'Patek Philippe', 'Audemars Piguet', 'Cartier', 'Tag Heuer', 'Breitling'];

// const BrandsPage = () => {
//   return (
//     <div className="min-h-screen bg-black text-white p-10 pt-24">
//       <h1 className="text-4xl font-semibold text-yellow-500 mb-6">Our Premium Brands</h1>
//       <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
//         {brands.map((brand) => (
//           <li
//             key={brand}
//             className="border border-gray-700 p-4 rounded text-center hover:bg-gray-800 transition"
//           >
//             {brand}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BrandsPage;
