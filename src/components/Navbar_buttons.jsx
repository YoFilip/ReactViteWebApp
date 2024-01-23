import React from "react";
import href1 from "./Main";
import href2 from "./Main";

function Navbar_buttons() {
	return (
		<div className='download-buttons'>
			<a href={href1} className='download-button text' download=''>
				Titel-Button-1
			</a>
			<a href={href2} className='download-button text' download=''>
				Titel-Button-2
			</a>
		</div>
	);
}

export default Navbar_buttons;
