import Image from 'next/image'

type ContentImageProps = {
  src: string
  alt: string
  priority?: boolean
  className?: string
  sizes?: string
}

export default function ContentImage({
  src,
  alt,
  priority = false,
  className = 'w-full h-full object-cover',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px',
}: ContentImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1536}
      height={1024}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  )
}
