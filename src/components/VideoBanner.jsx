import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function VideoBanner() {
  return (
    <div className="h-[500px] w-full bg-[#ef4d48]  flex flex-col justify-center items-center text-white">
      <div className="w-16 h-16 text-white rounded-full border-[6px] border-white flex justify-center items-center mb-7 ">
        <PlayArrowIcon  />
      </div>

      <h1 className="text-[48px] leading-[65px] playfair mb-4 ">Working Process</h1>
      <p className="open-sens text-[19px] leading-7 px-[420px] text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ullam rem
        eligendi, tempore numquam laborum aliquid deleniti cumque.
      </p>
    </div>
  );
}

export default VideoBanner;
