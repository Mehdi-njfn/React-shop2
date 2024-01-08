import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
