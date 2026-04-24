const DONATE_URL = 'https://billandkeonne.org/'

const LegalDebt = () => {
  return (
    <section className='container mx-auto mt-8 mb-16' id='legal-debt'>
      <div className='pb-6 mb-10 border-b-2 border-white'>
        <h2 className='font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-red font-bold uppercase leading-tight text-balance'>
          Overwhelming debt
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

          <p className='pt-5 border-t-2 border-white font-mono text-base sm:text-lg lg:text-xl leading-snug'>
            Their families are carrying the weight of the case while they are in
            custody. Contributions go directly toward legal costs, day-to-day
            expenses, and the work to bring them home.
          </p>
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
