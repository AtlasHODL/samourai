// Asterism-style chapter break for the homepage. Repurposes the existing
// indictment SVG (originally part of the old INDICTMENT typography) as a
// decorative divider between text-heavy sections — same visual language,
// no new assets introduced.
//
// `variant="whirlpool"` swaps the asterism for the Whirlpool cyclone mark
// pulled from the Archive-Samourai-Wallet/whirlpool-gui repo — a quiet
// reminder of what the prosecution is about.

import asterism from '../assets/images/News/indictment-3.svg'
import whirlpool from '../assets/images/Brand/whirlpool-cyclone.png'
import katana from '../assets/images/Brand/samourai-icon.png'

const VARIANTS = {
  asterism,
  whirlpool,
  katana,
}

const SectionBreak = ({ variant = 'asterism', size = 'md' }) => {
  const heights = {
    sm: 'h-8 sm:h-10',
    md: 'h-10 sm:h-12 md:h-14',
    lg: 'h-12 sm:h-14 md:h-16',
  }
  const src = VARIANTS[variant] ?? VARIANTS.asterism
  return (
    <div
      className='container mx-auto my-10 sm:my-14 flex items-center justify-center gap-x-6 sm:gap-x-10'
      role='separator'
      aria-hidden='true'
    >
      <div className='h-px flex-1 max-w-[14rem] bg-white opacity-30' />
      <img
        src={src}
        alt=''
        className={`${heights[size]} ${
          variant === 'whirlpool' || variant === 'katana' ? 'opacity-80' : ''
        }`}
        loading='lazy'
      />
      <div className='h-px flex-1 max-w-[14rem] bg-white opacity-30' />
    </div>
  )
}

export default SectionBreak
