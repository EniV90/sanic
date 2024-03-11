import React from 'react'

const Socials = () => {
  return (
      <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
          <div className='text-center my-8'>
              <h2 className='text-4xl text-natural-blue font-semibold mb-2'>Socials</h2>

              <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                  <a href="/"><img src="/src/assets/dex.png" alt="" /></a>
                  {/* <a href="/" className='w-2 h-2'><img src="/src/assets/X.png" alt="" /></a>
                  <a href="/"><img src="/src/assets/telegram.png" alt="" /></a> */}
              </div>
          </div>
    </div>
  )
}

export default Socials