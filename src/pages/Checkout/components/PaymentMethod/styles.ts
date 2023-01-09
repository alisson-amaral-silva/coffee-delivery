import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  width: 40rem;
  height: 12.938rem;
  margin-top: 0.75rem;
  border-radius: 6px;

  ${media.lessThan('small')`
    max-width: 100%;
    padding: 1.5rem 0.5rem 0 1.5rem;
    height: 15rem;
  `}
`

export const Header = styled.div`
  display: flex;
  gap: 0.8rem;

  svg {
    color: ${(props) => props.theme['purple']};
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.span`
  font-size: 1rem;
  line-height: 1.3rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Subtitle = styled.span`
  font-size: 0.875rem;
  line-height: 1.138rem;
  color: ${(props) => props.theme['base-text']};
`

export const PaymentTypeWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;

  ${media.lessThan('small')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}
`

export const InputWrapper = styled.input`
  display: none;
  border-radius: 6px;
  cursor: pointer;
  &:checked + label {
    border: solid 1px ${(props) => props.theme['purple']};
    background: ${(props) => props.theme['purple-light']};
  }
`

export const DescriptionWrapper = styled.label`
  background: ${(props) => props.theme['base-button']};

  cursor: pointer;

  width: 11.125rem;
  height: 3.188rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.813rem;
  padding: 1rem 0.6rem 1rem 1rem;

  ${media.lessThan('small')`
    padding: 0.5rem;
    width: 9rem;
  `}

  svg {
    color: ${(props) => props.theme['purple']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
export const SpanWrapper = styled.span`
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
`

export const Icon = styled.div`
  width: 1rem;
  height: 1rem;
`
