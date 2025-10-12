import '../styles/Education.css';
import Course from "./Course"

export default function Education({ courses }) {

    return (
        <section className="education">
            <h2>Utbildning</h2>
            <h3>Datavetenskap</h3>
            {
                courses
                    .filter(course => course.discipline.localeCompare('computer science') === 0)
                    .map(course => (
                        <Course 
                            key={course.id}
                            name={course.name}
                            desc={course.desc}
                            hp={course.hp}
                            university={course.university}
                            link={course.link}
                            toolsArr={course.toolsUsed}
                        />
                    ))
            }
            <h3>Matematik</h3>
            {   courses
                    .filter(course => course.discipline.localeCompare('math') === 0)
                    .map(course => (
                        <Course 
                            key={course.id}
                            name={course.name}
                            desc={course.desc}
                            hp={course.hp}
                            university={course.university}
                            link={course.link}
                            toolsArr={course.toolsUsed}
                        />
                    ))
            }
            <h3>Övrigt</h3>
            {   courses
                    .filter(course => course.discipline.localeCompare('math') !== 0 &&
                                      course.discipline.localeCompare('computer science') !== 0 )
                    .map(course => (
                        <Course 
                            key={course.id}
                            name={course.name}
                            desc={course.desc}
                            hp={course.hp}
                            university={course.university}
                            link={course.link}
                            toolsArr={course.toolsUsed}
                        />
                    ))
            }
        </section>
    )
}