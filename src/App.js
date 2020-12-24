import React, { Component } from "react"

import "./App.css"

const ProjectTypeSelector = props => (
	<div className="type-selector">
		<button onClick={() => props.onClick("")}>All</button>
		<button onClick={() => props.onClick("responsive")}>Responsive</button>
		<button onClick={() => props.onClick("javascript")}>JavaScript</button>
		<button onClick={() => props.onClick("react")}>React</button>
	</div>
)

const ProjectCards = props => (
	<div className="project-set">
		{props.displayedProjects.map(project => (
			<div className="card" key={project.id}>
				<h3>
					{project.title} (project #{project.id})
				</h3>
				<img
					src={`img/${project.imageUrl}`}
					alt={project.title}
					style={{ width: "300px" }}
				/>
			</div>
		))}
	</div>
)

const Breadcrumbs = props => {
	const nbBreadcrumbs = Math.ceil(props.selectedProjects.length / 3)
	let buttons = []
	for (let i = 1; i <= nbBreadcrumbs; i++) {
		buttons.push(
			<button key={i} onClick={() => props.onClick(i)}>
				Page {i}
			</button>
		)
	}
	return buttons
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			projects: [
				{
					id: 1,
					title: "Edie Homepage",
					imageUrl: "edie-homepage.png",
					type: "responsive"
				},
				{
					id: 2,
					title: "Checkout Page",
					imageUrl: "checkout-page.png",
					type: "react"
				},
				{
					id: 3,
					title: "Recipe Page",
					imageUrl: "recipe-page.png",
					type: "responsive"
				},
				{
					id: 4,
					title: "My Gallery",
					imageUrl: "my-gallery.png",
					type: "responsive"
				},
				{
					id: 5,
					title: "Interior Consultant",
					imageUrl: "interior-consultant.png",
					type: "responsive"
				},

				{
					id: 6,
					title: "My Team Page",
					imageUrl: "my-team-page.png",
					type: "react"
				},
				{
					id: 7,
					title: "404 Not Found",
					imageUrl: "404.png",
					type: "responsive"
				},
				{
					id: 8,
					title: "Cocosnap",
					imageUrl: "cocosnap.png",
					type: "javascript"
				},
				{
					id: 9,
					title: "Partoche-Etude",
					imageUrl: "partoche-etude.png",
					type: "javascript"
				},
				{
					id: 10,
					title: "Partoche-Video",
					imageUrl: "partoche-video.png",
					type: "javascript"
				},
				{
					id: 11,
					title: "Partoche-Choral",
					imageUrl: "partoche-choral.png",
					type: "javascript"
				},
				{
					id: 12,
					title: "Partoche-Embed",
					imageUrl: "partoche-embed.png",
					type: "javascript"
				},
				{
					id: 13,
					title: "Partoche-Duo",
					imageUrl: "partoche-duo.png",
					type: "javascript"
				}
			],
			selectedProjects: [],
			page: 1
		}
	}

	componentDidMount() {
		const pr = [...this.state.projects]
		this.setState(state => (state = { selectedProjects: pr }))
	}

	typeSelectorClickHandler = typeToDisplay => {
		const pr =
			typeToDisplay === ""
				? [...this.state.projects]
				: this.state.projects.filter(project => project.type === typeToDisplay)
		this.setState(state => (state = { selectedProjects: pr, page: 1 }))
	}

	pageBtnClickHandler = pageToDisplay => {
		this.setState(state => (state = { page: pageToDisplay }))
	}

	render() {
		const displayedProjects = this.state.selectedProjects.slice(
			(this.state.page - 1) * 3,
			(this.state.page - 1) * 3 + 3
		)
		return (
			<React.Fragment>
				<div className="projects-header card">
					<h1>Projects</h1>
					<ProjectTypeSelector onClick={this.typeSelectorClickHandler} />
				</div>

				<ProjectCards displayedProjects={displayedProjects} />
				<Breadcrumbs
					selectedProjects={this.state.selectedProjects}
					onClick={this.pageBtnClickHandler}
				/>
			</React.Fragment>
		)
	}
}

export default App
