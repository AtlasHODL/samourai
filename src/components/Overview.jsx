const Overview = () => {
  return (
    <section className='container mx-auto mt-8 mb-16' id='overview'>
      <div className='px-4 md:px-8'>
        <p className='font-mono text-xl sm:text-2xl lg:text-3xl leading-snug max-w-5xl'>
          In April 2024, two developers were arrested for building open-source,
          non-custodial Bitcoin software. Keonne Rodriguez and William Lonergan
          Hill <span className='text-red'>never held user funds</span>, yet in a
          historic first, they were charged as illegal money transmitters.
        </p>

        <p className='mt-6 font-mono text-lg sm:text-xl lg:text-2xl leading-snug max-w-5xl opacity-80'>
          This site is a public record of the case, the coverage, and the projects
          that continue the work.
        </p>
      </div>
    </section>
  )
}

export default Overview
