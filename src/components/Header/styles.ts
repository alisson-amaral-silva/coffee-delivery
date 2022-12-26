import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  padding:0.5rem;
  border-radius: 6px;
`

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

