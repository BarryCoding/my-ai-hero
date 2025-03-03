import { createOpenAICompatible } from '@ai-sdk/openai-compatible'
import { cosineSimilarity, embed, embedMany } from 'ai'

const LMStudio = createOpenAICompatible({
  name: 'lmstudio',
  baseURL: `http://localhost:1234/v1`,
})
export const localModel = LMStudio.textEmbeddingModel('text-embedding-nomic-embed-text-v1.5')

const values = ['Dog', 'Cat', 'Car', 'Bike']

const { embeddings } = await embedMany({
  model: localModel,
  values,
})

const vectorDatabase = embeddings.map((embedding, index) => ({
  value: values[index]!,
  embedding,
}))

const searchTerm = await embed({
  model: localModel,
  value: 'wolf', // wolf pussy
})

const entries = vectorDatabase.map((entry) => {
  return {
    value: entry.value,
    similarity: cosineSimilarity(entry.embedding, searchTerm.embedding),
  }
})

const sortedEntries = entries.sort((a, b) => b.similarity - a.similarity)

console.dir(sortedEntries, { depth: null })
