import { NavLink } from 'react-router-dom';
import notFound from '../../assets/page-not-found.svg'
import { Image, NotFoundWrapper, Title } from './styles'
import { BuyButton } from '../Checkout/components/OrderedList/styles';

export function NotFound() {
  return (
    <NotFoundWrapper>
      <Image src={notFound} />
      <Title>A página que você requisitou não foi encontrada.</Title>
      <NavLink to="/" title="Home">
        <BuyButton>Voltar para Loja</BuyButton>
      </NavLink>
    </NotFoundWrapper>
  )
}
