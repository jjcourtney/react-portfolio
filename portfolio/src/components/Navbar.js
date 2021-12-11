import { primary, secondary } from "../data/colourPalette"

const links = ["about me", "personal projects", "languages", "contact"]

function Navbar({ setCurrentPage }) {

    const handleClick = (event) => {
        debugger
        setCurrentPage(event.target.id)

    }

    return (

        <nav className={`w-screen bg-${primary} flex flex-wrap justify-between align-middle`}>
            <h1 className={`text-${secondary} flex text-4xl ml-3 my-auto p-2 border-${secondary} border-2 rounded-xl`} style={{ fontFamily: 'Lobster' }}>
                Jonathan Courtney - Software developer
            </h1>
            <div className="flex justify-end">
                {links.map(link => <button className={`transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl shadow-inner border-2 border-${secondary} m-10 text-2xl p-2 rounded-2xl text-${secondary}`} style={{ fontFamily: "lobster" }} id={link.split(" ")[0].toLowerCase()} onClick={handleClick}> {link} </button>)}
            </div>
        </nav>

    )
}

export default Navbar;