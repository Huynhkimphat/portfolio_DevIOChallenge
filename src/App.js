import React, { Component } from "react"

import "./App.css"

const ProjectTypeSelector = props => (
  <div className="type-selector">
    <button key="all" onClick={() => props.onClick("")}>
      All
    </button>
    <button key="resp" onClick={() => props.onClick("responsive")}>
      Responsive
    </button>
    <button key="react" onClick={() => props.onClick("react")}>
      React
    </button>
    <button key="js" onClick={() => props.onClick("javascript")}>
      JavaScript
    </button>
  </div>
)

const ProjectCards = props => (
  <div className="project-set">
    {props.displayedProjects.map(project => (
      <div className="card" key={project.id}>
        <h3>
          {project.title} (project #{project.id})
        </h3>
        <img src={project.imageUrl} alt={project.title} style={{ width: "300px" }} />
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
          title: "404 Not Found",
          imageUrl: "404.png",
          type: "responsive",
        },
        {
          id: 2,
          title: "My Team Page",
          imageUrl: "my-team-page.png",
          type: "react",
        },
        {
          id: 3,
          title: "Interior Consultant",
          imageUrl: "interior-consultant.png",
          type: "responsive",
        },
        {
          id: 4,
          title: "Recipe Page",
          imageUrl: "recipe-page.png",
          type: "responsive",
        },
        {
          id: 5,
          title: "My Gallery",
          imageUrl: "my-gallery.png",
          type: "responsive",
        },
        {
          id: 6,
          title: "Checkout Page",
          imageUrl: "checkout-page.png",
          type: "react",
        },
        {
          id: 7,
          title: "Edie Homepage",
          imageUrl: "edie-homepage.png",
          type: "responsive",
        },
        {
          id: 8,
          title: "Cocosnap",
          imageUrl: "cocosnap.png",
          type: "javascript",
        },
        {
          id: 9,
          title: "Partoche",
          imageUrl: "partoche-choral.png",
          type: "javascript",
        },
      ],
      selectedProjects: [],
      page: 1,
    }
  }

  componentDidMount() {
    const pr = [...this.state.projects]
    this.setState(state => (state = { selectedProjects: pr }))
  }

  typeSelectorClickHandler = typeToDisplay => {
    const pr = typeToDisplay === "" ? [...this.state.projects] :
    this.state.projects.filter(project => project.type === typeToDisplay)
    console.log('typeSelectorClickHandler', pr)
    this.setState(state => (state = { selectedProjects: pr }))
  }

  pageBtnClickHandler = pageToDisplay => {
    this.setState(state => (state = { page: pageToDisplay }))
  }

  render() {
    // const reactProjects = this.state.projects.filter(project => project.type === "react")
    // const cssProjects = this.state.projects.filter(project => project.type === "html-css")
    // const jsProjects = this.state.projects.filter(project => project.type === "javascript")
    const displayedProjects = this.state.selectedProjects.slice(
      (this.state.page - 1) * 3,
      (this.state.page - 1) * 3 + 3
    )
    console.log(this.state)
    return (
      <React.Fragment>
        <ProjectTypeSelector onClick={this.typeSelectorClickHandler} />
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
