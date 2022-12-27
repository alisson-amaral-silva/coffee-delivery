import { CoffeeCard } from './components/CoffeeCard'
import { Introduction } from './components/Introduction'
import { HeadingWrapper, MainWrapper } from './styles'

export function Home() {
  return (
    <>
      <Introduction />
      <HeadingWrapper>Nossos cafés</HeadingWrapper>
      <MainWrapper>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </MainWrapper>
    </>
  )
}
