

function ProjectCard({ project }) {
    return (
        <>
            <article className="w-200 flex flex-col justify-start bg-black  border-2 p-2 border-red-700 rounded-2xl">
                <h1 className="text-4xl text-red-700 my-auto ml-3 block" style={{ fontFamily: 'Lobster' }}>
                    {project.name}
                </h1>
                <div className="block">
                    <a href={project.url}> <img src={project.image} alt="name" className="rounded-2xl filter hover:filter md:h-56 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" /> </a>
                </div>
                <p className=" text-red-700 hover:shadow-lg hover:text-white text-2xl block"><a href={project.repoURL}> Github Repo </a></p>
                <ul className="block">
                    {project.languages.map(language => <li className="inline-block text-xs text-red-700 font-bold py-2 px-4 " key={`${language}-key`}> {language} </li>)}
                </ul>
            </article>
        </>
    )
}
export default ProjectCard;