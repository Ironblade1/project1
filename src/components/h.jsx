// let name = "chandra sekhar";

function Hello(props) {
  // console.log(props);
  const { name, age, arr, gender } = props.p;
  // props.name = "ramesh";

  return (
    <div>
      <h1>Hello component {name}</h1>
      <h2>age is {age} </h2>
      <h3>gender is {gender} </h3>
      <h4>My date of birth is {arr}</h4>
    </div>
  );
}

export default Hello;
