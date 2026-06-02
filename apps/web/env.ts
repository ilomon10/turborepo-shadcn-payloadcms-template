import z from "zod";

const schema = z.object({
  NEXT_PUBLIC_SERVER_URL: z.string(),
  SERVER_URL: z.string(),
});

export function envConfigure() {
  console.log(`[APP] Verify environment variable.`);

  const env = schema.parse(process.env);

  console.log(`[APP] Env:\n`, env);
}
