import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import ResourcesPage from './pages/ResourcesPage'
import CourtDocumentsPage from './pages/CourtDocumentsPage'
import ComingSoonPage from './pages/ComingSoonPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className='px-4 sm:px-16'>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/resources' element={<ResourcesPage />} />
          <Route path='/court-documents' element={<CourtDocumentsPage />} />
          <Route path='/coming-soon' element={<ComingSoonPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
