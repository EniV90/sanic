import { Carousel } from "flowbite-react"
import React from "react"

const Home = () => {
  return (
    <div className="bg-natural-silver">
      <div className="px-4 lg:px-14 max-w-screen 2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-6xl px-16 font-semibold mb-4 text-natural-grey md:w-3/4 leading-snug">
                Gotta go{" "}
                <span className="text-natural-blue leading-snug">
                  <i>Fast</i>
                </span>
              </h1>
            </div>
            <div>
              <img src={"/assets/bluesanic.webp"} alt="" />
            </div>
          </div>
          <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-5xl px-16 font-semibold mb-4 text-natural-grey md:w-3/4 leading-snug">
                Gotta go{" "}
                <span className="text-natural-blue leading-snug">
                  <i>Fast</i>
                </span>
              </h1>
            </div>
            <div>
              <img src={"/assets/BOSsanic.png"} alt="" />
            </div>
          </div>
          <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-5xl px-16 font-semibold mb-4 text-natural-grey md:w-3/4 leading-snug">
                Gotta go{" "}
                <span className="text-natural-blue leading-snug">
                  <i>Fast</i>
                </span>
              </h1>
            </div>
            <div>
              <img src={"/assets/TrueSanic.png"} alt="" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Home
