import React, { useEffect, useState } from 'react';

const AllProductsPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [menRes, womenRes, kidsRes] = await Promise.all([
          fetch('http://localhost:5000/api/watches/men'),
          fetch('http://localhost:5000/api/watches/women'),
          fetch('http://localhost:5000/api/watches/kids'),
        ]);

        if (!menRes.ok || !womenRes.ok || !kidsRes.ok) {
          throw new Error('One or more requests failed');
        }

        const [menData, womenData, kidsData] = await Promise.all([
          menRes.json(),
          womenRes.json(),
          kidsRes.json(),
        ]);

        setAllProducts([...menData, ...womenData, ...kidsData]);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) {
    return <p className="text-center text-white mt-10">Loading...</p>;
  }

  return (
    <div className="min-h- bg-150vh black text-white px-6 py-20">
      <h1 className="text-2xl font-bold mb-5 text-center">All Collections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {allProducts.map((product) => (
          <div
            key={product._id}
            className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-[#b58b50] font-medium">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
