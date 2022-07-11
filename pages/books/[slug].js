import Image from 'next/image'
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: 'book' 
  })
  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps( params ) {
  const { items } = await client.getEntries({
    content_type: 'book',
    'fields.slug': params.slug
  })
  return {
    props: { book: items[0] }
  }
}

export default function BookDetails({ book }) {
  const { title, author, thumbnail, description } = book.fields
  return (
    <div>
      <div className="banner">
        <Image
          src={'https:' + thumbnail.fields.file.url}
          width= {thumbnail.fields.file.details.image.width}
          height= {thumbnail.fields.file.details.image.height}
        />
      </div>
      <h2>{title}</h2>
      <h5>Written by {author}</h5>
      <div className="detail">{documentToReactComponents(description)}</div>
    </div>
  )
}