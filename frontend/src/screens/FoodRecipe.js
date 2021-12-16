import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, Typography, Box, Card, CardMedia, Stack, Button } from '@mui/material'

const FoodRecipe = () => {
    const [loading,setLoading]=useState(true)
    const [food,setFood]=useState(null)
    const {id}=useParams()
    
    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false`,{
        params:{
            apiKey:'2647dec450164fb4a189c2996ddc9983'
        },
        headers:{
            'Content-Type':'application/json'
        }
        })
        .then(({data})=>{
            console.log(data)
            setFood(data)
            setLoading(false)
        })
        return () => {
            setFood(null)
            setLoading(true)
        }
    }, [id])
    return (
        <>
        {loading?<h3>Loading</h3>:
        <Container maxWidth='lg'>
            <Box display='flex' sx={{flexWrap:'wrap',alignItems:'center'}}>
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={food.image}
                        alt={food.title}
                    />
                </Card>
                <Box display='block'>
                    <Typography variant='h1' >{food.title}</Typography>
                    <Typography variant='body1' >{food.title}</Typography>
                </Box>
            </Box>
            <Stack spacing={2}
                direction='column'
            >
                {food.analyzedInstructions[0].steps.map((instruction)=>(
                    <Typography variant='body2' key={instruction.number}>{instruction.number}. {instruction.step}</Typography>
                ))}
            </Stack>
        </Container>
        }
        </>
    )
}

export default FoodRecipe
