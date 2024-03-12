import React from "react"

const Speedmap = () => {
  const services = [
    {
      id: 1,
      title: "100 MC",
      description: "Super Sanic",
      image: "/assets/SuperSani-0.png",
    },
    {
      id: 1,
      title: "1M MC",
      description: "Hyper SaNic",
      image: "/assets/HypeSanic.png",
    },
    {
      id: 1,
      title: "5M MC",
      description: "DankSpine SaNic",
      image: "/assets/DarkspinSanic.png",
    },
    {
      id: 1,
      title: "10M MC",
      description: "Dark SaNic",
      image: "/assets/DarkSanic.png",
    },
    {
      id: 1,
      title: "25M MC",
      description: "Super SaNic Hyper gOD",
      image: "/assets/SuperSanic.png",
    },
    {
      id: 1,
      title: "50M MC",
      description: "SSHG-BLUE Mode SaNic",
      image: "/assets/SuperSanigod.png",
    },
    {
      id: 1,
      title: "100M MC",
      description: "OMNIPITENT SaNic",
      image: "/assets/OSsanic.png",
    },
    {
      id: 1,
      title: "250M MC",
      description: "BEYOND OMNIPITENT SaNic",
      image: "/assets/BOSsanic.png",
    },
    {
      id: 1,
      title: "500M MC",
      description: "INFINITELY-B OMNIPITENT SaNic",
      image: "/assets/IBOSsanic.png",
    },
    {
      id: 1,
      title: "1B MC",
      description: "TRU SaNic",
      image: "/assets/TrueSanic.png",
    },
  ]
  return (
    <div className=" mx-auto text-center" id="speedmap">
      <h2 className="text-4xl text-natural-blue font-semibold mb-3">
        SPEEDMAP
      </h2>
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <p className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
          These are the stages of gotta go fast, we must cross <br /> every
          level to find TRU SaNic
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
            className="px-4 py-8 w-full md:w-[calc(50% - 2rem)] lg:w-[calc(33.33% - 2rem)]  text-center mx-auto md:h-60 rounded-md shadow cursor-pointer  hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="mb-4 h-20 w-23 flex items-center justify-center">
                <img
                  src={service.image}
                  alt=""
                  className="max-w-full max-h-full"
                />
              </div>
              <h5 className=" font-bold text-natural-grey mb-2 px-2">
                {service.title}
              </h5>
              <h4 className="text-2xl text-natural-color">
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
