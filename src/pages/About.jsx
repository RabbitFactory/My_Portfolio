import Loader from "../components/Loader"

const About = () => {
  return (
    <div className="w-full h-screen sm:h-full flex items-center bg-[#0000003d] rounded-[16px] p-4">
      <div className="grid grid-cols-6 grid-rows-6 w-full h-full gap-5 p-4">

        <div className="col-span-6 row-span-2 md:col-span-6 md:row-span-6 bg-white rounded-2xl flex justify-center items-center">
          <Loader></Loader>
        </div>
      </div>
    </div>
  )
}

export default About