import React from "react";

const Resume = () => {
	const personalInformation = {
		name: "Obi Ross",
		address: "9 Waidi Crescent, Lagos",
		phone: "07011128034",
		email: "obi75309@gmail.com",
		linkedin: "www.linkedin.com/in/obi-ross",
		github: "https://github.com/rossay36",
		portfolio: "https://obi-ross-potfolio.onrender.com",
	};

	const professionalSummary =
		"I am excited to apply for the Web Developer position at your esteemed company. With 3 years of hands-on experience as a Full Stack Web Developer, I have honed my skills in the MERN stack and am eager to contribute to your team. My background includes developing dynamic applications like Conn-World, a feature-rich social media platform, and creating a professional portfolio website to showcase my work. I am passionate about leveraging my skills in HTML, CSS, JavaScript, React, Redux, Node.js, and MongoDB to build innovative and user-centric web solutions. I am confident that my strong problem-solving abilities, commitment to best practices, and enthusiasm for continuous learning will make me a valuable asset to your team.";

	const technicalSkills = [
		"HTML",
		"CSS",
		"JavaScript",
		"React",
		"Redux",
		"Redux Toolkit",
		"RTK Query",
		"Node.js",
		"Express",
		"MongoDB",
		"Mongoose",
		"Git",
		"GitHub",
		"Vite",
		"Postman",
		"Firebase",
		"JWT",
		"Socket.io",
		"Tailwind CSS",
		"dotenv",
		"date-fns",
		"uuid",
		"cors",
		"cookie-parser",
		"Babel",
	];

	const projects = [
		{
			name: "Conn-World",
			url: "https://conn-world.onrender.com",
			technologies:
				"HTML, CSS, JavaScript, React, Redux Toolkit, RTK Query, Node.js, MongoDB, Mongoose, Express, Vite, Postman, Firebase, React-Icons, uuid, date-fns, dotenv, nodemon, cors, JWT, cookie-parser, Babel, Socket.io",
			description:
				"Developed a social media application featuring user authentication, real-time messaging, and a scalable architecture.",
			frontendCode: "GitHub - Conn-World Frontend",
			backendCode: "GitHub - Conn-World Backend",
		},
		{
			name: "Portfolio",
			url: "https://obi-ross-potfolio.onrender.com",
			technologies:
				"Tailwind CSS, HTML, CSS, JavaScript, React, Node.js, MongoDB, Mongoose, Express, Git, GitHub, dotenv, date-fns, uuid",
			description:
				"Created a professional portfolio to showcase my skills and projects. Includes a clean, responsive design with sections for project highlights and contact information.",
			frontendCode: "GitHub - Portfolio Frontend",
			backendCode: "GitHub - Portfolio Backend",
		},
	];

	const education = {
		institution: "LINAR School of Media & ITC",
		degree: "Certified Web Developer",
		graduationDate: "September 2023",
	};

	const reference = {
		Name: "Lawrence Osas Godwin",
		Position: "Chief Executive Officer",
		Company: "Osas Metal Company.",
		Phone: "+234 8065348563",
		Email: "Osasmetalcompany@gmail.com",
		Relationship: "Former Supervisor",
	};

	return (
		<div
			style={{
				fontFamily: "Arial, sans-serif",
				padding: "20px",
				border: "1px solid gray",
				minHeight: "100vh",
				maxWidth: "800px",
			}}
		>
			<h1>{personalInformation.name}</h1>
			<p>{personalInformation.address}</p>
			<p>Phone: {personalInformation.phone}</p>
			<p>
				Email:{" "}
				<a href={`mailto:${personalInformation.email}`}>
					{personalInformation.email}
				</a>
			</p>
			<p>
				LinkedIn:{" "}
				<a href={`https://${personalInformation.linkedin}`}>
					{personalInformation.linkedin}
				</a>
			</p>
			<p>
				GitHub:{" "}
				<a href={personalInformation.github}>{personalInformation.github}</a>
			</p>
			<p>
				Portfolio:{" "}
				<a href={personalInformation.portfolio}>
					{personalInformation.portfolio}
				</a>
			</p>

			<hr />

			<h2>Professional Summary</h2>
			<p style={{ lineHeight: 1.5, letterSpacing: "1px" }}>
				{professionalSummary}
			</p>

			<hr />

			<h2>Technical Skills</h2>
			<ul>
				{technicalSkills.map((skill, index) => (
					<li style={{ lineHeight: 1.5 }} key={index}>
						{skill}
					</li>
				))}
			</ul>

			<hr />

			<h2>Projects</h2>
			{projects.map((project, index) => (
				<div key={index}>
					<h3>
						<a href={project.url} target="_blank" rel="noopener noreferrer">
							{project.name}
						</a>
					</h3>
					<p>Technologies: {project.technologies}</p>
					<p>{project.description}</p>
					<p>
						{project.frontendCode} | {project.backendCode}
					</p>
				</div>
			))}

			<hr />

			<h2>Education</h2>
			<div>
				<h3>{education.degree}</h3>
				<p>
					{education.institution} - {education.graduationDate}
				</p>
			</div>

			<hr />

			<h2>Reference</h2>
			<div>
				<p>{reference.Name}</p>
				<p>{reference.Position}</p>
				<p>{reference.Company}</p>
				<p>{reference.Phone}</p>
				<p>{reference.Email}</p>
				<p>{reference.Relationship}</p>
			</div>
		</div>
	);
};

export default Resume;
