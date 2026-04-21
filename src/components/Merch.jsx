import decoration1 from '../assets/images/Merch/decoration-1.svg'
import decoration2 from '../assets/images/Merch/decoration-2.svg'

import merch1 from '../assets/images/Merch/merch-1.jpg'
import merch2 from '../assets/images/Merch/merch-2.jpg'

const products = [
  {
    name: 'Hoodie',
    image: merch1,
    url: 'https://www.ungovernablemisfits.com/free-samourai-hoodie/',
  },
  {
    name: 'T-Shirt',
    image: merch2,
    url: 'https://www.ungovernablemisfits.com/free-samourai-t-shirt/',
  },
]

const FrameCorners = () => (
  <div className='hidden sm:block pointer-events-none'>
    <div className='w-14 h-2.5 bg-white absolute top-0 left-0' />
    <div className='w-14 h-2.5 bg-white absolute top-0 right-0' />
    <div className='w-14 h-2.5 bg-white absolute bottom-0 left-0' />
    <div className='w-14 h-2.5 bg-white absolute bottom-0 right-0' />
    <div className='h-14 w-2.5 bg-white absolute top-0 left-0' />
    <div className='h-14 w-2.5 bg-white absolute top-0 right-0' />
    <div className='h-14 w-2.5 bg-white absolute bottom-0 left-0' />
    <div className='h-14 w-2.5 bg-white absolute bottom-0 right-0' />
  </div>
)

const Merch = () => {
  return (
    <section className='container mx-auto mb-16' id='merch'>
      {/* Title */}
      <div className='flex mb-10'>
        <img
          src={decoration1}
          alt=''
          className='hidden xl:block me-10 w-56'
          loading='lazy'
        />
        <div className='relative grow self-center'>
          <h2 className='pt-3 pb-10 ps-4 font-sans text-4xl sm:text-7xl md:text-8xl text-red font-bold uppercase border-b-2 border-t-2 border-white'>
            Merch
          </h2>
          <img
            src={decoration2}
            alt=''
            className='hidden lg:block h-36 pt-2 absolute bottom-1 end-4'
            loading='lazy'
          />
        </div>
      </div>

      {/* Lead copy */}
      <p className='px-4 md:px-8 mb-10 font-mono text-base sm:text-lg lg:text-xl max-w-3xl opacity-90'>
        Available at Ungovernable Misfits. Proceeds support ongoing coverage and
        the broader cause.
      </p>

      {/* Product grid */}
      <div className='px-4 md:px-8'>
        <div className='grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2'>
          {products.map((product) => (
            <div key={product.name} className='flex flex-col'>
              <div className='relative aspect-square p-1'>
                <a
                  className='border-2 h-full flex items-center justify-center overflow-hidden bg-white'
                  href={product.url}
                  target='_blank'
                  rel='noreferrer'
                  aria-label={`View the ${product.name} on Ungovernable Misfits`}
                >
                  <img
                    src={product.image}
                    className='w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105'
                    alt={`#FreeSamourai ${product.name}`}
                    loading='lazy'
                  />
                </a>
                <FrameCorners />
              </div>
              <div className='flex items-baseline justify-between pt-5'>
                <p className='font-sans font-bold uppercase text-2xl sm:text-3xl lg:text-4xl text-red'>
                  {product.name}
                </p>
                <a
                  href={product.url}
                  target='_blank'
                  rel='noreferrer'
                  className='font-mono uppercase text-sm sm:text-base tracking-wider transition-colors duration-300 ease-out hover:text-red'
                >
                  View →
                </a>
              </div>
              <p className='mt-2 font-mono text-sm sm:text-base opacity-70'>
                Ungovernable Misfits · #FreeSamourai print
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Merch
