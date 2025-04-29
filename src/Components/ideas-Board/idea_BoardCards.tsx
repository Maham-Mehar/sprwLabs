import { Idea_BasedData } from "@/Data/idea_BroadData";

const IdeaBased_Cards = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="max-w-6xl mx-auto xl:px-20 lg:px-20 md:px-17 sm:px-14 px-5 pt-2 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Idea_BasedData.map((item, index) => (
            <div
              key={index}
              className={`ps-2 py-6 ${index === 8 ? "col-span-1 md:col-span-2" : ""}`}
            >
              {index === 8 ? (
                <>
                  <p className="text-xl font-semibold max-w-md text-[#235380] mb-2"> {item.Heading}</p>
                  <div className="mb-6">
                  {item.text2?.map((item, index) =>(
                  <p key={index} className="text-sm font-normal text-[#7F7177]">{item.data}</p>
                
                  ))}
                    </div>
                  {item.text1 && (
                    <p className="text-sm font-normal max-w-[53rem] text-[#7F7177] pb-10">{item.text1}</p>
                  )}
                </>
              ) : (
                <>
                  {item.image && (
                    <div className="text-4xl text-[#1898D8] mb-4">
                      <img src={item.image} alt={item.Heading} />
                    </div>
                  )}
                  <p className="text-xl font-semibold max-w-md text-[#235380] mb-2">{item.Heading}</p>
                  <p className="text-sm font-normal max-w-sm text-[#7F7177]">{item.text}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdeaBased_Cards;
