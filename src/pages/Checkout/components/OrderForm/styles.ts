import styled from 'styled-components'
import media from 'styled-media-query'

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 0.715rem;
`

export const Heading = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 1.463rem;
`
export const FormWrapper = styled.div`
  margin-top: 0.938rem;
  max-width: 40rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  ${media.lessThan('small')`
    max-width: 100vw;
    padding: 1.5rem;
  `}
`

export const FormTitle = styled.h3`
  font-size: 1rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.3rem;
`

export const FormSubtitle = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
  font-size: 1.138rem;
`

export const InputWrapper = styled.div`
  margin-top: 2rem;
  grid-row-gap: 1rem;
  width: 37rem;

  ${media.lessThan('small')`
    width: 100%;
  `}

  display: flex;
  flex-direction: column;
`

interface BaseInputProps {
  width?: number
}

export const BaseInputWrapper = styled.div`
  display: flex;
  ${media.lessThan('small')`
    flex-direction: column;
    gap: 1rem;
  `}
  gap: 0.75rem;
`

interface BaseErrorWrapperProps {
  grid: string
}

export const BaseInput = styled.input<BaseInputProps>`
  background: ${(props) => props.theme['base-input']};
  width: ${(props) => props.width || 12.5}rem;
  height: 2.6rem;
  color: ${(props) => props.theme['base-text']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  padding: 0.75rem;

  ${media.lessThan('small')`
    width: 100%;
  `}

  &:disabled {
    cursor: not-allowed;

    border: 1px solid ${(props) => props.theme['base-button']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    font-size: 1.138rem;
  }
  &:active {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
  &:focus {
    box-shadow: none;
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`

export const InputComplementWrapper = styled.div`
  display: flex;
  background: ${(props) => props.theme['base-input']};

  border-radius: 4px;
  /* color: ${(props) => props.theme['base-text']}; */
  /* border: 1px solid ${(props) => props.theme['base-button']}; */

  .input-wrapper:focus-within {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
    &:focus {
      box-shadow: none;
      border: 1px solid ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const ComplementWrapper = styled(BaseInput)`
  background: transparent;
  position: relative;

  border-right: 1px solid transparent;
  width: ${(props) => props.width || 12.5}rem;

  &:focus {
    box-shadow: none;
    border: 1px solid ${(props) => props.theme['yellow-dark']};
    border-right: 1px solid transparent;

    border-top-right-radius: 1px;
    border-bottom-right-radius: 1px;
  }
  &:focus + .suffix {
    border: 1px solid ${(props) => props.theme['yellow-dark']};

    border-left: 1px solid transparent;

    border-top-left-radius: 1px;
    border-bottom-left-radius: 1px;
  }
`

export const SuffixWrapper = styled.div`
  position: relative;
  padding: 0.75rem;
  font-size: 0.75rem;
  font-style: italic;
  line-height: 0.975rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-left: 1px solid transparent;
  color: ${(props) => props.theme['base-label']};
  &:active {
    border-left: 1px solid transparent;
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
  &:focus {
    box-shadow: none;

    border-left: 1px solid transparent;
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`

export const ErrorMessageWrapper = styled.p`
  color: ${(props) => props.theme['red']};
  font-size: 0.875rem;
  margin-top: 0.5rem;
`
