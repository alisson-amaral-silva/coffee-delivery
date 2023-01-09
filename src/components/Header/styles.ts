import styled from 'styled-components'
import media from 'styled-media-query'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  height: 6.5rem;
  background: ${(props) => props.theme['background']};
  padding: 0 10rem;
  ${media.lessThan('small')`
    padding: 0;
    padding-right: 1rem;
  `}
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
  ${media.lessThan('small')`
    display: none;
  `}
`

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
