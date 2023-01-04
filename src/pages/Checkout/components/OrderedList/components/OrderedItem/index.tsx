import {
  CoffeeName,
  CoffeePrice,
  Container,
  FooterWrapper,
  HeaderWrapper,
  IncDecQuantityButton,
  QuantityWrapper,
  RemoveWrapper,
  ContentWrapper,
  Image,
} from './style'
import expresso from '../../../../../../assets/expresso.svg'
import { Minus, Plus, Trash } from 'phosphor-react'
import { Quantity } from '../../../../../Home/components/CoffeeCard/styles'

export function OrderedItem() {
  return (
    <Container>
      <Image src={expresso} />
      <ContentWrapper>
        <HeaderWrapper>
          <CoffeeName>Expresso Tradicional</CoffeeName>
          <CoffeePrice>R$ 9,90</CoffeePrice>
        </HeaderWrapper>
        <FooterWrapper>
          <QuantityWrapper>
            <IncDecQuantityButton>
              <Minus size={14} weight="bold" />
            </IncDecQuantityButton>
            <Quantity>1</Quantity>
            <IncDecQuantityButton>
              <Plus size={14} weight="bold" />
            </IncDecQuantityButton>
          </QuantityWrapper>

          <RemoveWrapper>
            <Trash size={16} />
            Remover
          </RemoveWrapper>
        </FooterWrapper>
      </ContentWrapper>
    </Container>
  )
}
