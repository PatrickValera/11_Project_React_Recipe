import React from 'react'
import {Skeleton} from '@mui/material'
const ImageSkeleton = () => {
    return (
        <>
            <Skeleton animation='wave' color='#3B3B3B'variant="rectangular" sx={{display:'flex', minHeight:'150px'}}width='100%' height='100%'/>
        </>
    )
}

export default ImageSkeleton
