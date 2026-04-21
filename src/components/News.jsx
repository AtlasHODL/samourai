import decoration1 from '../assets/images/News/decoration-1.svg'
import decoration2 from '../assets/images/News/decoration-2.svg'
import decoration3 from '../assets/images/News/decoration-3.svg'
import decoration4 from '../assets/images/News/decoration-4.svg'
import decoration5 from '../assets/images/News/decoration-5.svg'

import windowIcons from '../assets/images/Donate/player-window-icons.svg'

// DOJ
import DOJ from '../assets/images/News/doj.svg'

// News
import news1 from '../assets/images/News/news-1.svg'
import news2 from '../assets/images/News/news-2.svg'
import news3 from '../assets/images/News/news-3.svg'

import moreNews from '../assets/images/News/more-news.svg'

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
  {
    title: 'Samurai Indictment & FBI Notice are an Assault on Bitcoin and Privacy',
    url: 'https://www.forbes.com/sites/digital-assets/2024/04/26/samurai-indictment--fbi-notice-are-an-assault-on-bitcoin-and-privacy/?sh=7e7a5f7b4c9a',
  },
]

const News = () => {
  return (
    <section className='container mx-auto mb-8' id='news'>
      {/* Title */}
      <div className='border-b-2 mb-8 relative'>
        <div className='flex mb-5 sm:mb-14 xl:mb-7'>
          <img
            src={decoration1}
            alt=''
            className='hidden sm:block w-44 lg:w-52 self-start me-4 lg:me-10'
            loading='lazy'
          />

          <div className='flex basis-full gap-x-16 justify-between mt-10 border-t-2 pt-2'>
            {/* First Column */}
            <div className='flex flex-col items-start basis-12/12 gap-y-4'>
              <h2 className='font-sans text-4xl sm:text-7xl md:text-8xl text-red font-bold uppercase'>
                News
              </h2>
              <div className='flex flex-wrap sm:flex-nowrap xl:flex-wrap gap-2.5'>
                <img
                  src={decoration2}
                  alt=''
                  className='h-6 sm:hidden lg:block sm:h-7'
                  loading='lazy'
                />
                <img src={decoration3} alt='' className='h-6 sm:h-7' loading='lazy' />
              </div>
            </div>
            {/* Second Column */}
            <div className='hidden lg:block basis-auto'>
              <img src={decoration4} alt='' className='mt-6 mb-8 h-10' loading='lazy' />
              <img
                src={decoration5}
                alt=''
                className='hidden xl:block w-full max-w-md'
                loading='lazy'
              />
            </div>
          </div>
          <p className='hidden sm:block pb-2 text-3xl absolute bottom-0'>
            samourai<span className='text-red'>wallet</span>
          </p>
        </div>
      </div>

      {/* Featured: #FreeSamourai blog video */}
      <div className='mb-12 border-b-2 pb-10'>
        <div className='grid gap-8 grid-cols-1 lg:grid-cols-11 items-start'>
          <div className='lg:col-span-7 px-2 py-2 text-black bg-white'>
            <div className='hidden sm:flex justify-between mb-1'>
              <p className='font-mono lg:text-2xl basis-auto'>#FreeSamourai — dammkevl</p>
              <div className='basis-2/12 block self-center'>
                <img src={windowIcons} alt='' loading='lazy' />
              </div>
            </div>
            <div className='aspect-video'>
              <iframe
                className='object-cover h-full w-full'
                src='https://www.youtube.com/embed/36ZCHObzWeI'
                title='#FreeSamourai'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className='lg:col-span-4 space-y-5'>
            <a
              className='block font-stranger font-extralight text-4xl sm:text-6xl xl:text-7xl text-red transition-colors duration-300 ease-out hover:text-white'
              href='https://ronindojo.io/freesamourai/'
              target='_blank'
              rel='noreferrer'
            >
              #freesamourai
            </a>
            <p className='font-mono text-lg sm:text-xl lg:text-2xl leading-snug'>
              Coverage, commentary, and context on the prosecution of Samourai Wallet's
              developers — including interviews, essays, and video explainers.
            </p>
          </div>
        </div>
      </div>

      {/* Primary coverage cards */}
      <div className='px-2'>
        <div className='flex flex-wrap mb-8'>
          {/* Left Column */}
          <div className='md:basis-7/12 shrink grow md:pe-10 mb-8 lg:mb-0 md:border-e-2'>
            <a
              className='group block'
              href='https://mises.org/mises-wire/arrest-samourai-wallet-developers-shows-us-government-hates-privacy-and-freedom'
              target='_blank'
              rel='noreferrer'
            >
              <p className='mt-2 mb-5 text-2xl sm:text-3xl lg:text-4xl font-bold transition-colors duration-300 ease-out group-hover:text-red'>
                The arrest of <span className='text-red transition-colors duration-300 ease-out group-hover:text-white'>Samourai Wallet</span>
              </p>
              <p className='mb-5 text-xl sm:text-2xl lg:text-3xl font-mono'>
                Developers Shows the US Government Hates Privacy and Freedom
              </p>
            </a>
            <img
              src={news1}
              alt=''
              loading='lazy'
              className='ms-auto mb-2 pb-8 border-b-2 max-h-60'
            />

            {/* more news */}
            <div className='ms-2 sm:ps-2 sm:border-s-8 border-red'>
              <div className='border-2'>
                <div className='flex justify-between items-center ps-4 text-xl font-bold border-b-2'>
                  <p>see more news</p>
                  <img src={moreNews} alt='' className='h-full sm:h-12' loading='lazy' />
                </div>
                <ul className='ms-4 pe-2 h-96 text-xl sm:text-2xl lg:text-3xl font-mono overflow-y-scroll'>
                  {newsList.map((n, i) => (
                    <li
                      key={n.url}
                      className={`py-6 ${i === 0 ? 'pt-2' : 'border-t-2'}`}
                    >
                      <a
                        className='block transition-colors duration-300 ease-out hover:text-red'
                        href={n.url}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {n.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='basis-5/12 xl:basis-3/12 2xl:basis-2/12 grow shrink md:ps-7'>
            <a
              className='block mx-auto aspect-square mb-8 max-w-80 border-2'
              href='https://www.coindesk.com/policy/2024/04/24/samourai-wallet-founders-arrested-and-charged-with-money-laundering'
              target='_blank'
              rel='noreferrer'
            >
              <img src={news2} alt='' className='w-full h-auto p-12 2sxl:p-28' loading='lazy' />
            </a>
            <a
              className='block mb-8 group border-b-2'
              href='https://www.coindesk.com/policy/2024/04/24/samourai-wallet-founders-arrested-and-charged-with-money-laundering'
              target='_blank'
              rel='noreferrer'
            >
              <p className='mb-5 font-bold text-2xl sm:text-3xl lg:text-4xl transition-colors duration-300 ease-out group-hover:text-red'>
                samourai <span className='text-red transition-colors duration-300 ease-out group-hover:text-white'>wallet </span>founders
              </p>
              <p className='mb-10 text-xl sm:text-2xl lg:text-3xl font-mono'>
                Arrested and charged in federal conspiracy case (CoinDesk).
              </p>
            </a>
            <a
              className='block group'
              href='https://forextv.com/bitcoin-news/doj-arrests-bitcoin-wallet-founders-amid-cash-like-privacy-concerns/'
              target='_blank'
              rel='noreferrer'
            >
              <p className='mb-5 font-bold text-2xl sm:text-3xl lg:text-4xl transition-colors duration-300 ease-out group-hover:text-red'>
                doj arrests <span className='text-red transition-colors duration-300 ease-out group-hover:text-white'>bitcoin </span>wallet
              </p>
              <p className='mb-10 text-xl sm:text-2xl lg:text-3xl font-mono'>
                Founders amid cash-like privacy concerns.
              </p>
            </a>
          </div>
        </div>

        {/* Bottom feature */}
        <div className='flex flex-wrap gap-x-10 items-stretch mb-12'>
          <div className='basis-6/12 lg:basis-5/12 grow border-y-2 py-8'>
            <a
              className='block group'
              href='https://mises.org/mises-wire/arrest-samourai-wallet-developers-shows-us-government-hates-privacy-and-freedom'
              target='_blank'
              rel='noreferrer'
            >
              <p className='mb-5 text-2xl sm:text-3xl lg:text-4xl font-bold transition-colors duration-300 ease-out group-hover:text-red'>
                The arrest of <br className='hidden lg:inline' />{' '}
                <span className='text-red transition-colors duration-300 ease-out group-hover:text-white'>
                  Samourai Wallet
                </span>
              </p>
              <p className='text-xl sm:text-2xl lg:text-3xl text-wrap font-mono'>
                Developers Shows the US Government Hates Privacy and Freedom
              </p>
            </a>
          </div>
          <div className='grow py-2'>
            <a
              className='border-2 h-full flex justify-center'
              href='https://mises.org/mises-wire/arrest-samourai-wallet-developers-shows-us-government-hates-privacy-and-freedom'
              target='_blank'
              rel='noreferrer'
            >
              <img src={news3} alt='' className='w-72' loading='lazy' />
            </a>
          </div>
        </div>

        {/* Government statements — demoted */}
        <div className='pt-8 border-t-2'>
          <h3 className='mb-6 font-mono uppercase text-sm sm:text-base tracking-wider opacity-80'>
            Government statements
          </h3>
          <div className='flex flex-wrap gap-6 items-start'>
            <a
              className='basis-40 sm:basis-48 shrink-0 p-4 aspect-square border-2 opacity-80 hover:opacity-100 transition-opacity'
              href='https://www.justice.gov/usao-sdny/pr/founders-and-ceo-cryptocurrency-mixing-service-arrested-and-charged-money-laundering'
              target='_blank'
              rel='noreferrer'
            >
              <img src={DOJ} alt='' loading='lazy' />
            </a>
            <div className='flex-1 min-w-60 space-y-4'>
              <a
                className='block group'
                href='https://www.justice.gov/usao-sdny/pr/founders-and-ceo-cryptocurrency-mixing-service-arrested-and-charged-money-laundering'
                target='_blank'
                rel='noreferrer'
              >
                <p className='font-mono text-base sm:text-lg lg:text-xl transition-colors duration-300 ease-out group-hover:text-red'>
                  U.S. Attorney's Office, SDNY — press release on arrests (April 24, 2024).
                </p>
              </a>
              <a
                className='block group'
                href='https://www.ic3.gov/Media/Y2024/PSA240425'
                target='_blank'
                rel='noreferrer'
              >
                <p className='font-mono text-base sm:text-lg lg:text-xl transition-colors duration-300 ease-out group-hover:text-red'>
                  FBI IC3 public service announcement on cryptocurrency money services
                  businesses (April 25, 2024).
                </p>
              </a>
              <p className='font-mono text-xs sm:text-sm opacity-60 leading-snug'>
                Included for completeness. For the case's court filings and judicial
                record, see Court Documents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
