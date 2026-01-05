import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import {Grid , Box} from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

function OrderDetails() {
  return (
    <div>
        <div>
            <h1 className='font-semibold text-xl py-7'>Delivery Address</h1>
        <AddressCard/>
        </div>

        <div>
            <OrderTracker activeStep={3}/>
        </div>

        <Grid container className="space-y-5">

            {[1,1,1,1,1].map((item) =>  <Grid item container className='shadow-xlmroundedmd p-5 border' sx={{alignItems:"center" , justifyContent:"space-between"}}>

                <Grid item sx={6}>

                    <div className='flex items-center space-x-4'>
                        <img className='w-[5rem h-[5rem] object-cover object-top' src="https://tse4.mm.bing.net/th/id/OIP.BqvRmF7WgPUqsVjGvl4AhQHaJ3?pid=Api&P=0&h=180" alt=""/>

                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color:pink</span> <span>Size:M</span></p>
                            <p>Seller: lineria</p>
                            <p>Rs. 1099</p>
                        </div>
                    </div>

                </Grid>


                <Grid item>

                    <Box sx={{color:deepPurple[500]}}>
                        <StarBorderIcon sx={{fontSize:"2rem"}} fontSize='2px' className='px-2'/>

                        <span>Rate & Review Product</span>
                    </Box>

                </Grid>
            </Grid>)}

           

        </Grid>
    </div>
  )
}

export default OrderDetails