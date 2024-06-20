export default function Footer({ todos }) {
  let complete = 0;
  let uncomplete = 0;
  todos.map((item) =>
    item.done ? (complete = complete + 1) : (uncomplete = uncomplete + 1)
  );

  return (
    <div>
      <h1>total completed tasks is {complete}</h1>
      <br></br>
      <h1>Total In complete tasks is {uncomplete}</h1>
    </div>
  );
}
