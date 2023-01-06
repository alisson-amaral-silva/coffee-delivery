import { OrderedItem } from './components/OrderedItem'
import { useContext } from 'react'
import {
  BuyButton,
  BuyingWrapper,
  Container,
  Divider,
  Heading,
  PriceText,
  RegularText,
  TotalText,
  TotalValue,
  ItemsWrapper,
  OrderedItemsWrapper
} from './styles'
import { CoffeesContext } from '../../../../context/CoffeeContext'

export function OrderedList() {
  const { coffees, sumEveryCoffee } = useContext(CoffeesContext)
  const deliveryPrice = 3.80;
  let totalPrice = sumEveryCoffee()
  let totalPlusDelivery = sumEveryCoffee() + deliveryPrice 

  return (
    <>
      <Heading>Cafés selecionados</Heading>
      <Container>
        <ItemsWrapper>
          {coffees.map((coffee) => {
            return (
              <OrderedItemsWrapper key={coffee.name}>
                <OrderedItem
                  id={coffee.id}
                  name={coffee.name}
                  price={coffee.price}
                  quantity={coffee.quantity}
                  img={coffee.img}
                />
                <Divider />
              </OrderedItemsWrapper>
            )
          })}
        </ItemsWrapper>
        <BuyingWrapper>
          <RegularText>Total de itens</RegularText>
          <PriceText>R$ {totalPrice.toFixed(2)}</PriceText>
          <RegularText>Entrega</RegularText>
          <PriceText>R$ {deliveryPrice.toFixed(2)}</PriceText>
          <TotalText>Total</TotalText>
          <TotalValue>R$ {totalPlusDelivery.toFixed(2)}</TotalValue>
        </BuyingWrapper>
        <BuyButton type="submit">Confirmar Pedido</BuyButton>
      </Container>
    </>
  )
}
