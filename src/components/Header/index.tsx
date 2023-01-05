import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { CityWrapper, HeaderWrapper, NavWrapper } from './styles'
import { Cart } from '../Cart'
import { useCurrentAddress } from '../../services/current-address'

export function Header() {
  //Descomentar quando subir pra prod
  // const { status, data, error, isFetching } = useCurrentAddress();

  return (
    <HeaderWrapper>
      <NavLink to="/" title="Home">
        <img src={logo} alt="" />
      </NavLink>
      <NavWrapper>
        <CityWrapper>
           <MapPin size={24} weight="fill" /> <span>São Paulo, SP</span>  {/*<span>{isFetching ? "Carregando..." : `${data.region}, ${data.region_code} `}</span>*/}
        </CityWrapper>
        <NavLink to="/checkout" title="Carrinho">
          <Cart quantity={2} />
        </NavLink>
      </NavWrapper>
    </HeaderWrapper>
  )
}
