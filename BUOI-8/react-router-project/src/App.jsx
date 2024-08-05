import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout/>} >
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
