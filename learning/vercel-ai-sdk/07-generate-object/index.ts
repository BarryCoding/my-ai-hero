import { anthropic } from '@ai-sdk/anthropic'
import { generateObject } from 'ai'
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
  const { object, usage } = await generateObject({
    model,
    system:
      `You are helping a user create a recipe. ` +
      `Use British English variants of ingredient names,` +
      `like Coriander over Cilantro.`,
    prompt,
    schema,
    schemaName: 'Recipe',
  })

  return [object.recipe, usage] as const
}

const recipeResult = await createRecipe('How to make Basic Fired Rice?')

console.dir(recipeResult, { depth: null })
// this will be expensive!
// { promptTokens: 624, completionTokens: 483, totalTokens: 1107 }
