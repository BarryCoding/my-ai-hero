import { anthropic } from '@ai-sdk/anthropic'
import { generateText } from 'ai'

const model = anthropic('claude-3-5-haiku-latest')

export const answerMyQuestion = async (prompt: string) => {
  const { text } = await generateText({
    model,
    system:
      `You help planning my python and ai study. ` +
      `Respond to the users' request with a list ` +
      `of the best free learning materials to gain a solid foundation as a AI programmer step by step.`,
    prompt,
  })

  return text
}

const answer = await answerMyQuestion(
  `I am planning to learn python 3 hours daily to be a ai developer for 1 month. Please suggest the best learning activities for me.`
)

console.log(answer)
