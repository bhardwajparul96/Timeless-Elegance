import React from 'react';

const SortDropdown = ({ selectedSort, setSelectedSort }) => {
  return (
    <div className="text-white mb-6">
      <label className="mr-3 font-medium">Sort by:</label>
      <select
        value={selectedSort}
        onChange={(e) => setSelectedSort(e.target.value)}
        className="px-3 py-1 rounded-md bg-white text-black font-medium focus:outline-none"
      >
        <option value="bestseller">BESTSELLER</option>
        <option value="highToLow">PRICE - HIGH TO LOW</option>
        <option value="lowToHigh">PRICE - LOW TO HIGH</option>
        <option value="newArrival">NEW ARRIVAL</option>
      </select>
    </div>
  );
};

export default SortDropdown;
