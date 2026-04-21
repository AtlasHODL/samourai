import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import ResourcesPage from './pages/ResourcesPage'
import CourtDocumentsPage from './pages/CourtDocumentsPage'

function App() {
  return (
    <BrowserRouter>
      <div className='px-4 sm:px-16'>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/resources' element={<ResourcesPage />} />
          <Route path='/court-documents' element={<CourtDocumentsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
