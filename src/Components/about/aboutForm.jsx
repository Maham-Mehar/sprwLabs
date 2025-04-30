import { PiMapPinFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const About_Form = () => {
    return (
        <div className="bg-[#235380] xl:py-15 py-10 ">
        <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 shadow-xl">
                {/* Left Side */}
                <div className=" bg-white shadow-lg py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 ">
                    <p className="text-4xl font-semibold mt-15 text-[#255179]">Let's Automate</p>
                    <p className="text-[#836E77] text-base font-normal mt-9">
                        Connect with us and learn more about how we can build your organization's process
                    </p>
                    <div className="flex items-center gap-2 mt-9 ">
                        <MdEmail className="text-[#255179]" size={20} />
                        <a href="mailto:sales@sprwlabs.com" className="text-[#18B2EA] font-semibold underline">
                            sales@sprwlabs.com
                        </a>
                    </div>
                    <div className="flex items-center gap-2 mt-8">
                        <PiMapPinFill className="text-[#255179]" size={20} />
                        <p className="text-gray-700 font-semibold">New York, NY</p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="relative bg-[url('/images/image26.png')] bg-cover bg-center overflow-hidden">
                    <div className="bg-[#255179]/80 w-full h-[36rem] p-8 flex flex-col justify-center">
                        <p className="text-white text-xl font-semibold mb-6 text-center">Get in touch</p>
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <label className="text-white text-sm mb-1 font-semibold">Full name:</label>
                                <input
                                    type="text"
                                    className="p-2 rounded bg-[#7b92a7]/50 text-black resize-none focus:outline-none focus:ring-2 focus:ring-[#3a55a8]"                                
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-white text-sm mb-1 font-semibold">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="p-2 rounded bg-[#7b92a7]/50 text-black resize-none focus:outline-none focus:ring-2 focus:ring-[#3a55a8]"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-white text-sm mb-1 font-semibold">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows="2"
                                    className="p-2 rounded bg-[#7b92a7]/50 text-black resize-none focus:outline-none focus:ring-2 focus:ring-[#3a55a8]"
                                    ></textarea>
                            </div>
                            <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#15a1e1] px-12 rounded-full hover:bg-[#1D8CC7] text-white font-bold py-2 "
                            >
                                Submit
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About_Form;
