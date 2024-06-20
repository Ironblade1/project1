import Todoitem from "./Todoitem.jsx";
export default function TodoListitem(props) {
  const newtodos = props.todos.slice().sort((a, b) => a.done - b.done);
  return (
    <ul>
      {newtodos.map((item, index) => (
        <Todoitem
          key={index}
          item={item}
          todos={props.todos}
          settodos={props.settodos}
        />
      ))}
    </ul>
  );
}
