import React, { Component } from "react"

import "./App.css"

const ProjectTypeSelector = props => (
  <div className="type-selector">
    <button onClick={e => props.onClick(e, "all")}>All</button>
    <button onClick={e => props.onClick(e, "responsive")}>Responsive</button>
    <button onClick={e => props.onClick(e, "javascript")}>JavaScript</button>
    <button onClick={e => props.onClick(e, "react")}>React</button>
  </div>
)

const ProjectCards = props => (
  <div className="project-set">
    {props.displayedProjects.map(project => (
      <div className="card project-card" key={project.id}>
        <a href={project.demoUrl}>
          <img src={`img/${project.imageUrl}`} alt={project.title} />
        </a>
        <h5>#{project.type}</h5>
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <div className="project-card-footer">
          <a href={project.demoUrl} className="demo">
            Demo
          </a>
          <a href={project.codeUrl} className="code">
            Code
          </a>
        </div>
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
        {i}
      </button>
    )
  }
  return <div className="breadcrumbs">{buttons}</div>
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
          type: "responsive",
          text:
            "I tried to make a simple sticky mobile menu in css, which isn't perfect. In the end, even if I didn't learn any new technology with this project, I gained a lot of experience by doing mistakes I won't repeat in the future !",
          demoUrl: "https://devchallenges-edie-homepage-master.vercel.app/",
          codeUrl: "https://github.com/antoineterny/devchallenges-edie-homepage-master",
        },
        {
          id: 2,
          title: "Checkout Page",
          imageUrl: "checkout-page.png",
          type: "react",
          text:
            "I realized it would be the perfect opportunity to build my first React app. I had a hard time coding it, but with the help of a Mosh tutorial, I eventually found my way and I'va learnt a lot with this project.",
          demoUrl: "https://devchallenges-checkout-page-react.vercel.app/",
          codeUrl: "https://github.com/antoineterny/devchallenges-checkout-page-react",
        },
        {
          id: 3,
          title: "Recipe Page",
          imageUrl: "recipe-page.png",
          type: "responsive",
          text:
            "A cool classic challenge.<br>It was not easy to keep the html lightweight in order to replicate the layout.",
          demoUrl: "https://devchallenges-recipe-page-master.vercel.app/",
          codeUrl: "https://github.com/antoineterny/devchallenges-recipe-page-master",
        },
        {
          id: 4,
          title: "My Gallery",
          imageUrl: "my-gallery.png",
          type: "responsive",
          text:
            "Working with css grid is always fun !<br>It is a small project, but it took me about 2 hours, I had fun with gulp...",
          demoUrl: "https://devchallenges-my-gallery-dist.vercel.app/",
          codeUrl: "https://github.com/antoineterny/devchallenges-my-gallery-dist",
        },
        {
          id: 5,
          title: "Interior Consultant",
          imageUrl: "interior-consultant.png",
          type: "responsive",
          text:
            "This project took me 3 hours. I added 1 intermediate responsive breakpoint, this could be improved but at least one can see the original designs at the minimum and maximum sizes.",
          demoUrl: "https://devchallenges-interior-consultant-master.vercel.app/",
          codeUrl: "https://github.com/antoineterny/devchallenges-interior-consultant-master",
        },

        {
          id: 6,
          title: "My Team Page",
          imageUrl: "my-team-page.png",
          type: "react",
          text:
            "This project didn't take me a long time because it doesn't contain many elements, but required me to think about the responsiveness. I chose to use grid because of the offsetted cards.<br>I also used React, just to generate the cards.",
          demoUrl: "https://devchallenges-my-team-page-master.vercel.app/",
          codeUrl: "https://github.com/antoineterny/devchallenges-my-team-page-master",
        },
        {
          id: 7,
          title: "404 Not Found",
          imageUrl: "404.png",
          type: "responsive",
          text:
            "My first attempt with devchallenges. I tried to make the layout as responsive as possible.",
          demoUrl: "https://devchallenges-404-not-found-master.vercel.app/",
          codeUrl: "https://github.com/antoineterny/devchallenges-404-not-found-master",
        },
        {
          id: 8,
          title: "Cocosnap",
          imageUrl: "cocosnap.png",
          type: "javascript",
        },
        {
          id: 9,
          title: "Partoche-Etude",
          imageUrl: "partoche-etude.png",
          type: "javascript",
          text:
            "Conçu pour l'apprentissage d'un morceau de piano, on peut régler le mixage entre la main gauche et la main droite, et activer ou non le métronome. L'idée est de répéter chaque section du morceau de plus en plus vite, mains séparément en écoutant l'autre main, ou la même, ou les deux...",
          demoUrl: "https://antoineterny.com/partoche/partoche-etude/rustique/index.html",
          codeUrl: "https://github.com/antoineterny/partoche",
        },
        {
          id: 10,
          title: "Partoche-Video",
          imageUrl: "partoche-video.png",
          type: "javascript",
          text:
            "La partition est ici synchronisée avec une vidéo. Peut servir par exemple en cas de restriction des libertés publiques rendant impossibles les répétitions scéniques.",
          demoUrl: "https://antoineterny.com/partoche/partoche-video/samson-video/index.html",
          codeUrl: "https://github.com/antoineterny/partoche",
        },
        {
          id: 11,
          title: "Partoche-Choral",
          imageUrl: "partoche-choral.png",
          type: "javascript",
          text:
            "Conçu pour aider les choristes dans leur préparation individuelle entre deux répétitions (ou en temps de confinement...), on entend toujours l'accompagnement sur lequel on ajoute la voix qu'on souhaite apprendre, qui se retrouve surlignée dans la partition.",
          demoUrl: "hhttps://antoineterny.com/partoche/partoche-choral/samson/index.html",
          codeUrl: "https://github.com/antoineterny/partoche",
        },
        {
          id: 12,
          title: "Partoche-Embed",
          imageUrl: "partoche-embed.png",
          type: "javascript",
          text:
            "Conçu pour s'intégrer dans une page html classique, au milieu de texte, d'images, de liens, et en autant d'instances que nécessaire. Existe en versions audio et video.",
          demoUrl: "https://antoineterny.com/partoche/partoche-embed/liapounov-sonate/index.html",
          codeUrl: "https://github.com/antoineterny/partoche",
        },
        {
          id: 13,
          title: "Partoche-Duo",
          imageUrl: "partoche-duo.png",
          type: "javascript",
          text:
            "Conçu pour préparer un morceau de piano à quatre mains, on peut régler le mixage entre les deux parties, et les deux partitions sont affichées.",
          demoUrl: "https://antoineterny.com/partoche/partoche-duo/mmo/index.html",
          codeUrl: "https://github.com/antoineterny/partoche",
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

  componentDidUpdate() {
    document.querySelectorAll(".breadcrumbs button").forEach(btn => {
      btn.className = parseInt(btn.innerText) === this.state.page ? "active" : ""
    })
  }

  typeSelectorClickHandler = (e, typeToDisplay) => {
    const pr =
      typeToDisplay === "all"
        ? [...this.state.projects]
        : this.state.projects.filter(project => project.type === typeToDisplay)
    this.setState(state => (state = { selectedProjects: pr, page: 1, selectedType: typeToDisplay }))
    document.querySelectorAll(".projects-header button").forEach(btn => (btn.className = ""))
    e.target.className = "active"
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
