import LinkedInIcon from "@mui/icons-material/LinkedIn";

import InstagramIcon from "@mui/icons-material/Instagram";

import GitHubIcon from "@mui/icons-material/GitHub";

import TelegramIcon from "@mui/icons-material/Telegram";

function Hero() {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-[#fefafa]">
      <div className="icon flex flex-col gap-10 px-5 ">
        <div className="text-zinc-700 hover:text-[#dd463e] duration-200  leading-[28px]">
          <LinkedInIcon fontSize="large"/>
        </div>
        <div className="text-zinc-700 hover:text-[#dd463e] duration-200 leading-[28px]">
          <InstagramIcon fontSize="large"/>
        </div>
        <div className="text-zinc-700 hover:text-[#dd463e] duration-200 leading-[28px]">
          <GitHubIcon fontSize="large"/>
        </div>
        <div className="text-zinc-700 hover:text-[#dd463e] duration-200 leading-[28px]">
          <TelegramIcon fontSize="large"/>
        </div>
      </div>

      <div className="left w-[675px] h-full flex flex-col justify-center gap-9 mt-20">
        <h1 className="text-[65px] leading-[84.5px] playfair font-bold">
          I am Web Developer Natalie E. Watson
        </h1>
        <p className="text-xl leading-8 text-[#35373a] open-sens">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus luctusnec ullamcorper mattis, pulvinar dapibus leop llamcorper,
          lorem ipsum.
        </p>

        <button className="bg-[#ef4d48] h-[46px] tracking-[2px] mt-6 rounded-md w-[146px] text-white open-sens ">
          Hire Me
        </button>
      </div>

      <div className="right mt-20">
        <img className="w-[645] h-[725px]" src="/images/asset 1.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
