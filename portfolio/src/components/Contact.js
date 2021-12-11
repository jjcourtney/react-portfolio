import { primary, secondary } from "../data/colourPalette";

function Contact() {
    return (
        <article className={`w-screen justify-center bg-${primary} min-h-1/2`}>
            <div className={`max-w-5/6 mx-24 p-2 my-16 opacity-60 text-${primary}`}>
                <p className={`font-sans mt-10 m-auto text-${secondary} w-1/2 p-2 rounded-md align-middle border-2 border-${secondary} rounded-md md:text-xl lg:text-2xl sm:text-md xs:text-sx`}>
                    email : jcourtneywork@gmail.com
                </p>
                <p className={`font-sans mt-10 m-auto text-${secondary} w-1/2 p-2 rounded-md align-middle border-2 border-${secondary} rounded-md md:text-xl lg:text-2xl sm:text-md xs:text-sx`}>
                    github: https://github.com/jjcourtney/
                </p>
                <p className={`font-sans mt-10 m-auto text-${secondary} w-1/2 p-2 rounded-md align-middle border-2 border-${secondary} rounded-md md:text-xl lg:text-2xl sm:text-md xs:text-sx`}>
                    linkedIn: //https://www.linkedin.com/in/jon-courtney-20476370/
                </p>

            </div>
        </article>
    )
}

export default Contact;