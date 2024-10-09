function ContactUs() {
  return (
    <div className="h-[55vh] w-full px-40">
      <div className="top flex flex-col justify-center items-center gap-6 py-20">
        <h1 className="playfair text-[36px] leading-[48px] font-bold">
          Stay In Touch
        </h1>
        <p className="open-sens text-xl text-[#35373a] text-center px-72">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <hr className="w-32 h-1 text-red-500 bg-red-600" />
      </div>

      <div className="flex justify-center items-center">
        <input
          className="w-[487px] h-[55px] bg-[#f8f3f5] text-xl px-3 open-sens  outline-none mr-3 border-zinc-400 border-[1.5px]"
          type="text"
          placeholder="Enter email address"
        />
        <div className="h-[55px] w-[160px] flex justify-center items-center bg-[#ec5b53] text-white  open-sens ">
          <a className="text-[18px]" href="">Subscribe</a>
        </div>
        
      </div>
    </div>
  );
}

export default ContactUs;
