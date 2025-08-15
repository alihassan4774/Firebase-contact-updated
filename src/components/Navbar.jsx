import React from 'react'

const Navbar = () => {
  return (
<div className="flex justify-center items-center gap-4">
  <div
    className="
      my-4 flex h-[60px] items-center justify-center gap-2  rounded-lg bg-white font-medium
      px-10 sm:px-10 md:px-20
      flex-wrap sm:flex-nowrap text-center
    "
  >
    {/* Image responsive size */}
    <img
      src="firebase.png"
      className="w-6 h-6 sm:w-8 sm:h-8 md:w-auto md:h-auto"
    />

    {/* Text responsive size */}
    <h1 className="text-sm sm:text-lg md:text-xl">Firebase Contact App</h1>
  </div>
</div>

  )
}

export default Navbar