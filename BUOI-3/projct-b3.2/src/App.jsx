import Header from "./components/header/Header";
import SideNav from "./components/sidebar/SideNav";
import "./assets/styles.css"
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header/>
      <div style={{display: "flex"}}>
        <SideNav/>
        <Content/>
        <SideNav/>
      </div>
        <Footer/>
    </>
  );
};

export default App;

// rafce
