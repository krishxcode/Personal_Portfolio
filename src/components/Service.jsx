import data from "./service.json";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Service() {
  return (
    <div className="h-[110vh] w-full px-40 bg-[#f8f3f5] bg">
      <div className="top flex flex-col justify-center items-center gap-6 py-20">
        <h1 className="playfair text-[36px] leading-[48px] font-bold">
          What Services I m Providing
        </h1>
        <p className="open-sens text-xl text-[#35373a]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <hr className="w-32 h-1 text-red-500 bg-red-600" />
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <div className="card  flex justify-center items-center gap-10">
          {data.map((data) => (
            <div
              className="w-[400px] h-[510px] bg-[#ffffff] shadow-md flex flex-col p-10 items-center rounded-2xl "
              key={data.id}
            >
              <img className="w-20 h-20 mb-6" src={data.image} alt="" />
              <h1 className="playfair text-[23px] mb-8 text-[#002d5b]">{data.title}</h1>
              <p className="open-sens text-[#35373a] text-[19px] leading-[30px] text-center mb-12 ">{data.description}</p>

              <div className="text-[#69727d] h-12 w-12 rounded-full border-4 border-[#69727d] flex justify-center items-center ">
                <ArrowForwardIcon/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
