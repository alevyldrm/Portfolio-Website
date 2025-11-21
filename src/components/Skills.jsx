import './Skills.css'

export default function Skills() {
    const skills = ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "TailwindCSS"]
    return (
        <section className="skills container">
            <h1>Becerilerim</h1>
            <ul className="skills-list">
                {skills.map(s => <li key={s}>{s}</li>)}
            </ul>
        </section>
    )
}
