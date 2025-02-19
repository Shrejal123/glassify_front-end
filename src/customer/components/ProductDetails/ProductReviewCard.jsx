import { Avatar, Box, Grid2, Rating} from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid2 container spacing={2} gap={3}>
               <Grid2 item xs={1}>
                  <Box>
                    <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155fd"}}>R</Avatar>
                  </Box>
               </Grid2>

               <Grid2 item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg' >Raam</p>
                        <p>Dec 10,2024</p>
                    </div>
                </div>

                <Rating value={4} name='half-rating' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id exercitationem quas tempore.</p>
          
               </Grid2>
            
        </Grid2>
    
    </div>
  )
}

export default ProductReviewCard
