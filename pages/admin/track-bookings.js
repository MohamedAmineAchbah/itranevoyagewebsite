import React, { useEffect, useState } from 'react'
import AdminLayout from 'adminLayout'


const detailData = [
  ["Name", "name"],
  ["Email", "email"],
  ["City", "city"],
  ["Telephone", "phone"],
  ["Pickup", "src"],
  ["Destination", "dest"],
  ["Date", "dept_date"],
  ["Start Time", "start_time"],
  ["End Time", "end_time"],
  ["Start Station", "start_station"],
  ["End Station", "end_station"],
  ["Price", "price"],
  ["Seats", "seats"],
  ["Address", "address"],
  ["State", "state"],
  ["Zip", "zip"],
]

export default function TrackBookings() {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/getAllBookings")
      .then(res => res.json())
      .then(data => {
        setBookings(data)
        setLoading(false);
      }).catch(err => {
        console.log(err)
        setLoading(false);
      });
  }, [])

  return (
    <AdminLayout isForAdmin>
      <h1 className="mb-6 text-center h-24 my-24  font-sans text-2xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-red-600 sm:text-4xl md:mx-auto">Bookings</h1>
      <div tabindex="0" class="collapse">
        <input type="checkbox" class="peer" />
        <div class="collapse-title border mb-6 border-orange-400 rounded-md font-semibold text-2xl py-6 text-center w-1/3 place-self-center text-slate-700 ">
          Bookings Via Credit Card
        </div>
        <div class="collapse-content text-gray-800">
          <table className="table  table-compact border border-gray-600 w-full">
            <thead>
              <tr>
                <th className="bg-orange-500 text-white" scope="col">#</th>
                {detailData.map((detail, index) => (
                  <th
                    className="border border-slate-300 bg-orange-500  text-white"
                    scope="col"
                    key={index}
                  >
                    {detail[0]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bookings
                .filter((i) => i.payment_mode === "card")
                .map((booking, index) => (
                  <tr key={index}>
                    <th scope="row"> {index + 1}</th>
                    {detailData.map((detail, index) => (
                      <td className="border border-slate-300 " key={index}>
                        {booking[detail[1]]}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className='my-12 py-12'>
        <div tabindex="1" class="collapse">
        <input type="checkbox" class="peer" />
        <div class="collapse-title border border-orange-400 mb-6  rounded-md font-semibold text-2xl py-6 text-center w-1/3 place-self-center text-slate-700 ">
          Bookings Via Cash and Confirm
        </div>

        <div class="collapse-content text-gray-800">
                <table className="table border border-gray-600 table-compact w-screen">
                  <thead>
                    <tr>
                      <th className='bg-orange-400 text-white' scope="col">#</th>
                      {detailData.map((detail, index) => (
                        <th className="border border-slate-300 bg-orange-400 text-white" scope="col" key={index}>{detail[0]}</th>
                      ))}
                      <th className="border border-slate-300 bg-orange-400 text-white" scope="col">Paid</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.filter(i => i.payment_mode === "cash").map((booking, index) => (
                      <tr  key={index}>
                        <th  scope="row">{index + 1}</th>
                        {detailData.map((detail, index) => (
                          <td className='border border-slate-300' key={index}>{booking[detail[1]]}</td>
                        ))}
                        <td><PaidCheckBox booking_id={booking["booking_id"]} isPaid={booking["paid_if_cash"]} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
        </div>
        </div>
      </div>
    </div>
    </AdminLayout>
  )
}


const PaidCheckBox = ({ booking_id, isPaid }) => {
  const [isChecked, setIsChecked] = useState(isPaid);

  const handleToggle = async (e) => {
    setIsChecked(e.target.checked);
    let res = await fetch("/api/toggleBookingPaid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: booking_id
    });
  }

  return (
    <input type="checkbox" className="form-check-input" checked={isChecked} id={booking_id} onChange={handleToggle} />
  )
}