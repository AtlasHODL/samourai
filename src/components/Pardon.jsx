const PETITION_URL =
  'https://www.change.org/p/stand-up-for-freedom-pardon-the-innocent-coders-jailed-for-building-privacy-tools'

const Pardon = () => {
  return (
    <section className='container mx-auto mt-8 mb-16' id='pardon'>
      <div className='pb-6 mb-10 border-b-2 border-white'>
        <h2 className='font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-red font-bold uppercase leading-tight text-balance'>
          The pardon
        </h2>
      </div>

      <div className='px-4 md:px-8 grid gap-10 md:grid-cols-3 md:gap-x-12'>
        <div className='md:col-span-2'>
          <p className='font-mono text-lg sm:text-xl lg:text-2xl leading-snug'>
            The President of the United States can issue pardons to convicted
            persons, and historically has done so to free Americans from unjust
            prison situations. We are asking for a{' '}
            <span className='text-red'>full pardon for Bill and Keonne</span>.
          </p>
          <p className='mt-5 font-mono text-base sm:text-lg lg:text-xl leading-snug opacity-90'>
            The prosecution criminalized the writing and publishing of
            non-custodial Bitcoin software. A pardon corrects that and protects
            the future of open-source development in the United States.
          </p>
        </div>

        <div className='flex flex-col items-start gap-4 md:border-l-2 md:border-white md:ps-8'>
          <a
            href={PETITION_URL}
            target='_blank'
            rel='noreferrer'
            className='font-sans font-bold uppercase text-2xl sm:text-3xl text-red transition-colors duration-300 ease-out hover:text-white'
          >
            Sign the petition →
          </a>
          <p className='font-mono text-sm sm:text-base opacity-70'>
            Hosted on Change.org
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pardon
