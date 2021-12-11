import { primary, secondary } from "../data/colourPalette";
import { contactInfoArray } from "../data/contactInfo";

function Footer() {
    return (
        <footer className={`w-screen bg-${primary}`}>
            <div className="flex justify-around">
                {contactInfoArray.map(link => <a href={link.url} className={`transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl shadow-inner border-2 border-${secondary} text-${secondary} m-10 text-2xl p-2 rounded-2xl`} style={{ fontFamily: "lobster" }} target="blank">  {link.name} </a>)}
            </div>
        </footer>
    )
}

export default Footer;