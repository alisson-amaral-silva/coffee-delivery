import { ReactNode } from 'react'
import { DescriptionWrapper, Icon, PaymentTypeWrapper } from './styles'

interface PaymentTypeProps {
  icon: ReactNode
  description: string
  name: string
}

export function PaymentType({ icon, description, name }: PaymentTypeProps) {
  return (
    <>
      <PaymentTypeWrapper id={description} name={name} type="radio" />
      <DescriptionWrapper htmlFor={description}>
         {description}
      </DescriptionWrapper>
    </>
  )
}
