import { anthropic } from '@ai-sdk/anthropic'
import { streamText } from 'ai'

const model = anthropic('claude-3-5-haiku-latest')

export const answerMyQuestion = async (prompt: string) => {
  const result = await streamText({
    model,
    prompt,
  })

  // stream the text to the console
  for await (const textPart of result.textStream) {
    console.log(textPart)
  }

  return result
}

const result = await answerMyQuestion('What is Bitcoin?')

console.log('Result: ')
console.log(result)
