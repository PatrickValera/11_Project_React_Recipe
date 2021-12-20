import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
const Footer = () => {
	return (
		<Box sx={{ bgcolor: "background.paper", p: 6 }} component='footer'>
			<Typography variant='h6' align='center' gutterBottom>
				Footer
			</Typography>
			<Typography
				variant='subtitle1'
				align='center'
				color='text.secondary'
				component='p'
			>
				Built with Spoonacular's API
			</Typography>
			<Copyright />
		</Box>
	);
};
function Copyright() {
	return (
		<Typography variant='body2' color='text.secondary' align='center'>
			{"Made by "}
			<MuiLink color='inherit' href='http://www.patrickvalera.com/'>
				Patrick Valera
			</MuiLink>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}
export default Footer;
