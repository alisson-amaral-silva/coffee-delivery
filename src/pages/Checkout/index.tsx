import { OrderForm } from './components/OrderForm'
import { OrderedItems } from './components/OrderedItems'
import { PaymentMethod } from './components/PaymentMethod'
import { Container } from './styles'

export function Checkout() {
  return (
    <>
      <h1>Checkout</h1>
      <Container>
        <div>
          <OrderForm />
          <PaymentMethod />
        </div>

        <div>
          <OrderedItems />
        </div>
      </Container>
    </>
  )
}
