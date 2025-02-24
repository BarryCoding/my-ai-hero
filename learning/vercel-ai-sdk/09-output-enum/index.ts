import { anthropic } from '@ai-sdk/anthropic'
import { generateObject } from 'ai'

const model = anthropic('claude-3-5-haiku-latest')

export const classifySentiment = async (prompt: string) => {
  const { object, usage } = await generateObject({
    model,
    system: `Classify the sentiment of the text`,
    prompt,
    output: 'enum',
    enum: ['positive', 'negative', 'neutral'],
  })

  return [object, usage] as const
}

const result = await classifySentiment(`Why you are gay?`) // negative

console.dir(result, { depth: null, colors: true })
// { promptTokens: 469, completionTokens: 33, totalTokens: 502 }
