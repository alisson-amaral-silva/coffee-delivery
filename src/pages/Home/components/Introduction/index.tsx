import coffee from '../../../../assets/coffee-intro.svg'
import { IntroWrapper, OptionsWrapper, Subtitle, Title } from './style'

export function Introduction() {
  return (
    <IntroWrapper>
      <div>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Subtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Subtitle>
        <OptionsWrapper>
          <div></div>
        </OptionsWrapper>
      </div>
      <img src={coffee} alt="" />
    </IntroWrapper>
  )
}
