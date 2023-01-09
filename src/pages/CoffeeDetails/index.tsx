import { useNavigate, useParams } from 'react-router-dom'
import mock from '../Home/components/mocks/coffee-list'
import {
  Container,
  Price,
  ImageWrapper,
  ProductDetails,
  Description,
  BuyButton,
  AddToCart,
  Wrapper,
  SliderWrapper,
  Image
} from './style'
import { CoffeeType } from '../Home/components/CoffeeType'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import SlickSlider, { Settings } from 'react-slick'
import { CoffeeCard } from '../Home/components/CoffeeCard'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CoffeesContext } from '../../context/CoffeeContext'
import { useCallback, useContext } from 'react'
import { Coffee } from '../../reducers/coffees/reducer'

export type SliderSettings = Settings
export function CoffeeDetails() {
  const { createNewCoffee } = useContext(CoffeesContext)
  let navigate = useNavigate()
  const { coffeeId } = useParams()

  const coffee = mock.find((coffee) => coffee.id === Number(coffeeId))
  const coffeeList = mock.filter((coffee) => coffee.id !== Number(coffeeId))

  const settings: SliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    dots: true,
    slidesToScroll: 4,
    arrows: true,
  }

  const handleAddToCart = useCallback(() => {
    const { id, name, img, price, quantity } = coffee!
    const newCoffee: Coffee = {
      id,
      name,
      img,
      price,
      quantity,
    }

    createNewCoffee(newCoffee)
  }, [])

  const handleBuyButton = useCallback(() => {
    const { id, name, img, price, quantity } = coffee!
    const newCoffee: Coffee = {
      id,
      name,
      img,
      price,
      quantity,
    }

    createNewCoffee(newCoffee)
    navigate('/checkout', { replace: true })
  }, [])

  return (
    <>
      <Container>
        <ImageWrapper>
          <Zoom>
            <Image
              alt={`imagem de um(a) ${coffee?.name}`}
              src={coffee?.detailed_img}
            />
          </Zoom>
        </ImageWrapper>
        <ProductDetails>
          <h1>{coffee?.name}</h1>
          <CoffeeType coffeeList={coffee!.types} />
          <Price>R$ {coffee?.price.toFixed(2)}</Price>
          <b>Sobre esse item:</b>
          <Description>{coffee?.description}</Description>
          <AddToCart onClick={handleAddToCart}>Adicionar ao carrinho</AddToCart>
          <BuyButton onClick={handleBuyButton}>Comprar agora</BuyButton>
        </ProductDetails>
      </Container>
      <SliderWrapper>
        <Wrapper>
          <SlickSlider {...settings}>
            {coffeeList.map((item, index) => (
              <CoffeeCard key={index} {...item} />
            ))}
          </SlickSlider>
        </Wrapper>
      </SliderWrapper>
    </>
  )
}
