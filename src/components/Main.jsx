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
			title: "LazyCode",
			description:
				"LazyCode is my website that I created for programmers and people who are just starting their coding adventure. It's a place where you can learn programming languages such as HTML, CSS, JS, PHP, C++ and many others in an easy and fun way. I put together LazyCode to show what I can do - both in terms of website design and technical background. I created this site using HTML, CSS, JS and PHP. I've included lots of interesting features that will not only make it easier to learn, but also make it more interesting and interactive. LazyCode is a project that demonstrates my skills and experience in web development, as well as my commitment to helping others learn programming.",
			githubLink: "https://github.com/YoFilip/Lazycode.pl",
			liveDemoLink: "https://lazycode.projectsclassf.pl",
		},
		{
			title: "Expenses Graph",
			description:
				"Expenses Graph is an advanced web application, meticulously crafted for those who seek precision in expense tracking and financial management. This intuitive platform allows users to effortlessly log and scrutinize their financial transactions with interactive charts and detailed data visualizations, designed responsively using HTML and CSS. The application is tailored to accommodate various spending categories such as Home, Food, Entertainment, and Health, making it a comprehensive tool for personal finance oversight. The application boasts dynamic, real-time data representation powered by JavaScript, with AJAX for asynchronous web page updates, and Apexcharts.js for crafting vivid, interactive charts. On the backend, PHP takes charge, integrated with FPDF for seamless PDF generation, facilitating easy reporting and sharing. Data integrity and secure handling are ensured through a robust SQL-based MySQL database. Additionally, the application integrates a reliable API for currency rates from Exchangerate API, providing users with accurate, up-to-date financial data for a global perspective.",
			githubLink: "https://github.com/YoFilip/ExpensesGraph",
			liveDemoLink: "#",
		},

		{
			title: "StudentBase",
			description:
				"Studentbase is an intuitive web-based application designed to optimize the student enrollment process (Project created for Assessment to School). The platform simplifies the collection and management of student data, including personal information and school grades in subjects such as Polish, math and English. Additionally, it streamlines the selection of majors and schools. Key features include efficient registration of student data, selection of majors and schools, secure storage of data in a robust database, and efficient sorting of enrollment results using AJAX. Built using HTML, CSS for the frontend and PHP, SQL, JS for the backend, Studentbase combines functionality with user-friendly design.",
			githubLink: "https://github.com/YoFilip/studentbase",
			liveDemoLink: "#",
		},
		{
			title: "E-Canteen",
			description:
				"E-Canteen is revolutionizing the ZSEII school cafeteria experience, moving from traditional paper coupons to an advanced digital system. This intuitive platform allows students to effectively manage their electronic coupons, directly linking them to the day's offerings from the cafeteria menu. It's not just about digitizing the meal ordering process; it's about improving the entire dining experience through advanced technology. The system has been designed with detail and user interaction in mind. The front-end is done in HTML and CSS. PHP and JS are used to ensure that the core functionality is fast and dynamic, meeting the rapidly changing needs of users. The foundation of the system, the MySQLi database, is meticulously implemented for secure and efficient data management, reflecting the system's commitment to reliability and performance. E-Canteen is distinguished by its interactive features. The HTML5 QR code scanner processes coupons instantly, reflecting the system's commitment to speed and convenience. AJAX is used to refresh and update the user interface in real time, making every click count. The system doesn't stop there, it delves into advanced scripting with TYPESCRIPT CORE and ECMAScript 6 (ES6), greatly enhancing performance and offering a smooth user experience.",
			githubLink: "https://github.com/YoFilip/E-Canteen",
			liveDemoLink: "#",
		},
		{
			title: "My City",
			description:
				"My City is a mobile application project that I had the pleasure of creating with my classmates for the nationwide Hack Hearos 2022 competition. The goal of our project was to create an application that would facilitate mutual aid and foster community integration. The application was created using Xamarin Forms, using XAML for the frontend and C# for the backend. Our main goal was to allow users to share information about services available in their area by adding posts to the app. This way, anyone could find the help or services they need in their local community. As with LazyCode, in My City we wanted to create an app that not only serves its purpose, but is also engaging and interactive. Our app helps people connect within their local communities and more easily access services available near them. The My City project is not only a testament to our mobile programming skills, but also demonstrates our commitment to helping others and building community ties.",
			githubLink: "https://github.com/EFoxStudio/MojeMiasto",
			liveDemoLink: "#",
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
			  <h2>MY PROJECTS</h2>
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