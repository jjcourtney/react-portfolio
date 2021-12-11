import { languages } from "../data/projects";
import { primary, secondary } from "../data/colourPalette";

function Languages() {
    return (
        <article className={`w-screen flex flex-wrap justify-center bg-${primary} text-${secondary}`}>
            {languages.map(language => <button className={`transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl shadow-inner border-2 border-${secondary} m-5 p-2 rounded-2xl text-2xl sm:text-lg lg:text-4xl xl:text-6xl xl:m-10  `} style={{ fontFamily: "lobster" }}>{language}</button>)}
        </article>
    )
}


export default Languages;