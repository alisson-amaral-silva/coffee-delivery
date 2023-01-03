import styled from 'styled-components'

export const PaymentTypeWrapper = styled.input`
  display: none;

  &:checked + label {
    border: solid 2px green;
  }
  /* display: flex;
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
  } */

`

export const DescriptionWrapper = styled.label`
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  display: inline-block;
  width: 100px;
  height: 50px;
  border: solid 2px red;
`

export const Icon = styled.div`
  width: 1rem;
  height: 1rem;
`
