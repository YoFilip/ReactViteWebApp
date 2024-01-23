import React from "react";
import Logos from "./Logos";
function Profile_box({ darkMode }) {
	return (
		<div className='profile-box'>
			<div className='profile-header'>
				<h1 className='header-text'>Header Title</h1>
			</div>
			
			<div className='profile-content'>
				<p className='text'>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
			</div>
			<div className='icon-bar'>
				<Logos darkMode={darkMode} />
			</div>
		</div>
	);
}

export default Profile_box;
