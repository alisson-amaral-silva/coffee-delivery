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
  ErrorMessageWrapper,
} from './styles'
import { Controller, useFormContext } from 'react-hook-form'
import { FocusEvent, useEffect } from 'react'
import { getCurrentAddress } from '../../../../services/current-address'
import { ErrorMessage } from '@hookform/error-message'

export function OrderForm() {
  const {
    register,
    control,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useFormContext()

  const handleCEPSearch = async (e: FocusEvent<HTMLInputElement, Element>) => {
    const cep = e.target.value
    if (cep.length < 8) return
    else {
      const { erro, bairro, localidade, logradouro, uf } =
        await getCurrentAddress(cep)
      if (erro) {
        setError('cep', {
          type: 'custom',
          message: 'Favor inserir um cep no formato correto',
        })

        setValue('street', '')
        setValue('city', '')
        setValue('district', '')
        setValue('state', '')
      } else {
        setValue('street', logradouro)
        setValue('city', localidade)
        setValue('district', bairro)
        setValue('state', uf)
      }
    }
  }

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
          <div>
            <Controller
              name="cep"
              control={control}
              render={({ field }) => {
                return (
                  <BaseInput
                    placeholder="CEP"
                    {...field}
                    onBlur={(e) => handleCEPSearch(e)}
                  />
                )
              }}
            />
            <ErrorMessage
              errors={errors}
              name="cep"
              render={({ message }) => (
                <ErrorMessageWrapper>{message}</ErrorMessageWrapper>
              )}
            />
          </div>

          <BaseInput
            placeholder="Rua"
            aria-disabled={true}
            disabled
            width={35}
            {...register('street')}
          />

          <BaseInputWrapper>
            <div>
              <BaseInput placeholder="Número" {...register('number')} />
              <ErrorMessage
                errors={errors}
                name="number"
                render={({ message }) => (
                  <ErrorMessageWrapper>{message}</ErrorMessageWrapper>
                )}
              />
            </div>
            <div>
              <BaseInput
                width={17.3}
                placeholder="Complemento"
                {...register('complement')}
              />
            </div>
          </BaseInputWrapper>

          <BaseInputWrapper>
            <BaseInput
              placeholder="Bairro"
              aria-disabled={true}
              disabled
              {...register('district')}
            />

            <BaseInput
              placeholder="Cidade"
              width={17.25}
              aria-disabled={true}
              disabled
              {...register('city')}
            />

            <BaseInput
              placeholder="UF"
              aria-disabled={true}
              disabled
              width={3.75}
              {...register('state')}
            />
          </BaseInputWrapper>
        </InputWrapper>
      </FormWrapper>
    </>
  )
}
