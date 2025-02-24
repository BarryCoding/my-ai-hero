import { anthropic } from '@ai-sdk/anthropic'
import { serve } from '@hono/node-server'
import type { CoreMessage } from 'ai'
import { generateText } from 'ai'
import { Hono } from 'hono'
import { once } from 'node:events'

const anthropicModel = anthropic('claude-3-5-haiku-latest')

export const startServer = async () => {
  const app = new Hono()

  app.post('/api/get-completions', async (ctx) => {
    const messages: CoreMessage[] = await ctx.req.json()

    const result = await generateText({
      model: anthropicModel,
      messages,
    })

    return ctx.json(result.response.messages)
  })

  const server = serve({
    fetch: app.fetch,
    port: 4317,
    hostname: '0.0.0.0',
  })

  await once(server, 'listening')

  return server
}
