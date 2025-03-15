import React from 'react'

const Gallery = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Explore Our Delicious Ice Cream Collection</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Indulge in a variety of mouth-watering ice cream flavors, made with love and the finest ingredients.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img alt="Ice Cream Flavor - Shooting Stars" class="absolute inset-0 w-full h-full object-cover object-center" src="assets/h1.jpg" />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">Ice Cream Flavor</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                <p class="leading-relaxed">A heavenly mix of rich chocolate and caramel, topped with crunchy chocolate chunks and a sprinkle of sea salt.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img alt="Ice Cream Flavor - The Catalyzer" class="absolute inset-0 w-full h-full object-cover object-center" src="assets/h2.jpg" />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">Ice Cream Flavor</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                <p class="leading-relaxed">A spicy chocolate cinnamon delight that ignites your senses with every spoonful. Bold and unforgettable.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img alt="Ice Cream Flavor - The 400 Blows" class="absolute inset-0 w-full h-full object-cover object-center" src="assets/h3.jpg" />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">Ice Cream Flavor</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                <p class="leading-relaxed">A creamy blend of vanilla and caramelized sugar, bringing an elegant French dessert experience to your taste buds.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img alt="Ice Cream Flavor - Neptune" class="absolute inset-0 w-full h-full object-cover object-center" src="assets/h4.jpg" />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">Ice Cream Flavor</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                <p class="leading-relaxed">Inspired by the ocean, this refreshing coconut and sea salt combination will transport you to a beach paradise.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img alt="Ice Cream Flavor - Holden Caulfield" class="absolute inset-0 w-full h-full object-cover object-center" src="assets/h5.jpg" />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">Ice Cream Flavor</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                <p class="leading-relaxed">A comforting blend of chocolate, marshmallow, and graham cracker bits—perfect for those who love classic s'mores flavors.</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img alt="Ice Cream Flavor - Alper Kamu" class="absolute inset-0 w-full h-full object-cover object-center" src="assets/h6.jpg" />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">Ice Cream Flavor</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                <p class="leading-relaxed">A Turkish-inspired treat, with crunchy pistachios and floral rosewater, balanced with a hint of honey for sweetness.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery;
