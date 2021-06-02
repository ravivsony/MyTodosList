import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import React, {useState, useEffect  } from "react"; //usestate and useEffect are a hooks
import { AddTodo } from "./MyComponents/AddTodo";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")=== null){
    initTodo=[]
  }
  else{
   initTodo= JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {

    // let index=todos.indexOf(todo);   //deleting this way in react doesnt work.
    // todos.splice(index,1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;

      }));
    localStorage.setItem("todos",JSON.stringify(todos))
  };
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      // If todos is empty
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
      
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    if(localStorage.getItem("todos")){
      localStorage.setItem("todos",JSON.stringify(todos))
    }
  };
 
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
   localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])
  return (
    <>
      <Header title="MyTodosList" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
