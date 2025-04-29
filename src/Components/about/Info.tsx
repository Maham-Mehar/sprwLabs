import { About_Data } from "@/Data/About_Info"

const About_Info = () => {
    return (
        <div className="max-w-4xl mx-auto py-30">
            <div className="max-w-2xl px-4 sm:px-0">
                {About_Data.map((item, index) => (
                    <div key={index}>
                        <p className="text-[42px] font-semibold pb-3.5 text-[#235380] font-open_sans">{item.Heading}</p>
                        {item.explanation?.map((item, index) => (
                            <p key={index} className="text-base font-normal pb-4 text-[#646C77] font-open_sans">{item.data}</p>
                        ))}
                        <p className="text-[#999999] font-normal mt-3 text-4xl font-great-vibes">{item.text2}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default About_Info  