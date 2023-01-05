import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import expresso from '../../../../assets/expresso.svg'
import { CoffeeType } from '../CoffeeType'
import {
  BuyButton,
  CoffeeImage,
  CoffeeWrapper,
  Currency,
  Description,
  FooterWrapper,
  IncDecQuantityButton,
  Price,
  PriceWrapper,
  Quantity,
  QuantityWrapper,
  Title,
} from './styles'

export interface CoffeeCardProps {
  name: string
  price: string
  description: string
  img: string
  types: string[]
}

export function CoffeeCard({ name, price, description, img, types }: CoffeeCardProps) {
  return (
    <CoffeeWrapper>
      <CoffeeImage src={img} />
      <CoffeeType coffeeList={types} />
      <Title>{name}</Title>
      <Description>{description}</Description>
      <FooterWrapper>
        <PriceWrapper>
          <Currency>R$</Currency>
          <Price>{price}</Price>
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
