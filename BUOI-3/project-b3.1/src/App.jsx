import "./assets/styles.css";


const App = () => {
  const name = "WEB9999";
  const url_image = "./images.jpg";
  const rate = 5;

  // Khai bao Fn xu ly thong bao
  const handleAlert = () => {
    alert("Hello 500 anh em!");
  }

  return (
    <>
      <h1 className={`title-${rate}`} style={{ color: "red" }}>
        Hello 500 anh em lop {name}!
      </h1>
      <p className="description">Buoi hom truoc lop minh bao ve the nao roi!</p>
      <img src={url_image} alt="Anh thu dong" />
      <br/>

      {/* Event React */}
      <button onClick={handleAlert}>Thong bao</button>

      <button onClick={()=> alert("123")}>Hello anh em</button>
    </>
  );
};

export default App;

// ES5
// function App() {
//   return (
//     <h1>Hello 500 anh em lop WEB39!</h1>
//   )
// }
// export default App
