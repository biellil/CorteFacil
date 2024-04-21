import { useState } from 'react'
import { LoginPage } from '../../components/LoginPage'
import { SignupPage } from '../../components/SignupPage'

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true)

  const switchToSignup = () => {
    setShowLogin(false)
  }

  const switchToLogin = () => {
    setShowLogin(true)
  }

  return (
    <>
      {showLogin ? (
        <LoginPage switchToSignup={switchToSignup} />
      ) : (
        <SignupPage switchToLogin={switchToLogin} />
      )}
    </>
  )
}
