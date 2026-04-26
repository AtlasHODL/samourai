import { Link } from 'react-router-dom'

const ComingSoonPage = () => {
  return (
    <section className='container mx-auto flex flex-col items-center justify-center text-center py-24 md:py-40 min-h-[60vh]'>
      <p className='font-mono uppercase tracking-widest text-sm sm:text-base text-white/60 mb-6'>
        Stand by
      </p>
      <h1 className='font-stranger font-extralight text-6xl sm:text-8xl md:text-9xl text-red leading-none'>
        Coming Soon
      </h1>
      <p className='mt-10 max-w-xl font-mono text-base sm:text-lg text-white/80'>
        The team is shipping. This destination will be live shortly.
      </p>
      <Link
        to='/'
        className='mt-12 inline-block px-6 py-3 border-2 border-white font-mono text-sm sm:text-base uppercase text-white hover:bg-white hover:text-black transition-colors duration-300 ease-out'
      >
        ← Back to home
      </Link>
    </section>
  )
}

export default ComingSoonPage
