const PrisonLetters = () => {
  return (
    <section className='container mx-auto mt-8 mb-16' id='prison-letters'>
      <div className='pb-6 mb-10 border-b-2 border-white'>
        <h2 className='font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-red font-bold uppercase'>
          Where to send prison letters
        </h2>
      </div>

      <div className='px-4 md:px-8 grid gap-10 md:grid-cols-2 md:gap-x-12'>
        {/* Keonne */}
        <div>
          <p className='mb-4 font-sans font-bold text-2xl sm:text-3xl'>
            Keonne Rodriguez
          </p>
          <div className='p-5 border-2 border-white bg-black'>
            <pre className='font-mono text-base sm:text-lg lg:text-xl leading-snug whitespace-pre-wrap'>
{`Keonne Rodriguez
11404-511
FPC Morgantown
FEDERAL PRISON CAMP
P.O. BOX 1000
MORGANTOWN, WV 26507`}
            </pre>
          </div>
          <div className='mt-5 space-y-2 font-mono text-sm sm:text-base opacity-80'>
            <p>• Letters only — maximum 3 pages.</p>
            <p>• No packages.</p>
            <p>• Books and magazines only from publishers or retailers.</p>
            <p>• Full return address required on the envelope.</p>
          </div>
        </div>

        {/* Bill */}
        <div>
          <p className='mb-4 font-sans font-bold text-2xl sm:text-3xl'>
            William Lonergan Hill
          </p>
          <div className='p-5 border-2 border-white border-dashed'>
            <p className='font-mono text-base sm:text-lg lg:text-xl leading-snug italic opacity-80'>
              Bill does not wish to receive correspondence at this time.
            </p>
          </div>
          <p className='mt-5 font-mono text-sm sm:text-base opacity-60 leading-snug'>
            Please respect this preference. For updates on contact status, see{' '}
            <a
              href='https://billandkeonne.org/'
              target='_blank'
              rel='noreferrer'
              className='underline underline-offset-2 transition-colors duration-300 ease-out hover:text-red'
            >
              billandkeonne.org
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

export default PrisonLetters
