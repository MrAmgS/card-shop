import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

//Components
import Store from "./Components/Store";
import ProductDetail from "./Components/ProductDetail";
import Navbar from "./Components/shared/Navbar";
import ShopCart from "./Components/ShopCart";

//Redux
import store from "./redux/store";
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
          <Navbar />
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
    </Provider>

  );
}

export default App;
