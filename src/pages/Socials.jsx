const Socials = () => {
    return (
      <div className="w-full h-full flex items-center bg-gray-900 p-4">
        <div className="grid grid-cols-6 grid-rows-6 w-full h-full gap-5 p-4">
          {/* Profile Image */}
          <div className="col-span-6 row-span-2 md:col-span-4 md:row-span-6 bg-white rounded-2xl">
            <img className="w-full h-full object-cover rounded-2xl" src="/me.jpg" alt="Profile" />
          </div>
  
          {/* Social Media Icons */}
          <div className="col-span-3 row-span-1 md:col-span-1 md:row-span-2 bg-white rounded-2xl flex justify-center items-center p-5">
            <img className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src="/facebook.png" alt="Facebook" />
          </div>
          <div className="col-span-3 row-span-2 md:col-span-1 md:row-span-2 rounded-2xl bg-white flex justify-center items-center p-5">
            <img className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src="/discord.png" alt="Discord" />
          </div>
          <div className="col-span-3 row-span-2 md:col-span-1 md:row-span-2 rounded-2xl bg-white flex justify-center items-center p-5">
            <img className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src="/gmail.png" alt="Gmail" />
          </div>
          <div className="col-span-3 row-span-2 md:col-span-1 md:row-span-2 bg-white rounded-2xl flex justify-center items-center p-5">
            <img className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src="/github.png" alt="GitHub" />
          </div>
          <div className="col-span-3 row-span-2 md:col-span-1 md:row-span-2 bg-white rounded-2xl flex justify-center items-center p-5">
            <img className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src="/linkedin.png" alt="LinkedIn" />
          </div>
          <div className="col-span-3 row-span-1 md:col-span-1 md:row-span-2 bg-white rounded-2xl flex justify-center items-center p-5">
            <img className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" src="/whatsapp.png" alt="WhatsApp" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Socials;
  