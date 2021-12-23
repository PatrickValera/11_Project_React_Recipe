import React from "react";
import { AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<MuiAppBar position='relative'>
				<Toolbar>
					{/* <CameraIcon sx={{ mr: 2 }} /> */}<Link to='/main/search'>
					<Typography variant='h5'color='background.main'  noWrap>
						Food Recipes
					</Typography></Link>
				</Toolbar>
			</MuiAppBar>
		</>
	);
};

export default Header;
