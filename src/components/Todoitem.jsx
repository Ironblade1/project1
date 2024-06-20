import styles from "./todoitem.module.css";

function Todoitem(props) {
  function handleClick(item) {
    props.settodos(props.todos.filter((obj) => obj.name !== item.name));
  }

  function handleClickname(obj) {
    const newtodos = props.todos.map((product) =>
      product.name === obj.name ? { ...obj, done: !product.done } : product
    );
    props.settodos(newtodos);
  }

  let class_complete = props.item.done ? styles.completed : "";

  return (
    <li>
      <div>
        <span
          className={class_complete}
          onClick={() => handleClickname(props.item)}
        >
          {props.item.name}
        </span>

        <span>
          <button
            onClick={() => handleClick(props.item)}
            style={{ color: "red" }}
          >
            x
          </button>
        </span>
      </div>
    </li>
  );
}

export default Todoitem;
