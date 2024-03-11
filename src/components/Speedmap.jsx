import React from 'react'

const Speedmap = () => {
    const services = [
        {id: 1, title:'100 MC', description: "Hyper Sanic", image: '/src/assets/bluesanic.webp' },
        {id: 1, title:'100 MC', description: "Hyper Sanic", image: '/src/assets/bluesanic.webp' },
        {id: 1, title:'100 MC', description: "Hyper Sanic", image: '/src/assets/bluesanic.webp' },
        {id: 1, title:'100 MC', description: "Hyper Sanic", image: '/src/assets/bluesanic.webp' },
        {id: 1, title:'100 MC', description: "Hyper Sanic", image: '/src/assets/bluesanic.webp' },
        {id: 1, title:'100 MC', description: "Hyper Sanic", image: '/src/assets/bluesanic.webp' },
        {id: 1, title:'100 MC', description: "Hyper Sanic", image: '/src/assets/bluesanic.webp' },
        {id: 1, title:'100 MC', description: "Hyper Sanic", image: '/src/assets/bluesanic.webp' },
        {id: 1, title:'100 MC', description: "Hyper Sanic", image: '/src/assets/bluesanic.webp' },
        {id: 1, title:'100 MC', description: "Hyper Sanic", image: '/src/assets/bluesanic.webp' },
    ]
  return (
    <div className='mt-20 md:w-1/2 mx-auto text-start'>
      <h2 className="text-4xl text-natural-blue font-semibold mb-2">
        SPEEDMAP
      </h2>
      <div className="flex justify-between items-center gap-24">
        <p className="md:w-3/4 text-sm text-natural-grey mb-8">
          Theses are the stages of gotta go fast, we must cross every level to
          find tru sanic
        </p>
        <p className="md:w-3/4 text-sm text-natural-grey mb-8">
          Sanci can run up to 12 times the speed of light, and can travel up to
          8,047,399,548 mph in his base form which is 10 million times as fast
          compared to Sonic as he can only run up to 760 mph.
        </p>
          </div>
          
          {/* cards */}
          <div>
              {
                  services.map(service => <div key={service.id}>
                      <div>
                          <div><img src={service.image} alt="" /></div>
                          <h4 className='text-2xl font-bold text-natural-grey mb-2 px-2'>{service.title }</h4>
                          <p className='text-sm text-natural-grey'>{service.description}</p>
                      </div>
                  </div>)
              }
          </div>
          
    </div>
  )
}

export default Speedmap