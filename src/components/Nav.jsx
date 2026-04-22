import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/news', label: 'News' },
  { to: '/resources', label: 'Resources' },
  { to: '/court-documents', label: 'Court Documents' },
]

const Nav = () => {
  return (
    <nav className='container mx-auto py-5 mb-6 border-b-2 border-white'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-5'>
        <NavLink
          to='/'
          className='font-stranger font-extralight text-5xl sm:text-6xl md:text-7xl text-red leading-none transition-colors duration-300 ease-out hover:text-white'
        >
          #FreeSamourai
        </NavLink>
        <ul className='flex flex-wrap gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-3 font-sans font-bold uppercase text-lg sm:text-xl lg:text-2xl'>
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
      </div>
    </nav>
  )
}

export default Nav
