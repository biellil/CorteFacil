import { Route, Routes } from 'react-router-dom'
import { Dsa } from './pages/inde'

export function Routers() {
  return (
    <Routes>
      <Route path="/login">
        <Route index element={<Dsa />} />
      </Route>
    </Routes>
  )
}
