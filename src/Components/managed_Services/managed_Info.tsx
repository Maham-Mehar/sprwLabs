import { Info_Data } from "@/Data/managedInfo"

const ManagedInfo = () => {
    return (
        <div className="max-w-[67.5rem] mx-auto py-22 sm:py-30">
            {Info_Data.map((item, index) => (
                <div key={index}>
                    <div className="px-7 lg:px-20 md:px-15 sm:px-10 xl:px-25 pb-8 sm:pb-8">
                        <p className="text-lg font-semibold text-[#81CDEC]">{item.text}</p>
                        <p className="text-[#005480] font-semibold text-[30px] xl:text-[42px] md:[36px]">{item.Heading}</p>
                    </div>
                    <img src={item.image} alt="" className="h-[388px] w-full px-6 xl-px-0" />
                    <div className="pt-10 px-7 lg:px-20 md:px-15 sm:px-10 xl:px-25">
                        {item.explanation?.map((item, index) => (
                            <p key={index} className="text-base font-normal pb-4 text-[#646C77]">{item.data}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ManagedInfo