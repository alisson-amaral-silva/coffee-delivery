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
import { useCallback, useState } from 'react'

export interface CoffeeCardProps {
  name: string
  price: string
  description: string
  img: string
  types: string[]
}

export function CoffeeCard({
  name,
  price,
  description,
  img,
  types,
}: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  const increase = useCallback(
    () => setQuantity((counter) => counter + 1),
    [quantity]
  )
  const decrease = useCallback(() => {
    if (quantity == 1) {
      return
    }
    setQuantity((counter) => counter - 1)
  }, [quantity])

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
          <IncDecQuantityButton onClick={decrease}>
            <Minus size={14} weight="bold" />
          </IncDecQuantityButton>
          <Quantity>{quantity}</Quantity>
          <IncDecQuantityButton onClick={increase}>
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
