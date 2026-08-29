import ContentImage from './content-image'

type Photo = { src: string; alt: string }

export default function PhotoGrid({ photos }: { photos: readonly Photo[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map((photo) => (
        <figure
          key={photo.src}
          className="rounded-xl overflow-hidden shadow-lg bg-gray-100 aspect-[3/2]"
        >
          <ContentImage src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
        </figure>
      ))}
    </div>
  )
}
