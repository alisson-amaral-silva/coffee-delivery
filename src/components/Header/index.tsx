import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { CityWrapper, HeaderWrapper, NavWrapper } from './styles'
import { Cart } from '../Cart'
import { useEffect } from 'react'
import { getCurrentAddress } from '../../services/current-address'
import { useQuery } from 'react-query'

export function Header() {
  //Descomentar quando subir pra prod
  // const { status, data, error, isFetching } = useQuery(
  //   ['data'],
  //   async () => {
  //     const data = await (await (
  //       getCurrentAddress()
  //     )).json()
  //     return data
  //   }
  // )

  return (
    <HeaderWrapper>
      <NavLink to="/" title="Home">
        <img src={logo} alt="" />
      </NavLink>
      <NavWrapper>
        <CityWrapper>
           <MapPin size={24} weight="fill" /> <span>São Paulo, SP</span> {/*<span>{isFetching ? "Carregando..." : `${data.region}, ${data.region_code} `}</span> */}
        </CityWrapper>
        <NavLink to="/checkout" title="Carrinho">
          <Cart quantity={2} />
        </NavLink>
      </NavWrapper>
    </HeaderWrapper>
  )
}
