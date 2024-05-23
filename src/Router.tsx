import { Navigate, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './components/DefaultLayout'

import Feat from './pages/feat'

import { Agendar } from './pages/agendar'
import { Test } from './pages/test'
import { Auth } from './pages/auth'
import Serviços from './pages/serviços'

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Feat" />} />
      <Route path="/Auth" element={<Auth />} />

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/Serviço" element={<Serviços />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Feat" element={<Feat />} />
        <Route path="/Agendar" element={<Agendar />} />
      </Route>
    </Routes>
  )
}
