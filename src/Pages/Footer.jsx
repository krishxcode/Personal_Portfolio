import LinkedInIcon from "@mui/icons-material/LinkedIn";

import InstagramIcon from "@mui/icons-material/Instagram";

import GitHubIcon from "@mui/icons-material/GitHub";

import TelegramIcon from "@mui/icons-material/Telegram";
function Footer() {
  return (
    <div className="h-[35vh] w-full px-20 bg-[#002d5b] flex flex-col justify-center ">
      <div className="flex justify-between items-center px-20">
        <div className="flex justify-center items-center gap-4 text-white py-10">
          <LinkedInIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
          <GitHubIcon fontSize="large" />
          <TelegramIcon fontSize="large" />
        </div>

        <img className="h-24 w-24" src="/images/asset 0.png" alt="" />
        <p className="text-xl text-white tracking-[2px] playfair">
          Kishanpandit@gmail.com
        </p>
      </div>
      <div>
        <hr />
      </div>
      <div className="flex justify-center items-center py-10 ">
        <p className="text-[19px] text-white open-sens">Copyright @ 2024 Personal Portfolio</p>
      </div>
    </div>
  );
}

export default Footer;
