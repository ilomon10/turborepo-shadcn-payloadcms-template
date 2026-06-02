import z from 'zod'

const schema = z.object({
  PAYLOAD_SECRET: z.string(),
  SERVER_URL: z.string(),
  POSTGRES_URI: z.string(),
  POSTGRES_PUSH: z.coerce.boolean(),
})

export function envConfigure() {
  console.log(`[APP] Verify environment variable.`)

  const env = schema.parse(process.env)

  console.log(`[APP] Env:\n`, env)
}
