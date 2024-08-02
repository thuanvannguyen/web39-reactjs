import { useState } from "react";

const TodoListUseState = () => {
  const [todos, setTodos] = useState([]);

  const handleTask = () => {
    // Tao mang moi, sao chep mang cu va them gia tri "New Task" moi lan bam
    // const newTask = [...todos, "New Task"];
    // setTodos(newTask);


    setTodos((task)=> [...task, "New task"]);
  };

  return (
    <>
      <button onClick={handleTask}>Add Task 1</button>
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

export default TodoListUseState;
