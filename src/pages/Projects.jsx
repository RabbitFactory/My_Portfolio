
const Projects = () => {
  return (
    <div className="w-full h-full flex items-center bg-[#0000003d] rounded-[16px] p-4">
      <div className="grid grid-cols-2 w-full h-full gap-5 p-4">
        <div className="col-span-2 md:col-span-1 bg-white rounded-2xl">
          <a href="https://autoflixv32.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
            AutoFlix v3.2
          </a>
        </div>
        <div className="col-span-2 md:col-span-1 bg-white rounded-2xl">
        <a href="https://crystal-electronics.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
            Crystal Electronics
          </a>
        </div>
        <div className="col-span-2 md:col-span-1 bg-white rounded-2xl">
        <a href="https://retroforumofrabbitfactory.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
            Retro Forum
          </a>
        </div>
        <div className="col-span-2 md:col-span-1 bg-white rounded-2xl">
        <a href="https://rabbitsfoods.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
            Restaurant Site
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects