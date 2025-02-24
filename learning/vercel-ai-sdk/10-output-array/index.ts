import { anthropic } from '@ai-sdk/anthropic'
import { generateObject } from 'ai'
import { z } from 'zod'

const model = anthropic('claude-3-5-haiku-latest')

const schema = z.object({
  name: z.string().describe('The name of the employee'),
  age: z.number().describe("The employee's age"),
  email: z.string().email().describe("The employee's email address"),
})

export const createFakeEmployees = async (prompt: string) => {
  const result = await generateObject({
    model,
    system: `You are generating fake employee data.`,
    prompt,
    output: 'array',
    schema,
    schemaName: 'Employees',
  })

  return result
}

const result = await createFakeEmployees('Generate 5 employees data who are from different continents.')

console.dir(result, { depth: null })
//  usage: { promptTokens: 564, completionTokens: 235, totalTokens: 799 },
