import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

//Components
import Store from "./Components/Store";

//Context
import ProductsContextProvide from "./context/ProductsContextProvider";

function App() {
  return (
    <ProductsContextProvide>
      <Routes>
        <Route path="/products" element={<Store />} />
        <Route path="/*" element={<Navigate to="/products" />} />
      </Routes>
    </ProductsContextProvide>
  );
}

export default App;
