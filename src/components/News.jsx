import { useMemo, useState } from 'react'

import { news, publicationOrder } from '../data/news'

import decoration1 from '../assets/images/News/decoration-1.svg'
import decoration2 from '../assets/images/News/decoration-2.svg'
import decoration3 from '../assets/images/News/decoration-3.svg'
import decoration4 from '../assets/images/News/decoration-4.svg'
import decoration5 from '../assets/images/News/decoration-5.svg'

import DOJ from '../assets/images/News/doj.svg'

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

const formatDate = (iso) => {
  const [y, m, d] = iso.split('-')
  return `${MONTHS[parseInt(m, 10) - 1]} ${parseInt(d, 10)}, ${y}`
}

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

const News = () => {
  const [sortOrder, setSortOrder] = useState('desc') // newest first by default
  const [pubFilter, setPubFilter] = useState('all')
  const [query, setQuery] = useState('')

  // Only show publication toggles for publications that actually have entries
  const activePublications = useMemo(
    () => publicationOrder.filter((p) => news.some((a) => a.publication === p)),
    []
  )

  const filtered = useMemo(() => {
    let items = news

    if (pubFilter !== 'all') {
      items = items.filter((a) => a.publication === pubFilter)
    }

    const q = query.trim().toLowerCase()
    if (q) {
      items = items.filter((a) => {
        return [a.title, a.publication, a.author, a.note]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
          .includes(q)
      })
    }

    return [...items].sort((a, b) =>
      sortOrder === 'asc' ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)
    )
  }, [sortOrder, pubFilter, query])

  const filtersActive = pubFilter !== 'all' || query.trim() !== ''
  const clearFilters = () => {
    setPubFilter('all')
    setQuery('')
  }

  return (
    <section className='container mx-auto mb-8' id='news'>
      {/* Title header — preserved from the original design */}
      <div className='border-b-2 mb-8 relative'>
        <div className='flex mb-5 sm:mb-14 xl:mb-7'>
          <img
            src={decoration1}
            alt=''
            className='hidden sm:block w-44 lg:w-52 self-start me-4 lg:me-10'
            loading='lazy'
          />
          <div className='flex basis-full gap-x-16 justify-between mt-10 border-t-2 pt-2'>
            <div className='flex flex-col items-start basis-12/12 gap-y-4'>
              <h2 className='font-sans text-4xl sm:text-7xl md:text-8xl text-red font-bold uppercase'>
                News
              </h2>
              <div className='flex flex-wrap sm:flex-nowrap xl:flex-wrap gap-2.5'>
                <img
                  src={decoration2}
                  alt=''
                  className='h-6 sm:hidden lg:block sm:h-7'
                  loading='lazy'
                />
                <img src={decoration3} alt='' className='h-6 sm:h-7' loading='lazy' />
              </div>
            </div>
            <div className='hidden lg:block basis-auto'>
              <img src={decoration4} alt='' className='mt-6 mb-8 h-10' loading='lazy' />
              <img
                src={decoration5}
                alt=''
                className='hidden xl:block w-full max-w-md'
                loading='lazy'
              />
            </div>
          </div>
          <p className='hidden sm:block pb-2 text-3xl absolute bottom-0'>
            samourai<span className='text-red'>wallet</span>
          </p>
        </div>
      </div>

      {/* Intro / context */}
      <p className='px-4 md:px-8 mb-10 font-mono text-lg sm:text-xl lg:text-2xl max-w-4xl leading-snug opacity-90'>
        Coverage from major publications. Filter by source, sort by date, or search
        across titles and authors.
      </p>

      {/* Filter bar — matches the Timeline pattern */}
      <div className='px-4 md:px-8 mb-10'>
        <div className='py-4 border-y-2 border-white flex flex-wrap items-center gap-x-8 gap-y-4'>
          {/* Sort */}
          <div className='flex items-center gap-x-3'>
            <span className='font-mono uppercase text-xs opacity-60 tracking-wider'>
              Sort
            </span>
            <Toggle active={sortOrder === 'desc'} onClick={() => setSortOrder('desc')}>
              Newest first
            </Toggle>
            <Toggle active={sortOrder === 'asc'} onClick={() => setSortOrder('asc')}>
              Oldest first
            </Toggle>
          </div>

          {/* Search */}
          <div className='flex items-center gap-x-3 flex-1 min-w-[240px]'>
            <label
              htmlFor='news-search'
              className='font-mono uppercase text-xs opacity-60 tracking-wider'
            >
              Search
            </label>
            <input
              id='news-search'
              type='text'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='title, publication, or author…'
              style={{ colorScheme: 'dark' }}
              className='flex-1 bg-black text-white caret-red border-b-2 border-white focus:border-red outline-none font-mono text-sm sm:text-base py-1 placeholder:text-white placeholder:opacity-40'
            />
          </div>
        </div>

        {/* Publications row (wraps cleanly with 8 sources) */}
        <div className='mt-4 flex flex-wrap items-center gap-x-5 gap-y-3'>
          <span className='font-mono uppercase text-xs opacity-60 tracking-wider'>
            Source
          </span>
          <Toggle active={pubFilter === 'all'} onClick={() => setPubFilter('all')}>
            All
          </Toggle>
          {activePublications.map((p) => (
            <Toggle key={p} active={pubFilter === p} onClick={() => setPubFilter(p)}>
              {p}
            </Toggle>
          ))}
        </div>

        {/* Status */}
        <div className='mt-5 flex flex-wrap items-center justify-between gap-y-2 font-mono text-sm opacity-70'>
          <p>
            Showing <span className='text-red'>{filtered.length}</span> of{' '}
            {news.length} articles
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

      {/* Articles grid */}
      <div className='px-4 md:px-8'>
        {filtered.length === 0 ? (
          <div className='p-10 border-2 border-white text-center font-mono opacity-70'>
            No articles match the current filters.
          </div>
        ) : (
          <ul className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {filtered.map((article) => (
              <li key={article.url} className='border-2 border-white flex flex-col'>
                <a
                  href={article.url}
                  target='_blank'
                  rel='noreferrer'
                  className='group flex-1 flex flex-col p-5 sm:p-6 transition-colors duration-300 ease-out'
                >
                  {/* Meta row */}
                  <div className='flex items-center justify-between gap-x-3 mb-4'>
                    <span className='font-mono uppercase text-xs sm:text-sm tracking-wider text-red'>
                      {article.publication}
                    </span>
                    <time
                      dateTime={article.date}
                      className='font-mono uppercase text-xs sm:text-sm tracking-wider opacity-60'
                    >
                      {formatDate(article.date)}
                    </time>
                  </div>

                  {/* Title */}
                  <p className='font-sans font-bold text-lg sm:text-xl lg:text-2xl leading-tight transition-colors duration-300 ease-out group-hover:text-red'>
                    {article.title}
                  </p>

                  {/* Author / note */}
                  {(article.author || article.note) && (
                    <div className='mt-3 space-y-1 font-mono text-sm opacity-70'>
                      {article.author && <p>by {article.author}</p>}
                      {article.note && <p className='italic'>{article.note}</p>}
                    </div>
                  )}

                  {/* Read CTA */}
                  <span className='mt-auto pt-5 font-mono uppercase text-sm tracking-wider text-red transition-transform duration-300 ease-out group-hover:translate-x-1'>
                    Read →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Government statements — demoted, per brief */}
      <div className='mt-16 px-4 md:px-8 pt-8 border-t-2'>
        <h3 className='mb-6 font-mono uppercase text-sm sm:text-base tracking-wider opacity-80'>
          Government statements
        </h3>
        <div className='flex flex-wrap gap-6 items-start'>
          <a
            className='basis-40 sm:basis-48 shrink-0 p-4 aspect-square border-2 opacity-80 hover:opacity-100 transition-opacity'
            href='https://www.justice.gov/usao-sdny/pr/founders-and-ceo-cryptocurrency-mixing-service-arrested-and-charged-money-laundering'
            target='_blank'
            rel='noreferrer'
          >
            <img src={DOJ} alt='' loading='lazy' />
          </a>
          <div className='flex-1 min-w-60 space-y-4'>
            <a
              className='block group'
              href='https://www.justice.gov/usao-sdny/pr/founders-and-ceo-cryptocurrency-mixing-service-arrested-and-charged-money-laundering'
              target='_blank'
              rel='noreferrer'
            >
              <p className='font-mono text-base sm:text-lg lg:text-xl transition-colors duration-300 ease-out group-hover:text-red'>
                U.S. Attorney's Office, SDNY — press release on arrests (April 24, 2024).
              </p>
            </a>
            <a
              className='block group'
              href='https://www.ic3.gov/Media/Y2024/PSA240425'
              target='_blank'
              rel='noreferrer'
            >
              <p className='font-mono text-base sm:text-lg lg:text-xl transition-colors duration-300 ease-out group-hover:text-red'>
                FBI IC3 public service announcement on cryptocurrency money services
                businesses (April 25, 2024).
              </p>
            </a>
            <p className='font-mono text-xs sm:text-sm opacity-60 leading-snug'>
              Included for completeness. For the case's court filings and judicial
              record, see Court Documents.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
