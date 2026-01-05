import React from 'react'
import {Grid} from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

function OrderCard() {
    const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

            <Grid item sx={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-{0rem} h-{0rem} object-cover object-top' src="https://tse4.mm.bing.net/th/id/OIP.BqvRmF7WgPUqsVjGvl4AhQHaJ3?pid=Api&P=0&h=180"/>
                    <div className='ml-5 space-y-2'>
                        <p className=''>
                            Modern Stylish Blazer For Men
                        </p>
                        <p className='opacity-50 text-xs'>Size:M</p>
                        <p className='opacity-50 text-xs '>Color:Black</p>
                    </div>
                </div>

            </Grid>

            <Grid item xs={2}>
                <p className='font-semibold'>₹1299</p>
            </Grid>

            <Grid item xs={4}>
               {true && <div>
               
               <p className='font-semibold'>
                <AdjustIcon sx={{width:"15px" , height:"15px" }} className='text-green-600 mr-2 text-sm'/>
                    <span>
                    Delivered on 25th Dec 
                    </span></p>

                    <p className='text-xs'></p>
                    </div>}

                {false && <p>

                    <sapn>
                        Expected Delivery
                    </sapn>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard