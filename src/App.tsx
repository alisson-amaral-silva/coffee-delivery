import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Router } from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
