import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import { Navigation } from "./components/navigation";
import { Button_index } from "./components/button_index";
import { Inventario } from "./pages/Inventario";
import { ProductsFormPage } from "./pages/ProductsFormPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
          
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />}/>
          <Route path="/inicio" element={<Button_index/>} />
          <Route path="/inventario" element={<Inventario/>} />
          {/* <Route path="/inventario/:id" element={<ProductsFormPage/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
