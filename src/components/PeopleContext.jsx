import keonnePhoto from '../assets/images/People/keonne-rodriguez.png'

const people = [
  {
    name: 'Keonne Rodriguez',
    role: 'CEO, Samourai Wallet',
    image: keonnePhoto,
  },
  {
    name: 'William Lonergan Hill',
    role: 'CTO, Samourai Wallet',
    image: null,
  },
]

const PeopleContext = () => {
  return (
    <section className='container mx-auto mt-8 mb-16' id='people'>
      <div className='pb-6 mb-10 border-b-2 border-white'>
        <h2 className='font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-red font-bold uppercase'>
          The people
        </h2>
      </div>

      <div className='px-4 md:px-8 grid gap-8 md:grid-cols-2'>
        {people.map((person) => (
          <div key={person.name} className='border-2 border-white flex flex-col'>
            {/* Image slot */}
            <div className='aspect-[4/3] bg-white flex items-center justify-center overflow-hidden'>
              {person.image ? (
                <img
                  src={person.image}
                  alt={person.name}
                  className='w-full h-full object-cover'
                  loading='lazy'
                />
              ) : (
                <p className='font-mono text-sm sm:text-base text-black opacity-50 uppercase tracking-wider'>
                  photo forthcoming
                </p>
              )}
            </div>
            <div className='px-4 py-5 border-t-2 border-white'>
              <p className='font-sans font-bold text-xl sm:text-2xl lg:text-3xl'>
                {person.name}
              </p>
              <p className='mt-1 font-mono text-base sm:text-lg text-red'>{person.role}</p>
            </div>
          </div>
        ))}
      </div>

      <p className='mt-8 px-4 md:px-8 font-mono text-sm sm:text-base opacity-60 italic max-w-3xl'>
        Additional context — family, collaborators, the community around the project —
        forthcoming.
      </p>
    </section>
  )
}

export default PeopleContext
