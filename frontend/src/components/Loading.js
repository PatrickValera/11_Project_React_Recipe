import { Box, Typography } from '@mui/material'
import React from 'react'

const Loading = () => {
    return (
        <Box sx={{width: '100%', minHeight:'40px',textAlign:'center'}}>
             <Typography variant="h1" color='primary'><i class="fas fa-circle-notch fa-spin"></i></Typography> 
        </Box>
    )
}

export default Loading
