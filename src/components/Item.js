import React from "react";

const Item = props => {
  return (
    <div className="todo-item" style={{border:"1px solid red", textAlign:"start", padding:10}}>
      <input type="checkbox" checked={props.item.checked} 
      onChange={() => {props.handleChange(props.item.id)}}/>
      <span>{props.item.text}</span>
    </div>
  );
};

export default Item;