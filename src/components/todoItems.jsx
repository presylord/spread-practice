import React from "react";

function ToDoItem(props) {
  return (
    <li id={props.id} onClick={props.onclick}>
      {props.listItem}
    </li>
  );
}

export default ToDoItem;

// const [isClicked, setClicked] = useState(false);

// function onClick() {
//   setClicked((prevValue) => {
//     return !prevValue;
//   });
// }
// style={{ textDecoration: isClicked ? "line-through" : "none" }}
