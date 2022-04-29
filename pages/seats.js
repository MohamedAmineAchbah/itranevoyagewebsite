import React, { useState, useEffect } from 'react'
import Seatpick from 'components/seat/seatpick'
import Navi from 'components/navbar/navi'
import Footies from 'components/footer/footies'
import Steps from 'components/ticket/steps'
import { useRouter } from 'next/router'
import TopTripBanner from 'components/toptripbanner'

const Seats = () => {
  const router = useRouter();
  const [seatsData, setSeatsData] = useState([])
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.query.schedule_id) {
      setLoading(true)
      fetch(`/api/getSeatsForSchedule?schedule_id=${router.query.schedule_id}`)
        .then(res => res.json())
        .then(data => {
          setSeatsData(data)
          setLoading(false)
        })
    }
  }, [router.query.schedule_id]);

  return (
    <div>
     
      <TopTripBanner />
      <Steps />
      {loading ?
        "Loading..." :
        <div className='flex flex-col justify-center py-12 my-12  items-center'>
          <h1 className='text-center text-3xl font-bold my-12 text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-red-600'>Veuillez choisir votre siège</h1>
          <Seatpick  seatsData={seatsData} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
          <button
            onClick={() => {
              router.push(`/bookinginfo?schedule_id=${router.query.schedule_id}&selectedSeats=${selectedSeats.join(",")}`)
            }}
          >Continuez</button>
        </div>}
      
    </div>
  )
}

export default Seats