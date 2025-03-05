import Loader from "../components/Loader";
import { ArrowDownRight } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full h-full bg-[#0000003d] rounded-[16px] p-4 flex items-center">
      <div className="grid grid-cols-12 gap-4 text-black w-full">

        <div className="col-span-12 lg:col-span-5 xl:col-span-3 justify-start items-center  bg-white p-4 rounded-2xl">
          <h1 className="text-xl font-semibold">Md. Solaiman Hossain Shahi</h1>
          
          <p>Web Developer & Designer</p>
        </div>

        
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 bg-white p-4 rounded-2xl ">

          <div>
            <h2 className="text-xl font-bold">Education</h2>
            <ArrowDownRight />
          </div>
          <div className="">
            <p className="">Varendra University</p>
            <p>B.Sc. in Computer Science & Engineering</p>
          </div>

        </div>
        
        <div className="col-span-12 lg:col-span-3 xl:col-span-3 bg-white p-4 rounded-2xl ">
          <h2 className="text-xl font-bold">Location</h2>
          <ArrowDownRight />
          <p>Rajshahi, Bangladesh, Planet Earth</p>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 bg-white p-4 rounded-2xl ">
          <h2 className="text-xl font-bold">Contact Info</h2>
          <ArrowDownRight />
          <p>solaiman.raj20@gmail.com</p>
          {/* <p>01791107778</p> */}
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 bg-white p-4 rounded-2xl">
          <div>
          <h2 className="text-xl font-bold">Skills</h2>
          <ArrowDownRight />
          </div>
          <div>
          <p className="font-semibold">Frontend</p>
          <p className="ml-2">React</p>
          <p className="ml-2">Tailwind</p>
          </div>
          <div>
          <p className="font-semibold">Backend</p>
          <p className="ml-2">Node JS.</p>
          <p className="ml-2">Express JS</p>
          <p className="ml-2">MongoDB</p>
          </div>
          <div>
          <p className="font-semibold">Designing</p>
          <p className="ml-2">Figma</p>
          <p className="ml-2">Framer</p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 bg-white p-4 rounded-2xl ">
          <h2 className="text-xl font-bold">Work Experience</h2>
          <ArrowDownRight />
          <p>Contractual Projects</p>
        </div>
        {/* <div className="col-span-12 lg:col-span-4 xl:col-span-2 bg-white p-4 rounded-2xl ">
          <h2 className="text-xl font-bold">Interests & Hobbies</h2>
          <ArrowDownRight />
          <p>Games</p>
          <p>Movies</p>
          <p>Anime</p>
        </div> */}
        {/* <div className="col-span-12 lg:col-span-4 xl:col-span-2 bg-white p-4 rounded-2xl ">
          <h2 className="text-xl font-bold">Courses Completed</h2>
          <ArrowDownRight />
          <p>Programming Hero - Level 1</p>
        </div> */}
        <div className="bg-white px-2 py-6 rounded-2xl flex justify-center items-center col-span-12 lg:col-span-12 xl:col-span-6">
          <Loader />
        </div>
      </div>
    </div>
  );
};

export default About;
