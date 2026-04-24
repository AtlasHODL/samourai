import Hero from '../components/Hero'
import Support from '../components/Support'
import Overview from '../components/Overview'
import Pardon from '../components/Pardon'
import PeopleContext from '../components/PeopleContext'
import WatchAndShare from '../components/WatchAndShare'
import WhyThisMatters from '../components/WhyThisMatters'
import LegalDebt from '../components/LegalDebt'
import PrisonLetters from '../components/PrisonLetters'
import Updates from '../components/Updates'
import TimelineTeaser from '../components/TimelineTeaser'
import Merch from '../components/Merch'
import SectionBreak from '../components/SectionBreak'

// Strong summary article slot per brief §7.8. Swap when the team picks a
// different canonical explainer.
const FeaturedSummary = () => (
  <section className='container mx-auto my-16' id='featured-summary'>
    <div className='px-4 md:px-8'>
      <div className='p-6 sm:p-8 border-2 border-white'>
        <p className='font-mono uppercase text-xs sm:text-sm tracking-wider opacity-60 mb-3'>
          Recommended reading
        </p>
        <a
          href='https://www.btcpolicy.org/articles/pardoning-the-samourai-developers-would-correct-a-misapplication-of-federal-law-and-protect-the-future-of-non-custodial-software'
          target='_blank'
          rel='noreferrer'
          className='block group'
        >
          <p className='font-sans font-bold text-xl sm:text-2xl lg:text-3xl leading-tight transition-colors duration-300 ease-out group-hover:text-red'>
            Pardoning the Samourai Developers Would Correct a Misapplication of
            Federal Law and Protect the Future of Non-Custodial Software
          </p>
          <p className='mt-3 font-mono text-base sm:text-lg opacity-80'>
            Bitcoin Policy Institute — a legal and policy case for pardons and
            why the prosecution threatens non-custodial software writ large.
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
      <SectionBreak />
      <Pardon />
      <PeopleContext />
      <WatchAndShare />
      <FeaturedSummary />
      <SectionBreak />
      <WhyThisMatters />
      <LegalDebt />
      <SectionBreak />
      <PrisonLetters />
      <Updates />
      <SectionBreak />
      <TimelineTeaser />
      <Merch />
    </>
  )
}

export default HomePage
