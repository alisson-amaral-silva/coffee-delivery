import styled from 'styled-components'

export const IntroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  margin-top: 4rem;
  grid-column-gap: 3.5rem;
`

export const TitleWrapper = styled.div`
  max-width: 36.7rem;
`

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 3rem;
  line-height: 3.875rem;
`

export const Subtitle = styled.h2`
  margin-top: 1rem;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.625rem;
`

export const OptionsWrapper = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.25rem;
`
