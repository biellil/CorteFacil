import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './components/DefaultLayout'
import { Loading } from './components/Loading'
import { Feat } from './pages/feat'
import { Serviços } from './pages/serviços'
import { Test } from './pages/test'

const LazyAuth = React.lazy(() => import('./pages/auth'))

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" />} />
      <Route
        path="/auth"
        element={
          <Suspense fallback={<Loading />}>
            <LazyAuth />
          </Suspense>
        }
      />

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/serviço" element={<Serviços />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/feat" element={<Feat />} />
      </Route>
    </Routes>
  )
}
