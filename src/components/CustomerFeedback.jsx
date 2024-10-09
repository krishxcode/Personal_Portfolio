import data from "./feedback.json";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
function CustomerFeedback() {
  return (
    <div className="h-[100vh] w-full  px-40  bg">
      <div className="top flex flex-col justify-center items-center gap-6 py-20">
        <h1 className="playfair text-[36px] leading-[48px] font-bold">
          What My Clients Says
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
              <div className="w-12 h-20 flex justify-center items-center mb-10 text-xl text-red-500">
                <FormatQuoteIcon fontSize="large" />
              </div>

              <img
                className="w-20 h-20 mb-6 rounded-full border-red-500 border-4"
                src={data.img}
                alt=""
              />

              <p className="open-sens text-[#35373a] text-[19px] leading-[30px] text-center mb-16 ">
                {data.description}
              </p>
              <hr className="w-16 h-2 border-[1.5px] border-red-600 bg-red-600 mb-6" />
              <h1 className="open-sens text-[23px] mb-8 text-[#35373a]">
                {data.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerFeedback;
