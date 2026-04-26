import { Link } from 'react-router-dom'

// Links marked `to: '/coming-soon'` are placeholders — team will swap with
// real destinations (Onion mirror, V0, V1) when those are ready.
const links = [
  { label: 'Onion', to: '/coming-soon' },
  { label: 'Donate', href: 'https://billandkeonne.org/' },
  {
    label: 'Sign Petition',
    href: 'https://www.change.org/p/stand-up-for-freedom-pardon-the-innocent-coders-jailed-for-building-privacy-tools',
  },
  { label: 'X', href: 'https://x.com/SamouraiWallet' },
  { label: 'V0', to: '/coming-soon' },
  { label: 'V1', to: '/coming-soon' },
]

const linkClass =
  'pb-1 border-b-2 border-transparent text-white hover:text-red hover:border-red transition-colors duration-300 ease-out'

const Footer = () => {
  return (
    <footer className='container mx-auto mt-20 pt-8 pb-10 border-t-2 border-white'>
      <ul className='flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-3 font-mono font-bold uppercase text-xs sm:text-sm lg:text-base tracking-wider'>
        {links.map((link) => (
          <li key={link.label}>
            {link.to ? (
              <Link to={link.to} className={linkClass}>
                {link.label}
              </Link>
            ) : (
              <a
                href={link.href}
                target='_blank'
                rel='noreferrer'
                className={linkClass}
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
