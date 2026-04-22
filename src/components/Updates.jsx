// Source: billandkeonne.org "Updates" section. Add new items at the top.
const updates = [
  {
    date: '2025-12-19',
    label: 'Dec 19, 2025',
    title: 'Keonne surrenders to FPC Morgantown',
  },
  {
    date: '2025-12-15',
    label: 'Dec 15, 2025',
    title: 'Trump publicly says he will "look at" a pardon',
    link: 'https://x.com/DecryptMedia/status/2000692603029721265',
    linkLabel: 'Coverage on X',
  },
  {
    date: '2025-11-19',
    label: 'Nov 19, 2025',
    title:
      'Keonne appears on the Kim Iversen show; Bill sentenced to four years and a $250,000 fine',
    link: 'https://rumble.com/v71ytcc-he-built-a-privacy-app-now-hes-going-to-prison-keonne-rodriguez.html',
    linkLabel: 'Watch on Rumble',
  },
  {
    date: '2025-11-06',
    label: 'Nov 6, 2025',
    title: 'Keonne sentenced to five years and a $250,000 fine',
  },
  {
    date: '2024-04-24',
    label: 'April 2024',
    title: 'Pre-dawn arrests at Rodriguez and Hill residences',
  },
]

const Updates = () => {
  return (
    <section className='container mx-auto mt-8 mb-16' id='updates'>
      <div className='pb-6 mb-10 border-b-2 border-white flex flex-wrap items-baseline justify-between gap-y-2'>
        <h2 className='font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-red font-bold uppercase'>
          Updates
        </h2>
        <p className='font-mono uppercase text-sm sm:text-base opacity-70 tracking-wider'>
          Source: billandkeonne.org
        </p>
      </div>

      <ol className='px-4 md:px-8 space-y-6'>
        {updates.map((item) => (
          <li
            key={item.date}
            className='grid grid-cols-12 gap-x-6 gap-y-2 pb-6 border-b-2'
          >
            <div className='col-span-12 md:col-span-3'>
              <time
                dateTime={item.date}
                className='font-mono font-bold uppercase text-lg sm:text-xl text-red'
              >
                {item.label}
              </time>
            </div>
            <div className='col-span-12 md:col-span-9'>
              <p className='font-sans font-bold text-xl sm:text-2xl lg:text-3xl leading-tight'>
                {item.title}
              </p>
              {item.link && (
                <a
                  href={item.link}
                  target='_blank'
                  rel='noreferrer'
                  className='mt-3 inline-block font-mono uppercase text-sm sm:text-base tracking-wider transition-colors duration-300 ease-out hover:text-red'
                >
                  <span className='text-red'>→</span> {item.linkLabel}
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Updates
