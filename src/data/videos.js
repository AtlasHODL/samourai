// Curated video archive — interviews, podcasts, talks, explainers.
// Grouped by `category`:
//   - 'keonne'      : Keonne Rodriguez speaking
//   - 'lauren'      : Lauren Rodriguez speaking
//   - 'independent' : independent coverage / explainers about the case
//
// `platform` controls how the modal player embeds the video.
//   Supported: 'youtube' | 'rumble' | 'twitter'
//   - 'youtube' : provide videoId (the v= param)
//   - 'rumble'  : provide embedUrl (Rumble's /embed/<id>/ URL — find it under
//                 the Share → Embed menu on the video page)
//   - 'twitter' : provide tweetUrl; the modal renders an X embed
//
// To add a new entry: append an object to the array. `date` is ISO (YYYY-MM-DD)
// and is used for sorting (newest first within each category).

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
    id: 'natalie-brunell-coin-stories',
    category: 'keonne',
    title: 'Natalie Brunell — Coin Stories',
    outlet: 'Coin Stories',
    description:
      'A general-audience interview on what the prosecution means for open-source developers.',
    date: '2025-09-15',
    platform: 'youtube',
    videoId: 'lHzYteijFFM',
    url: 'https://www.youtube.com/watch?v=lHzYteijFFM',
  },
  {
    id: 'kim-iversen-show',
    category: 'keonne',
    title: 'He Built a Privacy App. Now He’s Going to Prison.',
    outlet: 'The Kim Iversen Show',
    description:
      'On being charged for writing privacy software and heading to federal prison.',
    date: '2025-10-21',
    platform: 'rumble',
    embedUrl: 'https://rumble.com/embed/v71ytcc/',
    url: 'https://rumble.com/v71ytcc-he-built-a-privacy-app-now-hes-going-to-prison-keonne-rodriguez.html',
    posterImage: kimIversenPoster,
  },

  // ─── Independent coverage ────────────────────────────────────────────
  {
    id: 'naomi-brockwell-explainer',
    category: 'independent',
    title: "He Built a Privacy Tool. Now He’s Going to Prison.",
    outlet: 'Naomi Brockwell TV',
    description:
      'Naomi Brockwell walks through the case in plain language — a complementary explainer for viewers new to the privacy-tools fight.',
    date: '2025-09-30',
    platform: 'youtube',
    videoId: 'Fshsk8MCAf4',
    url: 'https://www.youtube.com/watch?v=Fshsk8MCAf4',
  },

  // ─── Lauren Rodriguez ────────────────────────────────────────────────
  // (Team to add Lauren's appearances here as they come together.)
]
