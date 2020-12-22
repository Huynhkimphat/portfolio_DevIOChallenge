import React, { Component } from "react"

import "./App.css"

class App extends Component {
	constructor() {
		super()
		this.state = {
			projects: [
				{
					id: 1,
					title: "404 Not Found",
					imageUrl: "404.png",
					type: "html-css"
				},
				{
					id: 2,
					title: "My Team Page",
					imageUrl: "my-team-page.png",
					type: "react"
				},
				{
					id: 3,
					title: "Interior Consultant",
					imageUrl: "interior-consultant.png",
					type: "html-css"
				},
				{
					id: 4,
					title: "Recipe Page",
					imageUrl: "recipe-page.png",
					type: "html-css"
				},
				{
					id: 5,
					title: "My Gallery",
					imageUrl: "my-gallery.png",
					type: "html-css"
				},
				{
					id: 6,
					title: "Checkout Page",
					imageUrl: "checkout-page.png",
					type: "react"
				},
				{
					id: 7,
					title: "Edie Homepage",
					imageUrl: "edie-homepage.png",
					type: "html-css"
				},
				{
					id: 8,
					title: "Cocosnap",
					imageUrl: "cocosnap.png",
					type: "javascript"
				},
				{
					id: 9,
					title: "Partoche",
					imageUrl: "partoche-choral.png",
					type: "javascript"
				}
			],
			page: 2
		}
	}

	render() {
		// const reactProjects = this.state.projects.filter(project => project.type === "react")
		// const cssProjects = this.state.projects.filter(project => project.type === "html-css")
		// const jsProjects = this.state.projects.filter(project => project.type === "javascript")
		return (
			<div className="project-set">
        {this.state.projects.slice(this.state.page*3, this.state.page*3 +3)
          .map(project => (
            <div className="card" key={project.id}>
              <h3>{project.title} (project #{project.id})</h3>
              <img
                src={project.imageUrl}
                alt={project.title}
                style={{ width: "200px" }}
              />
            </div>
				))}
			</div>
		)
	}
}

export default App
