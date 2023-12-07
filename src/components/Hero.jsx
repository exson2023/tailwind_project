import React from 'react'
import HeroImg from '../assets/971.jpg'
const Hero = () => {
    return (
        <main className="flex flex-col justify-center items-center p-6 sm:flex-row">
            <div>
                <h1 className="text-4xl text-center sm:text-left font-semibold  ">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
            <p className="text-slate-500 text-center sm:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore hic voluptas ipsa. Dolore ipsam beatae praesentium fugit. Maiores illum excepturi sed. Consequatur hic a quas itaque corrupti repudiandae saepe?</p>
            </div>
            <img src={HeroImg} alt="Laptop" className="w-1/2" />
        </main>
    )
}

export default Hero