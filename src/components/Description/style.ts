import styled from 'styled-components'

export const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const ITEMS_COLORS = {
  yellow: 'yellow',
  dark_yellow: 'yellow-dark',
  purple: 'purple',
  gray: 'base-text',
} as const

interface ItemsProps {
  color: keyof typeof ITEMS_COLORS
  width?: number
}

export const Icon = styled.div<ItemsProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: white;
  background: ${(props) => props.theme[ITEMS_COLORS[props.color]]};
  svg {
    padding-left: 0.4rem;
    padding-top: 0.4rem;
  }
`

