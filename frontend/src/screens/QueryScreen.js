import React, { useState, useEffect, useRef } from "react";
import { Container, Box, Stack, Grid, Grow } from "@mui/material";
import { TextField, Typography, Button, Pagination } from "@mui/material";
import { useSearchParams } from 'react-router-dom'
import axios from "axios";
import FoodCard from '../components/FoodCard'
import Loading from "../components/Loading";
import mockdata from './datafoods.json'
export default function QueryScreen() {
	const [params, setParams] = useSearchParams()
	const [error,setError]=useState('')
	const [foodList, setFoodList] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [loading, setLoading] = useState(false)
	const [page, setPage] = useState(1)
	const [pageCount, setPageCount] = useState(1)
	const [pageLoaded,setPageLoaded]=useState(false)
	const prevSearch=useRef()
	const searchFood =(e) => {
		if(!searchInput)return
		prevSearch.current=searchInput
		setLoading(true)
		setFoodList([])
		setParams({ name: searchInput, page: '1' })
		// MOCK DATA
		// setParams({ name: 'mockdata', page: '1' })
		// END DATA

	};
	const onEntrPress = (e) => {
		if (e.key === 'Enter') searchFood()
	}
	const hanldePageChange = (e, value) => {
		setPage(value)
		setParams({ name: searchInput, page: value })
		console.log(value)
	}
	useEffect(() => {
		if (params.get('name')) {
			axios
				.get("https://api.spoonacular.com/recipes/complexSearch", {
					params: {
						query: params.get('name'),
						number: 6,
						offset: 6 * (page - 1),
						apiKey: "2647dec450164fb4a189c2996ddc9983",
					},
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((response) => {
					if(response.data.totalResults===0&&searchInput)setError(`No Results for ${searchInput}`)
					else{
						setError("")
						setPageCount((Math.ceil(response.data.totalResults / 6)))
						setFoodList(response.data.results);
					}
				
			setLoading(false)

				});
		}

		else {
			setFoodList([])
			setSearchInput('')
		}
		// MOCK DATA
		// if (params.get('name')) setFoodList(mockdata.results)
		setLoading(false)
		// END DATA
		return () => {

		}
	}, [params])
	useEffect(()=>{
		setPageLoaded(true)
	},([]))
	return (
		<Box sx={{ backgroundColor: 'background.main', minHeight: '100vh' }}>
			<Container sx={{ py: 8 }} maxWidth='md'>
				{/* Head and Search */}
				<Grow in={pageLoaded}>
				<Box
					sx={{
						pt: 4,
						pb: 2,
					}}
				>
					<Container maxWidth='sm'>
						<Typography
							component='h1'
							variant='h4'
							align='center'
							color='text.primary'
							gutterBottom
						>
							Find Your Next Dish Recipe
						</Typography>
					
						<Stack
							sx={{ pt: 4, mb:1 }}
							direction={{xs:'column',sm:'row'}}
							spacing={2}
							justifyContent='center'
						>
							<TextField
								value={searchInput}
								onChange={(e) => setSearchInput(e.target.value)}
								onKeyDown={onEntrPress}
								autoComplete='off'
								fullWidth
								label='Search Recipe'
								id='fullWidth'
							/>
							{/* <Link to={{ path: '/search', search: `?name=${searchInput}` }}> */}
							<Button disabled={loading} onClick={searchFood} variant='outlined'>
								{loading ? "loading" : 'Search'}
							</Button>
							{/* </Link> */}
						</Stack>
						<Typography
							variant='h6'
							align='center'
							color='error'
							paragraph
						>{error&&error}</Typography>
					</Container>
				</Box>
				</Grow>
				{/* Head and Search End */}
				{/* Results Container */}
				{loading && <Loading/>}
				{foodList.length > 0 &&!loading&&
					<Box display='flex' sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
						<Grid container spacing={4}>
							{foodList.map((food) => (
								<Grid item key={food.title} xs={6} sm={6} md={4}>
									<FoodCard food={food} />
								</Grid>
							))}
						</Grid>
						<Pagination count={pageCount} page={page} onChange={hanldePageChange} color="primary" sx={{ pt: '40px' }} />

					</Box>}
				{/* Results Container End */}

			</Container>
		</Box>
	);
}
