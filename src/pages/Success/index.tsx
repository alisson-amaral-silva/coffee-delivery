import { MapPin, Timer, CurrencyDollar, Coffee } from 'phosphor-react'
import { Description, DescriptionProps } from '../../components/Description'
import {
  Container,
  DeliveryDescription,
  DeliveryDetailsWrapper,
  DeliveryWrapper,
  SpanWrapper,
  Subtitle,
  LoadingWrapper,
  Title,
  Image,
} from './style'
import delivery from '../../assets/delivery-guy.svg'
import { useContext, useEffect, useState } from 'react'
import { MoonLoader } from 'react-spinners'
import { CoffeesContext } from '../../context/CoffeeContext'
import { BuyButton } from '../Checkout/components/OrderedList/styles'
import { NavLink } from 'react-router-dom'

export function Success() {
  const [loading, setLoading] = useState(true)
  const { coffeeAcquisition, handleContinueAcquisitions } =
    useContext(CoffeesContext)
  const descriptions: DescriptionProps[] = [
    {
      icon: <Coffee size={25} weight="fill" />,
      color: 'gray',
      text: (
        <SpanWrapper>
          <b>{coffeeAcquisition?.coffeeList} </b> comprado(s) com Sucesso!
        </SpanWrapper>
      ),
    },
    {
      icon: <MapPin size={26} weight="fill" />,
      color: 'purple',
      text: (
        <SpanWrapper>
          Entrega em <b>{coffeeAcquisition?.address}</b>{' '}
          {coffeeAcquisition?.state}
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
          Pagamento na entrega <b>{coffeeAcquisition?.paymentMethod}</b>
        </SpanWrapper>
      ),
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <LoadingWrapper>
          <MoonLoader color="#DBAC2C" />
        </LoadingWrapper>
      ) : (
        <Container>
          <Title>Uhu! Pedido confirmado</Title>
          <Subtitle>
            Agora é só aguardar que logo o café chegará até você
          </Subtitle>
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

          <NavLink to="/" title="Home">
            <BuyButton onClick={handleContinueAcquisitions}>
              Gostaria de realizar outra compra?
            </BuyButton>
          </NavLink>
        </Container>
      )}
    </>
  )
}
