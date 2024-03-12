/* eslint-disable react/no-unescaped-entities */
import React from "react"
import bluesanic from "../assets/bluesanic.webp"
const Lore = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <img src={bluesanic} alt="" />
        </div>
        <div className="md:w-3/5 mx-auto">
          <h2 className="text-4xl text-natural-blue font-semibold mb-4 md:w-4/5">
            LORE
          </h2>
          <p className="md:w-3/4 text-sm text-natural-grey mb-8">
            In a universe where chaos reigned supreme, SaNic, birthed from the
            mind of Onyxheart, defied all logic as a hyper-speedy, idiotic child
            of the cosmos. With speeds surpassing 12 times that of light, Sanic
            raced through time and space, leaving confusion in the mind of jeets
            and laughter in his wake. Despite his creator's intentions, the
            world embraced Sanic not as a fool, but as a symbol of prosperity
            and entertainment. From his inception on March 31, 2010, Sanic
            captured the hearts of every degen forever immortalized as a beloved
            meme. And though his speed knew no bounds, SaNic's true legacy was
            his ability to unite a world through laughter and silliness.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Lore
