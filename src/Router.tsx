import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from './components/auth/LoginPage'
import { SignupPage } from './components/auth/SignupPage'

export function Routers() {
  return (
    <Routes>
      <Route path="/" index element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<Navigate replace to="/" />} />
    </Routes>
  )
}
