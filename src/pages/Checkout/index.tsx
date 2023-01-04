import { OrderForm } from './components/OrderForm'
import { OrderedList } from './components/OrderedList'
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
          <OrderedList />
        </div>
      </Container>
    </>
  )
}
