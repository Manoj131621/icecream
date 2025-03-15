import React from 'react'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to the Best Ice Cream in Town
        <br className="hidden lg:inline-block"/>Fresh, Creamy, and Delicious
      </h1>
      <p className="mb-8 leading-relaxed">Indulge in our handcrafted ice cream made with the finest ingredients. From rich vanilla to decadent chocolate, every scoop is a burst of flavor. Come enjoy the creamy goodness in every bite, made fresh daily!</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Order Now</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">View Menu</button>
      </div>
    </div>
    <div className=''>
      <img src='assets/child.png'/>
    </div>
  </div>
</section>
  )
}

export default Hero