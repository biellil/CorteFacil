import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './components/DefaultLayout'
import { Loading } from './components/Loading'
import Feat from './pages/feat'

import { Agendar } from './pages/agendar'
import { Test } from './pages/test'

const LazyAuth = React.lazy(() => import('./pages/auth'))
const LazyServiços = React.lazy(() => import('./pages/serviços'))
export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Feat" />} />
      <Route
        path="/Auth"
        element={
          <Suspense fallback={<Loading />}>
            <LazyAuth />
          </Suspense>
        }
      />

      <Route path="/" element={<DefaultLayout />}>
        <Route
          path="/Serviço"
          element={
            <Suspense fallback={<Loading />}>
              <LazyServiços />
            </Suspense>
          }
        />
        <Route path="/Test" element={<Test />} />
        <Route path="/Feat" element={<Feat />} />
        <Route path="/Agendar" element={<Agendar />} />
        {'Se for adicionar mais rotas, coloque-as aqui'}
      </Route>
    </Routes>
  )
}
