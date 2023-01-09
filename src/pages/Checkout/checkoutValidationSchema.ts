import * as zod from 'zod'
import { paymentTypeList } from './components/PaymentMethod'

export const checkoutValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe o cep'),
  street: zod.string(),
  number: zod.string().min(2, 'Informe o numero'),
  complement: zod.string(),
  district: zod.string(),
  city: zod.string(),
  state: zod.string(),
  paymentOption: zod
    .string({
      invalid_type_error: 'Selecione um método de pagamento.',
      required_error: 'Selecione um método de pagamento.',
    })
    .refine((val) =>
      paymentTypeList
        .map((paymentType) => paymentType.description)
        .includes(val)
    ),
}).strict()

export type CheckoutFormData = zod.infer<typeof checkoutValidationSchema>
