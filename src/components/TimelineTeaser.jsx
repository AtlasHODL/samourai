import { Link } from 'react-router-dom'
import { timeline } from '../data/timeline'

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

const formatDate = (iso) => {
  const [y, m, d] = iso.split('-')
  return `${MONTHS[parseInt(m, 10) - 1]} ${parseInt(d, 10)}, ${y}`
}

// Curated teaser — four inflection points across the case arc.
// Editorially chosen rather than "most recent" so the teaser reads as a story.
const teaserDates = ['2024-04-24', '2025-05-29', '2025-07-23', '2025-11-20']

const TimelineTeaser = () => {
  const entries = teaserDates
    .map((d) => timeline.find((e) => e.date === d))
    .filter(Boolean)

  return (
    <section className='container mx-auto mt-8 mb-16' id='timeline-teaser'>
      <div className='pb-6 mb-10 border-b-2 border-white flex flex-wrap items-baseline justify-between gap-y-2'>
        <h2 className='font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-red font-bold uppercase'>
          Timeline
        </h2>
        <Link
          to='/court-documents'
          className='font-mono uppercase text-sm sm:text-base lg:text-lg tracking-wider transition-colors duration-300 ease-out hover:text-red'
        >
          Full timeline & court documents →
        </Link>
      </div>

      <ol className='px-4 md:px-8'>
        {entries.map((entry, i) => {
          const firstLink = entry.link || entry.documents?.[0]?.link
          const TitleTag = firstLink ? 'a' : 'div'
          const titleProps = firstLink
            ? {
                href: firstLink,
                target: '_blank',
                rel: 'noreferrer',
                className:
                  'block group transition-colors duration-300 ease-out hover:text-red',
              }
            : { className: 'block' }
          return (
            <li
              key={entry.date + i}
              className='grid grid-cols-12 gap-x-6 gap-y-2 py-6 border-b-2'
            >
              <div className='col-span-12 md:col-span-3'>
                <time
                  dateTime={entry.date}
                  className='font-mono font-bold text-lg sm:text-xl text-red uppercase'
                >
                  {formatDate(entry.date)}
                </time>
              </div>
              <div className='col-span-12 md:col-span-9'>
                <TitleTag {...titleProps}>
                  <h3 className='font-sans font-bold text-xl sm:text-2xl lg:text-3xl leading-tight'>
                    {entry.title}
                  </h3>
                </TitleTag>
                {entry.summary && (
                  <p className='mt-2 font-mono text-base sm:text-lg leading-snug opacity-90'>
                    {entry.summary.length > 220
                      ? entry.summary.slice(0, 220).trim() + '…'
                      : entry.summary}
                  </p>
                )}
              </div>
            </li>
          )
        })}
      </ol>

      <div className='mt-8 text-center'>
        <Link
          to='/court-documents'
          className='inline-block font-mono uppercase text-base sm:text-lg tracking-wider transition-colors duration-300 ease-out hover:text-red'
        >
          <span className='text-red'>→</span> See the full timeline
        </Link>
      </div>
    </section>
  )
}

export default TimelineTeaser
