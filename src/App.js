import React from 'react';
import Header from './Components/Header/Header';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path = "/home" element = { <Home /> } />
        <Route path = "/orders" element = { <Orders /> } />
      </Routes>
    </div>
  );
}

export default App;
