import React from "react"

const Socials = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="socials">
      <div className="text-center my-8">
        <h2 className="text-4xl text-natural-blue font-semibold mb-2">
          Socials
        </h2>

        <div className="my-12 flex flex-wrap justify-around items-center gap-8">
          <a
            href="https://t.me/sanicbase"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-primary">Telegram</button>
          </a>
          <a
            href="https://twitter.com/SanicCoin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-primary">X</button>
          </a>
          <a
            href="https://basescan.org/token/0x76a2678b3ff2a769903f91dd8ef79c3d6cd11b60"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-primary">Contract</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Socials
