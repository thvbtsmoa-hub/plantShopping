import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import CartItem from './CartItem';
import NotFound from './NotFound.jsx'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ProductList from './ProductList';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
