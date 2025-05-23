import React from "react";

type HeroSectionProps = {
    title?: string,
    subtitle?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
    title = "Hello! I'm Felix. 👋",
    subtitle = "Temp text✨",
}) => {
    return (
        <section className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-600 to-blue-400 text-white text-center px-4">
            <h1 className="text-5xl font-bold mb-4"> {title} </h1>
            <p className="text-xl mb-8 max-w-2xl"> {subtitle} </p>
        </section>
    )
}

export default HeroSection;