import { useMemo, useState } from 'react'

import { videos, videoCategories } from '../data/videos'
import VideoModal from './VideoModal'

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

const formatDate = (iso) => {
  if (!iso) return ''
  const [y, m, d] = iso.split('-')
  return `${MONTHS[parseInt(m, 10) - 1]} ${parseInt(d, 10)}, ${y}`
}

const PlayIcon = () => (
  <svg
    className='w-6 h-6 sm:w-7 sm:h-7 text-white translate-x-[2px]'
    viewBox='0 0 24 24'
    fill='currentColor'
    aria-hidden='true'
  >
    <path d='M8 5v14l11-7z' />
  </svg>
)

const Thumbnail = ({ video }) => {
  // Priority: explicit poster image → YouTube CDN thumbnail → fallback panel.
  const showImage = video.posterImage
    ? video.posterImage
    : video.platform === 'youtube'
    ? `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`
    : null

  return (
    <div className='relative aspect-video overflow-hidden border-b-2 border-white bg-black'>
      {showImage ? (
        <>
          <img
            src={showImage}
            alt=''
            className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105'
            loading='lazy'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none' />
        </>
      ) : (
        <div className='absolute inset-0 flex items-center justify-center'>
          <span className='font-mono uppercase text-sm tracking-[0.2em] opacity-30'>
            {video.outlet}
          </span>
        </div>
      )}
      {/* Play overlay */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
        <div className='w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red flex items-center justify-center shadow-lg transition-transform duration-300 ease-out group-hover:scale-110'>
          <PlayIcon />
        </div>
      </div>
    </div>
  )
}

const VideoCard = ({ video, onPlay }) => (
  <li className='border-2 border-white flex flex-col'>
    <button
      type='button'
      onClick={() => onPlay(video)}
      className='group flex-1 flex flex-col text-left'
      aria-label={`Play: ${video.title}`}
    >
      <Thumbnail video={video} />
      <div className='p-5 flex-1 flex flex-col'>
        <div className='flex items-center justify-between gap-x-3 mb-3'>
          <span className='font-mono uppercase text-xs sm:text-sm tracking-wider text-red truncate'>
            {video.outlet}
          </span>
          <time
            dateTime={video.date}
            className='shrink-0 font-mono uppercase text-xs sm:text-sm tracking-wider opacity-60'
          >
            {formatDate(video.date)}
          </time>
        </div>
        <p className='font-sans font-bold text-lg sm:text-xl lg:text-2xl leading-tight transition-colors duration-300 ease-out group-hover:text-red'>
          {video.title}
        </p>
        {video.description && (
          <p className='mt-3 font-mono text-sm sm:text-base leading-snug opacity-80 flex-1'>
            {video.description}
          </p>
        )}
        <span className='mt-5 font-mono uppercase text-sm tracking-wider text-red transition-transform duration-300 ease-out group-hover:translate-x-1'>
          Watch →
        </span>
      </div>
    </button>
  </li>
)

const Media = () => {
  const [activeVideo, setActiveVideo] = useState(null)

  // Sort within each category newest-first; drop empty categories.
  const groups = useMemo(() => {
    return videoCategories
      .map((cat) => ({
        ...cat,
        items: videos
          .filter((v) => v.category === cat.id)
          .sort((a, b) => (b.date || '').localeCompare(a.date || '')),
      }))
      .filter((g) => g.items.length > 0)
  }, [])

  return (
    <section className='container mx-auto mb-8' id='media'>
      {/* Title */}
      <div className='pb-6 mb-10 border-b-2 border-white'>
        <h2 className='font-sans text-4xl sm:text-7xl md:text-8xl text-red font-bold uppercase'>
          Media
        </h2>
      </div>

      {/* Intro */}
      <p className='px-4 md:px-8 mb-12 font-mono text-lg sm:text-xl lg:text-2xl max-w-4xl leading-snug opacity-90'>
        Interviews, podcasts, and independent coverage. Click any card to watch
        in place — newest first within each section.
      </p>

      {/* Groups */}
      <div className='px-4 md:px-8 space-y-16'>
        {groups.map((group) => (
          <div key={group.id} id={`media-${group.id}`}>
            <div className='flex items-baseline justify-between gap-x-4 mb-6 pb-3 border-b-2 border-white'>
              <h3 className='font-sans font-bold uppercase text-xl sm:text-2xl lg:text-3xl'>
                {group.label}
              </h3>
              <span className='font-mono uppercase text-xs sm:text-sm tracking-wider opacity-60'>
                {group.items.length} {group.items.length === 1 ? 'entry' : 'entries'}
              </span>
            </div>
            <ul className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {group.items.map((video) => (
                <VideoCard key={video.id} video={video} onPlay={setActiveVideo} />
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Modal player */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  )
}

export default Media
