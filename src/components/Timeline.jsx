import { useMemo, useState } from 'react'
import { timeline } from '../data/timeline'

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

const formatDate = (iso) => {
  const [y, m, d] = iso.split('-')
  return `${MONTHS[parseInt(m, 10) - 1]} ${parseInt(d, 10)}, ${y}`
}

const YEARS = Array.from(
  new Set(timeline.map((e) => e.date.slice(0, 4)))
).sort()

// Reusable pill/toggle button — matches the nav's active-underline pattern
const Toggle = ({ active, onClick, children }) => (
  <button
    type='button'
    onClick={onClick}
    className={`pb-1 border-b-2 font-mono uppercase text-xs sm:text-sm tracking-wider transition-colors duration-300 ease-out hover:text-red ${
      active ? 'text-red border-red' : 'text-white border-transparent'
    }`}
  >
    {children}
  </button>
)

const Timeline = () => {
  const [sortOrder, setSortOrder] = useState('asc') // 'asc' oldest→newest, 'desc' newest→oldest
  const [yearFilter, setYearFilter] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    let items = timeline

    if (yearFilter !== 'all') {
      items = items.filter((e) => e.date.startsWith(yearFilter))
    }

    const q = query.trim().toLowerCase()
    if (q) {
      items = items.filter((e) => {
        const parts = [
          e.title,
          e.summary,
          e.significance,
          ...(e.documents?.map((d) => d.title) ?? []),
        ]
        return parts.filter(Boolean).join(' ').toLowerCase().includes(q)
      })
    }

    return [...items].sort((a, b) =>
      sortOrder === 'asc' ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)
    )
  }, [sortOrder, yearFilter, query])

  const filtersActive = yearFilter !== 'all' || query.trim() !== ''
  const clearFilters = () => {
    setYearFilter('all')
    setQuery('')
  }

  return (
    <section className='container mx-auto mt-14 mb-8' id='timeline'>
      {/* Heading */}
      <div className='pb-6 mb-10 border-b-2 border-white'>
        <h2 className='font-sans text-4xl sm:text-7xl md:text-8xl text-center text-red font-bold uppercase leading-tight text-balance'>
          Timeline
        </h2>
        <p className='mt-6 font-mono text-lg sm:text-xl lg:text-2xl text-center'>
          Public documents from{' '}
          <span className='text-red'>United States v. Rodriguez and Hill</span>{' '}
          (SDNY 24-cr-82), in chronological order.
        </p>
      </div>

      {/* Filter bar */}
      <div className='px-4 md:px-12 mb-10'>
        <div className='py-4 border-y-2 border-white flex flex-wrap items-center gap-x-8 gap-y-4'>
          {/* Sort */}
          <div className='flex items-center gap-x-3'>
            <span className='font-mono uppercase text-xs opacity-60 tracking-wider'>
              Sort
            </span>
            <Toggle
              active={sortOrder === 'asc'}
              onClick={() => setSortOrder('asc')}
            >
              Oldest first
            </Toggle>
            <Toggle
              active={sortOrder === 'desc'}
              onClick={() => setSortOrder('desc')}
            >
              Newest first
            </Toggle>
          </div>

          {/* Year */}
          <div className='flex items-center gap-x-3'>
            <span className='font-mono uppercase text-xs opacity-60 tracking-wider'>
              Year
            </span>
            <Toggle
              active={yearFilter === 'all'}
              onClick={() => setYearFilter('all')}
            >
              All
            </Toggle>
            {YEARS.map((y) => (
              <Toggle
                key={y}
                active={yearFilter === y}
                onClick={() => setYearFilter(y)}
              >
                {y}
              </Toggle>
            ))}
          </div>

          {/* Search */}
          <div className='flex items-center gap-x-3 flex-1 min-w-[240px]'>
            <label
              htmlFor='timeline-search'
              className='font-mono uppercase text-xs opacity-60 tracking-wider'
            >
              Search
            </label>
            <input
              id='timeline-search'
              type='text'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='title or content…'
              style={{ colorScheme: 'dark' }}
              className='flex-1 bg-black text-white caret-red border-b-2 border-white focus:border-red outline-none font-mono text-sm sm:text-base py-1 placeholder:text-white placeholder:opacity-40'
            />
          </div>
        </div>

        {/* Status line */}
        <div className='mt-4 flex flex-wrap items-center justify-between gap-y-2 font-mono text-sm opacity-70'>
          <p>
            Showing <span className='text-red'>{filtered.length}</span> of {timeline.length} entries
          </p>
          {filtersActive && (
            <button
              type='button'
              onClick={clearFilters}
              className='uppercase tracking-wider transition-colors duration-300 ease-out hover:text-red'
            >
              × Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Entries */}
      {filtered.length === 0 ? (
        <div className='mx-4 md:mx-12 p-10 border-2 border-white text-center font-mono opacity-70'>
          No entries match the current filters.
        </div>
      ) : (
        <ol className='px-4 md:px-12'>
          {filtered.map((entry, i) => (
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
      )}
    </section>
  )
}

export default Timeline
