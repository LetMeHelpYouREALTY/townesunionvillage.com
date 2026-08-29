import Image from 'next/image'

type AgentPhotoProps = {
  size?: number
  className?: string
  priority?: boolean
}

export default function AgentPhoto({ size = 80, className = '', priority = false }: AgentPhotoProps) {
  return (
    <Image
      src="/images/dr-jan-duffy.jpg"
      alt="Dr. Jan Duffy, REALTOR, Berkshire Hathaway HomeServices Nevada Properties"
      width={size}
      height={size}
      priority={priority}
      className={`rounded-full object-cover ${className}`.trim()}
    />
  )
}
