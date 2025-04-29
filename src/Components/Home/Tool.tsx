import { toolsData } from "@/Data/tool";
const Tools = () => {
  return (
    <div className="container">
      <div className="xl:px-25 lg:px-25 md:px-14 sm:px-12 px-10 py-32 max-w-5xl mx-auto">
        {toolsData.map((item, index) => (
          <div key={index} className=" max-w-[700px]">
            <p className="text-lg font-semibold text-[#1898D8]">{item.text1}</p>
            <p className="text-[28px] xl:text-[42px] lg:text-[42px] md:text[38px] sm-text[32px] font-semibold leading-tight text-[#235380]">{item.Heading1}</p>
            <p className="text-base font-normal text-[#7F7177] mt-6">{item.text2}</p>
            <p className="text-base font-normal text-[#7F7177] mt-3">{item.text3}</p>
            <div className="xl:text-2xl md:text-[20px] text-[20px] ms-0 xl:ms-5 lg:ms-5 md:ms-5 sm:ms-5 font-semibold text-[#235380] ">
              <p className=" mt-10">{item.point1}</p>
              <p className=" mt-3">{item.point2}</p>
              <p className=" mt-3">{item.point3}</p>
            </div>
            <p className="text-base font-normal text-[#7F7177] mt-10">{item.text4}</p>
            <p className="text-base font-normal text-[#7F7177] mt-3">{item.text5}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
