import { useContext } from "react";
import { Todocontext } from "../context/Todocontext";

export const InputBox = () => {
    const {input, setInput} = useContext(Todocontext);



    return(
        <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        
        />
        
    );
};
