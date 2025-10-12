import Course from "./Course"

export default function Education({ courses }) {

    return (
        <section className="education">
            {
                courses.map(course => 
                    <Course 
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