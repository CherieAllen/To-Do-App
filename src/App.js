import { TodocontextProvider } from "./context/Todocontext";
import { InputBox } from "./components/InputBox";
import { ListOfThoughts } from "./components/List";
import { AddButton } from "./components/AddButton";
import { createTheme, ThemeProvider } from "@mui/material";


const theme = createTheme ({
  typography:{
    fontFamily: 'fantasy',

  },
  palette: {
    mode: 'light',
    background:{
      default: '#ce93d8'
    },
    
  }




})
  


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
       
        <TodocontextProvider>
          <InputBox />
          <ListOfThoughts />
          <AddButton />
        </TodocontextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
