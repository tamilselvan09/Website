import React from 'react'
import {Box, Stack, Typography} from '@mui/material';


import Logo from '../assets/images/Logo-1.png'
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
       
       <Stack gap="40px" alignItems= 'center' px="40px" pt="24px">
        <img src= {Logo} alt ="logo" width="200px" height="40px" />

          <Typography variant="5" pb="40px" mt="20px">
          <q> Today Matters People create success in their lives by focusing on today. It may sound trite, but today is the only time you have. It’s too late for yesterday. And you can’t depend on tomorrow. That’s why today matters.
</q> 

-John C. Maxwell
          </Typography>

       </Stack>

    </Box>
  )
}

export default Footer