import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Transactions from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transactions />
    </ThemeProvider>
  )
}

export default App