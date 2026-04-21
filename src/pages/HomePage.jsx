import Hero from '../components/Hero'
import Support from '../components/Support'
import Overview from '../components/Overview'
import WhyThisMatters from '../components/WhyThisMatters'
import TimelineTeaser from '../components/TimelineTeaser'
import PeopleContext from '../components/PeopleContext'
import Merch from '../components/Merch'

// Placeholder: a single "strong summary article" link slot per brief §7.8.
// Swap the href and label when the team picks the canonical explainer.
const FeaturedSummary = () => (
  <section className='container mx-auto my-16' id='featured-summary'>
    <div className='px-4 md:px-8'>
      <div className='p-6 sm:p-8 border-2 border-white'>
        <p className='font-mono uppercase text-xs sm:text-sm tracking-wider opacity-60 mb-3'>
          Strong summary — recommended reading
        </p>
        <a
          href='https://www.coincenter.org/dojs-new-stance-on-crypto-wallets-is-a-threat-to-liberty-and-the-rule-of-law/'
          target='_blank'
          rel='noreferrer'
          className='block group'
        >
          <p className='font-sans font-bold text-xl sm:text-2xl lg:text-3xl leading-tight transition-colors duration-300 ease-out group-hover:text-red'>
            DOJ's New Stance on Crypto Wallets Is a Threat to Liberty and the
            Rule of Law
          </p>
          <p className='mt-3 font-mono text-base sm:text-lg opacity-80'>
            Coin Center — a policy-focused explainer of what the prosecution
            means for developers, users, and the reach of federal
            money-transmission law.
          </p>
        </a>
      </div>
    </div>
  </section>
)

const HomePage = () => {
  return (
    <>
      <Hero />
      <Support />
      <Overview />
      <FeaturedSummary />
      <WhyThisMatters />
      <PeopleContext />
      <TimelineTeaser />
      <Merch />
    </>
  )
}

export default HomePage
