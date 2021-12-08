import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/products' element={ <ProductList /> } />
        <Route path='/products/:productId' element={ <Product /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/cart' element={ <Cart /> } />
      </Routes>
    </Router>
  );
}

export default App;
