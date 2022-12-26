import { ShoppingCart } from 'phosphor-react'
import { CartWrapper, Badge } from './styles'

interface CartProps {
    quantity?: number
}

export function Cart({quantity = 0}: CartProps) {
  return (
    <CartWrapper>
              {quantity > 0 && <Badge aria-label="Cart items">{quantity}</Badge>}
      <ShoppingCart size={24} weight="fill" />
    </CartWrapper>
  )
}
