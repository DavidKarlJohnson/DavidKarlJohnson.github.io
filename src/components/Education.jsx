import '../styles/Education.css';
import Course from "./Course";
import expandImg from '../assets/expand.svg';
import collapseImg from '../assets/collapse.svg';
import UniversityImg from './UniversityImg';

export default function Education({ courses }) {

        function toggleCourseVisibility(e, selector) {
            const elem = document.querySelector(selector);
            const clickedElem = e.currentTarget;
            const expanderImg = clickedElem.childNodes[1];
        if (elem) {
            if (elem.style.maxHeight === "3000px") {
                elem.style.maxHeight = "0px";
                elem.style.padding = "0px";
                expanderImg.src = expandImg;
                expanderImg.title = 'Expand';
                elem.childNodes.forEach(node => {
                    node.style.visibility = 'hidden';
                }) 
            } else {
                elem.style.maxHeight = "3000px";
                elem.style.padding = "50px";
                expanderImg.src = collapseImg;
                expanderImg.title = 'Collapse';
                elem.childNodes.forEach(node => {
                    node.style.visibility = 'visible';
                }) 
            }
        }
    }

    return (
        <section className="education">
            <h2>Utbildning</h2>
            <div className='education-info'>
                <div className='education-info-top'>
                    <h3>Kandidatexamen Datavetenskap</h3>
                    <div>
                        <div className='university-group'>
                            <UniversityImg name={'Uppsala Universitet'}/>
                            <span>Uppsala Universitet</span>
                        </div>
                        <span className='university-date'>2023 - 2026</span>
                    </div>
                </div>
                <p>
                Kandidatprogrammet i Datavetenskap vid Uppsala universitet ger breda och djupa kunskaper inom programmering, systemutveckling, datorarkitektur, algoritmer och cybersäkerhet. Utbildningen kombinerar teori och praktik med fokus på problemlösning, effektiv mjukvarudesign och tillförlitliga system.</p>
            </div>
            <div className='education-category-header' onClick={(e) => toggleCourseVisibility(e, '#computer-science')}>
                <h3>Datavetenskap</h3>
                <img src={expandImg} title='Expand'/>
            </div>
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
            <div className='education-category-header' onClick={(e) => toggleCourseVisibility(e, '#math')}>
                <h3>Matematik</h3>
                <img src={expandImg} title='Expand'/>
            </div>
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
            <div className='education-category-header' onClick={(e) => toggleCourseVisibility(e, '#other')}>
                <h3>Övrigt</h3>
                <img src={expandImg} title='Expand'/>
            </div>
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