import { ErrorMessage } from '@hookform/error-message'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { ReactNode } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
  Container,
  ErrorMessageWrapper,
  Header,
  PaymentTypeButton,
  PaymentTypeWrapper,
  Subtitle,
  Title,
  TitleContainer
} from './styles'

interface PaymentTypeProps {
  icon: ReactNode
  description: string
  name: string
}

export function PaymentMethod() {
  const {
    control,
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
      <Controller
        control={control}
        name="paymentOption"
        render={({ field }) => {
          return (
            <PaymentTypeWrapper
              onValueChange={field.onChange}
              value={field.value}
            >
              <PaymentTypeButton value="Cartão de Crédito">
                <CreditCard size={22} />
                Cartão de Crédito
              </PaymentTypeButton>
              <PaymentTypeButton value="Cartão de Débito">
                <Bank size={22} />
                Cartão de Débito
              </PaymentTypeButton>
              <PaymentTypeButton value="Dinheiro">
                <Money size={22} />
                Dinheiro
              </PaymentTypeButton>
            </PaymentTypeWrapper>
          )
        }}
      />
      <ErrorMessage
        errors={errors}
        name="paymentOption"
        render={({ message }) => (
          <ErrorMessageWrapper alignPosition="center">Selecione um método de pagamento.</ErrorMessageWrapper>
        )}
      />
    </Container>
  )
}
