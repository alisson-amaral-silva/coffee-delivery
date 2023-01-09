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
  LinkWrapper,
} from './styles'
import { useCallback, useContext, useState } from 'react'
import { CoffeesContext } from '../../../../context/CoffeeContext'
import { Coffee } from '../../../../reducers/coffees/reducer'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

export interface CoffeeCardProps {
  id: number
  name: string
  price: number
  description: string
  img: string
  types: string[]
  coffeeQuantity?: number
}

export function CoffeeCard({
  id,
  name,
  price,
  description,
  img,
  types,
  coffeeQuantity = 1,
}: CoffeeCardProps) {
  let navigate = useNavigate()
  const { coffeeId } = useParams()
  const { createNewCoffee } = useContext(CoffeesContext)

  const [quantity, setQuantity] = useState(coffeeQuantity)

  const increase = useCallback(
    () => setQuantity((counter) => counter! + 1),
    [quantity]
  )

  const decrease = useCallback(() => {
    if (quantity == 1) {
      return
    }
    setQuantity((counter) => counter! - 1)
  }, [quantity])

  const handleBuyNewCoffee = useCallback(() => {
    const newCoffee: Coffee = {
      id,
      name,
      img,
      price,
      quantity,
    }

    createNewCoffee(newCoffee)
  }, [id, name, img, price, quantity])

  const handleLink = useCallback(() => {
    navigate(`/coffee/${id}`, { replace: true })
  }, [id])

  return (
    <CoffeeWrapper>
      <CoffeeImage src={img} />
      <CoffeeType coffeeList={types} />
      <LinkWrapper onClick={handleLink}>
        <Title>{name}</Title>
      </LinkWrapper>
      <Description>{description}</Description>
      <FooterWrapper>
        <PriceWrapper>
          <Currency>R$</Currency>
          <Price>{price.toFixed(2)}</Price>
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
        <BuyButton className="button">
          <ShoppingCart size={22} weight="fill" onClick={handleBuyNewCoffee} />
        </BuyButton>
      </FooterWrapper>
    </CoffeeWrapper>
  )
}
