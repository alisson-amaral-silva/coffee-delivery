import { Type, TypeWrapper, CoffeeTypeList } from './styles'

interface CoffeeTypeProps {
  coffeeList: string[]
}
export function CoffeeType({ coffeeList }: CoffeeTypeProps) {
  return (
    <CoffeeTypeList isMoreThanOne={coffeeList.length >= 1}>
      {coffeeList.map((coffee) => {
        return (
          <TypeWrapper key={coffee}>
            <Type>{coffee}</Type>
          </TypeWrapper>
        )
      })}
    </CoffeeTypeList>
  )
}
