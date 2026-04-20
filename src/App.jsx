import './App.css'

import Donate from './components/Donate'
import Merch from './components/Merch'
import News from './components/News'
import Resources from './components/Resources'
import Timeline from './components/Timeline'

function App() {
  return (
    <div className='px-4 sm:px-16'>
      <Donate />
      <News />
      <Timeline />
      <Merch />
      <Resources />
    </ div>
  )
}

export default App
