import React, { useState } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from '@mui/material'
import { Link } from "react-router-dom";
import ImageSkeleton from './ImageSkeleton';
const FoodCard = ({ food }) => {
    const [loading, setLoading] = useState(true)
    const [imgLoaded, setImgLoaded] = useState(false)
    return (
        <Card
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                background:'background.paper'
            }}
        >
            <Box display='flex' sx={{ backgroundColor: '' }}>
                <CardMedia
                    hidden
                    component='img'
                    image={food.image}
                    alt={food.title}
                    sx={{objectFit:'cover',  display: `${!imgLoaded ? 'none' : 'block'}` }}
                    onLoad={() => setImgLoaded(true)}
                />
                {/* <ImageSkeleton/> */}
                {!imgLoaded && <ImageSkeleton />}
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                    gutterBottom
                    variant='subtitle1'
                    component='h2'
                >
                    {food.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/recipe/${food.id}`}>
                    <Button size='small'>View</Button>
                </Link>
                {/* <Button size="small">Add to list</Button> */}
            </CardActions>
        </Card>
    )
}

export default FoodCard
