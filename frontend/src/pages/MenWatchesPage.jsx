// src/pages/MenWatchesPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import PriceFilter from '../components/PriceFilter';

const MenWatchesPage = () => {
  const [watches, setWatches] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/watches/men')
      .then(res => setWatches(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleApplyPriceFilter = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const sortWatches = (watchesList) => {
    const sorted = [...watchesList];
    if (sortOption === 'priceHighToLow') {
      return sorted.sort((a, b) => b.discount_price - a.discount_price);
    }
    if (sortOption === 'priceLowToHigh') {
      return sorted.sort((a, b) => a.discount_price - b.discount_price);
    }
    if (sortOption === 'bestSeller') {
      return sorted.sort((a, b) => (b.sold || 0) - (a.sold || 0));
    }
    return sorted;
  };

  const getWatchesBySection = (section) => {
    let filtered = watches;

    if (minPrice != null && maxPrice != null) {
      filtered = filtered.filter(w => w.discount_price >= minPrice && w.discount_price <= maxPrice);
    }

    switch (section) {
      case 'Trending Watches':
        return filtered.filter(w => w.is_trending);
      case 'New Arrivals':
        return filtered.filter(w => w.is_new);
      case 'Limited Editions':
        return filtered.filter(w => w.is_limited_edition);
      case 'Best Under ₹10,000':
        return filtered.filter(w => w.discount_price <= 10000);
      case 'Premium Picks':
        return filtered.filter(w => w.discount_price >= 100000);
      default:
        return [];
    }
  };

  const sections = [
    'Trending Watches',
    'New Arrivals',
    'Premium Picks',
    'Best Under ₹10,000',
    'Limited Editions'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-grow pt-24 px-6 bg-white text-black">

        {/* Left Sidebar: Price Filter */}
        <div className="hidden lg:block w-64 pr-10 sticky mt-14">
  <PriceFilter onApply={handleApplyPriceFilter} />
</div>

        {/* <div className="hidden lg:block w-64 pr-6">
          <PriceFilter onApply={handleApplyPriceFilter} />
        </div> */}

        {/* Right Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-center mb-6">Men’s Watches</h1>

          {/* Sort Dropdown */}
          <div className="flex justify-end mb-6">
            <label className="mr-2 font-medium">Sort by:</label>
            <select
              className="border rounded px-3 py-1 text-sm"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Default</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="bestSeller">Best Seller</option>
            </select>
          </div>

          {/* Watch Sections */}
          {sections.map(section => {
            const filtered = getWatchesBySection(section);
            const sorted = sortWatches(filtered);

            return (
              <div key={section} className="mb-10">
                <h2 className="text-xl font-semibold mb-4">{section}</h2>
                {sorted.length === 0 ? (
                  <p className="text-gray-500">No watches in this section.</p>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {sorted.map((watch, idx) => (
                      <div key={idx} className="bg-gray-100 text-black p-4 rounded-lg shadow">
                        <img
                          src={watch.image}
                          alt={watch.name}
                          className="w-full h-48 object-cover rounded"
                        />
                        <h3 className="text-lg font-semibold mt-2">{watch.name}</h3>
                        <p className="text-sm text-gray-600">{watch.brand}</p>
                        <p className="text-yellow-600 font-bold">₹{watch.discount_price.toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MenWatchesPage;


// // src/pages/MenWatchesPage.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MenWatchesPage = () => {
//   const [watches, setWatches] = useState([]);
//   const [sortOption, setSortOption] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/watches/men')
//       .then(res => setWatches(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   const sortWatches = (watchesList) => {
//     const sorted = [...watchesList];
//     if (sortOption === 'priceHighToLow') {
//       return sorted.sort((a, b) => b.discount_price - a.discount_price);
//     }
//     if (sortOption === 'priceLowToHigh') {
//       return sorted.sort((a, b) => a.discount_price - b.discount_price);
//     }
//     if (sortOption === 'bestSeller') {
//       return sorted.sort((a, b) => (b.sold || 0) - (a.sold || 0)); // Assuming "sold" may be undefined
//     }
//     return sorted;
//   };

//   const getWatchesBySection = (section) => {
//     switch (section) {
//       case 'Trending Watches':
//         return watches.filter(w => w.is_trending);
//       case 'New Arrivals':
//         return watches.filter(w => w.is_new);
//       case 'Limited Editions':
//         return watches.filter(w => w.is_limited_edition);
//       case 'Best Under ₹10,000':
//         return watches.filter(w => w.discount_price <= 10000);
//       case 'Premium Picks':
//         return watches.filter(w => w.discount_price >= 100000);
//       default:
//         return [];
//     }
//   };

//   const sections = [
//     'Trending Watches',
//     'New Arrivals',
//     'Premium Picks',
//     'Best Under ₹10,000',
//     'Limited Editions'
//   ];

//   return (
//     <div className="min-h-screen bg-white text-black p-8 pt-24">
//       <h1 className="text-3xl font-bold text-center mb-6">Men’s Watches</h1>

//       {/* Sort Dropdown */}
//       <div className="flex justify-end mb-6">
//         <label className="mr-2 font-medium">Sort by:</label>
//         <select
//           className="border rounded px-3 py-1 text-sm"
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//         >
//           <option value="">Default</option>
//           <option value="priceHighToLow">Price: High to Low</option>
//           <option value="priceLowToHigh">Price: Low to High</option>
//           <option value="bestSeller">Best Seller</option>
//         </select>
//       </div>

//       {/* Watch Sections */}
//       {sections.map(section => {
//         const filtered = getWatchesBySection(section);
//         const sorted = sortWatches(filtered);

//         return (
//           <div key={section} className="mb-10">
//             <h2 className="text-xl font-semibold mb-4">{section}</h2>
//             {sorted.length === 0 ? (
//               <p className="text-gray-500">No watches in this section.</p>
//             ) : (
//               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {sorted.map((watch, idx) => (
//                   <div key={idx} className="bg-gray-100 text-black p-4 rounded-lg shadow">
//                     <img src={watch.image} alt={watch.name} className="w-full h-48 object-cover rounded" />
//                     <h3 className="text-lg font-semibold mt-2">{watch.name}</h3>
//                     <p className="text-sm text-gray-600">{watch.brand}</p>
//                     <p className="text-yellow-600 font-bold">₹{watch.discount_price.toLocaleString()}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default MenWatchesPage;


// // src/pages/MenWatchesPage.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MenWatchesPage = () => {
//   const [watches, setWatches] = useState([]);
//   const [sortOption, setSortOption] = useState(''); // Track selected sort
//   const sections = ['Trending Watches', 'New Arrivals', 'Premium Picks', 'Best Under ₹10,000', 'Limited Editions'];

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/watches/men')
//       .then(res => setWatches(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   // Function to sort watches based on option
//   const sortWatches = (watches, option) => {
//     const sorted = [...watches];
//     if (option === 'priceHighToLow') {
//       return sorted.sort((a, b) => b.price - a.price);
//     }
//     if (option === 'priceLowToHigh') {
//       return sorted.sort((a, b) => a.price - b.price);
//     }
//     if (option === 'bestSeller') {
//       return sorted.sort((a, b) => b.sold - a.sold); // 'sold' is assumed metric
//     }
//     return sorted;
//   };

//   return (
//     <div className="min-h-screen bg-white text-black p-8 pt-24">
//       <h1 className="text-3xl font-bold text-center mb-6">Men’s Watches</h1>

//       {/* Sort Dropdown */}
//       <div className="flex justify-end mb-6">
//         <label className="mr-2 font-medium">Sort by:</label>
//         <select
//           className="border rounded px-3 py-1 text-sm"
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//         >
//           <option value="">Default</option>
//           <option value="priceHighToLow">Price: High to Low</option>
//           <option value="priceLowToHigh">Price: Low to High</option>
//           <option value="bestSeller">Best Seller</option>
//         </select>
//       </div>

//       {/* Sections */}
//       {sections.map(section => (
//         <div key={section} className="mb-10">
//           <h2 className="text-xl font-semibold mb-4">{section}</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {sortWatches(watches.filter(w => w.category === section), sortOption).map(watch => (
//               <div key={watch.id} className="bg-gray-900 text-white p-4 rounded-lg shadow-lg">
//                 <img src={watch.image} alt={watch.name} className="w-full h-48 object-cover rounded" />
//                 <h3 className="text-lg mt-2">{watch.name}</h3>
//                 <p className="text-yellow-500 font-bold">₹{watch.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MenWatchesPage;


// // src/pages/MenWatchesPage.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MenWatchesPage = () => {
//   const [watches, setWatches] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/watches/men') // 👈 update this URL based on your backend
//       .then(res => setWatches(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   const sections = ['Trending Watches', 'New Arrivals', 'Premium Picks', 'Best Under ₹10,000', 'Limited Editions'];

//   return (
//     <div className="min-h-screen bg-white text-white p-8 pt-24">
//       <h1 className="text-3xl font-bold text-center text-black mb-8">Men’s Watches</h1>

//       {sections.map(section => (
//         <div key={section} className="mb-10">
//           <h2 className="text-1xl font-semibold mb-4 text-black">{section}</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {watches
//               .filter(watch => watch.category === section)
//               .map(watch => (
//                 <div key={watch.id} className="bg-gray-900 p-4 rounded-lg shadow-lg">
//                   <img src={watch.image} alt={watch.name} className="w-full h-48 object-cover rounded" />
//                   <h3 className="text-lg mt-2">{watch.name}</h3>
//                   <p className="text-yellow-500 font-bold">₹{watch.price}</p>
//                 </div>
//               ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MenWatchesPage;
