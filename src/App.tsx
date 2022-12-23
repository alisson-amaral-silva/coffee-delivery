import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"

function App() {

  return (
    
    <ThemeProvider theme={defaultTheme}>
    <h1 className="App">
      App
    </h1>
    </ThemeProvider>
  )
}

export default App
