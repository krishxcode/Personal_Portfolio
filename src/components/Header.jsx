function Header() {
  return (
    <div className="absolute top-0 right-0 left-0 flex justify-between items-center h-[15vh] w-full px-40 open-sens ">
      <div className="logo">
        <img src="/images/asset 0.png" alt="" />
      </div>

      <ul className="flex justify-center items-center gap-12">
        <li>
          <a className="text-[19px]  leading-[70px]" href="">
            Home
          </a>
        </li>
        <li>
          <a className="text-[19px] leading-[70px]" href="">
            About
          </a>
        </li>
        <li>
          <a className="text-[19px]  leading-[70px]" href="">
            Portfolio
          </a>
        </li>
        <li>
          <a className="text-[19px] leading-[70px]" href="">
            Contact
          </a>
        </li>
      </ul>

      <button className="bg-[#ef4d48] py-3 tracking-[2px] rounded-md px-6 text-white open-sens ">
        Hire Me
      </button>
    </div>
  );
}

export default Header;
