import { BrowserRouter, Route, Routes } from "react-router-dom";
import IsAuth from "./components/auth/IsAuth";
import Dashboad from "./pages/admin/Dashboad";
import DashboadProduct from "./pages/admin/DashboadProduct";
import DashboadProductAdd from "./pages/admin/DashboadProductAdd";
import LayoutAdmin from "./pages/admin/Layout";
import Login from "./pages/auth/Login";
import Home from "./pages/user/Home";
import Layout from "./pages/user/Layout";
import NotFound from "./pages/user/NotFound";
import ProductDetail from "./pages/user/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboad"
          element={<IsAuth component={<LayoutAdmin />} />}
        >
          <Route index element={<Dashboad />} />

          <Route path="/dashboad/product" element={<DashboadProduct />} />
          <Route
            path="/dashboad/product/add"
            element={<DashboadProductAdd />}
          />
          <Route
            path="/dashboad/product/edit"
            element={<DashboadProductAdd />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
