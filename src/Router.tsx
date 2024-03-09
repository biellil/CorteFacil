import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from './components/LoginPage'
import { SignupPage } from './components/SignupPage'

export function Routers() {
  return (
    <Routes>
      <Route path="/" index element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<Navigate replace to="/" />} />
    </Routes>
  )
}
