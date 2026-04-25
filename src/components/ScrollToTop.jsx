import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router doesn't reset scroll on route change by default. Without this,
// clicking an in-app link from the bottom of one page lands you scrolled to
// the bottom of the next page. Mount once inside <BrowserRouter>; it watches
// pathname changes and snaps the window to (0,0).
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
