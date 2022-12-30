import { ReactNode } from 'react'
import { DescriptionWrapper, Icon, PaymentTypeWrapper } from './styles'

interface PaymentTypeProps {
  icon: ReactNode
  description: string
}

export function PaymentType({ icon, description }: PaymentTypeProps) {
  return (
    <PaymentTypeWrapper>
      {icon && <Icon>{icon}</Icon>}
      <DescriptionWrapper>{description}</DescriptionWrapper>
    </PaymentTypeWrapper>
  )
}
