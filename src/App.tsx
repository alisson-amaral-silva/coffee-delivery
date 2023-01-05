import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Router } from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient();

function App() {

  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
