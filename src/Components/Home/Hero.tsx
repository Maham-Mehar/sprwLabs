const Hero = () => {
    return (

        <div className="bg-[url('/images/image1.png')] h-185 bg-cover w-full bg-[center_top] flex xl:justify-end lg:justify-center md:justify-center sm:justify-center items-center px-6 py-9">
            <div className="bg-[#255179]/83 max-w-[36rem] w-full p-6 xl:me-67 xl:py-14 xl:px-15 lg:py-16 lg:px-15 md:px-10 md:py-13">
                <p className="text-[#178FC7] font-semibold text-lg">
                    Automation For Your Business
                </p>
                <p className="xl:text-5xl lg:text-3xl md:text-5xl sm:text-3xl text-3xl font-semibold my-4 text-white mt-2">
                    Outcome Driven Automation
                </p>
                <p className="text-sm max-w-[26rem] lead font-normal text-[#B3C5D9] mt-6 ">
                    SprwLabs focuses on creating an automation fabric as the foundation for cross business unit collaboration.  We build tailored automated solutions to achieve successful outcomes for our clients.
                </p>
                <button className="mt-20 bg-[#6596C4]/40 border-2 rounded-full text-white px-13 py-2.5  hover:bg-[#D8E1E9] hover:text-[#255179] active:bg-[#D8E1E9] active:text-[#255179] focus:bg-[#D8E1E9] focus:text-[#255179]">
                    Learn More
                </button>
            </div>
        </div>


    )
};

export default Hero;