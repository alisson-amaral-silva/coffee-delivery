import { useContext } from 'react'
import { CoffeesContext } from '../../context/CoffeeContext'
import { OrderForm } from './components/OrderForm'
import { OrderedList } from './components/OrderedList'
import { PaymentMethod } from './components/PaymentMethod'
import { Container, EmptyCartWrapper, Title, Image } from './styles'
import emptyCart from '../../assets/empty-cart.svg'
import { BuyButton } from './components/OrderedList/styles'
import { NavLink, useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import {
  CheckoutFormData,
  checkoutValidationSchema,
} from './checkoutValidationSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export function Checkout() {
  let navigate = useNavigate()
  const { coffees, handleCoffeeAcquisition } = useContext(CoffeesContext)

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
      paymentOption: undefined,
    },
  })

  const { handleSubmit } = checkoutForm

  function handleCheckout(data: CheckoutFormData) {
    const coffeesName = coffees.map((coffee) => coffee.name)
    const acquisition = {
      address: `${data.street}, ${data.number}`,
      state: `${data.district} - ${data.city}, ${data.state}`,
      paymentMethod: data.paymentOption,
      coffeeList: coffeesName.toString(),
    }
    
    handleCoffeeAcquisition(acquisition)
    navigate('/success', { replace: true })
  }

  return (
    <>
      {coffees.length ? (
        <>
          <h1>Checkout</h1>
          <Container onSubmit={handleSubmit(handleCheckout)}>
            <FormProvider {...checkoutForm}>
              <div>
                <OrderForm />
                <PaymentMethod />
              </div>

              <div>
                <OrderedList />
              </div>
            </FormProvider>
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
