import '../styles/Education.css';
import Course from "./Course"

export default function Education({ courses }) {

    function toggleCourseVisibility(selector) {
        const elem = document.querySelector(selector);
        if (elem) {
            if (elem.style.maxHeight === "3000px") {
                elem.style.maxHeight = "0px";
                elem.style.padding = "0px";
                elem.childNodes.forEach(node => {
                    node.style.visibility = 'hidden';
                }) 
            } else {
                elem.style.maxHeight = "3000px";
                elem.style.padding = "50px";
                elem.childNodes.forEach(node => {
                    node.style.visibility = 'visible';
                }) 
            }
        }
    }

    return (
        <section className="education">
            <h2>Utbildning</h2>
            <h3 onClick={() => toggleCourseVisibility('#computer-science')}>Datavetenskap</h3>
            <div className='education-category' id='computer-science'>
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
            </div>
            <h3 onClick={() => toggleCourseVisibility('#math')}>Matematik</h3>
            <div className='education-category' id='math'>
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
            </div>
            <h3 onClick={() => toggleCourseVisibility('#other')}>Övrigt</h3>
            <div className='education-category' id='other'>
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
            </div>
        </section>
    )
}