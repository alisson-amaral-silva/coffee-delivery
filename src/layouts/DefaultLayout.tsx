import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { LayoutWrapper } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <Outlet />
      </LayoutWrapper>
    </>
  )
}
