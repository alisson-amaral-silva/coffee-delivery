import { useContext } from 'react'
import { CoffeesContext } from '../../context/CoffeeContext'
import { OrderForm } from './components/OrderForm'
import { OrderedList } from './components/OrderedList'
import { PaymentMethod } from './components/PaymentMethod'
import { Container, EmptyCartWrapper, Title, Image } from './styles'
import emptyCart from '../../assets/empty-cart.svg'
import { BuyButton } from './components/OrderedList/styles'
import { NavLink } from 'react-router-dom'

export function Checkout() {
  const { coffees } = useContext(CoffeesContext)

  return (
    <>
      {coffees.length ? (
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
      ) : (
        <EmptyCartWrapper>
          <Image src={emptyCart} />
          <Title>Carrinho está vazio, favor colocar algum café no mesmo</Title>
          <NavLink to="/" title="Home">
            <BuyButton>Voltar para Loja</BuyButton>
          </NavLink>
        </EmptyCartWrapper>
      )}
    </>
  )
}
