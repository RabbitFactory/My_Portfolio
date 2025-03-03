
const Socials = () => {
  return (
    <div className="w-full h-full flex items-center bg-[#0000003d] rounded-[16px] p-4">
      <div className="grid grid-cols-6 grid-rows-6 w-full h-full gap-5 p-4">

        <div className="col-span-6 row-span-2 md:col-span-4 md:row-span-6 bg-white rounded-2xl">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="/me.jpg"
            alt="Profile" />
        </div>

        <div className="col-span-3 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2 bg-white rounded-2xl flex justify-center items-center">
          <a href="https://www.facebook.com/shahi.raj.127/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
            <img className="w-8 h-8" src="/facebook.png" alt="Facebook" />
          </a>

        </div>
        <div className="col-span-3 row-span-2 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2 rounded-2xl bg-white flex justify-center items-center">

          <a href="https://discord.gg/Jqr3YZD9U8" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
            <img className="w-8 h-8" src="/discord.png" alt="Discord" />
          </a>

        </div>
        <div
          className="col-span-3 row-span-2 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2 rounded-2xl bg-white flex justify-center items-center cursor-pointer"
          onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=solaiman.raj20@gmail.com", "_blank")}
        >
          <img className="w-8 h-8" src="/gmail.png" alt="Gmail" />
        </div>

        <div className="col-span-3 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2 bg-white rounded-2xl flex justify-center items-center">

          <a href="https://github.com/RabbitFactory" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
            <img className="w-8 h-8" src="/github.png" alt="GitHub" />
          </a>

        </div>
        <div className="col-span-3 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2 bg-white rounded-2xl flex justify-center items-center">

          <a href="https://www.linkedin.com/in/solaiman-hossain-3b4b5124b/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
            <img className="w-8 h-8" src="/linkedin.png" alt="LinkedIn" />
          </a>

        </div>
        <div className="col-span-3 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2 bg-white rounded-2xl flex justify-center items-center">

          <a href="https://wa.me/8801791107778" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
            <img className="w-8 h-8" src="/whatsapp.png" alt="WhatsApp" />
          </a>


        </div>
      </div>
    </div>
  );
};

export default Socials;
