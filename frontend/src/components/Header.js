import React from "react";
import { AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<MuiAppBar position='relative'>
				<Toolbar>
					{/* <CameraIcon sx={{ mr: 2 }} /> */}<Link to='/main/search'>
					<Typography variant='h4'color='background.main' fontWeight='600' fontFamily='Dosis' noWrap>
						Food Recipes
					</Typography></Link>
				</Toolbar>
			</MuiAppBar>
		</>
	);
};

export default Header;
