import '../styles/Education.css';
import Course from "./Course"

export default function Education({ courses }) {

    return (
        <section className="education">
            <h2>Utbildning</h2>
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