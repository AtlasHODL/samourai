import decoration1 from '../assets/images/Donate/decoration-1.png'
import decoration2 from '../assets/images/Donate/decoration-2.svg'

const PETITION_URL =
  'https://www.change.org/p/stand-up-for-freedom-pardon-the-innocent-coders-jailed-for-building-privacy-tools'
const DONATE_URL = 'https://billandkeonne.org/'

const Support = () => {
  return (
    <section className='container mx-auto mt-8 mb-14' id='support'>
      <a
        href={DONATE_URL}
        target='_blank'
        rel='noreferrer'
        className='block pb-6 mb-10 font-sans text-4xl sm:text-7xl md:text-8xl text-center text-red font-bold uppercase border-b-2 border-white transition-colors duration-300 ease-out hover:text-white'
      >
        Donate Here
      </a>

      <div className='px-4'>
        <div className='flex flex-wrap items-center justify-between gap-y-10 text-3xl xl:text-4xl text-red font-bold'>
          <div className='basis-12/12 lg:w-[18em] flex flex-col gap-5'>
            <a
              className='transition-colors duration-300 ease-out hover:text-white'
              href={DONATE_URL}
              target='_blank'
              rel='noreferrer'
            >
              donate at billandkeonne.org
            </a>
            <a
              className='text-2xl xl:text-3xl text-white transition-colors duration-300 ease-out hover:text-red'
              href={PETITION_URL}
              target='_blank'
              rel='noreferrer'
            >
              → sign the petition
            </a>
          </div>

          <img src={decoration1} alt='' className='hidden xl:block w-10' loading='lazy' />

          <div className='flex flex-col gap-6 lg:w-[14em]'>
            <p className='font-sans text-xl sm:text-2xl lg:text-3xl text-white leading-snug'>
              Contributions go to supporting developers, their families, and the
              efforts to put an end to this injustice.
            </p>
            <img src={decoration2} alt='' className='w-60 sm:w-80' loading='lazy' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Support
