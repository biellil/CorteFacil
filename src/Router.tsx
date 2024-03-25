import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Loading } from './components/Loading'
import { Serviços } from './pages/servico'
import { Test } from './pages/test'

const LazyAuth = React.lazy(() => import('./pages/auth'))

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Agendar" />} />
      <Route
        path="/Agendar"
        element={
          <Suspense fallback={<Loading />}>
            <LazyAuth />
          </Suspense>
        }
      />
      <Route path="/serviço" element={<Serviços />} />
      <Route path="/Test" element={<Test />} />
    </Routes>
  )
}
