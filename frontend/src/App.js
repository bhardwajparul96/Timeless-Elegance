import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BrandsPage from './pages/BrandsPage';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import MenWatchesPage from './pages/MenWatchesPage';
import WomenWatches from './pages/WomenWatches';
import KidsPage from './pages/KidsPage';  // ✅ Corrected import

function App() {
  const heroRef = useRef(null);

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar scrollToHero={scrollToHero} />
        
        <Routes>
          <Route
            path="/"
            element={
              <div ref={heroRef}>
                <HeroSection />
              </div>
            }
          />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<RegisterForm />} />
          <Route path="/Men" element={<MenWatchesPage />} />
          <Route path="/Women" element={<WomenWatches />} />
          <Route path="/kids" element={<KidsPage />} /> {/* ✅ Corrected JSX usage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// // App.jsx
// import React, { useRef } from 'react';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import BrandsPage from './pages/BrandsPage'; 

// function App() {
//   const heroRef = useRef(null);

//   const scrollToHero = () => {
//     heroRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navbar scrollToHero={scrollToHero} />
//       <div ref={heroRef}>
//         <HeroSection />
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';

// function App() {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navbar />
//       <HeroSection />
//     </div>
//   );
// }

// export default App;
