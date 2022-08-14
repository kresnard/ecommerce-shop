import './App.css';
import HomePage from './component/homepage/homepage'
import DetailProduct from './component/detailProduct/detailProduct'
import Cart from './component/cart/cart';
import Login from './component/login/login';
import Register from './component/register/register';


function App() {
  return (
    <>
      <HomePage />,
      <DetailProduct />,
      <Cart />,
      <Login />,
      <Register />    
    </>
  );
}

export default App;
