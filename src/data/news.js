// Curated coverage of the Samourai Wallet case, grouped by publication.
//
// Selection criteria (from team feedback, Apr 23 2026):
//   - Hardest-hitting pieces from major publications.
//   - Coverage of the two editorial priorities the team flagged:
//       1. The Brady violation (DOJ's delayed disclosure of the FinCEN call).
//       2. DOJ proceeding despite FinCEN's view that Samourai was not a
//          money transmitter.
//   - Major case milestones: arrests, indictment, plea, sentencing.
//   - Primary-source writing from Keonne (TheRage "Notes From The Inside").
//
// Explicit excludes (per team):
//   - BPI "Two-pronged Eleventh Hour IRS squeeze on Bitcoin and crypto
//     developers" (derivative of a TheRage piece).
//   - BPI "2024 Year-in-Review" (off-topic).
//   - Niche / low-reputation pubs (The Blaze, Trends Journal, etc.) that
//     were in the original list; dropped for tone/credibility consistency.
//
// Dates marked with `approxDate: true` are best-effort approximations
// where the publication does not expose a machine-readable date; swap with
// the real date if found. Chronological sort uses the `date` field as-is.

export const news = [
  // ─── CoinDesk ────────────────────────────────────────────────────────
  {
    publication: 'CoinDesk',
    date: '2025-11-19',
    title:
      'Samourai Wallet Developer Bill Hill Sentenced to 4 Years in Prison',
    url: 'https://www.coindesk.com/policy/2025/11/19/samourai-wallet-co-founder-bill-hill-sentenced-to-4-years-in-prison-for-unlicensed-money-transmitting',
  },
  {
    publication: 'CoinDesk',
    date: '2025-11-06',
    title:
      'Samourai Wallet Developer Sentenced to 5 Years in Prison for Unlicensed Money Transmitting',
    url: 'https://www.coindesk.com/policy/2025/11/06/samourai-wallet-developer-sentenced-to-5-years-in-prison-for-unlicensed-money-transmitting',
  },
  {
    publication: 'CoinDesk',
    date: '2025-05-09',
    title:
      "Samourai Wallet Prosecutors Say Delayed FinCEN Disclosure Wasn't a Brady Violation",
    url: 'https://www.coindesk.com/policy/2025/05/09/samourai-wallet-prosecutors-say-delayed-fincen-disclosure-wasn-t-a-brady-violation',
  },
  {
    publication: 'CoinDesk',
    date: '2025-05-05',
    title:
      "Samourai Wallet's Lawyers Say Prosecution Suppressed Critical Evidence, Call for Dismissal",
    url: 'https://www.coindesk.com/policy/2025/05/05/samourai-wallet-s-lawyers-say-prosecution-suppressed-critical-evidence-call-for-dismissal',
  },

  // ─── TheRage.co ──────────────────────────────────────────────────────
  {
    publication: 'TheRage',
    date: '2025-12-25',
    title: 'Letter #1: Notes From The Inside',
    author: 'Keonne Rodriguez',
    url: 'https://www.therage.co/letter-1-keonne-rodriguez/',
    note: "Keonne's first dispatch from federal custody.",
  },
  {
    publication: 'TheRage',
    date: '2025-11-19',
    title: 'William Hill Sentenced To Four Years In Prison',
    author: 'Anna Baydakova',
    url: 'https://www.therage.co/samourai-sev-sentence/',
  },
  {
    publication: 'TheRage',
    date: '2025-11-06',
    title: 'Keonne Rodriguez Sentenced to 5 Years in Prison, $250,000 Fine',
    author: 'David Z. Morris',
    url: 'https://www.therage.co/keonne-rodriguez-samourai-sentenced/',
  },
  {
    publication: 'TheRage',
    date: '2025-07-30',
    title:
      'Samourai Wallet Developers Plead Guilty To Unlicensed Money Transmission',
    author: 'L0la L33tz',
    url: 'https://www.therage.co/samourai-wallet-developers-plead-guilty-to-unlicensed-money-transmission/',
  },
  {
    publication: 'TheRage',
    date: '2025-07-09',
    title: 'New Samourai Indictment Paints Anonymity As A Crime',
    author: 'L0la L33tz',
    url: 'https://www.therage.co/samourai-wallet-new-indictment/',
  },
  {
    publication: 'TheRage',
    date: '2025-05-09',
    title:
      'SDNY Petitions Court To Deny Samourai Wallet Hearing Seeking Remedy For Withheld Evidence',
    author: 'L0la L33tz',
    url: 'https://www.therage.co/sdny-petitions-court-to-deny-samourai-wallet-hearing-seeking-remedy-for-withheld-evidence/',
  },

  // ─── Bitcoin Policy Institute ────────────────────────────────────────
  {
    publication: 'Bitcoin Policy Institute',
    date: '2025-12-02',
    title:
      'Pardoning the Samourai Developers Would Restore Legal Clarity and Protect Non-Custodial Code',
    url: 'https://www.btcpolicy.org/articles/pardoning-the-samourai-developers-would-correct-a-misapplication-of-federal-law-and-protect-the-future-of-non-custodial-software',
  },
  {
    publication: 'Bitcoin Policy Institute',
    date: '2025-05-04',
    title: 'Brady Letter Reveals DOJ Ignored FinCEN in Samourai Case',
    author: 'Zack Shapiro',
    url: 'https://www.btcpolicy.org/articles/fincen-said-that-samourai-wallet-case-violated-treasurys-aml-guidance--doj-prosecuted-devs-anyway',
  },
  {
    publication: 'Bitcoin Policy Institute',
    date: '2024-12-15',
    title:
      "The DOJ's Dangerous New Legal Theory: Implications for Samourai Wallet and Bitcoin Self-Custody",
    author: 'Zack Cohen',
    url: 'https://www.btcpolicy.org/articles/the-dojs-dangerous-new-legal-theory-implications-for-samourai-wallet-and-bitcoin-self-custody',
  },
  {
    publication: 'Bitcoin Policy Institute',
    date: '2024-10-21',
    title: 'Self-custody is Nonnegotiable',
    author: 'Yaël Ossowski',
    url: 'https://www.btcpolicy.org/articles/self-custody-is-nonnegotiable',
  },

  // ─── Cato Institute ──────────────────────────────────────────────────
  {
    publication: 'Cato Institute',
    date: '2024-04-30',
    title: 'Samourai Charges Mark Chilling Moment for Financial Privacy',
    url: 'https://www.cato.org/blog/samourai-charges-mark-chilling-moment-financial-privacy-0',
    note: "Recommended by the team as an early 'what's at stake' summary.",
  },

  // ─── Mises Institute ─────────────────────────────────────────────────
  {
    publication: 'Mises Institute',
    date: '2024-04-30',
    title:
      'The Arrest of Samourai Wallet Developers Shows the US Government Hates Privacy and Freedom',
    url: 'https://mises.org/mises-wire/arrest-samourai-wallet-developers-shows-us-government-hates-privacy-and-freedom',
    approxDate: true,
  },

  // ─── Coin Center ─────────────────────────────────────────────────────
  {
    publication: 'Coin Center',
    date: '2024-05-02',
    title:
      "DOJ's New Stance on Crypto Wallets is a Threat to Liberty and the Rule of Law",
    url: 'https://www.coincenter.org/dojs-new-stance-on-crypto-wallets-is-a-threat-to-liberty-and-the-rule-of-law/',
    approxDate: true,
  },

  // ─── Reason ──────────────────────────────────────────────────────────
  {
    publication: 'Reason',
    date: '2024-05-01',
    title: 'Groundhog Day for the Crypto Wars: The DOJ on Bitcoin Prowl',
    url: 'https://reason.com/2024/05/01/groundhog-day-for-the-crypto-wars-the-doj-on-bitcoin-prowl/',
  },

  // ─── Forbes ──────────────────────────────────────────────────────────
  // 2024-04-26 "Samourai Indictment & FBI Notice are an Assault on Bitcoin
  // and Privacy" was removed from Forbes after the original curation
  // (confirmed 2026-04-23). Dropped; can be re-added if a replacement
  // Forbes piece is confirmed.
]

// Publication order for the filter bar — editorial priority + coverage volume.
// Publications with zero active entries are filtered out of the toggle row
// at render time.
export const publicationOrder = [
  'CoinDesk',
  'TheRage',
  'Bitcoin Policy Institute',
  'Cato Institute',
  'Coin Center',
  'Mises Institute',
  'Reason',
]
