import { primary, secondary } from "../data/colourPalette";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";


const TEXTS = [
    "Full-Stack Developer",
    "Problem Solver",
    "Coach",
    "Quick Learner"
];

function MainCard() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    return (
        <article className={`w-5/6 flex justify-end p-5 h-5/6`}>
            <div className={`flex justify-around p-2 my-16 h-full shadow-xl`}>
                <p className={`font-serif w-2/6 m-auto  p-2  md:text-3xl lg:text-4xl xl:text-5xl sm:text-2xl xs:text-xl flex flex-col justify-space`}>
                    <span className="text-indigo-800">Jonathan Courtney</span>

                    <TextTransition
                        text={TEXTS[index % TEXTS.length]}
                        springConfig={presets.wobbly}
                        className="text-red-100" />
                </p>
                <p className={`font-serif my-auto px-6 text-indigo-100 w-3/6 align-middle md:text-md lg:text-lg xl:text-xl sm:text-sm xs:text-xs`}>
                    I am a full stack developer with commercial experience in <span className="text-indigo-300">node.js</span>,
                    <span className="text-indigo-300"> Typescript</span> and <span className="text-indigo-300">AWS </span>
                    (CDK infrastucture as code).
                    I have been in people and project management for 17 years, and therefore
                    bring a unique set of skills into the world of web development. A passion
                    for everything code over the last 20 years has now driven me in to changing
                    my career path into web development.
                </p>
            </div >
        </article >
    )
}

export default MainCard;