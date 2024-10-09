function About() {
  return (
    <div className="h-[110vh] w-full px-40">
      <div className="top flex flex-col justify-center items-center gap-6 py-20">
        <h1 className="playfair text-[36px] leading-[48px] font-bold">
          About Me
        </h1>
        <p className="open-sens text-xl text-[#35373a]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <hr className="w-32 h-1 text-red-500 bg-red-600" />
      </div>

      <div className="bottom flex justify-between items-center">
        <div className="left ">
          <h1 className="text-[30px] leading-[39px] playfair mb-3 text-[#002d5b] w-[386px] h-[78px]">
            Developing With a Passion While Exploring The World.
          </h1>
          <hr className="w-24 h-[3px] text-red-500 bg-red-600 mb-10" />
          <div className="parent text-[#35373a] h-[300px]">
            <p className="w-[386px] h-[168px] text-xl leading-7 mr-12 mb-6 open-sens">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p className="w-[308px] h-[112px] text-xl leading-7 open-sens">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <p className="w-[386px] h-[56px] text-xl leading-7 open-sens">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="w-[308px] h-[56px] text-xl leading-7 open-sens">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <button className="bg-[#ef4d48] h-[46px] tracking-[2px]  rounded-md w-[146px] text-white open-sens ">
            Contact Me
          </button>
        </div>

        <div className="right">
          <img
            className="w-[368px] h-full shadow rounded-xl hover:scale-105 duration-300"
            src=" /images/asset 2.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
