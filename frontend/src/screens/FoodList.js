
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link as LinkMui} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {TextField} from '@mui/material'
import {useState}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'



const theme = createTheme();

export default function FoodList() {
    const [foodList,setFoodList]=useState([])
    const [searchInput,setSearchInput]=useState('')
    const searchFood=()=>{
        console.log(searchInput)
        axios.get('https://api.spoonacular.com/recipes/complexSearch',{
            params:{
                query:searchInput,
                number:6,
                offset:0,
                apiKey:'c99035ed6b4c4c9fbe882952db26e62c'
            },
            headers:{
                'Content-Type':'application/json'
            }
        }).then((response)=>{
            console.log(response)
            setFoodList(response.data.results)
        })

    }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            Recipe Finder
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 4,
            pb: 2,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Find the Recipes you Need
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <TextField value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} fullWidth label="Food Name" id="fullWidth" />
              <Button onClick={searchFood} variant="outlined">Search</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {foodList.map((food) => (
              <Grid item key={food} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                    }}
                    image={food.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {food.title}
                    </Typography>
                    {/* <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography> */}
                  </CardContent>
                  <CardActions>
                    <Link to="/recipe">
                      <Button size="small">View</Button>
                    </Link>
                    {/* <Button size="small">Add to list</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>



      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
         Built with Spoonacular's API
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Made by '}
      <LinkMui color="inherit" href="http://www.patrickvalera.com/">
        Patrick Valera
      </LinkMui>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}