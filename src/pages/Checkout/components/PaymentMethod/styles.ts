import styled from 'styled-components'
import media from 'styled-media-query'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Container = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  width: 40rem;
  height: 12.938rem;
  margin-top: 0.75rem;
  border-radius: 6px;

  ${media.lessThan('small')`
    max-width: 100%;
    padding: 1.5rem;
    height: 20.5rem;
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

export const PaymentTypeWrapper = styled(RadioGroup.Root)`
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;

  ${media.lessThan('small')`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}
`

export const PaymentTypeButton = styled(RadioGroup.Item)`
  background: ${(props) => props.theme['base-button']};
  width: 11.125rem;
  height: 3.188rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  border-radius: 6px;
  border: 0;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};
  cursor: pointer;
  transition: background-color 0.5s;

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme['base-hover']};
    box-shadow: none;
  }

  &[data-state='checked'] {
    background: ${(props) => props.theme['purple-light']};
    border: solid 1px ${(props) => props.theme['purple']};
    box-shadow: none;
  }

  svg {
    color: ${(props) => props.theme['purple']};
  }
`

interface ErrorMessageProps {
  alignPosition?: 'center'
}

export const ErrorMessageWrapper = styled.span<ErrorMessageProps>`
  color: ${(props) => props.theme['red']};
  font-size: 0.875rem;
  margin-top: 0.5rem;

  ${media.lessThan<ErrorMessageProps>('small')`
    text-align: ${(props) => props.alignPosition || 'left'};
  `}
`
