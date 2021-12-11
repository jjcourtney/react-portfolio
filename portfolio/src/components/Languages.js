import { languages } from "../data/projects";

function Languages() {
    return (
        <article className="w-screen flex flex-wrap justify-center bg-red-700 ">
            {languages.map(language => <button className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl shadow-inner border-2 border-black m-10 text-6xl p-2 rounded-2xl" style={{ fontFamily: "lobster" }}>{language}</button>)}
        </article>
    )
}


export default Languages;