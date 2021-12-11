import { primary, secondary } from "../data/colourPalette";
import { contactInfoArray } from "../data/contactInfo";

function Contact() {
    return (
        <article className={`w-screen justify-center bg-${primary} min-h-1/2 bg-cover bg-bgBlue`}>
            <div className={`max-w-5/6 mx-24 p-2 my-16 text-${primary} flex flex-wrap justify-around`}>
                {contactInfoArray.map(link => <> <a href={link.url} className={`bg-white m-auto mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl shadow-inner border-2 border-${secondary} text-${secondary} m-10 lg:text-2xl xl:text-2xl text-xl p-2 rounded-2xl xs:m-5`} style={{ fontFamily: "lobster" }} target="blank">  {link.name} : {link.content} </a><br /></>)}


            </div>
        </article>
    )
}

export default Contact;