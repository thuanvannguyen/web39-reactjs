// TH1: Voi cach thong thuong su dung js
// let elRoot = document.querySelector("#root");
// let elH1 = document.createElement("h1");
// elH1.innerHTML = "Hello React";

// elRoot.appendChild(elH1);



// TH2: Su dung React (Chua su dung JSX)
const el = React.createElement("h1", { className: "title" }, "Hello React");

// Hien thi ra ngoai giao dien voi react
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(el);