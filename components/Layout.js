import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>My Own</span>
              <span>Library</span>
            </h1>
            <h2>World of knowledge</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2022 me :)</p>
      </footer>
    </div>
  )
}