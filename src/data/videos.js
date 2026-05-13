// Curated video archive — interviews, podcasts, talks, explainers.
// Grouped by `category`:
//   - 'keonne'      : Keonne Rodriguez speaking
//   - 'lauren'      : Lauren Rodriguez speaking
//   - 'independent' : independent coverage / explainers about the case
//
// `platform` controls how the modal player embeds the video.
//   Supported: 'youtube' | 'rumble' | 'bitcointv' | 'twitter'
//   - 'youtube'   : provide videoId (the v= param)
//   - 'rumble'    : provide embedUrl (Rumble Share → Embed)
//   - 'bitcointv' : provide embedUrl (https://bitcointv.com/videos/embed/<uuid>)
//   - 'twitter'   : provide tweetId (the status numeric id); modal renders an
//                   X embed with the inline video.
//
// To add a new entry: append an object to the array. `date` is ISO (YYYY-MM-DD)
// and is used for sorting (newest first within each category).
//
// Most of the seed entries below mirror the "Watch and Share Their Story"
// section on billandkeonne.org; dates are scraped from each platform's
// public metadata.

// Poster image imports (used for platforms without a CDN thumbnail, e.g. Rumble).
import kimIversenPoster from '../assets/images/WatchAndShare/kim-iversen-keonne.png'

export const videoCategories = [
  { id: 'keonne', label: "Keonne's appearances" },
  { id: 'lauren', label: "Lauren's appearances" },
  { id: 'independent', label: 'Independent coverage' },
]

