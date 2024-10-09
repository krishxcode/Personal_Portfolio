function Project() {
  return (
    <div className="w-full h-[120vh]">
      <div className="top flex flex-col justify-center items-center gap-6 py-20">
        <h1 className="playfair text-[36px] leading-[48px] font-bold">
          About Me
        </h1>
        <p className="open-sens text-xl text-[#35373a]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <hr className="w-32 h-1 text-red-500 bg-red-600" />
      </div>

      <div className="flex  flex-wrap justify-center items-center gap-10 ">
        <img
          className="h-[300px] w-[500px] rounded-2xl shadow-2xl  hover:scale-105 duration-300"
          src="/images/asset 6.png"
          alt=""
        />
        <img
          className="h-[300px] w-[500px] rounded-2xl  shadow-2xl hover:scale-105 duration-300"
          src="/images/asset 7.png"
          alt=""
        />
        <img
          className="h-[300px] w-[500px] rounded-2xl  shadow-2xl hover:scale-105 duration-300"
          src="/images/asset 8.png"
          alt=""
        />
        <img
          className="h-[300px] w-[500px] rounded-2xl  shadow-2xl hover:scale-105 duration-300"
          src="/images/asset 9.png"
          alt=""
        />
        <img
          className="h-[300px] w-[500px] rounded-2xl shadow-2xl  hover:scale-105 duration-300"
          src="/images/asset 10.png"
          alt=""
        />
        <img
          className="h-[300px] w-[500px] rounded-2xl shadow-2xl  hover:scale-105 duration-300"
          src="/images/bg-12.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Project;
