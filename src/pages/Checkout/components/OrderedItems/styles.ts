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