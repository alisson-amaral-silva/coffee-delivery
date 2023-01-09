import styled from 'styled-components'
import media from 'styled-media-query'

export const HeadingWrapper = styled.h3`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  line-height: 2.6rem;
  margin-top: 6.5rem;
  ${media.lessThan('small')`
    text-align: center;
  `}
`

export const MainWrapper = styled.main`
  margin-top: 3.3rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  ${media.lessThan('small')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`
