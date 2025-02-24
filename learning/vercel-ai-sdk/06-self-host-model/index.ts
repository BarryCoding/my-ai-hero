import { createOpenAICompatible } from '@ai-sdk/openai-compatible'
import { generateText } from 'ai'

const LMStudio = createOpenAICompatible({
  name: 'lmstudio',
  baseURL: `http://localhost:1234/v1`,
})

const model = LMStudio('llama-3.2-3b-instruct')

export const askLocalLLMQuestion = async (prompt: string) => {
  const { text } = await generateText({
    model,
    prompt,
    maxRetries: 0,
  })

  return text
}

const prompt = `Teach me about SOLID with Typescript examples.`

const textResult = await askLocalLLMQuestion(prompt)

console.log(`🔎 🔍 ~ textResult:`, textResult)
