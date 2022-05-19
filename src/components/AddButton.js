import { useContext } from "react";
import { Todocontext } from "../context/Todocontext";

export const AddButton = () => {
    const {input, setInput, list, setList} = useContext(Todocontext);

    const onClick = () => {
        if(!input) {
            return;
        }
    
        const newList =[...list,input];
        setList(newList);
        setInput('');
    
    };
    
    
    return (
        <button color=" primary" variant="contained" onClick={onClick}> Add Thought</button>
    )
};
