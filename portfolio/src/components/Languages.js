import { languages } from "../data/projects";

function Languages() {
    return (
        <article className="w-screen flex justify-center bg-red-700 min-h-1/2">
            {languages.map(language => <button>{language}</button>)}
        </article>
    )
}

export default Languages;