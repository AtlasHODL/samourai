import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/news', label: 'News' },
  { to: '/resources', label: 'Resources' },
  { to: '/court-documents', label: 'Court Documents' },
]

const Nav = () => {
  return (
    <nav className='container mx-auto py-4 mb-6 border-b-2 border-white'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-4'>
        <NavLink
          to='/'
          className='font-sans font-bold uppercase text-3xl sm:text-4xl text-red transition-colors duration-300 ease-out hover:text-white'
        >
          Free<span className='text-white transition-colors duration-300 ease-out group-hover:text-red'>SW</span>
        </NavLink>
        <ul className='flex flex-wrap gap-x-6 gap-y-2 font-mono uppercase text-sm sm:text-base lg:text-lg'>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `transition-colors duration-300 ease-out hover:text-red ${
                    isActive ? 'text-red' : 'text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
