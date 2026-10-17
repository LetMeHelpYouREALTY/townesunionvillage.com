import { existsSync } from 'fs'
import { join } from 'path'
import { markdownPages, renderLlmsTxt } from 'app/lib/markdown-pages'

export const dynamic = 'force-static'

function assertMarkdownRoutes() {
  for (const page of markdownPages) {
    const folder = page.path === '/' ? 'index.md' : `${page.path.slice(1)}.md`
    const routeFile = join(process.cwd(), 'app', folder, 'route.ts')
    if (!existsSync(routeFile)) {
      throw new Error(`Missing markdown route for ${page.path}: ${routeFile}`)
    }
  }
}

export function GET() {
  assertMarkdownRoutes()
  return new Response(renderLlmsTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Robots-Tag': 'noindex',
    },
  })
}
