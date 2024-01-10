import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Nav  from './component/nav';
import { ShopContextProvider } from './context/shopContext'
import Well from './component/wellcomemsg';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import Protect from './component/protect';
function App() {
  return (
    <div className="App">
      <Router>
        <ShopContextProvider>
          <Nav />
          <Well />
          <Routes>
            <Route path='/' element={<Shop />}/>
            <Route path='/cart' element={<Protect component={<Cart />} />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
        </ShopContextProvider>
      </Router>
    </div>
  );
}

export default App;
