import { ReactNode } from 'react'
import {
  Container,
  DescriptionWrapper,
  Icon,
  InputWrapper,
  PaymentTypeWrapper,
  Header,
  Title,
  Subtitle,
  TitleContainer,
  SpanWrapper
} from './styles'
import { CurrencyDollar, Bank, CreditCard, Money } from 'phosphor-react'

interface PaymentTypeProps {
  icon: ReactNode
  description: string
  name: string
}

export function PaymentType() {
  const paymentTypeList = [
    {
      icon: <CreditCard size={22} />,
      description: 'Cartão de Crédito',
      name: 'payment-radio',
    },
    {
      icon: <Bank size={22} />,
      description: 'Cartão de Débito',
      name: 'payment-radio',
    },
    {
      icon: <Money size={22} />,
      description: 'Dinheiro',
      name: 'payment-radio',
    },
  ]
  return (
    <Container>
      <Header>
        <CurrencyDollar size={22} />
        <TitleContainer>
          <Title>Pagamento</Title>
          <Subtitle>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </Subtitle>
        </TitleContainer>
      </Header>
      <PaymentTypeWrapper>
        {paymentTypeList.map((payment) => {
          return (
            <>
              <InputWrapper
                id={payment.description}
                name={payment.name}
                type="radio"
              />
              <DescriptionWrapper htmlFor={payment.description}>
                {payment.icon && payment.icon}
                <SpanWrapper>{payment.description}</SpanWrapper>
              </DescriptionWrapper>
            </>
          )
        })}
      </PaymentTypeWrapper>
    </Container>
  )
}
