import React from "react";
import { AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<MuiAppBar position='relative'>
				<Toolbar>
					{/* <CameraIcon sx={{ mr: 2 }} /> */}
					<Typography variant='h6' color='inherit' noWrap>
						<Link to='/'>Great Recipes</Link>
					</Typography>
				</Toolbar>
			</MuiAppBar>
		</>
	);
};

export default Header;
