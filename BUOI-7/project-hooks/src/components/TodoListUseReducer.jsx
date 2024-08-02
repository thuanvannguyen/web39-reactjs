import { useReducer } from "react";

const reducer = (state, action) => {
  // state: trang thai hien tai todos. Theo cu phap useReducer
  // action: hanh dong duoc dispatch gui len. Theo cu phap useReducer

  // console.log(state);
  // console.log(action.type);

  switch (action.type) {
    case "add-todo":
      return [...state, action.payload];

    default:
      break;
  }
};

const TodoListUseReducer = () => {
  // const [todos, setTodos] = useState([]);

  const [todos, dispatch] = useReducer(reducer, []);

  const handlTask = () => {
    const newTask = "New Task 2";
    dispatch([
      {
        type: "add-todo",
        payload: newTask,
      },
      {
        type: "remove-todo",
        payload: newTask,
      },
    ]);
  };

  return (
    <>
      <button onClick={handlTask}>Add Task 2</button>
      <ul>
        {todos.length > 0 &&
          todos.map((val, index) => {
            return <li key={index}>{val}</li>;
          })}
      </ul>
      {!todos.length > 0 && <p>Khong ton tai task!</p>}
    </>
  );
};

export default TodoListUseReducer;
