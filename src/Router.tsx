import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Loading } from './components/Loading'

const LazyAuth = React.lazy(() => import('./pages/auth'))

export function Routers() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <LazyAuth />
          </Suspense>
        }
      />
    </Routes>
  )
}
