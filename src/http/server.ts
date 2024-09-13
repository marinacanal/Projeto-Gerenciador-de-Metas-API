import fastify from 'fastify'
import { createGoal } from '../functions/create-goal'
import z from 'zod'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'

// criando aplicacao
const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.post(
  '/goals',
  {
    schema: {
      body: z.object({
        title: z.string(),
        desiredWeeklyFrequency: z.number().int().min(1).max(7),
      }),
    },
  },
  async request => {
    const { title, desiredWeeklyFrequency } = request.body

    await createGoal({
      title,
      desiredWeeklyFrequency,
    })
  }
)

// especificando porta para aplicacao rodar, que pode ser mais de uma
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running')
  })
