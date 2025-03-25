import PopUp from "@/animations/popUp"
import Iphone15pro from "@/components/Iphone"
import { OppiaDescription } from "./Oppia-Description"


export default function MadeByOppia() {
    return (

        <div className="p-8 mt-[6rem]">
            <div
                className="mb-16 text-center pl-8"
            >
                <h2
                    className="text-xl text-[#73B9EB] mb-2"
                >
                    Made by Oppia
                </h2>
                <h3
                    className="text-xl md:text-5xl font-bold text-white"
                >
                    What is Oppia Software Labs?
                </h3>
            </div>


            <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-10">
                <PopUp delay={0.2} duration={0.7} className="flex items-center justify-center">
                    <div className="w-full pl-8 md:w-1/2">
                        <OppiaDescription />
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center">
                        <Iphone15pro>
                            <img src="/assets/logo.png" width={180} />
                        </Iphone15pro>
                    </div>
                </PopUp>
            </div>
        </div>
    )
}
