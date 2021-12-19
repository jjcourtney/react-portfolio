import { primary, secondary } from "../data/colourPalette";


function About() {
    return (
        <article className={`w-screen flex justify-center min-h-1/2 bg-bgBlue bg-cover`}>
            <div className={`flex justify-center max-w-5/6 border-2 border-${secondary} rounded-md mx-24 p-2 my-16 bg-${primary}`}>
                <p className={`font-sans  m-auto text-${secondary} p-2  rounded-md align-middle md:text-xl lg:text-2xl xl:text-3xl sm:text-md xs:text-sx`}>
                    I am a full stack developer with commercial experience in node.js,
                    Typescript and AWS (CDK infrastucture as code).
                    I love problem solving and have a passion for development.
                    I have been in people and project management for 17 years, and therefore
                    bring a unique set of skills into the world of web development. A passion
                    for everything code over the last 20 years has now driven me in to changing
                    my career path into web development.
                </p>
            </div>
        </article>
    )
}

export default About;