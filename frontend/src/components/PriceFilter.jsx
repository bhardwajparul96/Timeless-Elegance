import React, { useState } from "react";

const priceRanges = [
  { label: "₹0 – ₹1 Lakh", min: 0, max: 100000 },
  { label: "₹1 Lakh – ₹5 Lakh", min: 100000, max: 500000 },
  { label: "₹5 Lakh – ₹10 Lakh", min: 500000, max: 1000000 },
  { label: "₹10 Lakh – ₹20 Lakh", min: 1000000, max: 2000000 },
  { label: "₹20 Lakh – ₹50 Lakh", min: 2000000, max: 5000000 },
  { label: "₹50 Lakh & above", min: 5000000, max: Infinity },
];

const PriceFilter = ({ onApply }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");


  return (

   
    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-xs text-black">
      <h2 className="text-lg font-bold text-black mb-3 border-b pb-2">Filter:</h2>


      <h3 className="text-md font-medium text-gray-700 mb-3">Price Range</h3>

      <div className="space-y-2">
        {priceRanges.map((range, index) => (
          <label
            key={index}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-black cursor-pointer"
          >
            <input
              type="radio"
              name="priceRange"
              className="accent-black"
              onChange={() => {
                setMinPrice(range.min);
                setMaxPrice(range.max === Infinity ? 100000000 : range.max);
              }}
            />
            <span>{range.label}</span>
          </label>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-5">
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Min ₹"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <span className="text-gray-500">–</span>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Max ₹"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <button
        onClick={() => onApply(minPrice, maxPrice)}
        className="mt-6 w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition duration-200"
      >
        Apply
      </button>
    </div>
  );
};

export default PriceFilter;

// import React, { useState } from "react";

// const priceRanges = [
//   { label: "0 to 1 lakh", min: 0, max: 100000 },
//   { label: "1 to 5 lakh", min: 100000, max: 500000 },
//   { label: "5 to 10 lakh", min: 500000, max: 1000000 },
//   { label: "10 to 20 lakh", min: 1000000, max: 2000000 },
//   { label: "20 to 50 lakh", min: 2000000, max: 5000000 },
//   { label: "50 lakh and above", min: 5000000, max: Infinity },
// ];

// const PriceFilter = ({ onApply }) => {
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");

//   return (
//     <div className="bg-white text-black p-10 shadow-md rounded-md w-50">
//       <h2 className="font-semibold text-lg mb-2">FILTER</h2>
//       <h3 className="text-md font-medium mt-4 mb-2">PRICE</h3>
//       <div className="flex flex-col gap-1">
//         {priceRanges.map((range, index) => (
//           <label key={index} className="flex items-center gap-2">
//             <input
//               type="radio"
//               name="priceRange"
//               onChange={() => {
//                 setMinPrice(range.min);
//                 setMaxPrice(range.max === Infinity ? 100000000 : range.max);
//               }}
//             />
//             <span>{range.label}</span>
//           </label>
//         ))}
//       </div>

//       {/* Manual Input */}
//       <div className="flex items-center gap-2 mt-4">
//         <input
//           type="number"
//           className="border px-2 py-1 w-full"
//           value={minPrice}
//           placeholder="Min ₹"
//           onChange={(e) => setMinPrice(e.target.value)}
//         />
//         <span>-</span>
//         <input
//           type="number"
//           className="border px-2 py-1 w-full"
//           value={maxPrice}
//           placeholder="Max ₹"
//           onChange={(e) => setMaxPrice(e.target.value)}
//         />
//       </div>

//       <button
//         onClick={() => onApply(minPrice, maxPrice)}
//         className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
//       >
//         APPLY
//       </button>
//     </div>
//   );
// };

// export default PriceFilter;
