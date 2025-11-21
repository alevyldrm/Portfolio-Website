import Image from 'next/image'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <div className="thumb">
                <Image src={project.image} alt={project.title} width={800} height={350} />
            </div>
            <h3>{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            <div className="project-actions">
                <a href={project.link} target="_blank" rel="noreferrer">Projeyi Aç</a>
            </div>
        </article>
    )
}
