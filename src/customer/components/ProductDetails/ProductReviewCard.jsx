import React from 'react'
import {Avatar, Grid , Box , Rating} from '@mui/material'

function ProductReviewCard() {
  return (
    <div>
        <Grid container spacing={2} gap={3}>

            <Grid item xs={1}>

                <Box>
                    <Avatar className="text-white" sx={{width:56 , height:56 ,bgcolor:"#9155fd"}}>R</Avatar>
                </Box>

            </Grid>


            <Grid item xs={9}>
                <div className='space-y-2'>
                    <p className="font-semibold text-lg">Raam</p>
                    <p className='opacity-70'>April 5, 2023</p>
                </div>
            


            <Rating value={3.45} name="half-rating" readOnly/>
            <p>Nice Product , i love this shirt
            </p>
            </Grid>
            

        </Grid>
    </div>
  )
}

export default ProductReviewCard