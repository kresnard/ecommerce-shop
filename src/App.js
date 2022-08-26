import "./App.css";
import Header from "./component/header";
import HomePage from "./pages/homepage";
import DetailProduct from "pages/detail-products/index.js";
import Cart from "pages/cart";
import Login from "./pages/login";
import Register from "./pages/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/DetailProduct/:id" element={<DetailProduct />} />
        <Route exact path="/Cart" element={user ? <Cart /> : <Login />} />
        <Route exact path="/sign-in" element={<Login />} />
        <Route exact path="/sign-up" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
