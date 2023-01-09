import { Package, ShoppingCart, Coffee, Timer } from 'phosphor-react'
import coffee from '../../../../assets/coffee-intro.svg'
import {
  IntroWrapper,
  OptionsWrapper,
  Subtitle,
  Title,
  TitleWrapper,
  SpanWrapper,
} from './style'
import {
  Description,
  DescriptionProps,
} from '../../../../components/Description'

export function Introduction() {
  const descriptions: DescriptionProps[] = [
    {
      icon: <ShoppingCart size={24} weight="fill" />,
      color: 'dark_yellow',
      text: <SpanWrapper>Compra simples e segura</SpanWrapper>,
    },
    {
      icon: <Package size={26} weight="fill" />,
      color: 'gray',
      text: <SpanWrapper>Embalagem protege o café</SpanWrapper>,
    },
    {
      icon: <Timer size={24} weight="fill" />,
      color: 'yellow',
      text: <SpanWrapper>Entrega rápida e rastreada</SpanWrapper>,
    },
    {
      icon: <Coffee size={24} weight="fill" />,
      color: 'purple',
      text: <SpanWrapper>O café é fresquinho.</SpanWrapper>,
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
                key={description.color}
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
