const Projects = () => {
  return (
    <div className="w-full h-full flex items-center bg-[#52b7883b] rounded-[16px] p-4">
      <div className="grid grid-cols-2 w-full md:min-h-full min-h-screen gap-5 p-4">
        
        {/* Project 1 */}
        <div className="col-span-2 md:col-span-1 custom-reverse rounded-2xl relative overflow-hidden">
          <a href="https://autoflixv32.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full relative">
            <img className="w-full h-full object-cover rounded-2xl blur-xs" src="/project01.png" alt="Profile" />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              cursor-pointer text-[#F7F7F2] text-lg w-[200px] font-bold text-center 
              bg-white/10 backdrop-blur-md border border-white/20 
              px-6 py-3 rounded-lg hover:bg-white/20 transition">
              AutoFlix v3.2
            </button>
          </a>
        </div>

        {/* Project 2 */}
        <div className="col-span-2 md:col-span-1 custom-reverse rounded-2xl relative overflow-hidden">
          <a href="https://crystal-electronics.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full relative">
            <img className="w-full h-full object-cover rounded-2xl blur-xs" src="/project02.png" alt="Profile" />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              cursor-pointer text-[#F7F7F2] text-lg w-[200px] font-bold text-center 
              bg-white/10 backdrop-blur-md border border-white/20 
              px-3 py-3 rounded-lg hover:bg-white/20 transition">
              Crystal Electronics
            </button>
          </a>
        </div>

        {/* Project 3 */}
        <div className="col-span-2 md:col-span-1 custom-reverse rounded-2xl relative overflow-hidden">
          <a href="https://retroforumofrabbitfactory.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full relative">
            <img className="w-full h-full object-cover rounded-2xl blur-xs" src="/project03.png" alt="Profile" />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              cursor-pointer text-[#F7F7F2] text-lg w-[200px] font-bold text-center 
              bg-white/10 backdrop-blur-md border border-white/20 
              px-6 py-3 rounded-lg hover:bg-white/20 transition">
              Retro Forum
            </button>
          </a>
        </div>

        {/* Project 4 */}
        <div className="col-span-2 md:col-span-1 custom-reverse rounded-2xl relative overflow-hidden">
          <a href="https://rabbitsfoods.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full relative">
            <img className="w-full h-full object-cover rounded-2xl blur-xs" src="/project04.png" alt="Profile" />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              cursor-pointer text-[#F7F7F2] text-lg w-[200px] font-bold text-center 
              bg-white/10 backdrop-blur-md border border-white/20 
              px-6 py-3 rounded-lg hover:bg-white/20 transition">
              Rabbit Foods
            </button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Projects;
