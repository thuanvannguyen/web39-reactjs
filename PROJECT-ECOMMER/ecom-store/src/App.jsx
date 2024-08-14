import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import NotFound from "./pages/user/NotFound";
import Layout from "./pages/user/Layout";
import ProductDetail from "./pages/user/ProductDetail";
import Dashboad from "./pages/admin/Dashboad";
import LayoutAdmin from "./pages/admin/Layout";
import Login from "./pages/auth/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/login" element={<Login/>}/>

        <Route path="/dashboad" element={<LayoutAdmin />}>
          <Route index element={<Dashboad />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
