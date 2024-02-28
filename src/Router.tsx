import { Route, Routes } from 'react-router-dom'
import { Auth } from './pages/auth'

export function Routers() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Auth />} />
      </Route>
    </Routes>
  )
}
