import { notFound } from 'next/navigation'
import OfficeListingsBand from 'app/components/office-listings-band'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { siteUrl } from 'app/config/site'
import BreadcrumbJsonLd from 'app/components/breadcrumb-jsonld'
import { breadcrumbTrail } from 'app/lib/breadcrumbs'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${siteUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${siteUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
    <section className="max-w-3xl mx-auto px-4 pt-12">
      <BreadcrumbJsonLd
        items={breadcrumbTrail(post.metadata.title, `/blog/${post.slug}`, {
          name: 'Blog',
          path: '/blog',
        })}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${siteUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${siteUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Dr. Jan Duffy',
            },
          }),
        }}
      />
      <h1 className="title font-light text-4xl tracking-wide text-slate-900">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-3 mb-8 text-sm">
        <p className="text-sm text-amber-800 tracking-wide">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
    </section>
    <OfficeListingsBand />
    <section className="max-w-3xl mx-auto px-4 pb-16">
      <article className="prose prose-slate">
        <CustomMDX source={post.content} />
      </article>
    </section>
    </>
  )
}
