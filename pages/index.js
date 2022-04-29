
require('dotenv').config()

import FinalCard from 'components/card/finalCard'
import Features from 'components/card/features'
import Testi from 'components/hero/realHero'
import Testimo from 'components/testimonial/testimonial'




export default function Home() {
  8
  return (
    <div>
      
      <Testi />
      <h2 className="mb-6 pt-12 text-center h-42 my-24  font-sans text-3xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-red-600 sm:text-5xl md:mx-auto">Réservez votre billet en 3 étapes simples</h2>
      <FinalCard />
      <Features />
      <Testimo />
      


    </div>

  )
}
