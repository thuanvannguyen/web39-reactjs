import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Blogs from "./pages/Blogs"
import Home from "./pages/Home"

const App = () => {
  return (

    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App