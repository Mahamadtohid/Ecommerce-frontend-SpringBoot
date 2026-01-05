import logo from './logo.svg';
import './App.css';

import Navigation from './customer/components/Navigation/Navigation'
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order'
import OrderDetails from './customer/components/Order/OrderDetails';
import CustomerRoutes from './Routers/CustomerRoutes';
import {Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/*" element={<CustomerRoutes/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
