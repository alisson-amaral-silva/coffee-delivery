import styled from 'styled-components'

export const PaymentMethodWrapper = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  margin-top: 0.75rem;
`

export const HeadingWrapper = styled.div`
display flex;
gap: 0.75rem;

svg {
    color: ${(props) => props.theme['purple']};
}

`

export const Title = styled.h3`
  font-size: 1rem;
  line-height: 1.3rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Subtitle = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
  line-height: 1.138rem;
`

export const PaymentTypeWrapper = styled.div`
  margin-top: 0.75rem;
`
