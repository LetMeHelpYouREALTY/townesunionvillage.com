import type { BreadcrumbItem } from 'app/components/breadcrumb-jsonld'

export function breadcrumbTrail(
  pageName: string,
  pagePath: string,
  parent?: BreadcrumbItem
): BreadcrumbItem[] {
  const trail: BreadcrumbItem[] = [{ name: 'Home', path: '/' }]
  if (parent) {
    trail.push(parent)
  }
  trail.push({ name: pageName, path: pagePath })
  return trail
}
