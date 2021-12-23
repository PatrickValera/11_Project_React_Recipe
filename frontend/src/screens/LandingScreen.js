import React from "react";
import { useNavigate } from "react-router-dom";
const LandingScreen = () => {
	let navigate=useNavigate()
	return (
	<div className='landing-page'>
		<button className='start-button' onClick={()=>navigate('main/search')}>GET STARTED</button>
		<div className='overlay'/>
		<img className='landing-page-image' src={'https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='food-background'/>
	</div>)
};

export default LandingScreen;
