import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Success from './pages/Success';
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(reducer => reducer.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/products/:category' element={ <ProductList /> } />
        <Route path='/product/:productId' element={ <Product /> } />
        <Route path='/cart' element={ <Cart /> } />
        <Route path='/success' element={ <Success /> } />
        <Route path='/login' element={ user ? <Navigate to="/" replace/> : <Login /> } />
        <Route path='/register' element={  user ? <Navigate to="/" replace/> : <Register /> } />
      </Routes>
    </Router>
  );
}

export default App;
