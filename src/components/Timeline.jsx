import { timeline } from '../data/timeline'

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

const formatDate = (iso) => {
  const [y, m, d] = iso.split('-')
  return `${MONTHS[parseInt(m, 10) - 1]} ${parseInt(d, 10)}, ${y}`
}

const Timeline = () => {
  return (
    <section className='container mx-auto mt-14 mb-8' id='timeline'>
      {/* Heading */}
      <div className='pb-6 mb-10 border-b-2 border-white'>
        <h2 className='font-sans text-4xl sm:text-7xl md:text-8xl text-center text-red font-bold uppercase'>
          Timeline
        </h2>
        <p className='mt-6 font-mono text-lg sm:text-xl lg:text-2xl text-center'>
          Public documents from <span className='text-red'>United States v. Rodriguez and Hill</span> (SDNY 24-cr-82),
          in chronological order.
        </p>
      </div>

      {/* Entries */}
      <ol className='px-4 md:px-12'>
        {timeline.map((entry, i) => (
          <li
            key={`${entry.date}-${i}`}
            className='grid grid-cols-12 gap-x-6 gap-y-4 py-10 border-b-2'
          >
            {/* Date column */}
            <div className='col-span-12 md:col-span-3'>
              <time
                dateTime={entry.date}
                className='block font-mono font-bold text-xl sm:text-2xl text-red uppercase'
              >
                {formatDate(entry.date)}
              </time>
            </div>

            {/* Content column */}
            <div className='col-span-12 md:col-span-9 space-y-5'>
              <h3 className='font-sans font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight'>
                {entry.title}
              </h3>

              {entry.summary && (
                <p className='font-mono text-lg sm:text-xl lg:text-2xl leading-snug'>
                  {entry.summary}
                </p>
              )}

              {entry.significance && (
                <p className='ps-4 border-l-4 border-red font-mono text-base sm:text-lg lg:text-xl leading-snug'>
                  {entry.significance}
                </p>
              )}

              {/* Links */}
              {entry.documents ? (
                <ul className='pt-2 space-y-2'>
                  {entry.documents.map((doc, j) => (
                    <li key={j}>
                      <a
                        href={doc.link}
                        target='_blank'
                        rel='noreferrer'
                        className='block font-mono text-base sm:text-lg lg:text-xl transition-colors duration-300 ease-out hover:text-red'
                      >
                        <span className='text-red'>→</span> {doc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : entry.link ? (
                <a
                  href={entry.link}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-block pt-2 font-mono text-base sm:text-lg lg:text-xl transition-colors duration-300 ease-out hover:text-red'
                >
                  <span className='text-red'>→</span> View source document
                </a>
              ) : (
                <p className='pt-2 font-mono text-base sm:text-lg italic opacity-70'>
                  No public document on the docket.
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Timeline
