import React from 'react'

const Features = () => {
  return (
   <section className="p-6" id="features">
    <h2 className="text-3xl text-emerald-600 pb-6">
        Features
    </h2>

    <ul className="flex mx-auto gap-8 justify-between">
        <li className="flex flex-col text-center border rounded w-1/4 px-4 py-6">
            <h3 className="text-lg font-medium">Feature 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </li>
        <li className="flex flex-col text-center border rounded w-1/4 px-4 py-6">
            <h3 className="text-lg font-medium">Feature 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </li>
        <li className="flex flex-col text-center border rounded w-1/4 px-4 py-6">
            <h3 className="text-lg font-medium">Feature 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </li>
    </ul>

   </section>
  )
}

export default Features