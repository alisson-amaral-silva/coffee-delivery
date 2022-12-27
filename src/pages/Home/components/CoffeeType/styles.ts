import styled, { css } from 'styled-components'

export const TypeWrapper = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  width: 5rem;
  height: 1.3rem;
  border-radius: 100px;
  padding: 0 0.05rem;
  text-align: center;
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

const coffeeTypeListModifiers = {
  default: () => css`
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
    justify-content: center;
  `,
}

interface CoffeeTypeListProps {
  isMoreThanOne: boolean
}

export const CoffeeTypeList = styled.span<CoffeeTypeListProps>`
  ${({ theme, isMoreThanOne }) => css`
    ${isMoreThanOne && coffeeTypeListModifiers.default()};
  `}
`
