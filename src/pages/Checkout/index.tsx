import { OrderForm } from './components/OrderForm'
import { PaymentType } from './components/PaymentType'

export function Checkout() {
  return (
    <>
      <h1>Checkout</h1>
      <OrderForm />

      <PaymentType />
    </>
  )
}
