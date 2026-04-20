import decoration1 from '../assets/images/News/decoration-1.svg';
import decoration2 from '../assets/images/News/decoration-2.svg';
import decoration3 from '../assets/images/News/decoration-3.svg';
import decoration4 from '../assets/images/News/decoration-4.svg';
import decoration5 from '../assets/images/News/decoration-5.svg';

// DOJ
import DOJ from '../assets/images/News/doj.svg';

// Indictment
import indictment1 from '../assets/images/News/indictment-1.svg';
import indictment2 from '../assets/images/News/indictment-2.svg';
import indictment3 from '../assets/images/News/indictment-3.svg';
import indictment4 from '../assets/images/News/indictment-4.svg';
import indictment5 from '../assets/images/News/indictment-5.svg';

// News
import news1 from '../assets/images/News/news-1.svg';
import news2 from '../assets/images/News/news-2.svg';
import news3 from '../assets/images/News/news-3.svg';

import moreNews from '../assets/images/News/more-news.svg';



const News = () => {

  const newsList = [
    {
      title: 'DOJ’s New Stance on Crypto Wallets is a Threat to Liberty and the Rule of Law',
      url: 'https://www.coincenter.org/dojs-new-stance-on-crypto-wallets-is-a-threat-to-liberty-and-the-rule-of-law/',
    },
    {
      title: 'Samourai Charges Mark Chilling Moment for Financial Privacy',
      url: 'https://www.cato.org/blog/samourai-charges-mark-chilling-moment-financial-privacy-0',
    },
    {
      title: 'Groundhog Day for the Crypto Wars: The DOJ on Bitcoin Prowl',
      url: 'https://reason.com/2024/05/01/groundhog-day-for-the-crypto-wars-the-doj-on-bitcoin-prowl/',
    },
    {
      title: 'The Government Fears This Privacy Tool',
      url: 'https://reason.com/video/2024/05/09/the-government-fears-this-privacy-tool/',
    },
    {
      title: 'Samourai Wallet: Breaking Down Dangerous Precedents',
      url: 'https://www.nasdaq.com/articles/samourai-wallet:-breaking-down-dangerous-precedents',
    },
    {
      title: "Free Samourai: The deep state's attack on Bitcoin",
      url: 'https://www.theblaze.com/return/free-samourai-the-deep-state-s-attack-on-bitcoin',
    },
    {
      title: 'THE LEGAL ASSAULT ON CRYPTO PRIVACY AND FREEDOM',
      url: 'https://trendsjournal.com/the-legal-assault-on-crypto-privacy-and-freedom/',
    },
    {
      title: '#FREESAMOURAI - Ungovernable Misfits',
      url: 'https://ungovernablemisfits.com/podcast/freesamourai/',
    },
    {
      title: 'Still Here | The Confab 02: Diverter & Zelko - Ungovernable Misfits',
      url: 'https://ungovernablemisfits.com/podcast/the-confab-02-diverter-zelko-still-here/',
    },
    {
      title: 'Reassessing Your Privacy Plan | The Confab 03: Urban Hacker',
      url: 'https://www.youtube.com/watch?v=zLjj9G7u_Jk',
    },
    {
      title: 'Samourai Wallet Arrested',
      url: 'https://odysee.com/@WatchmanPrivacy:1/SamouraiWalletArrested:7',
    },
    // {
    //   title: '',
    //   url: ''
  ]

  return (
    <section className='container mx-auto mb-8' id='news'>
      {/* Title */}
      <div className='border-b-2 mb-8 relative'>
        <div className="flex mb-5 sm:mb-14 xl:mb-7">
          <img src={decoration1} alt="" className='hidden sm:block w-44 lg:w-52 self-start me-4 lg:me-10' loading='lazy' />

          <div className='flex basis-full gap-x-16 justify-between mt-10 border-t-2 pt-2'>
            {/* First Column */}
            <div className='flex flex-col items-start basis-12/12 gap-y-4'>
              <h2 className='font-sans text-4xl sm:text-7xl md:text-8xl text-red font-bold uppercase'>News</h2>
              {/* Bars Container */}
              <div className="flex flex-wrap sm:flex-nowrap xl:flex-wrap gap-2.5">
                <img src={decoration2} alt="" className='h-6 sm:hidden lg:block sm:h-7' loading='lazy' />
                <img src={decoration3} alt="" className='h-6 sm:h-7' loading='lazy' />
              </div>
            </div>
            {/* Second Column */}
            <div className='hidden lg:block basis-auto'>
              <img src={decoration4} alt="" className='mt-6 mb-8 h-10' loading='lazy' />
              <img src={decoration5} alt="" className='hidden xl:block w-full max-w-md' loading='lazy' />
            </div>
          </div>
          {/* SAMOURAIWALLET */}
          <p className='hidden sm:block pb-2 text-3xl absolute bottom-0'>samourai<span className='text-red'>wallet</span></p>
        </div>
      </div>
      {/* Founders and CEO of Cryptocurrency */}
      <div className='border-b-2 mb-6'>
        <div className='flex flex-wrap items-center justify-center space-y-8 xl:space-y-0 lg:space-x-12 mb-11 px-4 sm:px-16'>
          <a className='basis-64 sm:basis-72 shrink-0 p-4 aspect-square border-2' href='https://www.justice.gov/usao-sdny/pr/founders-and-ceo-cryptocurrency-mixing-service-arrested-and-charged-money-laundering' target='__blank'>
            <img src={DOJ} alt="" loading='lazy' />
          </a>
          <a className='group basis-12/12 lg:basis-7/12 grow' href='https://www.justice.gov/usao-sdny/pr/founders-and-ceo-cryptocurrency-mixing-service-arrested-and-charged-money-laundering' target='__blank'>
            <p className='mb-5 text-2xl sm:text-3xl lg:text-4xl font-bold transition-color duration-300 ease-out group-hover:text-red'>Founders and CEO <br className='hidden xl:inline' /> <span className='text-red transition-color duration-300 ease-out group-hover:text-white'>of <span className='inline-block'>crypto</span><span className='inline-block'>currency</span></span></p>
            <p className='text-xl sm:text-2xl lg:text-3xl text-wrap font-mono capitalize'>Mixing service arrested and charged with money laundering and unlicensed money transmitting offenses.</p>
          </a>
        </div>
      </div>
      {/* Indictment */}
      <div className='border-b-2 mb-10'>

        <a className='flex flex-wrap justify-between items-center gap-x-12 mb-10 px-4 group' href='https://www.justice.gov/usao-sdny/media/1349321/dl' target='__blank'>
          <p className='mb-4 lg:mb-0 text-2xl sm:text-3xl lg:text-4xl text-red font-bold ease-out group-hover:text-white group-hover:-skew-x-12 transition-all duration-300'>indictment</p>
          <div className='h-16 flex basis-12/12 md:basis-auto gap-x-4 ease-out group-hover:-skew-x-12 transition-transform duration-300'>
            <img src={indictment1} loading='lazy' alt="" className='hidden xl:block' />
            <img src={indictment2} loading='lazy' alt="" className='hidden xl:block' />
            <img src={indictment3} loading='lazy' alt="" />
            <img src={indictment4} loading='lazy' alt="" className='hidden xl:block' />
            <img src={indictment5} loading='lazy' alt="" className='hidden sm:block' />

          </div>

        </a>
      </div>
      {/* Other News */}
      <div className="px-2">
        {/* First Row */}
        <div className="flex flex-wrap mb-8">
          {/* First Column */}
          <div className="md:basis-7/12 shrink grow md:pe-10 mb-8 lg:mb-0 md:border-e-2">
            <a className='group' href="https://www.ic3.gov/Media/Y2024/PSA240425" target='__blank'>

              <p className='mt-2 mb-5 text-2xl sm:text-3xl lg:text-4xl font-bold ease-out group-hover:text-red transition-color duration-300'><span className="text-red ease-out group-hover:text-white transition-color duration-300">fbi </span>public service <span className='inline-block'>announce</span><span>ment:</span></p>
              <p className='mb-5 text-xl sm:text-2xl lg:text-3xl font-mono'>Alert on Cryptocurrency Money Services Businesses</p>
            </a>
            <img src={news1} alt="" loading='lazy' className='ms-auto mb-2 pb-8 border-b-2 max-h-60' />
            {/* #freesamourai */}
            <div className='ms-auto mb-4 pb-4 block text-6xl sm:text-7xl xl:text-8xl font-stranger text-red text-end border-b-2 border-white'><a href='https://ronindojo.io/freesamourai/' target='__blank' className='hover:text-white ease-out transition-color duration-300'><span className='inline-block'>#free</span><span className='inline-block'>samourai</span></a></div>
            {/* more news */}
            <div className='ms-2 sm:ps-2 sm:border-s-8 border-red'>
              <div className='border-2'>
                {/* See more news */}
                <div className='flex justify-between items-center ps-4 text-xl font-bold border-b-2'>
                  <p>see more news</p> <img src={moreNews} alt="" className='h-full sm:h-12' loading='lazy' />
                </div>
                {/* More News */}
                <ul className='ms-4 pe-2 h-96 text-xl sm:text-2xl lg:text-3xl font-mono overflow-y-scroll'>
                  <li className='py-6 pt-2'>
                    <a className='block ease-out hover:text-red transition-color duration-300' href="https://www.forbes.com/sites/digital-assets/2024/04/26/samourai-indictment--fbi-notice-are-an-assault-on-bitcoin-and-privacy/?sh=7e7a5f7b4c9a" target='_blank'>
                      Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy
                    </a>
                  </li>
                  {newsList.map((news, key) => {
                    return (<li className='py-6 border-t-2' key={key}>
                      <a className='block ease-out hover:text-red transition-color duration-300' href={news.url} target='__blank'>
                        {news.title}
                      </a>
                    </li>)
                  })}
                </ul>
              </div>
            </div>
          </div>
          {/* Second Col */}
          <div className='basis-5/12 xl:basis-3/12 2xl:basis-2/12 grow shrink md:ps-7'>
            <a className='block mx-auto aspect-square mb-8 max-w-80 border-2' href='https://www.coindesk.com/policy/2024/04/24/samourai-wallet-founders-arrested-and-charged-with-money-laundering' target='__blank'>
              <img src={news2} alt="" className='w-full h-auto p-12 2sxl:p-28' loading='lazy' />
            </a>
            <a className='block mb-8 group border-b-2' href="https://www.coindesk.com/policy/2024/04/24/samourai-wallet-founders-arrested-and-charged-with-money-laundering" target='__blank'>
              <p className='mb-5 font-bold text-2xl sm:text-3xl lg:text-4xl transition-color duration-300 ease-out group-hover:text-red'>samourai <span className='text-red transition-color duration-300 ease-out group-hover:text-white'>wallet </span>founders</p>
              <p className='mb-10 text-xl sm:text-2xl lg:text-3xl font-mono'>Arrested and Charged With Money Laundering.</p>
            </a>
            <a className='block group' href="https://forextv.com/bitcoin-news/doj-arrests-bitcoin-wallet-founders-amid-cash-like-privacy-concerns/" target='__blank'>
              <p className='mb-5 font-bold text-2xl sm:text-3xl lg:text-4xl transition-color duration-300 ease-out group-hover:text-red'>doj arrests <span className='text-red transition-color duration-300 ease-out group-hover:text-white'>bitcoin </span>wallet</p>
              <p className='mb-10 text-xl sm:text-2xl lg:text-3xl font-mono'>Founders Amid Cash-Like Privacy Concerns</p>
            </a>

          </div>
        </div>
        {/* Last Row */}
        <div className='flex flex-wrap gap-x-10 items-stretch'>
          <div className='basis-6/12 lg:basis-5/12 grow border-y-2 py-8'>
            <a className='block group' href="https://mises.org/mises-wire/arrest-samourai-wallet-developers-shows-us-government-hates-privacy-and-freedom" target='__blank'>

              <p className='mb-5 text-2xl sm:text-3xl lg:text-4xl font-bold transition-color duration-300 ease-out group-hover:text-red'>The arrest of <br className='hidden lg:inline' /> <span className='text-red transition-color duration-300 ease-out group-hover:text-white'>Samourai Wallet</span></p>
              <p className='text-xl sm:text-2xl lg:text-3xl text-wrap font-mono'>Developers Shows the US Government Hates Privacy and Freedom</p>
            </a>
          </div>
          <div className='grow py-2'>
            <a className='border-2 h-full flex justify-center' href='https://mises.org/mises-wire/arrest-samourai-wallet-developers-shows-us-government-hates-privacy-and-freedom' target='__blank'>
              <img src={news3} alt="" className='w-72 ' loading='lazy' />
            </a>

          </div>
        </div>
      </div>
    </section>)
}

export default News