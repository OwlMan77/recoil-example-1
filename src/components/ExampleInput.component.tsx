import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../atoms/todo.atom";

const ExampleInput = () => {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event: any) => {
      setText(event.target.value);
    };

   return ( <div className="Echo-container">
        <input type="text" value={text} onChange={onChange} />
        <p>
        Echo: {text}
        </p>
     </div>)
}

export default ExampleInput;