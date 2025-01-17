import { useState } from 'react'


function App() {

  return (
    <>
      <div className="w-full px-4 py-5 ">
        <header className="flex justify-between items-center max-w-7xl mx-auto">

          <h1 className="text-xl font-bold text-white">P/</h1>


          <nav className="flex space-x-6 text-lg">
            <a
              href="#"
              className="text-white hover:text-red-600 transition-colors duration-300 ease-in-out relative"
            >
              <span className="after:content-[''] after:block after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                Home
              </span>
            </a>

            <a
              href="#"
              className="text-white hover:text-red-600 transition-colors duration-300 ease-in-out relative"
            >
              <span className="after:content-[''] after:block after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                About
              </span>
            </a>

            <a
              href="#"
              className="text-white hover:text-red-600 transition-colors duration-300 ease-in-out relative"
            >
              <span className="after:content-[''] after:block after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                Skills
              </span>
            </a>

            <a
              href="#"
              className="text-white hover:text-red-600 transition-colors duration-300 ease-in-out relative"
            >
              <span className="after:content-[''] after:block after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                Projects
              </span>
            </a>

            <a
              href="#"
              className="text-white hover:text-red-600 transition-colors duration-300 ease-in-out relative"
            >
              <span className="after:content-[''] after:block after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                Contact
              </span>
            </a>

          </nav>
        </header>
      </div>









    </>
  )
}

export default App
