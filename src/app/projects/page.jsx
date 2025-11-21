import ProjectCard from '../../components/ProjectCard'

export default function ProjectsPage() {
    const projects = [
        { id: 1, title: "Furry", desc: "Furry e-ticaret demo", image: "/images/furry.jpeg", link: "https://furryshop.netlify.app/" },
        { id: 2, title: "Netflix Clone", desc: "Netflix klon demo", image: "/images/n.png", link: "https://cloneproject-demo.netlify.app/" },
        { id: 3, title: "Blog Website", desc: "Blog Website demo", image: "/images/blog.jpeg", link: "https://blogfrontend-alev.netlify.app/" }
    ]

    return (
        <section className="container">
            <h1 style={{ marginTop: '24px' }}>Projelerim</h1>
            <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px,1fr))', gap: '20px' }}>
                {projects.map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
        </section>
    )
}