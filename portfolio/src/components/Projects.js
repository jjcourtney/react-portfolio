import { useState } from "react"

import ProjectCard from "./ProjectCard";
import { projectObjsArr } from "../data/projects";
import { primary, secondary } from "../data/colourPalette";



function Project() {

    const [projectsToDisplay, setProjectsToDiplay] = useState([0, 1, 2])

    const handleArrowClick = (event) => {
        let projects = [...projectsToDisplay];

        if (event.target.id === "right-click") {

            const lastProject = projects[projects.length - 1]

            projects.push(lastProject < projectObjsArr.length - 1 ? projects[projects.length - 1] + 1 : 0)
            projects.shift()

        } else if (event.target.id === "left-click") {
            const firstProject = projects[0]

            projects.unshift(firstProject !== 0 ? projects[0] - 1 : projectObjsArr.length - 1)
            projects.pop()

        }
        setProjectsToDiplay(projects)
    }
    return (

        <article className="flex flex-nowrap h-1/2 justify-around align-middle bg-cover bg-bgBlue">
            <button className={`text-${secondary} border-2 border-${secondary} my-auto p-4 text-6xl bg-${primary} h-28 align-middle rounded-full shadow-lg hover:text-${primary} hover:bg-${secondary} font-mono`} id="left-click" onClick={handleArrowClick} >
                {`<`}
            </button>
            {projectObjsArr.map((project, index) => projectsToDisplay.includes(index) ? <ProjectCard project={project} className="inline-block h-40 shadow-inner rounded-md" /> : "")}
            <button className={`text-${secondary} border-2 border-${secondary} my-auto p-4 text-6xl bg-${primary} h-28 align-middle rounded-full shadow-lg hover:text-${primary} hover:bg-${secondary} font-mono`} id="right-click" onClick={handleArrowClick} >
                {`>`}
            </button>
        </article>


    )
}
export default Project;