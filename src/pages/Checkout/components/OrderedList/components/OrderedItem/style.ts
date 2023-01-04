import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  gap: 1.25rem;
`

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
`
export const ContentWrapper = styled.div`
  width: 100%;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CoffeeName = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1rem;
  line-height: 1.3rem;
`

export const CoffeePrice = styled.span`
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  font-weight: 700;

  line-height: 1.3rem;
`

export const FooterWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border-radius: 6px;
  height: 2rem;
  width: 4.5rem;
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

export const RemoveWrapper = styled.button`
  svg {
    color: ${(props) => props.theme['purple']};
  }

  cursor: pointer;

  background: ${(props) => props.theme['base-button']};

  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 1.2rem;

  border: 0;
  padding: 0px 8px;
  width: 5.688rem;
  height: 2rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
