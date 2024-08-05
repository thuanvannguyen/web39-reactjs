import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import NotFound from "./pages/user/NotFound";
import Layout from "./pages/user/Layout";
import ProductDetail from "./pages/user/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout/>} >
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail/>}/>

          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
