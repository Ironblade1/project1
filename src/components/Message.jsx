export default function Message() {
  function handleClick() {
    console.log("Buttton Clicked");
  }
  return (
    <div>
      <button onClick={handleClick()}> click me</button>
    </div>
  );
}
