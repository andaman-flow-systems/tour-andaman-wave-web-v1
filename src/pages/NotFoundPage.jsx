import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function NotFoundPage() {
  useDocumentTitle('Page Not Found')

  return (
    <section className="section container text-center" style={{ padding: '120px 20px' }}>
      <h1>404</h1>
      <p>Sorry, we couldn't find the page you're looking for.</p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: 16 }}>
        Back to Home
      </Link>
    </section>
  )
}
