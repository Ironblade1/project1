import Numbercomponent from "./Numbercomponent";
import Welcome from "./Welcome";
function Loop_array() {
  const numbers = [1, 2, 3, 4, 5, 6];
  let display = false;

  return (
    <div>
      <h1> {display ? "true" : "false"} </h1>
      <ul>
        {numbers.map((index, number) =>
          display ? <Numbercomponent key={index} num={number} /> : <Welcome />
        )}
      </ul>
    </div>
  );
}

export default Loop_array;
