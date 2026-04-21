const Overview = () => {
  return (
    <section className='container mx-auto mt-8 mb-16' id='overview'>
      <div className='px-4 md:px-8'>
        {/* Intro */}
        <p className='font-mono text-xl sm:text-2xl lg:text-3xl leading-snug max-w-5xl'>
          In April 2024, two developers were arrested for building open-source,
          non-custodial Bitcoin software. Keonne Rodriguez and William Lonergan Hill{' '}
          <span className='text-red'>never held user funds.</span> They wrote code —
          tools that let people use Bitcoin privately without trusting a custodian.
        </p>

        <p className='mt-6 font-mono text-lg sm:text-xl lg:text-2xl leading-snug max-w-5xl opacity-80'>
          This site is a public record of the case, the coverage, and the projects
          that continue the work.
        </p>

        {/* Quick outline */}
        <div className='mt-12 pt-8 border-t-2'>
          <h3 className='mb-6 font-mono uppercase text-sm sm:text-base tracking-wider'>
            The case, briefly
          </h3>
          <ul className='space-y-4 font-mono text-lg sm:text-xl lg:text-2xl leading-snug'>
            <li className='flex gap-x-4'>
              <span className='text-red flex-shrink-0'>2024.04</span>
              <span>
                Arrests in Pennsylvania and Portugal. Samourai Wallet's infrastructure
                is seized.
              </span>
            </li>
            <li className='flex gap-x-4'>
              <span className='text-red flex-shrink-0'>2025</span>
              <span>
                Federal criminal proceedings in the Southern District of New York.
                Motions on dismissal, suppression, and the government's Brady obligations.
              </span>
            </li>
            <li className='flex gap-x-4'>
              <span className='text-red flex-shrink-0'>2025.11</span>
              <span>
                Rodriguez sentenced to five years; Hill sentenced to four.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Overview
