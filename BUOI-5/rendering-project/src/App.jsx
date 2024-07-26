import ChildA from "./components/ChildA";
import ChildB from "./components/ChildB";
import ChildC from "./components/ChildC";
import ChildD from "./components/ChildD";

const App = () => {
  const array = [
    {
      id: 1,
      name: "Buoi 1",
    },
    {
      id: 2,
      name: "Buoi 2",
    },
  ];

  const star = 2;

  return (
    <>
      {/* Render theo dk if else  */}
      <ChildA array={array} />

      {/* Render theo toan tu 3 ngoi */}
      <ChildB array={array} />

      {/* Render theo toan tu && */}
      <ChildC array={array} />

      {/* Render voi enum */}
      <ChildD star={star} />
    </>
  );
};

export default App;
