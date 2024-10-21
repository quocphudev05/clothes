import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './container/Header';
import Menu from './container/Menu';
import Banner from './container/bannner';
import ProductDetail from './componnent/ProductDetail';
import ProductList from './componnent/ProductList';
import Footer from './container/Footer';
import { useLocation } from 'react-router-dom';
import ProducOner from './componnent/Produc';
import Latest from '../src/componnent/Latest';
import BestSellings from './componnent/BestSellingS';
import ContactIf from './container/ContactIf';
const root = ReactDOM.createRoot(document.getElementById('root'));
function AppLayout() {
  const location = useLocation();

  return (
    <div className="w-full">
      <Menu />
      <Header />
      {location.pathname === '/' && <Banner />}
      
      <div className="container mx-auto ">
        <Routes>
          <Route path="/" element={<ProductList title={'THỜI TRANG HOT NHẤT'} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
<ProducOner/>
<div className="container mx-auto ">
        <Routes>
          <Route path="/" element={<Latest title={'THỜI TRANG MỚI NHẤT'} />} />
        </Routes>
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <div className="container mx-auto ">
        <Routes>
          <Route path="/" element={<BestSellings title={'THỜI TRANG BÁN CHẠY'} />} />
        </Routes>
      </div>
      <ContactIf />
      <Footer />
    </div>
  );
}

root.render(
  <React.StrictMode>
    <Router>
      <AppLayout />
    </Router>
  </React.StrictMode>
);
