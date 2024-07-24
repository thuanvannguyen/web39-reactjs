import ChildParentA from "./component/ChildParentA";
import ChildParentB from "./component/ChildParentB";
import ChildParentC from "./component/ChildParentC";
import ChildParentD from "./component/ChildParentD";
import ChildParentE from "./component/ChildParentE";
import ChildParentF from "./component/ChildParentF";

const App = () => {
  // Than Component APP
  const name = "Web39";
  const email = "web39@gmail.com";

  const content = {
    title: "Post 1",
    author: "Nguyen Van A",
    info: "abcd",
  };

  return (
    <>
      {/* Destructuring Props */}
      <ChildParentA data={name} email={email} age="30" />

      {/* Props */}
      <ChildParentB data={name} email={email} />

      {/* <ChildParentC content={content}/> */}
      <ChildParentC {...content} />

      {/* Default Props */}
      <ChildParentD />

      {/* Composition */}
      <ChildParentE>
        <h1>Hello 123</h1>
      </ChildParentE>

      {/* Props Type */}
      <ChildParentF a={4} />
    </>
  );
};

export default App;

/*
data={name}
-> data: Ten props do minh tu dat
-> name: gia tri can truyen vao component child
*/

/*
  -> Props binh thuong, Thanh phan con nhan props cua thanh phan cha truyen vao
  -> Children la 1 props trong react (Truong hop dac biet). Nhan vao bat ky cai gi nam trong <Component> ...</Component>
*/
