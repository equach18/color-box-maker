import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css"

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox}]);
  };
  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };
  const boxComponent = boxes.map(box => (
    <Box
        key={box.id}
        id={box.id}
        width={box.width}
        height={box.height}
        handleRemoveBox={removeBox}
        backgroundColor={box.backgroundColor}
    />
  ))
  return (
    <div className="BoxList">
        <h1>Create a New Box</h1>
      <NewBoxForm addBox ={addBox}/>
      {boxComponent}
    </div>
  );
}

export default BoxList;
