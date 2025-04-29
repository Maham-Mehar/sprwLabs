import { Info_Data } from "@/Data/prof_Info";

const ProfessionalInfo = () => {
    return (
        <div className="">
            {/* First Section: Title Text and Heading */}
            <div className="max-w-6xl mx-auto xl:px-20 lg:px-20 md:px-14 sm:px-10 px-5 py-12">
                <div className="px-2 py-6">
                    <div className="ps-0 xl:ps-9">
                        <p className="text-lg font-semibold text-[#7AB4D1]">{Info_Data[0].titleText}</p>
                        <p className="text-[30px] sm:text-[34px] md:text-[38px] xl:text-[42px] font-semibold text-[#235380]">
                            {Info_Data[0].titleHeading}
                        </p>
                    </div>
                </div>
            </div>

            {/* Second Section: Image, Heading, and Explanation */}
            <div className="bg-[#F7F8FA]">
                <div className="max-w-6xl mx-auto xl:px-20 lg:px-20 md:px-14 sm:px-10 px-5 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {Info_Data.slice(1).map((item, index) => (
                            <div key={index} className="px-2 py-6 flex">
                                {/* Content Column (Heading and Explanation) */}
                                {item.Heading && item.explanation && (
                                    <div className="flex flex-col justify-start mb-4">
                                        <p className="text-lg font-semibold max-w-md mb-2">{item.Heading}</p>
                                        {item.explanation?.map((explanationItem, idx) => (
                                            <p key={idx} className="text-sm font-normal pb-4 text-[#646C77]">
                                                {explanationItem.data}
                                            </p>
                                        ))}
                                    </div>
                                )}

                                {/* Image Column */}
                                {item.image && (
                                  <div className="flex md:justify-end justify-center w-full">
                                  <img src={item.image} alt="image" className="h-60 object-cover" />
                              </div>
                              
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalInfo;
