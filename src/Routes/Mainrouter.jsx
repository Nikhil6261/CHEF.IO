import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import Create from '../Pages/Create';
import Update from '../Pages/Update';
import Favorites from '../Pages/Favroites'; // Or correct the filename if it's a typo
import Recipes from '../Pages/Recipes';
import Notfound from '../Pages/NotFound';
import About from '../Pages/About';

const Mainrouter = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />

      {/* Recipe Pages */}
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/create-recipe" element={<Create />} />
      <Route path="/recipes/create-recipe/:id" element={<Update />} />

      {/* Favorites */}
      <Route path="/favorites" element={<Favorites />} />

      {/* About Page */}
      <Route path="/about" element={<About />} />

      {/* Not Found */}
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default Mainrouter;
