import BookCard from '../components/BookCard'
import Link from 'next/link'
import { createClient } from 'contentful'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const res = await client.getEntries({ content_type: 'book' })

  return {
    props: {
      books: res.items
    }
  }
  
}

export default function Books({ books }) {
  console.log(books)
  return (
    <div className="book-list">
      {books.map(book => (
        <BookCard key={book.sys.id} book={book} />
      ))}
      <style jsx>{`
       .book-list {
         display: grid;
         grid-template-columns: 1fr 1fr 1fr;
         grid-gap: 60px;
       }
      `}</style>
    </div>
  )
}