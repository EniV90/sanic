import React from 'react'
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
            dolorem. Dolore quas ipsum eveniet ea adipisci necessitatibus
            repellat, eum, harum itaque, eius quaerat perspiciatis molestiae
            autem? Illo impedit minus reiciendis, quis repudiandae ab saepe
            odit, veritatis rem sed expedita quasi?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Lore