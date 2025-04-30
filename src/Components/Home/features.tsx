import { featureData } from "@/Data/feature";

const Features = () => {
  return (
    <div className="bg-[#F8F8F8]">
    <div className="max-w-6xl  mx-auto xl:px-20 lg:px-20 md:px-17 sm-px-14 px-5 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featureData.map((item, index) => (
          <div
            key={index}
            className={` ps-4 py-3 sm:py-6  ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            {/* First Item: Full Width Title */}
            {index === 0 ? (
              <>
                <p className="text-md sm:text-lg font-semibold text-[#7AB4D1]">{item.titleText}</p>
                <p className="md:text-[42px] sm:text-[38px] text-[33px] font-semibold text-[#235380]">{item.titleHeading}</p>
              </>
            ) : (
              <>
                {item.image && (
                  <div className="text-4xl text-[#1898D8] mb-4">
                 <img src={item.image} alt="" />
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

export default Features;
