// Counter-arguments to the most common bad-faith claims about the Samourai
// Wallet case. Ordered most-common (top) → least-common.
//
// SEED CONTENT — drafted from starter threads provided by @econoalchemist
// in the team chat. The team is still compiling the canonical wording with
// Lauren Rodriguez and Rafael Yakobi; treat the `answer` strings here as
// placeholders to be polished, and add new entries as additional rebuttals
// are identified. Each card supports multiple `sources` (links shown under
// the answer) — append references freely.
//
// Each entry has a stable `id` (slug) used for the anchor URL:
//   /rebuttals#mixing-is-money-laundering
// Don't change an `id` after publication or shared links will break.

export const rebuttals = [
  {
    id: 'mixing-is-money-laundering',
    claim: 'Keonne said “mixing is money laundering for bitcoin.”',
    answer:
      'The quote is taken out of context and used to imply intent that the prosecution did not in fact prove. The full thread walks through the original conversation and what was actually being said.',
    sources: [
      {
        label: 'Thread by @econoalchemist',
        url: 'https://x.com/econoalchemist/status/2002238804640268638',
      },
    ],
  },
  {
    id: 'money-transmitting-business',
    claim: 'Samourai Wallet was operating an unlicensed money transmitting business.',
    answer:
      'Samourai Wallet was non-custodial software — the developers never held user funds. FinCEN’s own guidance and prior practice indicate this is not money transmission. The threads below collect the relevant facts and references.',
    sources: [
      {
        label: 'Thread (Sep 2025) by @econoalchemist',
        url: 'https://x.com/econoalchemist/status/1964148619189375177',
      },
      {
        label: 'Thread (Apr 2026) by @econoalchemist',
        url: 'https://x.com/econoalchemist/status/2049279518121034029',
      },
    ],
  },
  {
    id: 'knew-criminals-could-use-it',
    claim: 'They knew criminals could use the software, so they were conspirators.',
    answer:
      'Knowing that a tool can be misused is not the legal standard for conspiracy. The thread below works through the argument and the case law often cited in this exact context.',
    sources: [
      {
        label: 'Thread by @econoalchemist',
        url: 'https://x.com/econoalchemist/status/2007918350828179522',
      },
      {
        label: 'Referenced case law (Justia)',
        url: 'https://law.justia.com/cases/federal/appellate-courts/F2/109/579/1500782/',
      },
    ],
  },
  {
    id: 'they-were-rich-penalties-peanuts',
    claim: 'Samourai Wallet was rich and the penalties have been peanuts.',
    answer:
      'The financial picture is not what people assume — the thread below lays out the actual numbers around the case and the human cost being paid.',
    sources: [
      {
        label: 'Thread by @econoalchemist',
        url: 'https://x.com/econoalchemist/status/1993481266495434856',
      },
    ],
  },
  {
    id: 'the-237m-claim',
    claim: 'What about the $237 million the indictment talks about?',
    answer:
      'The “$237m” figure has been widely misunderstood and misquoted. The thread below unpacks where the number came from and what it actually represents.',
    sources: [
      {
        label: 'Thread by @econoalchemist',
        url: 'https://x.com/econoalchemist/status/1950740515298701325',
      },
    ],
  },
  {
    id: 'not-in-jail-for-writing-code',
    claim: '“They aren’t in jail for writing code.”',
    answer:
      'Read the indictment. The conduct prosecuted is the development and operation of non-custodial open-source software — i.e., writing and shipping code. The thread below cites the relevant passages.',
    sources: [
      {
        label: 'Thread by @econoalchemist',
        url: 'https://x.com/econoalchemist/status/2000247106133688735',
      },
    ],
  },
]
