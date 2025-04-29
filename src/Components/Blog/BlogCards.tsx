import { BlogsData } from "@/Data/blogCard"
import Image from "next/image"

const BlogCards = () => {
    return (
        <div className="max-w-6xl py-4 px-4 mx-auto w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {BlogsData.map((item, index) => (
                    <div key={index} className="bg-white shadow-xl p-6 font-open_sans">
                        <Image src={item.image} alt="" width={100} height={100} className="h-55 w-full object-cover" />
                        <p className="text-sm font-semibold leading-relaxed mt-4 text-[#x404040]">{item.text1}</p>
                        <p className="text-xl font-extrabold">{item.Heading}</p>
                        <p className="text-sm font-normal leading-relaxed leading[1.6px] text-[#x404040]">{item.text2}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default BlogCards