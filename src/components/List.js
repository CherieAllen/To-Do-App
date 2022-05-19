import { IconButton, ListItem,List } from "@mui/material";
import { useContext } from "react";
import { Todocontext } from "../context/Todocontext";

export const ListOfThoughts = () => {
    const {list, setList} = useContext(Todocontext);

    const removeItem = (index) => {
        list.splice(index, 1);
        setList([...list]);
      };
    
return (
        <List>
            {list.map((item,i)=> {
            return (
                <ListItem key={item}>
                    {item}
                    <IconButton onClick={() => removeItem(i)}>
                  😁
                    </IconButton>
                </ListItem>
            )
            })}
        </List>
    )
}

