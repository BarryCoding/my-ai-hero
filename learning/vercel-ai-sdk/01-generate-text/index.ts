import { anthropic } from '@ai-sdk/anthropic'
import { generateText } from 'ai'

const model = anthropic('claude-3-haiku-20240307') // anthropic cheapest model 🥹

export const answerMyQuestion = async (prompt: string) => {
  const { text } = await generateText({
    model,
    prompt,
  })

  return text
}

const answer = await answerMyQuestion('What is the meaning of life?')

console.log(answer)
