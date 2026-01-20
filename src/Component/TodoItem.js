import React, { useState } from "react";



function TodoItem(props){
    const [isDone,setIsDone] = useState(false);

    function handleClick(){
         setIsDone ( (prevValue)=>{
            return !prevValue;
         })
    }
    return(
        <div>
            <li
             style={{textDecoration: isDone?"line-through":"none"}}
             onClick={handleClick}
            >
                {props.text}
                <img src="../assets/idelete.png"/>
            </li>
        </div>
    )
}
export default TodoItem;