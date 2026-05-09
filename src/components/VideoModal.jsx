import { useEffect } from 'react'

// Build the iframe URL for the modal embed based on the video's platform.
const getEmbedSrc = (video) => {
  if (!video) return null
  if (video.platform === 'youtube') {
    return `https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`
  }
  if (video.platform === 'rumble') {
    return video.embedUrl
  }
  return null
}

const VideoModal = ({ video, onClose }) => {
  // ESC closes the modal; lock body scroll while open.
  useEffect(() => {
    if (!video) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [video, onClose])

  if (!video) return null

  const embedSrc = getEmbedSrc(video)

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-label={video.title}
      className='fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85'
      onClick={onClose}
    >
      <div
        className='relative w-full max-w-5xl border-2 border-white bg-black'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type='button'
          onClick={onClose}
          aria-label='Close video'
          className='absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 border-2 border-white bg-black text-white font-mono text-xl hover:bg-white hover:text-black transition-colors duration-200 ease-out'
        >
          ×
        </button>

        {/* Header */}
        <div className='px-4 sm:px-5 py-3 border-b-2 border-white flex items-center justify-between gap-x-4'>
          <p className='font-mono uppercase text-xs sm:text-sm tracking-wider text-red truncate'>
            {video.outlet}
          </p>
          <a
            href={video.url}
            target='_blank'
            rel='noreferrer'
            className='shrink-0 font-mono uppercase text-xs sm:text-sm tracking-wider opacity-70 hover:text-red hover:opacity-100 transition-colors duration-200 ease-out'
          >
            Open original ↗
          </a>
        </div>

        {/* Player */}
        <div className='aspect-video bg-black'>
          {embedSrc ? (
            <iframe
              className='w-full h-full'
              src={embedSrc}
              title={video.title}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            />
          ) : (
            <div className='w-full h-full flex flex-col items-center justify-center text-center px-6'>
              <p className='font-mono uppercase text-xs tracking-wider opacity-60 mb-3'>
                Inline embed unavailable
              </p>
              <a
                href={video.url}
                target='_blank'
                rel='noreferrer'
                className='font-sans font-bold uppercase text-lg sm:text-xl text-red hover:text-white transition-colors duration-200 ease-out'
              >
                Watch on {video.outlet} ↗
              </a>
            </div>
          )}
        </div>

        {/* Title strip */}
        <div className='px-4 sm:px-5 py-4 border-t-2 border-white'>
          <p className='font-sans font-bold text-lg sm:text-xl leading-tight'>
            {video.title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoModal
