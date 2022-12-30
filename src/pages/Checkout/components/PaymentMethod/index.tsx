import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  HeadingWrapper,
  PaymentMethodWrapper,
  PaymentTypeWrapper,
  Subtitle,
  Title,
} from './styles'
import { PaymentType } from '../PaymentType'

export function PaymentMethod() {
  const PaymentList = [
    {
      icon: <CreditCard size={16} />,
      paymentType: 'Cartão de crédito',
    },
    {
      icon: <Bank size={16} />,
      paymentType: 'Cartão de débito',
    },
    {
      icon: <Money size={16} />,
      paymentType: 'Dinheiro',
    },
  ]

  return (
    <PaymentMethodWrapper>
      <HeadingWrapper>
        <CurrencyDollar size={22} />
        <div>
          <Title>Pagamento</Title>
          <Subtitle>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </Subtitle>
        </div>
      </HeadingWrapper>
      <PaymentTypeWrapper>
        {PaymentList.map((payment) => {
          return (
            <PaymentType
              key={payment.paymentType}
              icon={payment.icon}
              description={payment.paymentType}
            />
          )
        })}
      </PaymentTypeWrapper>
    </PaymentMethodWrapper>
  )
}
