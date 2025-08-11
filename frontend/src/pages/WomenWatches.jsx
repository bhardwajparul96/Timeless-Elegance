import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import PriceFilter from '../components/PriceFilter';

const WomenWatchesPage = () => {
  const [watches, setWatches] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/watches/men') // ✅ Corrected API query
      .then((res) => setWatches(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleApplyPriceFilter = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const sortWatches = (list) => {
    const sorted = [...list];
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
      filtered = filtered.filter(
        (w) => w.discount_price >= minPrice && w.discount_price <= maxPrice
      );
    }

    switch (section) {
      case 'Trending Watches':
        return filtered.filter((w) => w.is_trending);
      case 'New Arrivals':
        return filtered.filter((w) => w.is_new);
      case 'Limited Editions':
        return filtered.filter((w) => w.is_limited_edition);
      case 'Best Under ₹10,000':
        return filtered.filter((w) => w.discount_price <= 10000);
      case 'Premium Picks':
        return filtered.filter((w) => w.discount_price >= 100000);
      default:
        return [];
    }
  };

  const sections = [
    'Trending Watches',
    'New Arrivals',
    'Premium Picks',
    'Best Under ₹10,000',
    'Limited Editions',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-grow pt-24 px-6 bg-white text-black">
        {/* Left Sidebar */}
        <div className="hidden lg:block w-64 pr-6">
          <PriceFilter onApply={handleApplyPriceFilter} />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-center mb-6">Women’s Watches</h1>

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
          {sections.map((section) => {
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
                        <p className="text-yellow-600 font-bold">
                          ₹{watch.discount_price.toLocaleString()}
                        </p>
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

export default WomenWatchesPage;
