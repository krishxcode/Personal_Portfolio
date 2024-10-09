import work from "./experience.json";

function Experience() {
  return (
    <div className="h-[120vh] w-full video">
      <div className="top flex flex-col justify-center items-center gap-6 py-20">
        <h1 className="playfair text-[36px] leading-[48px] font-bold text-[#002d5b]">
          Work Experience
        </h1>
        <p className="open-sens text-xl text-[#35373a]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <hr className="w-32 h-1 text-red-500 bg-red-600" />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10">
        {work.map((work) => (
          <div
            className="w-[600px] h-[299px] bg-[#ffffff] shadow-md flex flex-col p-10  rounded-2xl open-sens"
            key={work.id}
          >
            <h1 className="text-xl text-[#000000] mb-3">{work.title}</h1>
            <p className="text-[19px] text-[#ec5b53] mb-4">{work.time}</p>
            <p className="text-[19px]  text-[#35373a]">{work.description}</p>
            <div className="mt-8 ">
              <div className="bg-[#eeeeee] dark:bg-dark-3 relative h-6 w-full rounded-2xl hover:scale-105 duration-300">
                <div
                  className="bg-[#ec5b53] absolute top-0 left-0 flex h-full items-center px-5 rounded-2xl text-xs font-semibold text-white "
                  style={{ width: work.knowledge }} // Using inline style to set width
                >
                  {work.title}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
