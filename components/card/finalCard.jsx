import React from 'react'
import Carousel from './carousel'
import Card from './card'
import Newcarousel from './newcarousel'

const FinalCard = () => {
  return (
    <div className="xl:flex sm:grid pt-12">
            
            <div className=" w-11/12  mr-24 pl-20 my-12 self-center  ">
                 <Newcarousel/>
            </div>
            <div className=" ">
                <Card/>
            </div>
    </div>
  )
}

export default FinalCard