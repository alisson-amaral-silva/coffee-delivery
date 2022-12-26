import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { CityWrapper, HeaderWrapper, NavWrapper } from './styles'
import { Cart } from '../Cart'

export function Header() {
  return (
    <HeaderWrapper>
      <NavLink to="/" title="Home">
        <img src={logo} alt="" />
      </NavLink>
      <NavWrapper>
        <CityWrapper>
          <MapPin size={24} weight="fill" /> <span>São Paulo, SP</span>
        </CityWrapper>
        <NavLink to="/checkout" title="Carrinho">
          <Cart quantity={2} />
        </NavLink>
      </NavWrapper>
    </HeaderWrapper>
  )
}
