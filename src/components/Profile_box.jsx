import React from "react";
import Logos from "./Logos";
function Profile_box({ darkMode }) {
	return (
		<div className='profile-box'>
			<div className='profile-header'>
				<h1 className='header-text'>Hi, I'm Filip</h1>
			</div>
			
			<div className='profile-content'>
				<p className='text'>
					My name is Filip, I am 17 years old and I want to become a high-end
					front-end developer. I am currently honing my skills at ZSEII in
					Sosnowiec. My adventure with web development started eight years ago
					and since then I have been learning on my own. I am interested in the
					latest Internet technologies and artificial intelligence. When it
					comes to coding, I'm good with many languages and tools, such as
					React, HTML, CSS, JavaScript, C++, PHP and Java. But I don't plan to
					stop there! I'm also diving into React and React Native. My goal? To
					create professional websites and mobile applications.
				</p>
			</div>
			<div className='icon-bar'>
				<Logos darkMode={darkMode} />
			</div>
		</div>
	);
}

export default Profile_box;
