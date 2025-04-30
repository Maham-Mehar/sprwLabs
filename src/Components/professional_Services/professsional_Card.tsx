import { proCard_Data } from "@/Data/profCard";
import Icon from "@/icon";

const Professional_Card = () => {
    return (
        <div className="max-w-6xl mx-auto xl:px-20 lg:px-20 md:px-14 sm:px-10 px-5 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 ">
                {proCard_Data.map((item, index) => (
                    <div key={index} className={`px-3 py-6 ${index === 1 ? 'col-span-2' : ''}`}>
                        {/* Card Heading */}

                        {item.image && (
                            <div className="col-span-3 md:col-span-2 flex justify-start mt-4">
                                <Icon />
                            </div>
                        )}
                        {/* Second Column*/}
                        {item.explanation && (
                            <div className="col-span-3 md:col-span-2">
                                {item.explanation.map((expItem, idx) => (
                                    <div key={idx} className="mb-13 max-w-md">
                                        <p className="font-semibold text-dark text-xl">{expItem.head}</p>
                                        <p className="text-sm text-[#646C77] mt-2">{expItem.data}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        {item.Heading && (
                            <p className="text-4xl font-semibold mb-4 mt-3">{item.Heading}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Professional_Card;
