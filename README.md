# setup

```bash
pnpm init
# deps
pnpm add ai @ai-sdk/anthropic @ai-sdk/openai
# dev deps
pnpm add -D @types/node commander tsx
```

- update package.json
  - type module
  - scripts learn
- prepare scripts
  - start-learning
- prepare API keys in .env
  - ANTHROPIC_API_KEY
  - OPENAI_API_KEY

## Learning Vercel AI SDK

| No  | Title            | Command                           |
| --- | ---------------- | --------------------------------- |
| 01  | generate text    | `pnpm run learn vercel-ai-sdk 01` |
| 02  | stream text      | `pnpm run learn vercel-ai-sdk 02` |
| 03  | system prompt    | `pnpm run learn vercel-ai-sdk 03` |
| 04  | providers models | `pnpm run learn vercel-ai-sdk 04` |

