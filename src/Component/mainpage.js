import React,{useState} from "react";
import TodoItem  from "./TodoItem";
import Input from "./Input";


function Main(){
    
    const [items,setItems]=useState([]);

   
    function addItem(inputText){
        setItems(prevItems =>{
            return[...prevItems,inputText];
        });
        
    }
    function clearTask(...itmes){

        return items.length=0;

    }

    return(
        <div className="container">
            <div className="heading">
                <h1> To-Do List</h1>
            </div>
            <Input onAdd={addItem} />
            <div className="list">
                <ul className="list-ul">
                    {items.map(todoItem =>(
                        <TodoItem 
                        text={todoItem}
                        />
                        ))}
                </ul>
            </div>
            <div  className="close" >
            <button type="button" className="close-btn"  onClick={clearTask}>
   
                <img src="../assets/closes.png"/>
                
            </button>
            </div>
        </div>  
    );
}
export default Main;