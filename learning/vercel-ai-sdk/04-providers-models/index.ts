import { anthropic } from '@ai-sdk/anthropic'
import { openai } from '@ai-sdk/openai'
import type { LanguageModel } from 'ai'
import { generateText } from 'ai'

const anthropicModel = anthropic('claude-3-5-haiku-latest')
const openaiModel = openai('gpt-4o-mini')

const tryAPrompt = async (prompt: string, model: LanguageModel) => {
  const { text } = await generateText({
    model,
    prompt,
  })
  return text
}

const anthropicResult = await tryAPrompt('What is the meaning of life in 10 words?', anthropicModel)
console.log(`🔎 🔍 ~ anthropicResult:`, anthropicResult)

const openaiResult = await tryAPrompt('What is the meaning of life in 10 words?', openaiModel)
console.log(`🔎 🔍 ~ openaiResult:`, openaiResult)
