import React from 'react'

const Socials = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-natural-blue font-semibold mb-2">
          Socials
        </h2>

        <div className="my-12 flex flex-wrap justify-around items-center gap-8">
          <a href="/">
            <button className="btn-primary">Telegram</button>
          </a>
          <a
            href="https://twitter.com/SanicCoin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-primary">X</button>
          </a>
          <a href="/">
            <button className="btn-primary">Contract</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Socials