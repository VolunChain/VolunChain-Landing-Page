import React from 'react';
import Marquee from 'react-fast-marquee';

const logos = [
    "/logo.svg",
    "/logo.svg",
    "/logo.svg",
    "/logo.svg",
];

const PoweredBy = () => {
    return (
        <div className='text-center'>
            <div
                className="mb-16"
            >
                <h2
                    className="text-xl text-[#73B9EB] mb-2"
                >
                    Powered by
                </h2>
                <h3
                    className="text-xl md:text-5xl font-bold text-white"
                >
                    Partners who helped <br /> Volunchain grow!
                </h3>
            </div>
            <div className="relative overflow-hidden w-full bg-transparent py-4">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-[#070b1f] to-transparent" />

                <Marquee
                    speed={40}
                    gradient={false}
                >
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <img key={index} src={logo} alt="logo" className="h-22 w-auto mx-4" />
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default PoweredBy;
