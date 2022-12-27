import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  height: 6.5rem;
  background: ${(props) => props.theme['background']};
`

export const CityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  padding: 0.5rem;
  border-radius: 6px;
`

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
