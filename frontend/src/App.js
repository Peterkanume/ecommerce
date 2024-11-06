import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Hero from './components/Hero/Hero';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import cart from './pages/cart'; 



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      
        <Routes> {/* Capitalize Routes */}
          <Route path="/" element={<ShopCategory category="Shop" />} />
          <Route path="/samsung" element={<ShopCategory category="samsung" />} />
          <Route path="/iphone" element={<ShopCategory category="iphone" />} />
          <Route path="/pixel" element={<ShopCategory category="pixel" />} />
          <Route path="/product">
            <Route path=":productId" element={<Product />} /> {/* Proper nesting for dynamic routes */}
          </Route>
          <Route path="/cart" element={<Product />} /> {/* Ensure Cart component is capitalized if it's defined */}
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
