import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section container text-center" style={{ padding: '120px 20px' }}>
      <h1>404</h1>
      <p>Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
      <Link href="/" className="btn btn-primary" style={{ marginTop: 16 }}>
        Back to Home
      </Link>
    </section>
  )
}
