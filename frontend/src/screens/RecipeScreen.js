import React, { useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
import PropTypes from 'prop-types';
import { Container, Typography, Box, Card, CardMedia, Stack, Tabs, Tab, Button, Skeleton } from '@mui/material'
import mockData from './data.json'
import IngredientsPanel from '../components/IngredientsPanel';
import InstructionsPanel from '../components/InstructionsPanel';
import ImageSkeleton from '../components/ImageSkeleton';
import Loading from '../components/Loading';
const FoodRecipe = () => {
    const [loading, setLoading] = useState(true)
    const [imgLoaded, setImgLoaded] = useState(false)
    const [food, setFood] = useState(null)
    const [currentTab, setCurrentTab] = useState(0)
    let navigate=useNavigate()
    const { id } = useParams()
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
            setFood(data)
            setLoading(false)
        })
        
        // setFood(mockData)
        // setLoading(false)

        return () => {
            setFood(null)
            setLoading(true)
        }
    }, [id])
    const handleChange = (event, newValue) => {
        setCurrentTab(newValue);
    }

    return (
        <>
            {loading ? <Loading/> :
                <Container maxWidth='md'>
                    <Button variant='outlined' sx={{mt:2}} onClick={(()=>navigate(-1))}><i className="fas fa-arrow-left"></i> GO BACK</Button>
                    {/* START FOOD HEADER */}
                    <Box display='block' sx={{ textAlign: 'center', pt: '30px' }}>
                        <Typography variant='h4' sx={{ display: 'block' }}>{food.title}</Typography>
                        <Box display='inline-flex' sx={{ gap: '15px' }}>
                            <Typography variant='body1' ><strong>{food.readyInMinutes}m</strong> prep</Typography>
                            <Typography variant='body1' ><strong>{food.servings}</strong> servings</Typography>
                        </Box>
                        <Box sx={{ height: '55vw', maxHeight: '500px', mt: '30px', overflow: 'hidden' }}>
                            <CardMedia
                                onLoad={() => setImgLoaded(true)}
                                component="img"
                                image={food.image}
                                alt={food.title}
                                sx={{ display: `${imgLoaded ? 'block' : 'none'}` }}
                            />
                            {!imgLoaded && <ImageSkeleton />}
                        </Box>
                    </Box>
                    {/* ENDFOOD HEADER */}
                    {/* START FOOD SUMMARY */}
                    <Box sx={{p: '30px 0' }}>
                        <Button disableElevation color='primary' variant='contained'><Typography color='background.main'><i className="fas fa-heart"></i> SAVE RECIPE</Typography></Button>
                    </Box>
                    {/* END FOOD SUMMARY */}
                    {/* START FOOD INGREDIENTS AND STEPS */}
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={currentTab} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Ingredient" {...a11yProps(0)} />
                            <Tab label="Method Steps" {...a11yProps(1)} />
                            <Tab label="Summary" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={currentTab} index={0}>
                        <IngredientsPanel ingredients={food.extendedIngredients} />
                    </TabPanel>
                    <TabPanel value={currentTab} index={1}>
                        <InstructionsPanel instructions={food.analyzedInstructions[0].steps} />
                    </TabPanel>
                    <TabPanel value={currentTab} index={2}>
                            <Typography variant='body2' dangerouslySetInnerHTML={{ __html: food.summary }} />
                    </TabPanel>
                    {/* END FOOD INGREDIENTS AND STEPS */}
                </Container>
            }
        </>
    )
}
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            // hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {/* {value === index && ( */}
            <Box sx={{ p: 3, display: `${value === index ? 'block' : 'none'}` }}>
                {children}
            </Box>
            {/* )} */}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default FoodRecipe
