import z from 'zod'

console.log('DATABASE_URL:', process.env.DATABASE_URL)

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
