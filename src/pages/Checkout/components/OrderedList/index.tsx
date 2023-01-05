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
  const { coffees } = useContext(CoffeesContext)

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
          <PriceText>R$ 29,30</PriceText>
          <RegularText>Entrega</RegularText>
          <PriceText>R$ 3,80</PriceText>
          <TotalText>Total</TotalText>
          <TotalValue>R$ 33,20</TotalValue>
        </BuyingWrapper>
        <BuyButton>Confirmar Pedido</BuyButton>
      </Container>
    </>
  )
}
