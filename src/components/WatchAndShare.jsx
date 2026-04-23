import kimIversenPoster from '../assets/images/WatchAndShare/kim-iversen-keonne.png'

// Curated interviews/videos. Add to this list as new coverage lands.
const interviews = [
  {
    title: 'Natalie Brunell — Coin Stories',
    description:
      'A general-audience interview on what the prosecution means for open-source developers.',
    url: 'https://www.youtube.com/watch?v=lHzYteijFFM',
    source: 'YouTube',
    platform: 'youtube',
    videoId: 'lHzYteijFFM',
  },
  {
    title: 'Keonne Rodriguez on the Kim Iversen Show',
    description:
      'On being charged for writing privacy software and heading to federal prison.',
    url: 'https://rumble.com/v71ytcc-he-built-a-privacy-app-now-hes-going-to-prison-keonne-rodriguez.html',
    source: 'Rumble',
    platform: 'rumble',
    posterImage: kimIversenPoster,
  },
  {
    title: "He Built a Privacy Tool. Now He's Going to Prison.",
    description:
      'Naomi Brockwell walks through the case in plain language — a complementary explainer for viewers new to the privacy-tools fight.',
    url: 'https://www.youtube.com/watch?v=Fshsk8MCAf4',
    source: 'Naomi Brockwell TV',
    platform: 'youtube',
    videoId: 'Fshsk8MCAf4',
  },
]

const PlayIcon = () => (
  <svg
    className='w-7 h-7 sm:w-8 sm:h-8 text-white translate-x-[2px]'
    viewBox='0 0 24 24'
    fill='currentColor'
    aria-hidden='true'
  >
    <path d='M8 5v14l11-7z' />
  </svg>
)

const DesignedPoster = ({ poster }) => (
  <div className='absolute inset-0 flex flex-col justify-between p-4 sm:p-5'>
    {/* Top kicker */}
    <div className='flex items-baseline justify-between gap-x-3'>
      <span className='font-mono uppercase text-xs tracking-[0.2em] text-red'>
        {poster.kicker}
      </span>
      <span className='font-mono uppercase text-[10px] tracking-[0.2em] opacity-50'>
        Interview
      </span>
    </div>
    {/* Center headline */}
    <div className='flex flex-col gap-y-1'>
      <p className='font-sans font-bold uppercase text-base sm:text-lg leading-tight'>
        {poster.headline}
      </p>
      <p className='font-sans font-bold uppercase text-sm sm:text-base text-red leading-tight'>
        {poster.subhead}
      </p>
    </div>
    {/* Bottom name */}
    <div>
      <div className='h-0.5 w-12 bg-red mb-2' />
      <p className='font-sans font-bold text-sm sm:text-base leading-tight'>
        {poster.name}
      </p>
      <p className='font-mono text-[11px] sm:text-xs opacity-60 uppercase tracking-wider'>
        {poster.context}
      </p>
    </div>
  </div>
)

const Thumbnail = ({ item }) => {
  // Priority: real poster image if provided → YouTube CDN thumbnail →
  // designed poster fallback → plain source label.
  const showImage = item.posterImage
    ? item.posterImage
    : item.platform === 'youtube'
    ? `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`
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
      ) : item.poster ? (
        <DesignedPoster poster={item.poster} />
      ) : (
        <div className='absolute inset-0 flex items-center justify-center'>
          <span className='font-mono uppercase text-sm tracking-[0.2em] opacity-30'>
            {item.source}
          </span>
        </div>
      )}
      {/* Play button overlay */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
        <div className='w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red flex items-center justify-center shadow-lg transition-transform duration-300 ease-out group-hover:scale-110'>
          <PlayIcon />
        </div>
      </div>
    </div>
  )
}

const WatchAndShare = () => {
  return (
    <section className='container mx-auto mt-8 mb-16' id='watch-and-share'>
      <div className='pb-6 mb-10 border-b-2 border-white'>
        <h2 className='font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-red font-bold uppercase leading-tight text-balance'>
          Watch and share their story
        </h2>
      </div>

      <div className='px-4 md:px-8'>
        <p className='mb-10 font-mono text-lg sm:text-xl lg:text-2xl leading-snug max-w-4xl opacity-90'>
          Listen to Keonne explain the case — and to each interviewer's reaction
          when they see what it actually is: ideologically motivated justice
          against software written in public.
        </p>

        <ul className='grid gap-6 md:grid-cols-3'>
          {interviews.map((item) => (
            <li key={item.url} className='border-2 border-white flex flex-col'>
              <a
                href={item.url}
                target='_blank'
                rel='noreferrer'
                className='group flex-1 flex flex-col'
              >
                <Thumbnail item={item} />
                <div className='p-5 flex-1 flex flex-col'>
                  <p className='font-mono uppercase text-xs sm:text-sm tracking-wider opacity-60 mb-3'>
                    {item.source}
                  </p>
                  <p className='font-sans font-bold text-xl sm:text-2xl leading-tight transition-colors duration-300 ease-out group-hover:text-red'>
                    {item.title}
                  </p>
                  <p className='mt-3 font-mono text-base sm:text-lg leading-snug opacity-80 flex-1'>
                    {item.description}
                  </p>
                  <span className='mt-5 font-mono uppercase text-sm sm:text-base tracking-wider text-red transition-transform duration-300 ease-out group-hover:translate-x-1'>
                    Watch →
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WatchAndShare
