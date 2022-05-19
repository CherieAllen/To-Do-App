import {createContext, useState } from "react";

export const Todocontext = createContext({});




export const TodocontextProvider = ({children}) => {
    const {Provider} = Todocontext;
    const [input, setInput]=useState('')
    const[list, setList] = useState([]);

    const value = {
        input,
        setInput,
        list,
        setList,
    };

    return <Provider value ={value}>{children}</Provider>;

};