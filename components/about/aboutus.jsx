import React from 'react'
import Link from 'next/link'


const Aboutus = () => {
  return (
    <div>
 <div className="mb-16">
      <div className="bg-slate-100">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                
              </p>
            </div>
            <h2 className="max-w-lg mb-6 h-16 font-sans text-3xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-red-600 sm:text-5xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative "></span>
              </span>{' '}
              Groupe Itrane Voyage
            </h2>
            <p className="text-base font-xl text-gray-700 md:text-lg">
              Itrane Voyage est une compagnie marocaine de transport routier créée en 2004. Elle opère dans les services de transport de voyageurs et de messagerie. Le transport des voyageurs possède en 2022 un parc de 250 autocars. Itrane Voyage dessert 90 destinations à l'intérieur du territoire national.
            </p>
          </div>
          <div className="flex items-center sm:justify-center">
            <Link href='/' passHref>
                                <button className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-white ">Accueil</button>
                                </Link>
        
          </div>
        </div>
      </div>
      <div className="text-center bg-slate-100 pb-12 ">
      <h1 className="text-transparent max-w-lg  h-16 font-sans text-3xl leading-none tracking-tight font-bold bg-clip-text bg-gradient-to-br  from-yellow-500 to-red-600 sm:text-5xl md:mx-auto">Nos services</h1>
      </div>
      
      <div className="relative px-4 sm:px-0">
          
        <div className="absolute inset-0 bg-gray-100 h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-white hover:shadow-xl divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"  viewBox="0 0 24 24">
            <path xmlns="http://www.w3.org/2000/svg" d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
</svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
            TRANSPORT
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" >
            <path xmlns="http://www.w3.org/2000/svg" d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
</svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
            MESSAGERIE
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"  viewBox="0 0 24 24" >
            <path xmlns="http://www.w3.org/2000/svg" d="M17 5H3c-1.1 0-2 .89-2 2v9h2c0 1.65 1.34 3 3 3s3-1.35 3-3h5.5c0 1.65 1.34 3 3 3s3-1.35 3-3H23v-5l-6-6zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7-6.5H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z"/>
</svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
            TRANSPORT PERSONNEL
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Aboutus