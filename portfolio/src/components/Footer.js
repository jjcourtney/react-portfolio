const links = ["about me", "personal projects", "languages", "contact"]

function Footer() {
    return (
        <footer className="w-screen bg-black">
            <div className="flex justify-around">
                {links.map(link => <button className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl shadow-inner border-2 border-red-700 text-red-700 m-10 text-2xl p-2 rounded-2xl" style={{ fontFamily: "lobster" }}>  {link} </button>)}
            </div>
        </footer>
    )
}

export default Footer;