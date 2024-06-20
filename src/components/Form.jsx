import { useState } from "react";

function Form() {
  const [name, setName] = useState({
    fname: "",
    lname: "",
  });

  //   function handleChange(e) {
  //     console.log(e);
  //     setName(e);
  //   }

  function handleSubmit(e) {
    e.preventDefault();
    //interaction with backend API
  }

  return (
    <div>
      <form action="">
        <input
          onChange={(e) => setName({ ...name, fname: e.target.value })}
          type="text"
          value={name.fname}
        ></input>

        <input
          onChange={(e) => setName({ ...name, lname: e.target.value })}
          type="text"
          value={name.lname}
        ></input>

        <button onClick={(e) => handleSubmit(e)}>ADD</button>
      </form>
    </div>
  );
}

export default Form;
