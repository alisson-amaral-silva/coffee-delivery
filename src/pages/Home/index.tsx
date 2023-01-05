import { CoffeeCard } from './components/CoffeeCard'
import { Introduction } from './components/Introduction'
import { HeadingWrapper, MainWrapper } from './styles'
import mock from './components/mocks/coffee-list'

export function Home() {
  return (
    <>
      <Introduction />
      <HeadingWrapper>Nossos cafés</HeadingWrapper>
      <MainWrapper>
        {mock.map((item) => {
          return (
            <CoffeeCard
              coffeeQuantity={item.quantity}
              id={item.id}
              name={item.name}
              img={item.img}
              price={item.price}
              types={item.types}
              description={item.description}
              key={item.name}
            />
          )
        })}
      </MainWrapper>
    </>
  )
}
