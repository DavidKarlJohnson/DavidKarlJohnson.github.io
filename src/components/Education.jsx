import '../styles/Education.css';
import Course from "./Course"

export default function Education({ courses }) {

    return (
        <section className="education">
            <h1>Utbildning</h1>
            {
                courses.map(course => 
                    <Course 
                    key={course.id}
                    name={course.name}
                    desc={course.desc}
                    hp={course.hp}
                    toolsArr={course.toolsUsed}
                    />
                )
            }
        </section>
    )
}