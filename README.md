# setup

```bash
pnpm init
# deps
pnpm add ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/openai-compatible hono @hono/node-server zod
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
| 05  | messages         | `pnpm run learn vercel-ai-sdk 05` |
| 06  | self host model  | `pnpm run learn vercel-ai-sdk 06` |
| 07  | generate object  | `pnpm run learn vercel-ai-sdk 07` |
| 08  | stream object    | `pnpm run learn vercel-ai-sdk 08` |
| 09  | output enum      | `pnpm run learn vercel-ai-sdk 09` |

