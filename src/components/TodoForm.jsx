import {useState} from 'react';


export default function({todos,settodos}){
   const [todo, settodo] = useState({name:"",done:false});

   function handleSubmit(e) {
     e.preventDefault();
     settodos([...todos, todo]);
     settodo({name:"",done:false});
   }

    return (
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => settodo({name:e.target.value,done:false})}
          type="text"
          value={todo.name}
        ></input>
        <button type="submit">ADD</button>
      </form>
    );
}