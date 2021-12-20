import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function QueryScreen({ history }) {
	const [foodList, setFoodList] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const searchFood = () => {
		axios
			.get("https://api.spoonacular.com/recipes/complexSearch", {
				params: {
					query: searchInput,
					number: 1,
					offset: 0,
					apiKey: "2647dec450164fb4a189c2996ddc9983",
				},
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				setFoodList(response.data.results);
			});
	};
	return (
		<>
			<main>
				{/* Hero unit */}
				<Box
					sx={{
						bgcolor: "background.paper",
						pt: 4,
						pb: 2,
					}}
				>
					<Container maxWidth='sm'>
						<Typography
							component='h1'
							variant='h3'
							align='center'
							color='text.primary'
							gutterBottom
						>
							Find Great Recipes For Cooking
						</Typography>
						<Typography
							variant='h5'
							align='center'
							color='text.secondary'
							paragraph
						></Typography>
						<Stack
							sx={{ pt: 4 }}
							direction='row'
							spacing={2}
							justifyContent='center'
						>
							<TextField
								value={searchInput}
								onChange={(e) => setSearchInput(e.target.value)}
								fullWidth
								label='Food Name'
								id='fullWidth'
							/>
							<Button onClick={searchFood} variant='outlined'>
								Search
							</Button>
						</Stack>
					</Container>
				</Box>
				<Container sx={{ py: 8 }} maxWidth='md'>
					{/* End hero unit */}
					<Grid container spacing={4}>
						{foodList.map((food) => (
							<Grid item key={food} xs={12} sm={6} md={4}>
								<Card
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
									}}
								>
									<CardMedia
										component='img'
										sx={
											{
												// 16:9
											}
										}
										image={food.image}
										alt='random'
									/>
									<CardContent sx={{ flexGrow: 1 }}>
										<Typography
											gutterBottom
											variant='h5'
											component='h2'
										>
											{food.title}
										</Typography>
										{/* <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography> */}
									</CardContent>
									<CardActions>
										<Link to={`/recipe/${food.id}`}>
											<Button size='small'>View</Button>
										</Link>
										{/* <Button size="small">Add to list</Button> */}
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
		</>
	);
}
