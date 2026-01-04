import React from 'react'
import CartItems from './CartItems'
import { Button } from '@mui/material'

function Cart() {
  return (
    <div>

      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>
          {[1, 1, 1, 1, 1].map((item) => <CartItems />)}
        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>

          {/* <div className='border'>
            <p className='uppercase font-bold opacity-60 pb-4 '>Price details</p>
            <hr />
            <div className='space-y-3 font-semibold mb-10'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span> ₹4697</span>
              </div>

              <div className='flex justify-between pt-3 '>
                <span>Discount</span>
                <span className='text-green-600'> -₹3419</span>
              </div>

              <div className='flex justify-between pt-3'>
                <span>Delivery Charge</span>
                <span className='text-green-600'> Free</span>
              </div>

              <div className='flex justify-between pt-3 font-bold'>
                <span>Total Amount</span>
                <span className='text-green-600'> ₹1275</span>
              </div>

            </div>
            <Button variant='contained' className='w-full' sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}>
              Checkout

            </Button>
          </div> */}

          <div className="border rounded-md p-5 shadow-sm bg-white">

            {/* HEADER */}
            <p className="uppercase text-sm font-bold text-gray-600 tracking-wide">
              Price Details
            </p>

            <div className="h-px bg-gray-200 my-4" />

            {/* PRICE BREAKUP */}
            <div className="space-y-4 text-sm">

              <div className="flex justify-between text-gray-700">
                <span>Price</span>
                <span>₹4,697</span>
              </div>

              <div className="flex justify-between text-gray-700">
                <span>Discount</span>
                <span className="text-green-600">−₹3,419</span>
              </div>

              <div className="flex justify-between text-gray-700">
                <span>Delivery Charges</span>
                <span className="text-green-600 font-medium">FREE</span>
              </div>

              <div className="h-px bg-gray-200 my-2" />

              {/* TOTAL */}
              <div className="flex justify-between text-base font-semibold text-gray-900">
                <span>Total Amount</span>
                <span>₹1,275</span>
              </div>

            </div>

            {/* CTA */}
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                py: "0.8rem",
                fontWeight: 600,
                bgcolor: "#9155fd",
                "&:hover": { bgcolor: "#7e3ff2" }
              }}
            >
              Checkout
            </Button>

          </div>

        </div>

      </div>


    </div>
  )
}

export default Cart