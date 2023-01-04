import { MapPinLine } from 'phosphor-react'
import {
  HeaderWrapper,
  Heading,
  FormWrapper,
  FormTitle,
  FormSubtitle,
  BaseInput,
  InputComplementWrapper,
  ComplementWrapper,
  SuffixWrapper,
  InputWrapper,
  BaseInputWrapper,
} from './styles'

export function OrderForm() {
  return (
    <>
      <Heading>Complete seu pedido</Heading>
      <FormWrapper>
        <HeaderWrapper>
          <MapPinLine size={22} />
          <div>
            <FormTitle>Endereço de Entrega</FormTitle>
            <FormSubtitle>
              Informe o endereço onde deseja receber seu pedido
            </FormSubtitle>
          </div>
        </HeaderWrapper>
        <InputWrapper>
          <BaseInput placeholder="CEP" />
          <BaseInput placeholder="Rua" width={35} />
          <BaseInputWrapper>
            <BaseInput placeholder="Número" />
            <InputComplementWrapper className="input-wrapper">
              <ComplementWrapper width={17.3} placeholder="Complemento" />
              <SuffixWrapper className="suffix">Opcional</SuffixWrapper>
            </InputComplementWrapper>
          </BaseInputWrapper>
          <BaseInputWrapper>
            <BaseInput placeholder="Bairro" />
            <BaseInput placeholder="Cidade" width={17.25} />
            <BaseInput placeholder="UF" width={3.75} />
          </BaseInputWrapper>
        </InputWrapper>
      </FormWrapper>
    </>
  )
}
