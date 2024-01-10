import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Nav  from './component/nav';
import { ShopContextProvider } from './context/shopContext'
import Well from './component/wellcomemsg';
import Register from './pages/auth/register';
function App() {
  return (
    <div className="App">
      <Router>
        <ShopContextProvider>
          <Nav />
          <Well />
          <Routes>
            <Route path='/' element={<Shop />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/register' element={<Register />}/>
          </Routes>
        </ShopContextProvider>
      </Router>
    </div>
  );
}

export default App;
