import { ReactNode } from 'react'
import { DescriptionWrapper, Icon, SpanWrapper } from './style'

export interface DescriptionProps {
  icon: ReactNode
  color: 'dark_yellow' | 'yellow' | 'purple' | 'gray'
  text: string
}

export function Description({ icon, color, text }: DescriptionProps) {
  return (
    <DescriptionWrapper>
      {!!icon && <Icon color={color}>{icon}</Icon>}
      <SpanWrapper>{text}</SpanWrapper>
    </DescriptionWrapper>
  )
}
