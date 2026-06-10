import { useEffect } from 'react'

const SITE_NAME = 'Andaman Wave Tours | Phuket Tours & Activities'

export default function useDocumentTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | Andaman Wave Tours` : SITE_NAME

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)
    }
  }, [title, description])
}
