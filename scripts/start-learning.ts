import { execSync } from 'child_process'
import { Command } from 'commander'
import { existsSync } from 'fs'
import { readdir } from 'fs/promises'
import path from 'path'

const program = new Command()

const LEARNING_PATHS = {
  v: 'vercel-ai-sdk',
}

type LearningKeys = keyof typeof LEARNING_PATHS

const learningFolderPath = path.resolve(process.cwd(), './learning')

program
  .arguments('<learningKeyOrPath> <chapterNumber>')
  .action(async (learningKeyOrPath: string, chapterNumber: string) => {
    const possibleLearningDirectories = [
      learningKeyOrPath,
      LEARNING_PATHS[learningKeyOrPath as LearningKeys] || 'NOT_FOUND',
    ]

    const learningDirectory = possibleLearningDirectories
      .map((dir) => path.resolve(learningFolderPath, dir))
      .find((path) => existsSync(path))

    if (!learningDirectory) {
      console.error(`Directory not found in learning folder: ${learningKeyOrPath}`)
      process.exit(1)
    }

    const chapters = await readdir(learningDirectory)

    const chapterToRun = chapters.find((chapter) => {
      return chapter.startsWith(chapterNumber)
    })

    if (!chapterToRun) {
      console.error(`Could not find chapter ${chapterNumber} in ${learningDirectory}. \nTry using 01 instead of 1?`)
      process.exit(1)
    }

    const destinationFilePath = path.resolve(learningDirectory, chapterToRun, 'index.ts')

    if (!existsSync(destinationFilePath)) {
      console.error(`Could not find index.ts file for chapter ${chapterNumber} in ${learningDirectory}.`)
      process.exit(1)
    }

    try {
      execSync(`pnpm tsx --env-file=.env ${destinationFilePath}`, { stdio: 'inherit' })
    } catch (e) {
      console.error(e)
      process.exit(1)
    }
  })

program.parse(process.argv)
