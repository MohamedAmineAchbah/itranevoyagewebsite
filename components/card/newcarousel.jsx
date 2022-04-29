import React from 'react'

const Newcarousel = () => {
  return (
    <div>
        <div className="carousel w-fit rounded-md shadow-2xl ">
  <div id="slide1" className="carousel-item  relative w-full">
    <img src="https://www.markoub.ma/Content/front/img/Societes/Itrane/3.jpg" className="w-full"/>  
    <div className="absolute flex  justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn bg-orange-200 btn-circle">❮</a> 
      <a href="#slide2" className="btn bg-orange-200 btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://www.markoub.ma/Content/front/img/Societes/Itrane/2.jpg" className="w-full"/>  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn bg-orange-200 btn-circle">❮</a> 
      <a href="#slide3" className="btn bg-orange-200 btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://www.markoub.ma/Content/front/img/Societes/Itrane/1.jpg" className="w-full"/>  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn bg-orange-200 btn-circle">❮</a> 
      <a href="#slide4" className="btn bg-orange-200 btn-circle">❯</a>
    </div>
  </div> 
</div>
    </div>
  )
}

export default Newcarousel