import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/court-documents', label: 'Court Documents' },
  { to: '/news', label: 'News' },
  { to: '/resources', label: 'Resources' },
]

const Nav = () => {
  return (
    <nav className='container mx-auto pt-5 pb-4 mb-6 border-b-2 border-white'>
      <NavLink
        to='/'
        className='block mb-4 font-stranger font-extralight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red leading-none transition-colors duration-300 ease-out hover:text-white'
      >
        #FreeSamourai
      </NavLink>
      <ul className='flex flex-wrap gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-3 font-sans font-bold uppercase text-base sm:text-lg lg:text-xl'>
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `pb-1 border-b-2 transition-colors duration-300 ease-out hover:text-red ${
                  isActive ? 'text-red border-red' : 'text-white border-transparent'
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
