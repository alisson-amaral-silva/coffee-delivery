import { Package, ShoppingCart, Coffee, Timer } from 'phosphor-react'
import coffee from '../../../../assets/coffee-intro.svg'
import {
  IntroWrapper,
  OptionsWrapper,
  Subtitle,
  Title,
  TitleWrapper,
} from './style'
import { Description, DescriptionProps } from '../Description'

export function Introduction() {
  const descriptions: DescriptionProps[] = [
    {
      icon: <ShoppingCart size={24} weight="fill" />,
      color: 'dark_yellow',
      text: 'Compra simples e segura',
    },
    {
      icon: <Package size={24} weight="fill" />,
      color: 'gray',
      text: 'Embalagem mantém o café intacto',
    },
    {
      icon: <Timer size={24} weight="fill" />,
      color: 'yellow',
      text: 'Entrega rápida e rastreada',
    },
    {
      icon: <Coffee size={24} weight="fill" />,
      color: 'purple',
      text: 'O café chega fresquinho até você',
    },
  ]
  return (
    <IntroWrapper>
      <TitleWrapper>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Subtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Subtitle>
        <OptionsWrapper>
          {descriptions.map((description) => {
            return (
              <Description
                key={description.text}
                color={description.color}
                text={description.text}
                icon={description.icon}
              />
            )
          })}
        </OptionsWrapper>
      </TitleWrapper>
      <img src={coffee} alt="" />
    </IntroWrapper>
  )
}
