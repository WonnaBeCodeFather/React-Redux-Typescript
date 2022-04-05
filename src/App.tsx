import { Header } from "components/Header";
import { ProductDetail } from "components/ProductDetail";
import React, { useState } from "react";
import { ProductItem } from "./components/ProductItem";
import { ProductList } from "./components/ProductList";
import { Routes, Route, Link } from "react-router-dom";
import { Login } from "components/Login";

const App = () => {


  return (
    <Routes>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/product/:id" element={<ProductDetail/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<ProductList/>}/>
      
    </Routes>
  );
};

export default App;