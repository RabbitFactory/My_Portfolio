const Socials = () => {
    return (
      <div className="w-full h-full flex items-center bg-gray-900 p-4">
        <div className="grid grid-cols-6 grid-rows-6 w-full h-full gap-5 p-4">
         
          <div className="col-span-6 row-span-2 md:col-span-4 md:row-span-6 bg-white rounded-2xl">
            <img className="w-full h-full object-cover rounded-2xl" src="/me.jpg" alt="Profile" />
          </div>
  
          <div className="col-span-3 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2 bg-white rounded-2xl flex justify-center items-center p-5">
            <img className="w-8 h-8" src="/facebook.png" alt="Facebook" />
          </div>
          <div className="col-span-3 row-span-2 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2 rounded-2xl bg-white flex justify-center items-center p-5">
            <img className="w-8 h-8" src="/discord.png" alt="Discord" />
          </div>
          <div className="col-span-3 row-span-2 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2 rounded-2xl bg-white flex justify-center items-center p-5">
            <img className="w-8 h-8" src="/gmail.png" alt="Gmail" />
          </div>
          <div className="col-span-3 row-span-2 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2 bg-white rounded-2xl flex justify-center items-center p-5">
            <img className="w-8 h-8" src="/github.png" alt="GitHub" />
          </div>
          <div className="col-span-3 row-span-2 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2 bg-white rounded-2xl flex justify-center items-center p-5">
            <img className="w-8 h-8" src="/linkedin.png" alt="LinkedIn" />
          </div>
          <div className="col-span-3 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2 bg-white rounded-2xl flex justify-center items-center p-5">
            <img className="w-8 h-8" src="/whatsapp.png" alt="WhatsApp" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Socials;
  