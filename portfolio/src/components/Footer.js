const links = ["about me", "personal projects", "languages", "contact"]

function Footer() {
    return (
        <footer className="w-screen bg-black">
            <div className="flex justify-around">
                {links.map(link => <button className="inline-block bg-red-700 hover:bg-red-400 text-white font-bold py-2 px-4 rounded m-5"> {link} </button>)}
            </div>
        </footer>
    )
}

export default Footer;