import { AddressBook, Bank, CreditCard, Money } from 'phosphor-react'
import { OrderForm } from './components/OrderForm'
import { PaymentType } from './components/PaymentType'

export function Checkout() {
  const paymentTypeList = [
    {
      icon: <CreditCard size={22} />,
      description: 'Cartão de Crédito',
      name: 'payment-radio'
    },
    {
      icon: <Bank size={22} />,
      description: 'Cartão de Débito',
      name: 'payment-radio'
    },
    {
      icon: <Money size={22} />,
      description: 'Dinheiro',
      name: 'payment-radio'
    },
  ]
  return (
    <>
      <h1>Checkout</h1>
      <OrderForm />

      {paymentTypeList.map((payment) => {
        return (
          <PaymentType
            key={payment.description}
            icon={payment.icon}
            name={payment.name}
            description={payment.description}
          />
        )
      })}
    </>
  )
}
