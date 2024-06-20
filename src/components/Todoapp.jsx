import { useState } from "react";
import Todoitem from "./Todoitem.jsx";
import TodoForm from "./TodoForm.jsx";
import TodoListitem from "./TodoListitem.jsx";
import Footer from "./Footer.jsx";

function Todoapp() {
  const [todos, settodos] = useState([]);

  return (
    <>
      <TodoForm todos={todos} settodos={settodos} />
      <TodoListitem todos={todos} settodos={settodos} />
      <Footer todos={todos} />
    </>
  );
}

export default Todoapp;
