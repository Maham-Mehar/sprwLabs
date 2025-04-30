import { AboutCard_Data } from "@/Data/aboutCard";

const About_Card = () => {
    return (
        <div className="bg-[#F7F8FA] py-33">
            <div className="max-w-5xl mx-auto xl:px-20 lg:px-20 md:px-14 sm:px-10 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-15 lg:gap-12 md:gap-8">
                    {AboutCard_Data.map((item, index) => (
                        <div key={index} >
                            {/* Image Column */}
                            {item.image && (
                                <div className="">
                                    <img src={item.image} alt="Professional Info" className="h-74 w-[24rem] object-cover" />
                                </div>


                            )}

                            {/* Content Column */}
                            <div className="w-full flex flex-col justify-center">
                                {item.Heading && (
                                    <p className="text-xl font-semibold mb-1">{item.Heading}</p>
                                )}
                                {item.text && (
                                    <p className="text-[15px] font-normal text-[#666C77] mb-3">{item.text}</p>
                                )}
                                {item.text1 && (
                                    <p className="text-[15px] text-[#666C77]">{item.text1}</p>
                                )}
                                {item.text2 && (
                                    <p className="w-11 h-11 flex text-2xl font-semibold items-center justify-center mt-13 border rounded-full text-[#45ABDF]">{item.text2}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About_Card;
