import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Nav  from './component/nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
