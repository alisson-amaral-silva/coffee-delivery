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
  SpanWrapper,
} from './styles'
import { CurrencyDollar, Bank, CreditCard, Money } from 'phosphor-react'
import { ErrorMessage } from '@hookform/error-message'
import { ErrorMessageWrapper } from '../OrderForm/styles'
import { useFormContext } from 'react-hook-form'

interface PaymentTypeProps {
  icon: ReactNode
  description: string
  name: string
}

export const paymentTypeList = [
  {
    id: 'CREDITO',
    icon: <CreditCard size={22} />,
    description: 'Cartão de Crédito',
    name: 'payment-radio',
  },
  {
    id: 'DEBITO',
    icon: <Bank size={22} />,
    description: 'Cartão de Débito',
    name: 'payment-radio',
  },
  {
    id: 'DINHEIRO',
    icon: <Money size={22} />,
    description: 'Dinheiro',
    name: 'payment-radio',
  },
]

export function PaymentMethod() {
  const {
    register,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext()

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
            <div key={payment.id}>
              <InputWrapper
                id={payment.description}
                {...register('paymentOption')}
                value={payment.description}
                type="radio"
                
              />
              <DescriptionWrapper htmlFor={payment.description}>
                {payment.icon && payment.icon}
                <SpanWrapper>{payment.description}</SpanWrapper>
              </DescriptionWrapper>
            </div>
          )
        })}
      </PaymentTypeWrapper>
      <ErrorMessage
        errors={errors}
        name="paymentOption"
        render={({ message }) => (
          <ErrorMessageWrapper>{message}</ErrorMessageWrapper>
        )}
      />
    </Container>
  )
}
