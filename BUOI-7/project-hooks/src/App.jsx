import ComponentA from "./components/ComponentA";
import TodoListUseReducer from "./components/TodoListUseReducer";
import TodoListUseState from "./components/TodoListUseState";
import { MyContext } from "./contexts/MyContext";

const App = () => {
  const a = "100 TR";
  return (
    <MyContext.Provider value={a}>
      <TodoListUseState />
      <TodoListUseReducer />
      <ComponentA />
    </MyContext.Provider>
  );
};

export default App;
