import * as zod from 'zod'

export const checkoutValidationSchema = zod
  .object({
    cep: zod.string().min(8, 'Informe o cep'),
    street: zod.string(),
    number: zod.string().min(2, 'Informe o numero'),
    complement: zod.string(),
    district: zod.string(),
    city: zod.string(),
    state: zod.string(),
    paymentOption: zod.enum([
      'Cartão de Crédito',
      'Cartão de Débito',
      'Dinheiro',
    ]),
  })
  .strict()

export type CheckoutFormData = zod.infer<typeof checkoutValidationSchema>
