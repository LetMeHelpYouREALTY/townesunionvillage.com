import { markdownResponse } from 'app/lib/markdown-pages'

export const dynamic = 'force-static'

export function GET() {
  return markdownResponse('/')
}
