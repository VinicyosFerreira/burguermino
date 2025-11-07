/* eslint-disable no-useless-escape */
import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().trim().min(1, {
    error: 'O nome é obrigatório',
  }),
  cpf: z
    .string()
    .trim()
    .min(1, {
      error: 'O CPF é obrigatório',
    })
    .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, {
      error: 'O CPF é inválido, use o formato (000.000.000-00)',
    }),
  cep: z
    .string()
    .trim()
    .min(1, { error: 'O  CEP é obrigatório' })
    .regex(/^\d{5}\-\d{3}$/, {
      error: 'O CEP é inválido, use o formato (00000-000)',
    }),
  address: z.string().min(1, {
    error: 'O endereço é obrigatório',
  }),
  houseNumber: z
    .string()
    .min(1, {
      error: 'O número residencial é obrigatório',
    })
    .max(10, {
      error: 'O número residencial não pode ter mais de 10 caracteres',
    }),
  paymentSchema: z
    .object({
      paymentMethods: z.enum(['pix', 'credit-card', 'cash'], {
        error: 'Escolha uma opção de pagamento',
      }),
      cardNumber: z.string().optional(),
      cardHolder: z.string().optional(),
      cardExpirationDate: z.coerce.string().optional(),
      cardCvv: z.string().optional(),
    })
    .refine(
      (obj) =>
        obj.paymentMethods !== 'credit-card' ||
        obj.cardNumber?.trim().length > 0,
      {
        error: 'Número do cartão obrigatório',
        path: ['cardNumber'],
      }
    )
    .refine(
      (obj) => {
        const regex = /^\d{4}\-\d{4}\-\d{4}\-\d{4}$/;
        if (obj.paymentMethods !== 'credit-card') return true;
        return regex.test(obj.cardNumber);
      },
      {
        error:
          'O número do cartão é inválido, use o formato (0000-0000-0000-0000)',
        path: ['cardNumber'],
      }
    )
    .refine(
      (obj) =>
        obj.paymentMethods !== 'credit-card' ||
        obj.cardHolder?.trim().length > 0,
      {
        error: 'O titular do cartão é obrigatório',
        path: ['cardHolder'],
      }
    )
    .refine(
      (obj) =>
        obj.paymentMethods !== 'credit-card' ||
        obj.cardExpirationDate?.trim().length > 0,
      {
        error: 'A data de expiração do cartão é obrigatória',
        path: ['cardExpirationDate'],
      }
    )
    .refine(
      (obj) => {
        if (!obj.cardExpirationDate) {
          return true;
        }
        const today = new Date().toISOString().split('T')[0];
        return obj.cardExpirationDate > today;
      },
      {
        error: 'A data de expiração do cartão deve ser futura',
        path: ['cardExpirationDate'],
      }
    )
    .refine(
      (obj) =>
        obj.paymentMethods !== 'credit-card' || obj.cardCvv?.trim().length > 0,
      {
        error: 'O CVV do cartão é obrigatório',
        path: ['cardCvv'],
      }
    )
    .refine(
      (obj) => {
        if (obj.paymentMethods !== 'credit-card') return true;
        const regex = /^[0-9]+$/;

        if (regex.test(obj.cardCvv)) {
          if (obj.cardCvv.length === 3 || obj.cardCvv.length === 4) {
            return true;
          }
        }
      },
      {
        error: 'O CVV deve possuir 3 ou 4 caracteres numéricos',
        path: ['cardCvv'],
      }
    ),
});
