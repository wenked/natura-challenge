import { Cart } from 'pages/Cart/Cart.component';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home.page';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
