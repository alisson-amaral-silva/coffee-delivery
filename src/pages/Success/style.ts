import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 5rem;
`
export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  color: ${(props) => props.theme['yellow-dark']};
  line-height: 2.6rem;
`

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  line-height: 1.625rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const DeliveryWrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
	align-items: center;
  gap: 6.375rem;
`

export const DeliveryDetailsWrapper = styled.div`
  padding: 2.5rem;
  min-width: 32.875rem;
  height: 22.125rem;
  border-radius: 6px 36px;
  border: 1px solid;
  border-image: linear-gradient(45deg, #DBAC2C, #8047F8) 1;
`

export const SpanWrapper = styled.span`
  font-size: 1rem;
  line-height: 1.3rem;
  color: ${(props) => props.theme['base-text']};
`
export const DeliveryDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 2rem;
`

export const Image = styled.img``

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
`