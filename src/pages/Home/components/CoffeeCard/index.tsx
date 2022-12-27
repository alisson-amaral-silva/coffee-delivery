import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CoffeeImage,
  CoffeeWrapper,
  Description,
  Price,
  Title,
  Type,
  QuantityWrapper,
  BuyButton,
  IncDecQuantityButton,
  Quantity,
  TypeWrapper,
  PriceWrapper,
  Currency,
  FooterWrapper,
} from './styles'
import expresso from '../../../../assets/expresso.svg'
import { CoffeeType } from '../CoffeeType'

export function CoffeeCard() {
  const coffeeTypeList = ['Tradicional', 'Com leite', 'Gelado', 'especial']

  return (
    <CoffeeWrapper>
      <CoffeeImage src={expresso} />
      <CoffeeType coffeeList={coffeeTypeList} />
      <Title>Expresso Tradicional</Title>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <FooterWrapper>
        <PriceWrapper>
          <Currency>R$</Currency>
          <Price>9,90</Price>
        </PriceWrapper>
        <QuantityWrapper>
          <IncDecQuantityButton>
            <Minus size={14} weight="bold" />
          </IncDecQuantityButton>
          <Quantity>1</Quantity>
          <IncDecQuantityButton>
            <Plus size={14} weight="bold" />
          </IncDecQuantityButton>
        </QuantityWrapper>
        <BuyButton>
          <ShoppingCart size={22} weight="fill" />
        </BuyButton>
      </FooterWrapper>
    </CoffeeWrapper>
  )
}
