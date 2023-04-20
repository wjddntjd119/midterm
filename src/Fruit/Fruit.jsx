import React, {useState} from "react";

function Fruit(){
  const [fruit, setFruit] = useState("");

  const inputFruit = (e) =>{
    setFruit("");
    setFruit(e.target.name);
  }
  return(
    <div>
      <h1>어떤 과일을 좋아하나요?  {fruit}</h1>
      <button name="사과" onClick={inputFruit} style={{margin:10}}>사과</button>
      <button name="오렌지" onClick={inputFruit} style={{margin:10}}>오렌지</button>
      <button name="바나나" onClick={inputFruit} style={{margin:10}}>바나나</button>
    </div>
    
  )

}
export default Fruit;