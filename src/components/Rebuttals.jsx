import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { rebuttals } from '../data/rebuttals'

const ShareButton = ({ slug }) => {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const onClick = async () => {
    const url = `${window.location.origin}/rebuttals#${slug}`
    try {
      await navigator.clipboard.writeText(url)
    } catch {
      // Fallback for older browsers / non-secure contexts
      const ta = document.createElement('textarea')
      ta.value = url
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand('copy')
      } catch {
        /* swallow — UI just won't show "copied" */
      }
      document.body.removeChild(ta)
    }
    // Update the address bar so the URL the user sees matches what they copied
    if (window.history?.replaceState) {
      window.history.replaceState(null, '', `#${slug}`)
    }
    setCopied(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setCopied(false), 1800)
  }

  return (
    <button
      type='button'
      onClick={onClick}
      className='font-mono uppercase text-xs sm:text-sm tracking-wider px-3 py-2 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-200 ease-out'
      aria-label='Copy share link to this rebuttal'
    >
      {copied ? '✓ Link copied' : 'Share ↗'}
    </button>
  )
}

const RebuttalCard = ({ item, isHighlighted }) => (
  <li
    id={item.id}
    className={`scroll-mt-24 border-2 transition-colors duration-700 ease-out ${
      isHighlighted ? 'border-red bg-red/5' : 'border-white'
    }`}
  >
    <div className='p-5 sm:p-6 md:p-8'>
      {/* Claim row */}
      <div className='flex items-start justify-between gap-x-4 mb-5'>
        <div className='flex-1'>
          <p className='font-mono uppercase text-xs sm:text-sm tracking-wider opacity-60 mb-2'>
            The claim
          </p>
          <p className='font-sans font-bold text-xl sm:text-2xl lg:text-3xl leading-tight text-red'>
            {item.claim}
          </p>
        </div>
        <ShareButton slug={item.id} />
      </div>

      {/* Answer */}
      <div className='mt-6 pt-6 border-t-2 border-white'>
        <p className='font-mono uppercase text-xs sm:text-sm tracking-wider opacity-60 mb-3'>
          The rebuttal
        </p>
        <p className='font-mono text-base sm:text-lg lg:text-xl leading-snug'>
          {item.answer}
        </p>
      </div>

      {/* Sources */}
      {item.sources && item.sources.length > 0 && (
        <div className='mt-6 pt-6 border-t-2 border-white'>
          <p className='font-mono uppercase text-xs sm:text-sm tracking-wider opacity-60 mb-3'>
            Sources
          </p>
          <ul className='space-y-2'>
            {item.sources.map((src) => (
              <li key={src.url}>
                <a
                  href={src.url}
                  target='_blank'
                  rel='noreferrer'
                  className='font-mono text-sm sm:text-base hover:text-red transition-colors duration-200 ease-out break-words'
                >
                  → {src.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </li>
)

const Rebuttals = () => {
  const { hash } = useLocation()
  const [highlightedId, setHighlightedId] = useState(null)

  // On hash change (or initial load with a hash), scroll to the matching card
  // and pulse the highlight for ~3s.
  useEffect(() => {
    const slug = hash ? hash.replace(/^#/, '') : ''
    if (!slug) {
      setHighlightedId(null)
      return undefined
    }
    const node = document.getElementById(slug)
    if (!node) return undefined

    // Defer one frame so the layout is settled before scrolling.
    const raf = requestAnimationFrame(() => {
      node.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    setHighlightedId(slug)
    const timeout = setTimeout(() => setHighlightedId(null), 3000)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timeout)
    }
  }, [hash])

  return (
    <section className='container mx-auto mb-8' id='rebuttals'>
      {/* Title */}
      <div className='pb-6 mb-10 border-b-2 border-white'>
        <h2 className='font-sans text-4xl sm:text-7xl md:text-8xl text-red font-bold uppercase'>
          Rebuttals
        </h2>
      </div>

      {/* Intro */}
      <div className='px-4 md:px-8 mb-12 max-w-4xl space-y-4'>
        <p className='font-mono text-lg sm:text-xl lg:text-2xl leading-snug opacity-90'>
          The same bad-faith arguments come up over and over. Here are the most
          common ones — and the receipts to dismantle each one.
        </p>
        <p className='font-mono text-sm sm:text-base lg:text-lg leading-snug opacity-70'>
          Hit <span className='text-red font-bold'>Share</span> on any card to
          copy a link that scrolls directly to that rebuttal — drop it under
          someone’s reply and let the receipts do the talking.
        </p>
      </div>

      {/* Cards */}
      <div className='px-4 md:px-8'>
        <ol className='space-y-6 sm:space-y-8'>
          {rebuttals.map((item) => (
            <RebuttalCard
              key={item.id}
              item={item}
              isHighlighted={highlightedId === item.id}
            />
          ))}
        </ol>
      </div>

      {/* Footer note */}
      <div className='px-4 md:px-8 mt-16 pt-8 border-t-2 border-white max-w-4xl'>
        <p className='font-mono text-sm sm:text-base opacity-70 leading-snug'>
          Spotted another rebuttal that should be here? Send it to the team —
          we’ll add it to the list. The wording on existing entries is being
          actively polished with input from Lauren Rodriguez and Rafael Yakobi.
        </p>
      </div>
    </section>
  )
}

export default Rebuttals
