import { useState } from "react";

  const Socials = () => {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText("solaiman.raj20@gmail.com");
      setCopied(true);
  
      // Reset text after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    };


    return (
      <div className="w-full h-full flex items-center bg-gray-900 p-4">
        <div className="grid grid-cols-6 grid-rows-6 w-full h-full gap-5 p-4">

          <div className="col-span-6 row-span-2 md:col-span-4 md:row-span-6 bg-white rounded-2xl">
            <img className="w-full h-full object-cover rounded-2xl" src="/me.jpg" alt="Profile" />
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
          <div className="col-span-3 row-span-2 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2 rounded-2xl bg-white flex justify-center items-center">

            <div
              className="flex justify-center items-center w-full h-full bg-white rounded-2xl relative cursor-pointer transition-all duration-500 hover:bg-gray-300"
              onClick={handleCopy}
            >
              <span className="absolute text-sm font-medium text-gray-700 opacity-0 transition-opacity duration-500 hover:opacity-100 w-full h-full flex items-center justify-center">
                {copied ? "Copied!" : "Copy Email"}
              </span>
              <img 
              className="w-8 h-8" 
              src="/gmail.png" 
              alt="Gmail" />
            </div>





          </div>
          <div className="col-span-3 row-span-2 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2 bg-white rounded-2xl flex justify-center items-center">

            <a href="https://github.com/RabbitFactory" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
              <img className="w-8 h-8" src="/github.png" alt="GitHub" />
            </a>

          </div>
          <div className="col-span-3 row-span-2 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2 bg-white rounded-2xl flex justify-center items-center">

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
