import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { Description, DescriptionProps } from '../../components/Description'
import {
  Container,
  DeliveryDescription,
  DeliveryDetailsWrapper,
  DeliveryWrapper,
  SpanWrapper,
  Subtitle,
  Title,
  Image
} from './style'
import delivery from '../../assets/delivery-guy.svg'

export function Success() {
  const descriptions: DescriptionProps[] = [
    {
      icon: <MapPin size={25} weight="fill" />,
      color: 'purple',
      text: (
        <SpanWrapper>
          Entrega em <b>Rua Joao Silva, 123</b> São Paulo - São Paulo, SP
        </SpanWrapper>
      ),
    },
    {
      icon: <Timer size={25} weight="fill" />,
      color: 'yellow',
      text: (
        <SpanWrapper>
          Previsão de entrega <b>20 min - 30 min</b>{' '}
        </SpanWrapper>
      ),
    },
    {
      icon: <CurrencyDollar size={25} />,
      color: 'dark_yellow',
      text: (
        <SpanWrapper>
          Pagamento na entrega <b>Cartão de Crédito</b>
        </SpanWrapper>
      ),
    },
  ]
  return (
    <Container>
      <Title>Uhu! Pedido confirmado</Title>
      <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>
      <DeliveryWrapper>
        <DeliveryDetailsWrapper>
          <DeliveryDescription>
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
          </DeliveryDescription>
        </DeliveryDetailsWrapper>
        <Image src={delivery} />
      </DeliveryWrapper>
    </Container>
  )
}
