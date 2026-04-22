// Curated interviews/videos. Add to this list as new coverage lands.
const interviews = [
  {
    title: 'Natalie Brunell — Coin Stories',
    description:
      'A general-audience interview on what the prosecution means for open-source developers.',
    url: 'https://www.youtube.com/watch?v=lHzYteijFFM',
    source: 'YouTube',
  },
  {
    title: 'Keonne Rodriguez on the Kim Iversen Show',
    description:
      'On being charged for writing privacy software and heading to federal prison.',
    url: 'https://rumble.com/v71ytcc-he-built-a-privacy-app-now-hes-going-to-prison-keonne-rodriguez.html',
    source: 'Rumble',
  },
  {
    title: '#FreeSamourai — dammkevl',
    description: 'Short-form explainer on the case and what is at stake.',
    url: 'https://ronindojo.io/freesamourai/',
    source: 'Blog',
  },
]

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
            <li key={item.url} className='border-2 border-white p-5 flex flex-col'>
              <p className='font-mono uppercase text-xs sm:text-sm tracking-wider opacity-60 mb-3'>
                {item.source}
              </p>
              <a
                href={item.url}
                target='_blank'
                rel='noreferrer'
                className='group flex-1 flex flex-col'
              >
                <p className='font-sans font-bold text-xl sm:text-2xl leading-tight transition-colors duration-300 ease-out group-hover:text-red'>
                  {item.title}
                </p>
                <p className='mt-3 font-mono text-base sm:text-lg leading-snug opacity-80 flex-1'>
                  {item.description}
                </p>
                <span className='mt-5 font-mono uppercase text-sm sm:text-base tracking-wider text-red'>
                  Watch →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WatchAndShare
