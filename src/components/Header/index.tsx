import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { CityWrapper, HeaderWrapper, NavWrapper } from './styles'
import { Cart } from '../Cart'
import { useCurrentAddress } from '../../services/current-address'
import { CoffeesContext } from '../../context/CoffeeContext'
import { useContext } from 'react'

export function Header() {
  //Descomentar quando subir pra prod
  // const { status, data, error, isFetching } = useCurrentAddress();
  
  const { getCoffeeList } = useContext(CoffeesContext)
  let quantity = getCoffeeList();

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
          <Cart quantity={quantity} />
        </NavLink>
      </NavWrapper>
    </HeaderWrapper>
  )
}
