import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.div`
  padding: 2rem 10rem;
  ${media.lessThan('small')`
    padding: 1rem;
  `}
`
