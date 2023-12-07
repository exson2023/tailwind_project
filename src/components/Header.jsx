import React from 'react'

const Header = () => {
  return (
    <header className="bg-amber-500 text-white sticky top-0 z-10 ">
      <section className="flex p-1 px-3 items-center justify-between">
        <h1 className="text-4xl">
          <a href="/">
            LOGO
          </a>
        </h1>

        <nav className="space-x-8">
          <a href="#features" className="hover:text-gray-500 transition duration-300">Features</a>
          <a href="" className="hover:text-gray-500 transition duration-300">About Us</a>
        </nav>
      </section>
    </header>
  )
}

export default Header