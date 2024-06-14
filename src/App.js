import './assets/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import PrivateRoutes from './components/PrivateRoutes.jsx';
import Header from './components/Header.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './pages/Footer.jsx';



function App() {

  useEffect(() => {
    AOS.init({
        duration: 1000, 
        once: true, 
        easing: 'ease-out', 
    });
}, []);

  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products/:categoryName" element={<Products />} />
          <Route path="/productsDetails/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<PrivateRoutes />}>
              <Route 
              path="/checkout" element={<Checkout />} />
              </Route> 
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
        <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
