import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Brands', path: '/brands' },
    { name: 'Men', path: '/men' },
    { name: 'Women', path: '/women' },
    { name: 'Kids', path: '/kids' }
  ];

  return (
    <nav className="flex justify-between items-center px-5 py-2 bg-black text-white fixed top-0 w-full z-50 shadow-md">
      
      {/* Left: Logo and Brand Name */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Timeless Elegance Logo" className="h-12 w-auto object-contain" />
        <h1 className="text-xl font-serif font-bold tracking-widest text-white">
          Timeless <span className="text-[#b58b50]">Elegance</span>
        </h1>
      </div>

      {/* Middle: Navigation Links */}
      <ul className="flex gap-5 font-medium text-sm tracking-wide">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              end
              className={({ isActive }) =>
                `relative transition-colors duration-300 hover:text-[#b58b50] ${
                  isActive ? 'text-[#b58b50] after:content-[""] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-[#b58b50]' : ''
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right: Search, Wishlist, Cart, Login/Signup */}
      <div className="flex items-center gap-4 text-sm tracking-wide">
        
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-3 pr-8 py-1 rounded-md bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-[#b58b50]"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black cursor-pointer">
            <FaSearch size={14} />
          </span>
        </div>

        {/* Wishlist */}
        <div className="flex items-center gap-1 cursor-pointer hover:text-[#b58b50] transition-colors duration-300">
          <FaHeart size={12} />
          <span>WISHLIST</span>
        </div>

        {/* Cart */}
        <div className="flex items-center gap-1 cursor-pointer hover:text-[#b58b50] transition-colors duration-300">
          <FaShoppingCart size={12} />
          <span>CART</span>
        </div>

        {/* Login/Signup */}
        <div className="flex items-center gap-2 hover:text-[#b58b50] transition-colors duration-300">
          <FaUser size={12} />
          <NavLink to="/login">LOGIN</NavLink>
          <span className="text-gray-400">OR</span>
          <NavLink to="/signup">SIGNUP</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// // src/components/Navbar.jsx
// import React from 'react';
// import { FaHeart,  FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
// import logo from '../assets/logo.jpg';
// import { Link } from 'react-router-dom';

// const Navbar = () => (
//   <nav className="flex justify-between items-center px-5 py-2 bg-black text-white fixed w-full z-50 shadow-md">

//     {/* Left section: Logo + Brand */}
//     <div className="flex items-center gap-3">
//       <img src={logo} alt="Timeless Elegance Logo" className="h-12 w-auto object-contain" />
//       <h1 className="text-xl font-serif font-bold tracking-widest text-white">
//         Timeless <span className="text-[#b58b50]">Elegance</span>
//       </h1>
//     </div>

//     {/* Middle section: Navigation */}
//     <ul className="flex gap-5 font-medium text-sm tracking-wide">
//       {[
//         { name: 'Home', path: '/' },
//         { name: 'Brands', path: '/brands' },
//         { name: 'Men', path: '/men' },
//         { name: 'Women', path: '/women' },
//         { name: 'Kids', path: '/kids' }
//       ].map((item) => (
//         <li key={item.name}>
//           <Link
//             to={item.path}
//             className="cursor-pointer hover:text-[#b58b50] transition-colors duration-300"
//           >
//             {item.name}
//           </Link>
//         </li>
//       ))}
//     </ul>

//     {/* Right section: Search + Icons */}
//     <div className="flex items-center gap-4 text-sm tracking-wide">

//       {/* Search Bar */}
//     <div className="relative">
//   <input
//     type="text"
//     placeholder="Search..."
//     className="pl-3 pr-8 py-1 rounded-md bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-[#b58b50]"
//   />
//   <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black cursor-pointer">
//     <FaSearch size={14} />
//   </span>
// </div>
//       {/* <input
//         type="text"
//         placeholder="Search..."
//         className="px-3 py-1 rounded-md bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-[#b58b50]"
//       /> */}

//       {/* Wishlist */}
//       <div className="flex items-center gap-1 cursor-pointer hover:text-[#b58b50] transition-colors duration-300">
//         <FaHeart size={12} />
//         <span>WISHLIST</span>
//       </div>

//       {/* Cart */}
//       <div className="flex items-center gap-1 cursor-pointer hover:text-[#b58b50] transition-colors duration-300">
//         <FaShoppingCart size={12} />
//         <span>CART</span>
//       </div>

//       {/* Login/Signup */}
//       <div className="flex items-center gap-2 hover:text-[#b58b50] transition-colors duration-300">
//         <FaUser size={12} />
//         <Link to="/login">LOGIN</Link>
//         <span className="text-gray-400">OR</span>
//         <Link to="/signup">SIGNUP</Link>
//       </div>
//     </div>
//   </nav>
// );

// export default Navbar;

// import React from 'react';
// import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
// import logo from '../assets/logo.jpg';
// import { Link } from 'react-router-dom';

// const Navbar = () => (
//   <nav className="flex justify-between items-center px-5 py-2 bg-black text-white fixed w-full z-50 shadow-md">

//     {/* Left section: Logo + Brand */}
//     <div className="flex items-center gap-3">
//       <img src={logo} alt="Timeless Elegance Logo" className="h-12 w-auto object-contain" />
//       <h1 className="text-xl font-serif font-bold tracking-widest text-white">
//         Timeless <span className="text-[#b58b50]">Elegance</span>
//       </h1>
//     </div>

//     {/* Middle section: Navigation */}
//     <ul className="flex gap-5 font-medium text-sm tracking-wide">
//       {['Home', 'Brands', 'Men', 'Women', 'Kids'].map((item) => (
//         <li
//           key={item}
//           className="cursor-pointer hover:text-[#b58b50] transition-colors duration-300"
//         >
//           {item}
//         </li>
//       ))}
//     </ul>

//     {/* Right section: Search + Icons */}
//     <div className="flex items-center gap-4 text-sm tracking-wide">

//       {/* Search Bar */}
//       <input
//   type="text"
//   placeholder="Search..."
//   className="px-3 py-1 rounded-md bg-black text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#b58b50]"
// />
 
    

//       {/* Wishlist */}
//       <div className="flex items-center gap-1 cursor-pointer hover:text-[#b58b50] transition-colors duration-300">
//         <FaHeart size={12} />
//         <span>WISHLIST</span>
//       </div>

//       {/* Cart */}
//       <div className="flex items-center gap-1 cursor-pointer hover:text-[#b58b50] transition-colors duration-300">
//         <FaShoppingCart size={12} />
//         <span>CART</span>
//       </div>

//       {/* Login/Signup */}
//        <div className="flex items-center gap-2 hover:text-[#b58b50] transition-colors duration-300">
//         <FaUser size={12} />
//         <Link to="/login">LOGIN</Link>
//         <span className="text-gray-400">OR</span>
//         <Link to="/signup">SIGNUP</Link>
//       </div>
//     </div>
//   </nav>
// );

// export default Navbar;


//  import React from 'react';
// import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
// import logo from '../assets/logo.jpg';

// const Navbar = () => (
//   <nav className="flex justify-between items-center px-5 py-0 bg-black text-white fixed w-full z-50 shadow-md">

//     {/* Left section: Logo + Brand */}
//     <div className="flex items-center gap-3">
//       <img src={logo} alt="Timeless Elegance Logo" className="h-12 w-auto object-contain" />
//       <h1 className="text-1xl font-serif font-bold tracking-widest text-white">
//         Timeless <span className="text-[#b58b50]">Elegance</span>
//       </h1>
//     </div>

//     {/* Middle section: Navigation */}
//     <ul className="flex gap-5 font-medium text-sm tracking-wide">
//       {['Home', 'Brands', 'Men', 'Women', 'Kids'].map((item) => (
//         <li
//           key={item}
//           className="cursor-pointer hover:text-[#b58b50] transition-colors duration-300"
//         >
//           {item}
//         </li>
//       ))}
//     </ul>

//     {/* Right section: Wishlist, Cart, Login/Signup */}
//     <div className="flex items-center gap-6 text-sm tracking-wide">
//       <div className="flex items-center gap-1 cursor-pointer hover:text-[#b58b50] transition-colors duration-300">
//         <FaHeart size={10} />
//         <span>WISHLIST</span>
//       </div>
//       <div className="flex items-center gap-1 cursor-pointer hover:text-[#b58b50] transition-colors duration-300">
//         <FaShoppingCart size={10} />
//         <span>CART</span>
//       </div>
//       <div className="flex items-center gap-2 cursor-pointer hover:text-[#b58b50] transition-colors duration-300">
//         <FaUser size={10} />
//         <span>LOGIN</span>
//         <span className="text-gray-400">OR</span>
//         <span>SIGNUP</span>
//       </div>
//     </div>
//   </nav>
// );

// export default Navbar;


// import React from 'react';

// const Navbar = () => (
//   <nav className="flex justify-between items-center px-10 py-4 bg-black text-white fixed w-full z-50">
//     <div className="text-xl font-serif font-semibold">Timeless Elegance</div>
//     <ul className="flex gap-6 text-sm">
//       <li className="hover:text-yellow-500 cursor-pointer">Home</li>
//       <li className="hover:text-yellow-500 cursor-pointer">Gallery of Goods</li>
//       <li className="hover:text-yellow-500 cursor-pointer">List of Brands</li>
//       <li className="hover:text-yellow-500 cursor-pointer">Reviews</li>
//       <li className="hover:text-yellow-500 cursor-pointer">Contacts</li>
//     </ul>
//     <button className="border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition">
//       Contact Us
//     </button>
//   </nav>
// );

// export default Navbar;
