import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/login/inde'

export function Routers() {
  return (
    <Routes>
      <Route path="/login">
        <Route index element={<Login />} />
      </Route>
    </Routes>
  )
}
