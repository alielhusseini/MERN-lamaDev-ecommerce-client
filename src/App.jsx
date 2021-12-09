import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Pay from './pages/Pay';
import Success from './pages/Success';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={ <Home /> } />
        <Route path='/products' element={ <ProductList /> } />
        <Route path='/products/:productId' element={ <Product /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/cart' element={ <Cart /> } /> */}
        <Route path='/pay' element={ <Pay /> } />
        <Route path='/success' element={ <Success /> } />
      </Routes>
    </Router>
  );
}

export default App;
