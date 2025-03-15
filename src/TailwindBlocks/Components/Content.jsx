import React from 'react'

const Content = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">FAVORITE FLAVORS</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Discover Our Signature Ice Cream</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Indulge in a scoop (or two) of our creamy, dreamy ice cream made with the finest ingredients. From classic favorites to innovative new flavors, there's something for everyone at our ice cream shop!</p>
    </div>
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Vanilla Dream</h2>
        <p className="leading-relaxed text-base mb-4">A rich, creamy vanilla made with the finest vanilla beans. A timeless classic that never disappoints.</p>
        <a className="text-yellow-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Chocolate Bliss</h2>
        <p className="leading-relaxed text-base mb-4">Rich and creamy chocolate ice cream made with premium cocoa, offering an indulgent experience in every scoop.</p>
        <a className="text-yellow-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Strawberry Sensation</h2>
        <p className="leading-relaxed text-base mb-4">A sweet and creamy strawberry flavor made from fresh, handpicked strawberries. A delightful treat for any fruit lover!</p>
        <a className="text-yellow-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Mint Chocolate Chip</h2>
        <p className="leading-relaxed text-base mb-4">A refreshing mint ice cream mixed with crunchy chocolate chips. Perfect for a cool, minty treat!</p>
        <a className="text-yellow-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Order Now</button>
  </div>
</section>
  )
}

export default Content