export const videos = [
  // ─── Keonne Rodriguez ────────────────────────────────────────────────
  {
    id: 'the-hated-one-going-to-prison',
    category: 'keonne',
    title: 'Going to PRISON for Extreme Privacy — Keonne Rodriguez, Samourai Wallet Co-founder',
    outlet: 'The Hated One',
    description:
      'Long-form interview on the prosecution, privacy, and what comes next.',
    date: '2025-12-17',
    platform: 'youtube',
    videoId: 'BR6vcplaFus',
    url: 'https://www.youtube.com/watch?v=BR6vcplaFus',
  },
  {
    id: 'deep-focus-john-kiriakou',
    category: 'keonne',
    title: 'Jail Sentence for Crypto Wallet with Keonne Rodriguez',
    outlet: 'Deep Focus with John Kiriakou',
    description:
      'Whistleblower John Kiriakou sits down with Keonne to discuss the federal sentence.',
    date: '2025-12-16',
    platform: 'youtube',
    videoId: 'Ft_WgUh56xw',
    url: 'https://www.youtube.com/watch?v=Ft_WgUh56xw',
  },
  {
    id: 'real-americas-voice-bidens-war-on-crypto',
    category: 'keonne',
    title: 'Biden’s War on Crypto? Samourai Wallet Founder Speaks Out',
    outlet: "Real America's Voice",
    description:
      'A mainstream-media segment on the case and the broader crackdown on privacy software.',
    date: '2025-12-11',
    platform: 'youtube',
    videoId: 'X5AXk4bZUBA',
    url: 'https://www.youtube.com/watch?v=X5AXk4bZUBA',
  },
  {
    id: 'natalie-brunell-coin-stories',
    category: 'keonne',
    title: 'Natalie Brunell — Coin Stories',
    outlet: 'Coin Stories',
    description:
      'A general-audience interview on what the prosecution means for open-source developers.',
    date: '2025-12-11',
    platform: 'youtube',
    videoId: 'lHzYteijFFM',
    url: 'https://www.youtube.com/watch?v=lHzYteijFFM',
  },
  {
    id: 'tftc-governments-next-target',
    category: 'keonne',
    title: "Bitcoiner Going to Prison Reveals the Government's Next Target",
    outlet: 'TFTC',
    description:
      'Marty Bent / TFTC interview connecting the Samourai case to the broader regulatory landscape.',
    date: '2025-12-09',
    platform: 'youtube',
    videoId: 'Q6ulVkltLFU',
    url: 'https://www.youtube.com/watch?v=Q6ulVkltLFU',
  },
  {
    id: 'watchman-privacy-going-to-prison',
    category: 'keonne',
    title: 'Keonne Rodriguez: Going to Prison for Privacy',
    outlet: 'Watchman Privacy',
    description:
      'Privacy-focused podcast deep-dive on the case and the chilling effect on developers.',
    date: '2025-11-29',
    platform: 'youtube',
    videoId: 'UcbFSF7fWn8',
    url: 'https://www.youtube.com/watch?v=UcbFSF7fWn8',
  },
  {
    id: 'econoalchemist-bitcointv-096',
    category: 'keonne',
    title: '096. From Open Source to Federal Sentence: The Government vs. Samourai Wallet',
    outlet: 'econoalchemist (BitcoinTV)',
    description:
      'Long sit-down with @econoalchemist unpacking the prosecution, the five-year sentence, and the shifting government posture on non-custodial Bitcoin software.',
    date: '2025-11-27',
    platform: 'bitcointv',
    embedUrl: 'https://bitcointv.com/videos/embed/d7ca1c7f-aa16-4233-bc7b-3a329f43cbc4',
    url: 'https://bitcointv.com/w/sDvbNA2Sth8C8vcccxLZKj',
  },
  {
    id: 'kim-iversen-show-youtube',
    category: 'keonne',
    title: 'US Govt Just Jailed Him for Protecting Your Privacy',
    outlet: 'The Kim Iversen Show',
    description:
      'YouTube cut of the Kim Iversen Show interview on the prosecution.',
    date: '2025-11-19',
    platform: 'youtube',
    videoId: 'm5mBCmywnA4',
    url: 'https://www.youtube.com/watch?v=m5mBCmywnA4',
  },
  {
    id: 'kim-iversen-show-rumble',
    category: 'keonne',
    title: 'He Built a Privacy App. Now He’s Going to Prison.',
    outlet: 'The Kim Iversen Show (Rumble)',
    description:
      'Rumble release of the Kim Iversen Show interview.',
    date: '2025-11-19',
    platform: 'rumble',
    embedUrl: 'https://rumble.com/embed/v71ytcc/',
    url: 'https://rumble.com/v71ytcc-he-built-a-privacy-app-now-hes-going-to-prison-keonne-rodriguez.html',
    posterImage: kimIversenPoster,
  },

  // ─── Lauren Rodriguez ────────────────────────────────────────────────
  {
    id: 'efrat-fenigson-fighting-to-free-her-husband',
    category: 'lauren',
    title: "She's Fighting to Free Her Husband — Ep. 136",
    outlet: 'Efrat Fenigson',
    description:
      'Lauren joins Efrat Fenigson to discuss the prosecution of her husband Keonne, the family’s experience, and what supporters can do.',
    date: '2026-05-10',
    platform: 'twitter',
    tweetId: '2053498190578491397',
    url: 'https://x.com/efenigson/status/2053498190578491397',
  },
  {
    id: 'watchman-privacy-lauren-saga',
    category: 'lauren',
    title: 'Lauren Rodriguez: A Samourai Wallet Saga',
    outlet: 'Watchman Privacy',
    description:
      "Lauren Rodriguez on the family's experience through the prosecution and what's needed to bring the developers home.",
    date: '2026-04-09',
    platform: 'youtube',
    videoId: 'w9Qr_OmpnMo',
    url: 'https://www.youtube.com/watch?v=w9Qr_OmpnMo',
  },

  // ─── Independent coverage ────────────────────────────────────────────
  {
    id: 'naomi-brockwell-explainer',
    category: 'independent',
    title: "He Built a Privacy Tool. Now He’s Going to Prison.",
    outlet: 'Naomi Brockwell TV',
    description:
      'Naomi Brockwell walks through the case in plain language — a complementary explainer for viewers new to the privacy-tools fight.',
    date: '2025-12-18',
    platform: 'youtube',
    videoId: 'Fshsk8MCAf4',
    url: 'https://www.youtube.com/watch?v=Fshsk8MCAf4',
  },
]
