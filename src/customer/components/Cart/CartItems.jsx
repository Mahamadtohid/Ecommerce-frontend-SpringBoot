import { Button, IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import React from 'react'

function CartItems() {
  return (
    <div className="p-5 shadow-lg border rounded-md">

      {/* MAIN ROW */}
      <div className="flex gap-5">

        {/* LEFT SIDE: IMAGE + BUTTONS */}
        <div className="flex flex-col items-center">

          {/* IMAGE */}
          <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
            <img
              className="w-full h-full object-cover rounded"
              src="https://5.imimg.com/data5/SELLER/Default/2021/2/FA/ED/NF/58754991/new-product.jpeg"
              alt="product"
            />
          </div>

          {/* QUANTITY CONTROLS */}
          <div className="flex items-center gap-3 mt-4">
            <IconButton size="small">
              <RemoveCircleOutlineIcon />
            </IconButton>

            <span className="px-4 py-1 border rounded-sm">
              3
            </span>

            <IconButton sx={{ color: "RGB(145 85 253)" }}>
              <AddCircleOutlineIcon />
            </IconButton>

            <Button
              size="lg" className='text-bold'
              sx={{ color: "RGB(145 85 253)", textTransform: "none" }}
            >
              Remove
            </Button>
          </div>


        </div>

        {/* RIGHT SIDE: PRODUCT INFO */}
        <div className="ml-5 space-y-1 text-left">

          <p className="font-semibold">
            Men Slim Mid Rise Black Jeans
          </p>

          <p className="opacity-70">
            Size: L, White
          </p>

          <p className="opacity-70 mt-2">
            Seller: Crishtaliyo 2fashil
          </p>

          {/* PRICE */}
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹199</p>
            <p className="opacity-50 line-through">₹211</p>
            <p className="text-green-600 font-semibold">5% OFF</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CartItems
