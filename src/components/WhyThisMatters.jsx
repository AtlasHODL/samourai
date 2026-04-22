const WhyThisMatters = () => {
  return (
    <section className='container mx-auto mt-8 mb-16' id='why-this-matters'>
      <div className='pb-6 mb-10 border-b-2 border-white'>
        <h2 className='font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-red font-bold uppercase leading-tight text-balance'>
          Why this matters
        </h2>
      </div>

      <div className='px-4 md:px-8 grid gap-y-10 md:grid-cols-3 md:gap-x-12'>
        <div className='md:col-span-3'>
          <p className='font-mono text-lg sm:text-xl lg:text-2xl leading-snug max-w-5xl'>
            The case turns on a question with consequences beyond two individuals:
            whether publishing open-source, non-custodial Bitcoin software —
            software where developers never hold user funds — can be prosecuted
            as operating an unlicensed money-transmitting business under federal law.
          </p>
        </div>

        <div>
          <h3 className='mb-4 font-sans font-bold uppercase text-xl sm:text-2xl text-red'>
            For developers
          </h3>
          <p className='font-mono text-base sm:text-lg lg:text-xl leading-snug'>
            The prosecution reshapes the calculus of publishing privacy tools in
            public. Code that was written, reviewed, and released openly is now
            the basis of a federal conviction.
          </p>
        </div>

        <div>
          <h3 className='mb-4 font-sans font-bold uppercase text-xl sm:text-2xl text-red'>
            For users
          </h3>
          <p className='font-mono text-base sm:text-lg lg:text-xl leading-snug'>
            The outcome narrows the set of software available to keep financial
            activity private — and raises the bar for any future developer
            deciding whether to ship similar tools.
          </p>
        </div>

        <div>
          <h3 className='mb-4 font-sans font-bold uppercase text-xl sm:text-2xl text-red'>
            For the record
          </h3>
          <p className='font-mono text-base sm:text-lg lg:text-xl leading-snug'>
            The full procedural history is preserved on the{' '}
            <a
              href='/court-documents'
              className='underline underline-offset-2 hover:text-red transition-colors'
            >
              Court Documents
            </a>{' '}
            page, assembled from the public docket.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyThisMatters
