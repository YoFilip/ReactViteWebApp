import React from "react";
import Profile_box from "./Profile_box";
import Navbar_buttons from "./Navbar_buttons";
import ProjectBox from "./ProjectBox";
import themeIconLight from "../assets/white_mode_logo.png";
import themeIconDark from "../assets/dark_mode_logo.png";

function Main() {
	const [darkMode, setDarkMode] = React.useState(false);

	function toggleTheme() {
		setDarkMode(!darkMode);
		const body = document.body;
		if (body) {
			body.classList.toggle("body-white-mode", darkMode);
			body.classList.toggle("body-dark-mode", !darkMode);
		}
	}
	const projects = [
		{
			title: "Header 2",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			link1: "#",
			link2: "#",
		},
		{
			title: "Header 3",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			link1: "#",
			link2: "#",
		},

		{
			title: "Header 3",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			link1: "#",
			link2: "#",
		},
		{
			title: "Header 4",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			link1: "#",
			link2: "#",
		},



	];

	return (
		<div className={`container ${darkMode ? 'dark-mode' : ''}`}>
			<div className='box box1'>
				<Navbar_buttons />
				<button className='theme-toggle-button' id="theme-toggle-button-mobile" onClick={toggleTheme}>
					<h2 className="text">Dark Mode</h2><img src={darkMode ? themeIconLight : themeIconDark} alt='Toggle theme' />
				</button>
				<Profile_box darkMode={darkMode} />
				<Navbar_buttons />
			</div>
			<div className='box box2' id="box2">
				<div className='projects-header text'>
					<h2>Header Title</h2>
					<button className='theme-toggle-button' onClick={toggleTheme}>
						<img src={themeIconLight} alt='Toggle theme' />
					</button>
				</div>
				<div className='project-container'>
					{projects.map((project) => (
						<ProjectBox
							key={project.title}
							title={project.title}
							description={project.description}
							githubLink={project.githubLink}
							liveDemoLink={project.liveDemoLink}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Main;