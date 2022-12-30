import styled from 'styled-components'

export const PaymentTypeWrapper = styled.button`
  display: flex;
  gap: 0.813rem;
  padding: 1rem;
  border-radius: 6px;
  width: 11.125rem;
  height: 3.188rem;
  background: ${(props) => props.theme['base-button']};
  cursor: pointer;
  border: none;

  svg {
    color: ${(props) => props.theme['purple']};
  }
  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

`

export const DescriptionWrapper = styled.span`
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
`

export const Icon = styled.div`
  width: 1rem;
  height: 1rem;
`
