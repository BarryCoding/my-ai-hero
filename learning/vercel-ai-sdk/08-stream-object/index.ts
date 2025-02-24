import { anthropic } from '@ai-sdk/anthropic'
import { streamObject } from 'ai'
import { z } from 'zod'

const model = anthropic('claude-3-5-haiku-latest')

const schema = z.object({
  recipe: z.object({
    name: z.string().describe('The title of the recipe'),
    ingredients: z
      .array(
        z.object({
          name: z.string(),
          amount: z.string(),
        })
      )
      .describe('The ingredients needed for the recipe'),
    steps: z.array(z.string()).describe('The steps to make the recipe'),
  }),
})

export const createRecipe = async (prompt: string) => {
  const { object, partialObjectStream, usage } = await streamObject({
    model,
    system: `You are helping a user create a recipe. Use British English variants of ingredient names,`,
    prompt,
    schema,
    schemaName: 'Recipe',
  })

  for await (const partialObject of partialObjectStream) {
    console.clear()
    console.dir(partialObject, { depth: null })
  }

  const recipe = (await object).recipe
  const usageResult = await usage
  console.dir(usageResult, { depth: null })

  return [recipe, usageResult] as const
}

await createRecipe('Give me simple a recipe with only 5 steps')
// this will be expensive! so limiting the steps
// { promptTokens: 616, completionTokens: 212, totalTokens: 828 }
// the structured object with schema details, makes the promptTokens high!
