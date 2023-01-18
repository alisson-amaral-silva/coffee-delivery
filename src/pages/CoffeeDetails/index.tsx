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
  Image,
  MobileHeading,
  Heading,
  MobileImage,
} from './style'
import { CoffeeType } from '../Home/components/CoffeeType'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { CoffeeCard } from '../Home/components/CoffeeCard'

import { CoffeesContext } from '../../context/CoffeeContext'
import { useCallback, useContext } from 'react'
import { Coffee } from '../../reducers/coffees/reducer'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export function CoffeeDetails() {
  const { createNewCoffee } = useContext(CoffeesContext)
  let navigate = useNavigate()
  const { coffeeId } = useParams()

  const coffee = mock.find((coffee) => coffee.id === Number(coffeeId))
  const coffeeList = mock.filter((coffee) => coffee.id !== Number(coffeeId))

  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(max-width: 500px)": {
        slides: { perView: 1 },
      }
    },
    slides: {
      perView: "auto"
    },
  })

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
        <MobileHeading>{coffee?.name}</MobileHeading>
        <ImageWrapper>
          <Zoom>
            <Image
              alt={`imagem de um(a) ${coffee?.name}`}
              src={coffee?.detailed_img}
            />
          </Zoom>
        </ImageWrapper>
        <MobileImage
          alt={`imagem de um(a) ${coffee?.name}`}
          src={coffee?.detailed_img}
        />
        <ProductDetails>
          <Heading>{coffee?.name}</Heading>
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
          <div ref={sliderRef} className="keen-slider">
            {coffeeList.map((item) => (
              <div key={item.name} className="keen-slider__slide">
                <CoffeeCard  {...item} />
              </div>
            ))}
          </div>
        </Wrapper>
      </SliderWrapper>
    </>
  )
}
