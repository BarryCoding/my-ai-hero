# setup

```bash
pnpm init
# deps
pnpm add ai @ai-sdk/anthropic
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

## Learning Vercel AI SDK

| No  | Title         | Command                           |
| --- | ------------- | --------------------------------- |
| 01  | generate text | `pnpm run learn vercel-ai-sdk 01` |
| 02  | stream text   | `pnpm run learn vercel-ai-sdk 02` |

