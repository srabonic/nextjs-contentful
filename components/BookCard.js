import Image from 'next/image'
import Link from 'next/link'

export default function BookCard({ book }) {
  const { title, slug, author, thumbnail, description } = book.fields
  return (
    <div className="book">
      <div className="featured">
        <Image 
          src={'https:' + thumbnail.fields.file.url}
          width= {thumbnail.fields.file.details.image.width}
          height= {thumbnail.fields.file.details.image.height}
        />
      </div>
      <h2>{title}</h2>
      <h5>Written by {author}</h5>
      <Link href={'/books/' + slug}><a>Read more</a></Link>
    </div>
  )
}