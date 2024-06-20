import Hello from "./components/h.jsx";
import Loop_array from "./components/loop_array.jsx";
import Message from "./components/Message.jsx";
import Form from "./components/Form.jsx";
import Todoap from "./components/Todoapp.jsx";
function App() {
  const person = {
    name: "chandra",
    age: "22",
    gender: "M",
    arr: [9, 1, 2002],
  };

  return (
    <>
      <div>
        {/* <Hello p={person} />
        <Loop_array /> 
        <Message /> */}

        {/* <Form /> */}

        <Todoap />
      </div>
    </>
  );
}

export default App;
