// Asterism-style chapter break for the homepage. Repurposes the existing
// indictment SVGs (originally spelled out INDICTMENT in custom typography
// on the old News section) as decorative dividers between text-heavy
// sections — same visual language, no new assets introduced.

import asterism from '../assets/images/News/indictment-3.svg'

const SectionBreak = ({ size = 'md' }) => {
  const heights = {
    sm: 'h-8 sm:h-10',
    md: 'h-10 sm:h-12 md:h-14',
    lg: 'h-12 sm:h-14 md:h-16',
  }
  return (
    <div
      className='container mx-auto my-10 sm:my-14 flex items-center justify-center gap-x-6 sm:gap-x-10'
      role='separator'
      aria-hidden='true'
    >
      <div className='h-px flex-1 max-w-[14rem] bg-white opacity-30' />
      <img src={asterism} alt='' className={heights[size]} loading='lazy' />
      <div className='h-px flex-1 max-w-[14rem] bg-white opacity-30' />
    </div>
  )
}

export default SectionBreak
