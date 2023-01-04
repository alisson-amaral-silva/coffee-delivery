import { OrderedItem } from './components/OrderedItem'
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
  ItemsWrapper
} from './styles'

export function OrderedList() {
  return (
    <>
      <Heading>Cafés selecionados</Heading>
      <Container>
        <ItemsWrapper>
          <OrderedItem />
          <Divider />
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
