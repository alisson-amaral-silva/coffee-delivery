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
import { CoffeesContext } from '../../../../../../context/CoffeeContext'
import { useCallback, useContext } from 'react'

interface OrderedItemProps {
  id: number
  name: string
  price: number
  quantity: number
  img: string
}

export function OrderedItem({
  id,
  name,
  price,
  quantity,
  img,
}: OrderedItemProps) {
  const {
    deleteCoffee,
    increasedCoffeeQuantityOnCart,
    decreasedCoffeeQuantityOnCart,
  } = useContext(CoffeesContext)

  const handleRemoveCoffee = useCallback(() => {
    deleteCoffee(id)
  }, [id, name, price, quantity, img])

  const increase = useCallback(
    () => increasedCoffeeQuantityOnCart(id),
    [quantity]
  )

  const decrease = useCallback(
    () => decreasedCoffeeQuantityOnCart(id),
    [quantity]
  )

  return (
    <Container>
      <Image src={img} />
      <ContentWrapper>
        <HeaderWrapper>
          <CoffeeName>{name}</CoffeeName>
          <CoffeePrice>R$ {price.toFixed(2)}</CoffeePrice>
        </HeaderWrapper>
        <FooterWrapper>
          <QuantityWrapper>
            <IncDecQuantityButton onClick={decrease}>
              <Minus size={14} weight="bold" />
            </IncDecQuantityButton>
            <Quantity>{quantity}</Quantity>
            <IncDecQuantityButton onClick={increase}>
              <Plus size={14} weight="bold" />
            </IncDecQuantityButton>
          </QuantityWrapper>

          <RemoveWrapper onClick={handleRemoveCoffee}>
            <Trash size={16} />
            Remover
          </RemoveWrapper>
        </FooterWrapper>
      </ContentWrapper>
    </Container>
  )
}
