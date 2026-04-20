// Sparkle
import sparkle from '../assets/images/Donate/decoration-1.png'
// Window Icons
import windowIcons from '../assets/images/Donate/player-window-icons.svg'
// Decoration
import decoration1 from '../assets/images/Resources/decoration-1.svg';
import decoration2 from '../assets/images/Resources/decoration-2.svg';
import decoration3 from '../assets/images/Resources/decoration-3.svg';
import decoration4 from '../assets/images/Resources/decoration-4.svg';

const Resources = () => {

  // SamouraiWallet
  const samouraiWalletList = [
    {
      title: 'Samourai Wallet APK Download (v0.99.98ii)',
      url: 'files/sw-signed-0.99.98ii.apk',
    },
    {
      title: 'Samourai Wallet APK Signature',
      url: 'https://freesamourai.com/sw_apk.html',
    },
    {
      title: 'Build and Sign APK',
      url: 'https://freesamourai.com/build_apk.html',
    },
    {
      title: 'Samourai Wallet Archive Github',
      url: 'https://github.com/Archive-Samourai-Wallet',
    },
    {
      title: 'Samourai Wallet Github',
      url: 'https://github.com/Archive-Samourai-Wallet/samourai-wallet-android',
    },
    {
      title: 'ExtLibJ Github',
      url: 'https://github.com/Archive-Samourai-Wallet/extlibj',
    },
    {
      title: 'bitcoinj GitHub (Might not be fully up to date)',
      url: 'https://github.com/noosphere888/bitcoinj',
    },
    {
      title: 'Boltzmann Github',
      url: 'https://github.com/Archive-Samourai-Wallet/boltzmann-java',
    },
    {
      title: 'Samourai Wallet Documentation',
      url: 'https://web.archive.org/web/20240521004220/https://docs.samourai.io/',
    },
    {
      title: 'Samourai Wallet Restore',
      url: 'https://web.archive.org/web/20240429033852/https://docs.samourai.io/wallet/restore-recovery',
    },
    {
      title: 'Spend Tools (Online Cahoots currently down)',
      url: 'https://web.archive.org/web/20240521004236/https://docs.samourai.io/en/spend-tools',
    },
    {
      title: 'Cahoots - Manual (P2P coinjoin/payjoin w/o coordinator)',
      url: 'https://web.archive.org/web/20240426040031mp_/https://docs.samourai.io/wallet/cahoots',
    },
    {
      title: 'Manual Stonewallx2 Video (P2P coinjoin w/o coordinator)',
      url: 'https://www.youtube.com/watch?v=F-b9wWw_kQs',
    },
    {
      title: 'Privacy Enhanced Transactions',
      url: 'https://web.archive.org/web/20240426040030mp_/https://docs.samourai.io/wallet/privacy-enhanced-transactions',
    },
    {
      title: 'Stonewall (Decoy P2P coinjoin)',
      url: 'https://planb.network/en/tutorials/privacy/stonewall',
    },
    {
      title: 'Spending Privately',
      url: 'https://bitcoiner.guide/privacy/spend/',
    },
    {
      title: 'What We Protect',
      url: 'https://foundation.xyz/2023/01/what-we-protect/',
    },
    {
      title: 'Advanced Usage',
      url: 'https://web.archive.org/web/20240426040031mp_/https://docs.samourai.io/wallet/advanced-usage',
    },
    {
      title: 'Tools Menu',
      url: 'https://web.archive.org/web/20240426040458mp_/https://docs.samourai.io/wallet/tools/',
    },
    {
      title: 'Offline Mode (Sign Transactions)',
      url: 'https://web.archive.org/web/20230129065513/https://docs.samourai.io/en/wallet/features/offline-mode',
    },
    {
      title: 'Installing Samourai Wallet Offline',
      url: 'https://blog.ronindojo.io/installing-samourai-wallet-offline/',
    },
    {
      title: 'Samourai Archive',
      url: 'https://github.com/lasermind/samourai-archive',
    },
    {
      title: 'Migrating from Samourai Wallet into Sparrow Wallet (For Non-Dojo Users)',
      url: 'https://freedom.tech/samourai-to-sparrow/',
    },
  ]

  // Sentinel
  const sentinelList = [
    {
      title: 'Sentinel Onion',
      url: 'http://tlbpo3hf4oaj3e5u46r74ytz6tm7jkip7turjgvinndpdwupibbmxcid.onion/',
    },
    {
      title: 'Sentinel APK Download (v5.0.1)',
      url: 'files/sentinel-signed-5.0.1.apk',
    },
    {
      title: 'Sentinel APK Signature',
      url: 'https://freesamourai.com/sentinel_apk.html',
    },
    {
      title: 'Sentinel GitHub',
      url: 'https://github.com/wanderingking072/sentinel-android',
    },
    {
      title: 'Sentinel Guide (Broadcast Offline Wallet Transactions)',
      url: 'https://blog.ronindojo.io/discover-version-5-0-0-of-sentinel/',
    },
  ]

  // Dojo
  const dojoList = [
    {
      title: 'Dojo Github',
      url: 'https://github.com/Dojo-Open-Source-Project/samourai-dojo',
    },
    {
      title: 'Dojo Documentation',
      url: 'https://web.archive.org/web/20240522145347/https://docs.samourai.io/en/dojo',
    },
    {
      title: 'Dojo x86 Bitcoin Node Guide',
      url: 'https://web.archive.org/web/20240528214238/https://kyc3.life/dojo-x86-bitcoin-node-guide/',
    },
    {
      title: "Vanilla Dojo, it's really this easy. (Might be a little outdated)",
      url: 'https://web.archive.org/web/20220921035334/https://sovrnbitcoiner.com/vanilla-dojo-its-really-this-easy/',
    },
    {
      title: 'Dojo Sovereignty Confirmed 85% of Userbase',
      url: 'https://blog.ronindojo.io/most-whirlpool-users-run-dojo/',
    },
  ]

  // RoninDojo
  const roninDojoList = [
    {
      title: 'RoninDojo Gitea Onion',
      url: 'http://2l2o5umijiwxjioxwpsvwxe6pr75tj7r5rggnl5ze256guwvtee3kpqd.onion/Ronin',
    },
    {
      title: 'RoninDojo Documentation',
      url: 'https://web.archive.org/web/20240426061333/https://wiki.ronindojo.io/en/home',
    },
    {
      title: 'RoninDojo Blog',
      url: 'https://blog.ronindojo.io/',
    },
    {
      title: 'Always Rise After a Fall',
      url: 'https://blog.ronindojo.io/always-rise-after-a-fall/',
    },
    {
      title: 'Setting Up Your Tanto - Tutorial',
      url: 'https://bitcointv.com/w/xqDcsAWgJHbNyaZbHcArHM',
    },
    {
      title: 'RoninUI v2.0 - Preview',
      url: 'https://bitcointv.com/w/p/hpAXspsv8Fze5LRwunarKv',
    },
    {
      title: 'How to install RoninDojo on a PC (Intel/AMD-x86_64)',
      url: 'https://estudiobitcoin.com/how-to-install-ronindojo-pc-intel-amd-x86_64/',
    },
  ]

  // PayNyms
  const PayNymsList = [
    {
      title: 'PayNyms Documentation',
      url: 'https://web.archive.org/web/20240426040030mp_/https://docs.samourai.io/wallet/paynyms',
    },
    {
      title: 'PayNyms 101',
      url: 'https://bitcoiner.guide/paynym/',
    },
    {
      title: 'How BIP47 Works',
      url: 'https://web.archive.org/web/20240508103537/https://blog.samourai.is/how-bip47-works/',
    },
    {
      title: 'BIP47 PayNym',
      url: 'https://planb.network/en/tutorials/privacy/paynym-bip47',
    },
    {
      title: 'Making sense of stealth addresses',
      url: 'https://foundation.xyz/2023/02/making-sense-of-stealth-addresses/',
    },
    {
      title: 'Auth47 PayNyms',
      url: 'https://blog.ronindojo.io/auth47-paynyms/',
    },
  ]

  return (
    <section className="container mx-auto pb-28" id='resources'>
      {/* Title */}
      <div className="flex justify-center items-center gap-x-2 mb-6">
        <img src={sparkle} alt="" className='hidden lg:block h-32' loading='lazy' />
        <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-red font-bold uppercase">resources</h2>
        <img src={sparkle} alt="" className='hidden lg:block h-32' loading='lazy' />
      </div>

      <div className='md:px-12'>

        {/* First Row */}
        <div className='flex xl:flex-wrap items-center justify-center md:justify-start gap-x-20 mb-16'>
          <div className="md:basis-8/12">
            {/* Content Box */}
            <div className='px-0.5 py-0.5 2 mb-0 text-black bg-white'>
              {/* Samourai Wallet */}
              <div className="flex justify-between mb-1 px-2">
                <p className="font-mono text-3xl basis-auto font-black">Samourai Wallet</p>
                <div className='basis-2/12 block self-center' alt="" >
                  <img src={windowIcons} alt="" loading='lazy' />
                </div>
              </div>
              {/* Content */}
              <div className='bg-black text-white'>
                <ul className='ms-4 pe-2 h-[28rem] text-3xl font-mono overflow-y-scroll'>
                  <li className='py-6 pt-2'>
                    <a className='block ease-out hover:text-red transition-color duration-300' href="https://web.archive.org/web/20240420204321/https://www.samouraiwallet.com/" target='__blank'>Samourai Wallet</a>
                  </li>
                  {samouraiWalletList.map((samourai, key) => {
                    return (<li className='py-6 border-t-2' key={key}>
                      <a className='block ease-out hover:text-red transition-color duration-300' href={samourai.url}>
                        {samourai.title}
                      </a>
                    </li>)
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className='hidden md:block basis-3/12 xl:basis-auto'>
            <img src={decoration1} alt="" className='w-52' loading='lazy' />
          </div>
        </div>
        {/* Second Row */}
        <div className='flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end gap-x-20 gap-y-12 mb-16'>
          <div className='basis-auto'>
            <img src={decoration2} alt="" className='w-64' loading='lazy' />
          </div>

          <div className="basis-12/12 md:basis-8/12">
            {/* Content Box */}
            <div className='px-0.5 py-0.5 2 mb-0 text-black bg-white'>
              {/* Sentinel */}
              <div className="flex justify-between mb-1 px-2">
                <p className="font-mono font-black text-3xl basis-auto">Sentinel</p>
                <div className='basis-2/12 block self-center' alt="" >
                  <img src={windowIcons} alt="" loading='lazy' />
                </div>
              </div>
              {/* Content */}
              <div className='bg-black text-white'>
                <ul className='ms-4 pe-2 h-[28rem] text-3xl font-mono overflow-y-scroll'>
                  <li className='py-6 pt-2'>
                    <a className='block ease-out hover:text-red transition-color duration-300' href="https://sentinel.watch/">
                      Sentinel
                    </a>
                  </li>
                  {sentinelList.map((sentinel, key) => {

                    return (<li className='py-6 border-t-2'>
                      <a className='block ease-out hover:text-red transition-color duration-300' href={sentinel.url}>
                        {sentinel.title}
                      </a>
                    </li>)
                  })}
                </ul>
              </div>
            </div>
          </div>


        </div>
        {/* Third Row */}
        <div className='flex flex-row-reverse flex-wrap md:flex-nowrap justify-center md:justify-end items-center gap-x-20 gap-y-12 mb-16'>
          <div className='basis-auto'>
            <img src={decoration3} alt="" className='w-64' loading='lazy' />
          </div>
          <div className="basis-12/12 md:basis-8/12">
            {/* Content Box */}
            <div className='px-0.5 py-0.5 2 mb-0 text-black bg-white'>
              {/* Dojo */}
              <div className="flex justify-between mb-1 px-2">
                <p className="font-mono text-3xl basis-auto font-black">Dojo</p>
                <div className='basis-2/12 block self-center' alt="" >
                  <img src={windowIcons} alt="" loading='lazy' />
                </div>
              </div>
              {/* Content */}
              <div className='bg-black text-white'>
                <ul className='ms-4 pe-2 h-[28rem] text-3xl font-mono overflow-y-scroll'>

                  <li className='py-6 pt-2'>
                    <a className='block ease-out hover:text-red transition-color duration-300' href="https://github.com/Dojo-Open-Source-Project" target='__blank'>
                      Dojo Open Source Project
                    </a>
                  </li>
                  {dojoList.map((dojo, key) => {

                    return (<li className='py-6 border-t-2'>
                      <a className='block ease-out hover:text-red transition-color duration-300' href={dojo.url} target='__blank'>
                        {dojo.title}
                      </a>
                    </li>)
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* #freesamourai */}
        <a className='block md:hidden mb-16 font-stranger font-extralight text-5xl sm:text-7xl text-red text-center ease-out hover:text-white transition-color duration-300' href='https://ronindojo.io/freesamourai/' target='__blank'>#freesamourai</a>
        {/* Fourth Row - Ronin dojo*/}
        <div className='flex items-center justify-end gap-x-20 mb-16'>
          <div className='hidden md:block basis-auto'>
            <a className='font-stranger font-extralight text-7xl text-red ease-out hover:text-white transition-color duration-300 rotate-180' href='https://ronindojo.io/freesamourai/' target='__blank'
              style={{ "writingMode": "vertical-lr" }}>#freesamourai</a>
          </div>
          <div className="md:basis-8/12">
            {/* Content Box */}
            <div className='px-0.5 py-0.5 2 mb-0 text-black bg-white'>
              {/* RoninDojo */}
              <div className="flex justify-between mb-1 px-2">
                <p className="font-mono text-3xl basis-auto font-black">RoninDojo</p>
                <div className='basis-2/12 block self-center' alt="" >
                  <img src={windowIcons} alt="" loading='lazy' />
                </div>
              </div>
              {/* Content */}
              <div className='bg-black text-white'>
                <ul className='ms-4 pe-2 h-[28rem] text-3xl font-mono overflow-y-scroll'>
                  <li className='py-6 pt-2'>
                    <a className='block ease-out hover:text-red transition-color duration-300' href="https://ronindojo.io/" target='__blank'>RoninDojo</a>
                  </li>
                  {roninDojoList.map((roninDojo, key) => {
                    return (
                      <li className='py-6 border-t-2'>
                        <a className='block ease-out hover:text-red transition-color duration-300' href={roninDojo.url} target='__blank'>
                          {roninDojo.title}</a>
                      </li>)
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Fifth Row */}
        <div className='flex flex-wrap flex-row-reverse md:flex-nowrap items-center justify-center md:justify-start gap-y-12 mb-16'>
          <div className='basis-auto relative md:-left-16 -z-50'>
            <img src={decoration4} alt="" className='w-80' loading='lazy' />
          </div>
          <div className="md:basis-8/12">
            {/* Content Box */}
            <div className='px-0.5 py-0.5 2 mb-0 text-black bg-white'>
              {/* PayNyms */}
              <div className="flex justify-between mb-1 px-2">
                <p className="font-mono text-3xl basis-auto font-black">PayNyms</p>
                <div className='basis-2/12 block self-center' alt="" >
                  <img src={windowIcons} alt="" loading='lazy' />
                </div>
              </div>
              {/* Content */}
              <div className='bg-black text-white'>
                <ul className='ms-4 pe-2 h-[28rem] text-3xl font-mono overflow-y-scroll'>
                  <li className='py-6 pt-2'>
                    <a className='block ease-out hover:text-red transition-color duration-300' href="https://paynym.is/" target='__blank'>
                      PayNyms</a>
                  </li>
                  {PayNymsList.map((PayNyms, key) => {
                    return (<li className='py-6 border-t-2'>
                      <a className='block ease-out hover:text-red transition-color duration-300' href={PayNyms.url} target='__blank'>
                        {PayNyms.title}
                      </a>
                    </li>)
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Resources