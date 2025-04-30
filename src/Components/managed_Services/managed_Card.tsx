import { ManagedCard } from "@/Data/managedCard"

const Managed_Card = () => {
  return (
    <div className="bg-[#F7F8FA] py-3">
      <div className="max-w-[67.5rem] mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ManagedCard.map((item, index) => (
            <div key={index} className="flex gap-4 items-start p-4">
              <div>
                <item.icon className="text-[#5b9bfc] text-[43px] font-thin" />
              </div>
              <div>
                <p className="font-semibold text-[24px]">{item.Heading}</p>
                <p className="text-sm font-normal pt-3 text-[#666C77]">{item.text}</p>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}
export default Managed_Card
