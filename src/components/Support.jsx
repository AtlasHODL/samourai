import decoration1 from '../assets/images/Donate/decoration-1.png'
import decoration2 from '../assets/images/Donate/decoration-2.svg'

const PETITION_URL =
  'https://www.change.org/p/stand-up-for-freedom-pardon-the-innocent-coders-jailed-for-building-privacy-tools'
const DONATE_URL = 'https://billandkeonne.org/'

const Support = () => {
  return (
    <section className='container mx-auto my-16' id='support'>
      {/* Giant primary CTA — the headline IS the donate link */}
      <a
        href={DONATE_URL}
        target='_blank'
        rel='noreferrer'
        className='block group pb-6 border-b-2 border-white'
      >
        <div className='flex items-center justify-center gap-x-4 sm:gap-x-8'>
          <img
            src={decoration1}
            alt=''
            className='hidden sm:block h-12 md:h-16 lg:h-20 opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100'
            loading='lazy'
          />
          <h2 className='text-center font-sans font-bold uppercase text-5xl sm:text-7xl md:text-8xl text-red leading-none transition-colors duration-300 ease-out group-hover:text-white'>
            Donate Here
          </h2>
          <img
            src={decoration1}
            alt=''
            className='hidden sm:block h-12 md:h-16 lg:h-20 opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100'
            loading='lazy'
          />
        </div>
        <p className='mt-4 text-center font-mono uppercase tracking-wider text-sm sm:text-base lg:text-lg opacity-70 transition-opacity duration-300 ease-out group-hover:opacity-100'>
          billandkeonne.org ↗
        </p>
      </a>

      {/* Body */}
      <div className='mt-12 px-4 md:px-8 grid gap-10 md:gap-14 md:grid-cols-12 items-center'>
        {/* Microcopy */}
        <p className='md:col-span-7 font-mono text-lg sm:text-xl lg:text-2xl leading-snug'>
          Contributions go to supporting developers, their families, and the{' '}
          <span className='text-red'>
            efforts to put an end to this injustice
          </span>
          .
        </p>

        {/* Secondary CTA — petition */}
        <a
          href={PETITION_URL}
          target='_blank'
          rel='noreferrer'
          className='md:col-span-5 group flex items-center justify-between gap-x-6 p-5 sm:p-6 border-2 border-white transition-colors duration-300 ease-out hover:border-red'
        >
          <div className='flex flex-col gap-y-1'>
            <span className='font-mono uppercase tracking-wider text-xs sm:text-sm opacity-60'>
              Also
            </span>
            <span className='font-sans font-bold uppercase text-xl sm:text-2xl lg:text-3xl leading-tight transition-colors duration-300 ease-out group-hover:text-red'>
              Sign the petition
            </span>
            <span className='font-mono text-xs sm:text-sm opacity-60 mt-1'>
              change.org
            </span>
          </div>
          <span className='text-red text-3xl sm:text-4xl leading-none transition-transform duration-300 ease-out group-hover:translate-x-1'>
            →
          </span>
        </a>
      </div>

      {/* Decorative bar — keeps the site's existing visual character */}
      <div className='mt-12 flex justify-center opacity-80'>
        <img src={decoration2} alt='' className='w-60 sm:w-80' loading='lazy' />
      </div>
    </section>
  )
}

export default Support
