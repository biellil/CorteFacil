import { BrowserRouter } from 'react-router-dom'
import { Routers } from './Router'
import { AuthProvider } from './components/Context'

export function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}
