import windowIcons from '../assets/images/Donate/player-window-icons.svg'
import bannerImage from '../assets/images/Donate/donate-banner.svg'

const Hero = () => {
  return (
    <section className='container mx-auto mt-10 mb-14' id='hero'>
      {/* Thesis statement */}
      <h1 className='pb-8 mb-10 font-sans font-bold uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight border-b-2 border-white'>
        For the first time in history,{' '}
        <span className='text-red'>Bitcoin devs have been arrested and convicted</span>{' '}
        for a non-custodial Bitcoin wallet.
      </h1>

      <div className='px-4'>
        <div className='grid gap-4 grid-cols-6 lg:grid-cols-11 gap-x-8 xl:gap-x-14 w-full'>
          {/* Player Col */}
          <div className='max-w-full col-span-6 lg:col-span-7 xl:col-span-7'>
            {/* Terminal-panel player */}
            <div className='px-2 py-2 mb-6 text-black bg-white'>
              {/* URL bar */}
              <div className='hidden sm:flex justify-between mb-1'>
                <p className='font-mono lg:text-3xl basis-auto'>https://freesamourai.com/</p>
                <div className='basis-2/12 block self-center'>
                  <img src={windowIcons} alt='' loading='lazy' />
                </div>
              </div>
              {/* Video: Natalie Brunell interview */}
              <div className='aspect-video'>
                <iframe
                  className='object-cover h-full w-full'
                  src='https://www.youtube.com/embed/lHzYteijFFM'
                  title='Natalie Brunell interview — Samourai Wallet'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          {/* Banner Image */}
          <div className='hidden lg:flex relative bottom-3 col-span-3 lg:col-span-4 xl:col-span-4 justify-center'>
            <img src={bannerImage} alt='' loading='lazy' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
