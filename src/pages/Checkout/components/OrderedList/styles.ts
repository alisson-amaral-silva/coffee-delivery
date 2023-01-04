import styled from 'styled-components'

export const Heading = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 1.463rem;
`

export const Container = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
  width: 28rem;
  height: 31.125rem;
  padding: 2.5rem;
  margin-top: 0.938rem;
`

export const ItemsWrapper = styled.div`
  max-height: 12.5rem;
  /* height: 12.5rem; */
  overflow: auto;
`

export const Divider = styled.hr`
  border-top: 1px solid ${(props) => props.theme['base-button']};
  margin-top: 1.5rem;
`

export const BuyingWrapper = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
`

export const RegularText = styled.span`
  color: ${(props) => props.theme['base-text']};
  font-size: 0.85rem;
  line-height: 1.138rem;
  text-align: left;
`
export const PriceText = styled.span`
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  line-height: 1.3rem;
  text-align: right;
`

export const TotalText = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
  line-height: 1.625rem;
  font-weight: 700;
`

export const TotalValue = styled(TotalText)`
  text-align: right;
`

export const BuyButton = styled.button`
  margin-top: 1.5rem;
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  line-height: 1.4rem;
  text-transform: uppercase;
  background: ${(props) => props.theme['yellow']};
  text-align: center;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  width: 23rem;
  height: 2.875rem;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
