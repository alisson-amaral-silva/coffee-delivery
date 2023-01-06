import { ReactNode } from 'react'
import { DescriptionWrapper, Icon } from './style'

export interface DescriptionProps {
  icon: ReactNode
  color: 'dark_yellow' | 'yellow' | 'purple' | 'gray'
  text: ReactNode
}

export function Description({ icon, color, text }: DescriptionProps) {
  return (
    <>
    <DescriptionWrapper>
      {!!icon && <Icon  color={color}>{icon}</Icon>}
      {!!text && text}
    </DescriptionWrapper>
    </>
  )
}
