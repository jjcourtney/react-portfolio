const links = ["about me", "personal projects", "languages", "contact"]

function Navbar({ setCurrentPage }) {

    const handleClick = (event) => {
        debugger
        setCurrentPage(event.target.id)

    }
    return (

        <nav className="w-screen bg-black flex flex-wrap justify-between align-middle">
            <h1 className="text-red-700 flex text-4xl ml-3 my-auto p-2 border-red-700 border-2 rounded-xl" style={{ fontFamily: 'Lobster' }}>
                Jonathan Courtney - Software developer
            </h1>
            <div className="flex justify-end">
                {links.map(link => <button className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl shadow-inner border-2 border-red-700 m-10 text-2xl p-2 rounded-2xl text-red-700" style={{ fontFamily: "lobster" }} id={link.split(" ")[0].toLowerCase()} onClick={handleClick}> {link} </button>)}
            </div>
        </nav>

    )
}

export default Navbar;