import { primary, secondary, tertiary } from "../data/colourPalette";
import dailyPlanner from "../images/dailyPlanner.png";
import htmlQuiz from "../images/htmlQuiz.png";
import infoCraft from "../images/infoCraft.png";
import passwordGen from "../images/passwordGen.png";
import periodic from "../images/periodic.png";
import weatherDash from "../images/weatherDash.png";

const imagesURL = {
    dailyPlanner,
    htmlQuiz,
    infoCraft,
    passwordGen,
    periodic,
    weatherDash
}

function ProjectCard({ project }) {
    return (
        <>
            <article className={`w-200 flex flex-col justify-start bg-${primary}  border-2 p-2 border-${secondary} rounded-2xl`}>
                <h1 className={`text-4xl text-${secondary} my-auto py-3 ml-3 block border-2 border-${secondary} rounded-md`} style={{ fontFamily: 'Lobster' }}>
                    {project.name}
                </h1>
                <div className="block">
                    <a href={project.url}> <img src={imagesURL[project.image]} alt="name" className="rounded-2xl filter hover:filter md:h-56 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" /> </a>
                </div>
                <p className={`text-${secondary} hover:shadow-lg hover:text-${tertiary} text-2xl block`}><a href={project.repoURL}> Github Repo </a></p>
                <ul className="block">
                    {project.languages.map(language => <li className={`inline-block text-xs text-${secondary} font-bold py-2 px-4`} key={`${language}-key`}> {language} </li>)}
                </ul>
            </article>
        </>
    )
}
export default ProjectCard;