import styled from 'styled-components'

export const CoffeeWrapper = styled.div`
  max-width: 16rem;
  height: 20.3rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  img {
    padding: 0;
  }
`
export const CoffeeImage = styled.img`
  margin-top: -1rem;
`

export const TypeWrapper = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  width: 5rem;
  height: 1.3rem;
  border-radius: 100px;
  padding: 0.05rem 0.5rem;
  & + & {
    margin-left: 0.25rem;
  }
`

export const Type = styled.span`
  color: ${(props) => props.theme['yellow-dark']};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
`
export const Title = styled.h4`
  font-size: 1.25rem;
  font-family: 'Baloo 2';
  font-weight: 700;
  line-height: 1.625rem;
  text-align: center;
  color: ${(props) => props.theme['base-subtitle']};
`
export const Description = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.13rem;
  text-align: center;
  padding: 0 1.25rem;
  color: ${(props) => props.theme['base-label']};
`

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 4.5rem;
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Currency = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.13rem;
  text-align: right;
  color: ${(props) => props.theme['base-text']};
`
export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  font-family: 'Baloo 2';
  line-height: 1.95rem;
  text-align: right;
`
export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border-radius: 6px;
`
export const IncDecQuantityButton = styled.button`
  color: ${(props) => props.theme['purple']};
  border: 0;
  padding: 0;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
  width: 2rem;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const Quantity = styled.span`
  font-size: 1rem;
  line-height: 1.3rem;
  color: ${(props) => props.theme['base-title']};
`

export const BuyButton = styled.button`
  background: ${(props) => props.theme['purple-dark']};
  color: white;
  padding: 0.5rem;
  cursor: pointer;
  border: 0;
  border-radius: 6px;
  width: 2.3rem;
  height: 2.3rem;

  &:hover {
    background: ${(props) => props.theme['purple']};
  }
`
