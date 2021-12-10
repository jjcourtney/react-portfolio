const links = ["about me", "personal projects", "languages", "contact"]

function Navbar() {
    return (
        <>
            <nav className="w-screen bg-black flex flex-wrap justify-between align-middle">
                <h1 className="text-2xl text-red-700 flex align- my-auto ml-3" style={{ fontFamily: 'Lobster' }}>
                    Jonathan Courtney
                </h1>
                <div className="flex justify-end">
                    {links.map(link => <button className="inline-block bg-red-700 hover:bg-red-400 text-white font-bold py-2 px-4 rounded m-5"> {link} </button>)}
                </div>
            </nav>
        </>
    )
}

export default Navbar;