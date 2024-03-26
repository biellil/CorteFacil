import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { Header } from '../header'

export function DefaultLayout() {
  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>
  )
}
