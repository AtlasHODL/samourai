// Closing identity strip — the original Samourai Wallet splash banner,
// pulled from the Archive-Samourai-Wallet/samourai-wallet-android repo.
// Appears late on the homepage as a quiet "this is what they built"
// before the Merch / footer.

import splash from '../assets/images/Brand/samourai-splash.png'

const Lineage = () => {
  return (
    <section className='container mx-auto my-16' id='lineage'>
      <div className='px-4 md:px-8'>
        <div className='border-2 border-white overflow-hidden'>
          <img
            src={splash}
            alt='Samourai Wallet — a bitcoin wallet for the streets.'
            className='w-full h-auto block'
            loading='lazy'
          />
        </div>
        <p className='mt-6 font-mono text-base sm:text-lg lg:text-xl text-center opacity-80 max-w-3xl mx-auto'>
          Open-source. Non-custodial. Privacy by default. The work continues
          through the projects listed in{' '}
          <a
            href='/resources'
            className='text-red transition-colors duration-300 ease-out hover:text-white'
          >
            Resources
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export default Lineage
