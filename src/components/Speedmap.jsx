import React from "react"

const Speedmap = () => {
  const services = [
    {
      id: 1,
      title: "100 MC",
      description: "Hyper Sanic",
      image: "/src/assets/bluesanic.webp",
    },
    {
      id: 1,
      title: "100 MC",
      description: "Hyper Sanic",
      image: "/src/assets/bluesanic.webp",
    },
    {
      id: 1,
      title: "100 MC",
      description: "Hyper Sanic",
      image: "/src/assets/bluesanic.webp",
    },
    {
      id: 1,
      title: "100 MC",
      description: "Hyper Sanic",
      image: "/src/assets/bluesanic.webp",
    },
    {
      id: 1,
      title: "100 MC",
      description: "Hyper Sanic",
      image: "/src/assets/bluesanic.webp",
    },
    {
      id: 1,
      title: "100 MC",
      description: "Hyper Sanic",
      image: "/src/assets/bluesanic.webp",
    },
    {
      id: 1,
      title: "100 MC",
      description: "Hyper Sanic",
      image: "/src/assets/bluesanic.webp",
    },
    {
      id: 1,
      title: "100 MC",
      description: "Hyper Sanic",
      image: "/src/assets/bluesanic.webp",
    },
    {
      id: 1,
      title: "100 MC",
      description: "Hyper Sanic",
      image: "/src/assets/bluesanic.webp",
    },
    {
      id: 1,
      title: "100 MC",
      description: "Hyper Sanic",
      image: "/src/assets/bluesanic.webp",
    },
  ]
  return (
    <div className="mt-20 mx-auto text-center">
      <h2 className="text-4xl text-natural-blue font-semibold mb-3">
        SPEEDMAP
      </h2>
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <p className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          aliquam?
        </p>
        <p className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          aliquam?
        </p>
      </div>
      {/* cards */}
      <div className="mt-14 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 md:w-[calc(50% - 2rem)] lg:w-[calc(33.33% - 2rem)]  text-center mx-auto md:h-60 rounded-md shadow cursor-pointer  hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="mb-4 h-20 w-23 flex items-center justify-center">
                <img
                  src={service.image}
                  alt=""
                  className="max-w-full max-h-full"
                />
              </div>
              <h5 className="text-2xl font-bold text-natural-grey mb-2 px-2">
                {service.title}
              </h5>
              <h4 className="text-3xl text-natural-color">
                {service.description}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Speedmap
