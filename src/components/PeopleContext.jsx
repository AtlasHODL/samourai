import jumbotron from '../assets/images/People/jumbotron.jpg'

const PeopleContext = () => {
  return (
    <section className='container mx-auto mt-8 mb-16' id='people'>
      <div className='pb-6 mb-10 border-b-2 border-white'>
        <h2 className='font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-red font-bold uppercase'>
          Meet Bill and Keonne
        </h2>
        <p className='mt-3 font-mono text-base sm:text-lg lg:text-xl opacity-80 uppercase tracking-wider'>
          Real people, real lives
        </p>
      </div>

      {/* Banner photo */}
      <div className='px-4 md:px-8 mb-10'>
        <div className='border-2 border-white overflow-hidden'>
          <img
            src={jumbotron}
            alt='William Lonergan Hill (Bill) and Keonne Rodriguez'
            className='w-full h-auto'
            loading='lazy'
          />
        </div>
        <p className='mt-3 font-mono text-xs sm:text-sm opacity-60'>
          Photo: Bill (left) and Keonne (right). Source: billandkeonne.org.
        </p>
      </div>

      {/* Bios */}
      <div className='px-4 md:px-8 grid gap-8 md:grid-cols-2'>
        <div>
          <p className='font-sans font-bold text-2xl sm:text-3xl lg:text-4xl'>
            William Lonergan Hill
          </p>
          <p className='mt-1 mb-4 font-mono text-base sm:text-lg text-red'>
            CTO, Samourai Wallet · age 67
          </p>
          <p className='font-mono text-base sm:text-lg lg:text-xl leading-snug'>
            Software developer and co-founder of Samourai Wallet. A career spent
            building non-custodial tools and privacy-preserving software.
          </p>
        </div>
        <div>
          <p className='font-sans font-bold text-2xl sm:text-3xl lg:text-4xl'>
            Keonne Rodriguez
          </p>
          <p className='mt-1 mb-4 font-mono text-base sm:text-lg text-red'>
            CEO, Samourai Wallet · age 37 · Florida
          </p>
          <p className='font-mono text-base sm:text-lg lg:text-xl leading-snug'>
            American developer and co-founder of Samourai in 2015. A family-focused
            builder behind a decade of open-source Bitcoin software.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PeopleContext
