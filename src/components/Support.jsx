import decoration1 from '../assets/images/Donate/decoration-1.png'
import decoration2 from '../assets/images/Donate/decoration-2.svg'

const Support = () => {
  return (
    <section className='container mx-auto mt-8 mb-14' id='support'>
      <a
        href='https://p2prights.org/donate.html'
        target='_blank'
        rel='noreferrer'
        className='block pb-6 mb-10 font-sans text-4xl sm:text-7xl md:text-8xl text-center text-red font-bold uppercase border-b-2 border-white transition-colors duration-300 ease-out hover:text-white'
      >
        Support
      </a>

      <div className='px-4'>
        <div className='flex flex-wrap items-center justify-between gap-y-8 text-3xl xl:text-4xl text-red font-bold'>
          <a
            className='basis-12/12 lg:w-[16.1em] transition-colors duration-300 ease-out hover:text-white'
            href='https://p2prights.org/donate.html'
            target='_blank'
            rel='noreferrer'
          >
            support the cause via p2prights
          </a>

          <img src={decoration1} alt='' className='hidden xl:block w-10' loading='lazy' />

          <div className='flex flex-col gap-6 lg:w-[12em]'>
            <p className='font-sans text-xl sm:text-2xl lg:text-3xl text-white leading-snug'>
              Contributions go to the peer-to-peer rights nonprofit supporting developers,
              privacy tools, and the broader cause.
            </p>
            <img src={decoration2} alt='' className='w-60 sm:w-80' loading='lazy' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Support
