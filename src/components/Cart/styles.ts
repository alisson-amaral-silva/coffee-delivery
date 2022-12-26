import styled from 'styled-components'

export const CartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.5rem;
  border-radius: 6px;
  position: relative;
`

export const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['white']};
  font-size: 0.75rem;
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  top: -0.4rem;
  right: -0.4rem;
`
