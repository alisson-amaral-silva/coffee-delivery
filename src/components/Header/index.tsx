import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { CityWrapper, HeaderWrapper, NavWrapper } from './styles'
import { Cart } from '../Cart'
import { useCurrentState } from '../../services/current-state'
import { CoffeesContext } from '../../context/CoffeeContext'
import { useContext } from 'react'

export function Header() {
  //Descomentar quando subir pra prod
  // const { status, data, error, isFetching } = useCurrentState();
  
  const { getCoffeeQuantity } = useContext(CoffeesContext)
  let quantity = getCoffeeQuantity();

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
