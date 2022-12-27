import styled from 'styled-components'

export const IntroWrapper = styled.div`
  max-width: 36.7rem;
  display: flex;
`

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 3rem;
  line-height: 3.875rem;
`

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.625rem;
`

export const OptionsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 20px;
`
