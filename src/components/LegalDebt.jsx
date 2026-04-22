const DONATE_URL = 'https://billandkeonne.org/'

const LegalDebt = () => {
  return (
    <section className='container mx-auto mt-8 mb-16' id='legal-debt'>
      <div className='pb-6 mb-10 border-b-2 border-white'>
        <h2 className='font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-red font-bold uppercase'>
          Overwhelming legal debt
        </h2>
      </div>

      <div className='px-4 md:px-8 grid gap-10 md:grid-cols-3 md:gap-x-12'>
        <div className='md:col-span-2 space-y-5'>
          <p className='font-mono text-lg sm:text-xl lg:text-2xl leading-snug'>
            Bill and Keonne face staggering financial consequences: massive legal
            expenses and a <span className='text-red'>$250,000 fine each</span>{' '}
            that accrues interest while they are incarcerated and unable to earn
            income.
          </p>

          <blockquote className='pt-5 border-t-2 border-white'>
            <p className='font-mono text-base sm:text-lg lg:text-xl leading-snug italic'>
              "As a wife, watching my husband fight… Your generosity means the
              world to me."
            </p>
            <p className='mt-2 font-mono text-xs sm:text-sm opacity-60'>
              — Keonne's wife (via billandkeonne.org)
            </p>
          </blockquote>

          <blockquote className='pt-5 border-t-2 border-white'>
            <p className='font-mono text-base sm:text-lg lg:text-xl leading-snug italic'>
              "My husband and I stay in the fight. The fight stays within us."
            </p>
            <p className='mt-2 font-mono text-xs sm:text-sm opacity-60'>
              — Bill's wife (via billandkeonne.org)
            </p>
          </blockquote>
        </div>

        <div className='md:border-l-2 md:border-white md:ps-8 flex flex-col items-start gap-4'>
          <a
            href={DONATE_URL}
            target='_blank'
            rel='noreferrer'
            className='font-sans font-bold uppercase text-2xl sm:text-3xl text-red transition-colors duration-300 ease-out hover:text-white'
          >
            Donate →
          </a>
          <p className='font-mono text-sm sm:text-base opacity-70'>
            Contributions at billandkeonne.org support developers, their families,
            and the fight to end this injustice.
          </p>
        </div>
      </div>
    </section>
  )
}

export default LegalDebt
