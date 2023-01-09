import styled from 'styled-components'
import media from 'styled-media-query'

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const Image = styled.img`
  height: 22.5rem;
  width: 29.75rem;
  ${media.lessThan('small')`
    width: 25.75rem;
  `}
`

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-size: 3rem;
  line-height: 3.9rem;
  color: ${(props) => props.theme['base-title']};

  ${media.lessThan('small')`
    text-align: center;
    font-size: 2.5rem;
  `}
`
